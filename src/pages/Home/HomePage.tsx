import { BookOpen, Brain, Flame, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { topics, dashboardStats, profile } from '../../data/mock';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { ProgressRing } from '../../components/charts/ProgressRing';
import { StreakDots } from '../../components/charts/StreakDots';

export function HomePage() {
  return (
    <div className="space-y-6">
      <section className="glass overflow-hidden rounded-[2rem] p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1.4fr_.8fr]">
          <div>
            <Badge icon={<Trophy size={14} />} tone="indigo">
              Mục tiêu {profile.target_score}+
            </Badge>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              Tăng tốc TOEIC bằng từ vựng thông minh.
            </h1>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              FSRS-4.5, streak, XP và chủ đề sát đề thi thật cho người học Việt Nam.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/flashcard">
                <Button id="home-study-now">
                  <Brain size={18} /> Học ngay
                </Button>
              </Link>
              <Link to="/quiz">
                <Button id="home-quiz" variant="secondary">
                  Làm quiz
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid place-items-center">
            <ProgressRing value={68} size={150} />
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <Badge icon={<BookOpen size={14} />} tone="emerald">
            Ôn tập hôm nay
          </Badge>
          <p className="mt-3 text-4xl font-black">{dashboardStats.due_count}</p>
          <p className="text-sm text-slate-500">từ đến hạn</p>
        </Card>
        <Card>
          <Badge icon="✨" tone="indigo">
            Học từ mới
          </Badge>
          <p className="mt-3 text-4xl font-black">{dashboardStats.new_count}</p>
          <p className="text-sm text-slate-500">từ trong level hiện tại</p>
        </Card>
        <Card>
          <Badge icon={<Flame size={14} />} tone="amber">
            Streak
          </Badge>
          <p className="mt-3 text-4xl font-black">{profile.streak_days} ngày</p>
          <StreakDots days={7} />
        </Card>
      </div>

      <Card>
        <h2 className="mb-4 text-2xl font-black">Chủ đề nổi bật</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="min-w-44 rounded-3xl p-4 text-white shadow-lg"
              style={{ background: `linear-gradient(135deg,${topic.color},#0f172a)` }}
            >
              <div className="text-3xl">{topic.icon}</div>
              <div className="mt-3 font-black">{topic.name_vi}</div>
              <div className="text-sm opacity-80">{30 + topic.id * 4}% hoàn thành</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
