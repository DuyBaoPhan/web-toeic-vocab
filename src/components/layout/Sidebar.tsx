import { NavLink } from 'react-router-dom';

const links = [
  ['/', '🏠', 'Dashboard'],
  ['/flashcard', '📖', 'Flashcard'],
  ['/quiz', '🎯', 'Quiz'],
  ['/listening', '🎧', 'Listening'],
  ['/leaderboard', '🏆', 'Leaderboard'],
  ['/profile', '👤', 'Profile'],
  ['/admin', '⚙️', 'Admin'],
];

export function Sidebar() {
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-64 shrink-0 md:block">
      <div className="glass h-full rounded-3xl p-3">
        <div className="mb-4 px-3 text-2xl font-black text-emerald-500">VocaTOEIC</div>
        {links.map(([to, icon, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `focus-ring mb-1 flex items-center gap-3 rounded-2xl px-4 py-3 font-bold transition ${
                isActive
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'hover:bg-white/70 dark:hover:bg-white/10'
              }`
            }
          >
            <span aria-hidden="true">{icon}</span>
            {label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
