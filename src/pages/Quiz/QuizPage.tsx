import { useMemo, useState } from 'react';
import { words } from '../../data/mock';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { quizXp } from '../../utils/xp';

export function QuizPage() {
  const questions = useMemo(() => words.slice(0, 10).map((word, index) => ({
    word,
    prompt: index % 3 === 0 ? word.meaning_vi : index % 3 === 1 ? word.word : word.example_sentence.replace(new RegExp(word.word, 'i'), '_____'),
    answer: index % 3 === 1 ? word.meaning_vi : word.word,
    options: [index % 3 === 1 ? word.meaning_vi : word.word, ...words.filter((item) => item.id !== word.id).slice(0, 3).map((item) => index % 3 === 1 ? item.meaning_vi : item.word)],
  })), []);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [xp, setXp] = useState(0);
  const question = questions[index];

  if (!question) {
    return (
      <Card>
        <h1 className="text-4xl font-black">Kết quả: {score}/10</h1>
        <p className="mt-2 text-2xl font-bold text-emerald-600">+{xp} XP</p>
        <Button className="mt-6" onClick={() => location.reload()}>Làm lại</Button>
      </Card>
    );
  }

  const choose = (option: string) => {
    if (selected) return;
    const ok = option === question.answer;
    const nextCombo = ok ? combo + 1 : 0;
    setSelected(option);
    setScore((value) => value + (ok ? 1 : 0));
    setCombo(nextCombo);
    setXp((value) => value + quizXp(ok, nextCombo));
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Card>
        <div className="flex justify-between">
          <Badge tone="indigo">Câu {index + 1}/10</Badge>
          {combo >= 3 && <Badge tone="amber">🔥 x{combo} Combo!</Badge>}
        </div>
        <h1 className="mt-6 text-3xl font-black">{question.prompt}</h1>
        <div className="mt-6 grid gap-3">
          {question.options.map((option) => (
            <button key={option} onClick={() => choose(option)} className={`focus-ring rounded-2xl p-4 text-left font-bold transition ${selected ? option === question.answer ? 'bg-emerald-100 text-emerald-800' : option === selected ? 'bg-red-100 text-red-800' : 'bg-white/60 dark:bg-white/10' : 'bg-white/70 hover:bg-emerald-50 dark:bg-white/10'}`}>
              {option}
            </button>
          ))}
        </div>
        {selected && (
          <div className="mt-5 rounded-2xl bg-white/70 p-4 dark:bg-white/10">
            <b>Đáp án:</b> {question.answer}
            <p>{question.word.example_vi}</p>
            <Button className="mt-3" onClick={() => { setSelected(''); setIndex(index + 1); }}>Câu tiếp</Button>
          </div>
        )}
      </Card>
    </div>
  );
}
