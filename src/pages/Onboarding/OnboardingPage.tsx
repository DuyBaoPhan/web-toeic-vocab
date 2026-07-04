import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

export function OnboardingPage() {
  const [step, setStep] = useState(1);

  return (
    <main className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-3xl">
        <p className="font-bold text-emerald-600">Bước {step}/3</p>
        <h1 className="mt-2 text-4xl font-black">Khởi tạo lộ trình VocaTOEIC</h1>
        {step === 1 && (
          <div className="mt-6 grid gap-3 sm:grid-cols-5">
            {[450, 600, 730, 800, 900].map((score) => (
              <button key={score} className="focus-ring rounded-3xl bg-white/70 p-5 text-xl font-black dark:bg-white/10">{score}+</button>
            ))}
          </div>
        )}
        {step === 2 && (
          <div className="mt-6 space-y-3">
            <p className="font-semibold">Diagnostic nhanh: chọn nghĩa đúng cho 5 từ. Demo xếp level intermediate.</p>
            {['budget', 'recruit', 'itinerary', 'receipt', 'software'].map((word) => (
              <div key={word} className="rounded-2xl bg-white/70 p-3 font-bold dark:bg-white/10">{word} → chọn nghĩa đúng</div>
            ))}
          </div>
        )}
        {step === 3 && (
          <div className="mt-6 grid gap-4">
            <p className="font-semibold">Cam kết học mỗi ngày</p>
            <div className="grid grid-cols-4 gap-3">
              {[5, 10, 20, 30].map((count) => (
                <button className="focus-ring rounded-2xl bg-emerald-100 p-4 font-black text-emerald-800" key={count}>{count} từ</button>
              ))}
            </div>
            <input type="time" className="rounded-2xl border-0 bg-white/80 p-4 dark:bg-white/10" defaultValue="20:00" />
          </div>
        )}
        <div className="mt-8 flex justify-end gap-3">
          {step < 3 ? (
            <Button id="onboarding-next" onClick={() => setStep(step + 1)}>Tiếp tục</Button>
          ) : (
            <Link to="/"><Button id="onboarding-start">Bắt đầu học</Button></Link>
          )}
        </div>
      </Card>
    </main>
  );
}
