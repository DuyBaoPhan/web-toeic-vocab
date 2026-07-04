import { leaderboard } from '../../data/mock';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export function LeaderboardPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-black">🏆 Bảng xếp hạng</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {leaderboard.slice(0, 3).map((entry) => (
          <Card key={entry.user_id} className="text-center">
            <div className="text-4xl">👑</div>
            <h2 className="text-2xl font-black">#{entry.rank} {entry.display_name}</h2>
            <p className="font-black text-emerald-600">{entry.xp} XP</p>
          </Card>
        ))}
      </div>
      <Card>
        <div className="space-y-2">
          {leaderboard.slice(3).map((entry) => (
            <div key={entry.user_id} className={`flex items-center justify-between rounded-2xl p-3 ${entry.is_self ? 'bg-emerald-100 dark:bg-emerald-500/20' : 'bg-white/50 dark:bg-white/5'}`}>
              <span className="font-bold">#{entry.rank} {entry.display_name}</span>
              <Badge tone="indigo">{entry.xp} XP</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
