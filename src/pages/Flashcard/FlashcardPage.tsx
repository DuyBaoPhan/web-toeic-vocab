import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Flag, Volume2, X } from 'lucide-react';
import { userWords } from '../../data/mock';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { speak } from '../../lib/audio';

export function FlashcardPage() {
  const deck = useMemo(() => userWords.slice(0, 8), []);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const card = deck[index];

  if (!card) {
    return (
      <Card className="text-center">
        <h1 className="text-4xl font-black">🎉 Hoàn thành deck!</h1>
        <p className="mt-2">
          XP kiếm được: {Object.values(ratings).reduce((total, rating) => total + (rating === 4 ? 10 : 0), 50)}
        </p>
        <Button className="mt-6" onClick={() => { location.href = '/'; }}>
          Về trang chủ
        </Button>
      </Card>
    );
  }

  const word = card.word!;
  const rate = (rating: number) => {
    setRatings({ ...ratings, [word.word]: rating });
    setFlipped(false);
    setTimeout(() => setIndex(index + 1), 350);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <div className="flex items-center justify-between">
        <Badge tone="indigo">{index + 1}/{deck.length} từ</Badge>
        <Button id="exit-flashcard" variant="ghost"><X size={18} /> Thoát</Button>
      </div>

      <div className="perspective h-[430px]">
        <motion.div
          drag="x"
          onDragEnd={(_, info) => {
            if (info.offset.x > 120) rate(4);
            if (info.offset.x < -120) rate(1);
          }}
          onClick={() => setFlipped(!flipped)}
          className="preserve-3d relative h-full cursor-pointer"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.55, type: 'spring' }}
        >
          <Card className="backface-hidden absolute inset-0 grid place-items-center text-center">
            <div>
              <Badge tone="emerald">{word.word_type}</Badge>
              <h1 className="mt-4 text-6xl font-black">{word.word}</h1>
              <p className="mt-3 text-xl text-slate-500">{word.phonetic}</p>
              <Button
                id="audio-front"
                className="mt-6"
                variant="ghost"
                onClick={(event) => {
                  event.stopPropagation();
                  speak(word.word, word.audio_url);
                }}
              >
                <Volume2 size={18} /> Phát âm
              </Button>
              <p className="mt-6 text-sm text-slate-500">Tap để xem nghĩa</p>
            </div>
            <button
              aria-label="Báo lỗi từ"
              className="focus-ring absolute right-4 top-4 rounded-full p-3 hover:bg-red-50"
              onClick={(event) => {
                event.stopPropagation();
                setReportOpen(true);
              }}
            >
              <Flag size={18} />
            </button>
          </Card>

          <Card className="backface-hidden rotate-y-180 absolute inset-0">
            <div className="flex h-full flex-col justify-center">
              <h2 className="text-4xl font-black text-emerald-600">{word.meaning_vi}</h2>
              <p className="mt-5 text-xl font-semibold">{word.example_sentence}</p>
              <p className="mt-2 text-slate-500">{word.example_vi}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {word.collocations.map((collocation) => <Badge key={collocation} tone="amber">{collocation}</Badge>)}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Button id="rate-again" variant="danger" onClick={() => rate(1)}>❌ Chưa nhớ</Button>
        <Button id="rate-review" variant="warning" onClick={() => rate(3)}>🔄 Ôn lại</Button>
        <Button id="rate-easy" variant="success" onClick={() => rate(4)}>✅ Đã nhớ</Button>
      </div>

      <Modal open={reportOpen} title="Báo lỗi từ vựng" onClose={() => setReportOpen(false)}>
        <div className="grid gap-3">
          {['Sai phiên âm', 'Sai nghĩa', 'Sai ví dụ', 'Khác'].map((reason) => (
            <Button key={reason} variant="ghost">🚩 {reason}</Button>
          ))}
        </div>
      </Modal>
    </div>
  );
}
