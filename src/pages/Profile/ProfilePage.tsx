import { achievements, dashboardStats, profile, topics } from '../../data/mock';
import { Card } from '../../components/ui/Card';
import { HeatmapCalendar } from '../../components/charts/HeatmapCalendar';
import { Button } from '../../components/ui/Button';
import { useSettingsStore } from '../../stores/settingsStore';

export function ProfilePage() {
  const { dark, toggleDark } = useSettingsStore();

  return (
    <div className="space-y-5">
      <Card>
        <h1 className="text-4xl font-black">{profile.display_name}</h1>
        <p className="font-bold text-emerald-600">{profile.xp} XP · streak {profile.streak_days} ngày</p>
        <Button className="mt-4" variant="ghost" onClick={() => { toggleDark(); document.documentElement.classList.toggle('dark', !dark); }}>
          🌙 Dark mode
        </Button>
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        <Card><b>Đã nhớ</b><p className="text-3xl font-black">{dashboardStats.known_count}</p></Card>
        <Card><b>Đang học</b><p className="text-3xl font-black">{dashboardStats.learning_count}</p></Card>
        <Card><b>Accuracy</b><p className="text-3xl font-black">86%</p></Card>
      </div>
      <Card>
        <h2 className="mb-4 text-2xl font-black">Heatmap học tập</h2>
        <HeatmapCalendar />
      </Card>
      <Card>
        <h2 className="mb-4 text-2xl font-black">Thành tích</h2>
        <div className="grid gap-3 sm:grid-cols-5">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`rounded-3xl p-4 text-center ${achievement.earned ? 'bg-emerald-100 dark:bg-emerald-500/20' : 'bg-slate-100 opacity-60 dark:bg-white/10'}`}>
              <div className="text-3xl">{achievement.icon}</div>
              <b>{achievement.name_vi}</b>
              <p className="text-xs">+{achievement.xp_reward} XP</p>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h2 className="mb-4 text-2xl font-black">Tiến độ chủ đề</h2>
        {topics.map((topic) => (
          <div key={topic.id} className="mb-3">
            <div className="flex justify-between"><b>{topic.icon} {topic.name_vi}</b><span>{30 + topic.id * 4}%</span></div>
            <div className="h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full bg-emerald-500" style={{ width: `${30 + topic.id * 4}%` }} /></div>
          </div>
        ))}
      </Card>
    </div>
  );
}
