import { Flame } from 'lucide-react';
import { profile } from '../../data/mock';
import { Badge } from '../ui/Badge';

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-white/70 px-4 py-3 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <p className="text-xs font-bold text-emerald-600">VocaTOEIC</p>
          <h1 className="text-lg font-black">Chào {profile.display_name}</h1>
        </div>
        <Badge icon={<Flame size={14} />} tone="amber">
          {profile.streak_days} ngày
        </Badge>
      </div>
    </header>
  );
}
