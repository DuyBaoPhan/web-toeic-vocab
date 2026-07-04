import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../../lib/api';
import { supabase } from '../../lib/supabase';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import type { Word } from '../../types';

export function AdminPage() {
  const [tab, setTab] = useState('words');
  const queryClient = useQueryClient();
  const { data = [] } = useQuery({ queryKey: ['admin-words'], queryFn: api.getWords });

  useMemo(() => {
    const client = supabase;
    if (!client) return;
    const channel = client
      .channel('admin-words')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'words' }, () =>
        queryClient.invalidateQueries({ queryKey: ['admin-words'] }),
      )
      .subscribe();
    return () => {
      void client.removeChannel(channel);
    };
  }, [queryClient]);

  const save = useMutation({
    mutationFn: (word: Partial<Word>) => api.upsertWord(word),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-words'] }),
  });
  const remove = useMutation({
    mutationFn: (id: number) => api.deleteWord(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-words'] }),
  });

  const tabs = ['dashboard', 'words', 'users', 'reports', 'stats'];

  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-black">Admin Panel</h1>
      <div className="flex flex-wrap gap-2">
        {tabs.map((item) => (
          <Button key={item} variant={tab === item ? 'primary' : 'ghost'} onClick={() => setTab(item)}>
            {item}
          </Button>
        ))}
      </div>

      {tab === 'dashboard' && (
        <div className="grid gap-4 md:grid-cols-4">
          {['Users 1,248', 'DAU 184', 'WAU 620', 'Reviews hôm nay 3,920'].map((kpi) => (
            <Card key={kpi}><Badge tone="emerald">KPI</Badge><p className="mt-3 text-2xl font-black">{kpi}</p></Card>
          ))}
        </div>
      )}

      {tab === 'words' && (
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-black">Quản lý từ vựng realtime CRUD</h2>
            <Button
              onClick={() =>
                save.mutate({
                  word: 'sample',
                  phonetic: '/njuː/',
                  word_type: 'noun',
                  meaning_vi: 'từ mới',
                  example_sentence: 'This is a new word.',
                  example_vi: 'Đây là từ mới.',
                  level: 'foundation',
                  topic_id: 1,
                  toeic_parts: [5],
                  is_active: true,
                } as Partial<Word>)
              }
            >
              + Thêm demo
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-slate-500">
                  <th className="p-3">word</th><th>phonetic</th><th>level</th><th>topic</th><th>parts</th><th>status</th><th>reports</th><th />
                </tr>
              </thead>
              <tbody>
                {data.map((word) => (
                  <tr key={word.id} className="border-t border-slate-200/60 dark:border-white/10">
                    <td className="p-3 font-black">{word.word}</td>
                    <td>{word.phonetic}</td>
                    <td>{word.level}</td>
                    <td>{word.topic_id}</td>
                    <td>{word.toeic_parts.join(',')}</td>
                    <td><Badge tone={word.is_active ? 'emerald' : 'red'}>{word.is_active ? '✅ active' : '⛔ inactive'}</Badge></td>
                    <td>{word.report_count}</td>
                    <td><Button variant="danger" onClick={() => remove.mutate(word.id)}>Soft delete</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {tab === 'users' && <Card><h2 className="text-2xl font-black">Người dùng</h2><p>username | email | level | words_known | streak | last_active | role. Role switch ready qua Supabase policy.</p></Card>}
      {tab === 'reports' && <Card><h2 className="text-2xl font-black">Word Reports</h2><p>Resolve / Dismiss flow, pending filters, report_count sync.</p></Card>}
      {tab === 'stats' && <Card><h2 className="text-2xl font-black">Thống kê</h2><p>Retention, cohort D1/D7/D30, difficult words, level distribution.</p></Card>}
    </div>
  );
}
