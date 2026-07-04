import { Outlet, Route, Routes } from 'react-router-dom';
import { BottomNav } from '../components/layout/BottomNav';
import { Sidebar } from '../components/layout/Sidebar';
import { TopBar } from '../components/layout/TopBar';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { profile } from '../data/mock';
import { HomePage } from '../pages/Home/HomePage';
import { FlashcardPage } from '../pages/Flashcard/FlashcardPage';
import { QuizPage } from '../pages/Quiz/QuizPage';
import { ListeningPage } from '../pages/Listening/ListeningPage';
import { LeaderboardPage } from '../pages/Leaderboard/LeaderboardPage';
import { ProfilePage } from '../pages/Profile/ProfilePage';
import { OnboardingPage } from '../pages/Onboarding/OnboardingPage';
import { AdminPage } from '../pages/Admin/AdminPage';
import { ErrorBoundary } from './ErrorBoundary';

function Layout() {
  return (
    <ErrorBoundary>
      <TopBar />
      <main className="mx-auto flex max-w-7xl gap-6 px-4 py-6 pb-28 md:pb-8">
        <Sidebar />
        <section className="min-w-0 flex-1">
          <Outlet />
        </section>
      </main>
      <BottomNav />
    </ErrorBoundary>
  );
}

function AdminGuard() {
  if (profile.role !== 'admin') {
    return (
      <Card className="mx-auto max-w-xl text-center">
        <p className="text-5xl">🔒</p>
        <h1 className="mt-4 text-3xl font-black">Không có quyền truy cập</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Chỉ tài khoản admin mới có thể mở khu vực quản trị.
        </p>
      </Card>
    );
  }
  return <AdminPage />;
}

function NotFoundPage() {
  return (
    <Card className="mx-auto max-w-xl text-center">
      <p className="text-5xl">🧭</p>
      <h1 className="mt-4 text-3xl font-black">Không tìm thấy trang</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Đường dẫn này không tồn tại trong VocaTOEIC.
      </p>
      <Button className="mt-6" onClick={() => { location.href = '/'; }}>
        Về trang chủ
      </Button>
    </Card>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="flashcard" element={<FlashcardPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="listening" element={<ListeningPage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="admin" element={<AdminGuard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
