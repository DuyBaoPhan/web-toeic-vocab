import { NavLink } from 'react-router-dom';

const items = [
  ['/', '🏠', 'Trang chủ'],
  ['/flashcard', '📖', 'Học'],
  ['/quiz', '🎯', 'Quiz'],
  ['/leaderboard', '🏆', 'Xếp hạng'],
  ['/profile', '👤', 'Hồ sơ'],
];

export function BottomNav() {
  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-white/40 bg-white/85 px-2 pt-2 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/85 md:hidden">
      <div className="grid grid-cols-5 gap-1">
        {items.map(([to, icon, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `focus-ring rounded-2xl px-1 py-2 text-center text-[11px] font-bold ${
                isActive ? 'bg-emerald-500 text-white' : 'text-slate-600 dark:text-slate-300'
              }`
            }
          >
            <div className="text-lg">{icon}</div>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
