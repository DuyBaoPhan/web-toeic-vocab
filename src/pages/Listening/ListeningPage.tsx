import { useState } from 'react';
import { listeningExercise } from '../../data/mock';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { fuzzyMatch } from '../../utils/fuzzy';

export function ListeningPage() {
  const [answers, setAnswers] = useState(['', '']);
  const [submitted, setSubmitted] = useState(false);

  return (
    <Card className="mx-auto max-w-4xl">
      <Badge tone="indigo">TOEIC Part {listeningExercise.part}</Badge>
      <h1 className="mt-4 text-4xl font-black">{listeningExercise.title}</h1>
      <div className="mt-6 rounded-3xl bg-slate-950 p-5 text-white">
        <div className="h-2 rounded-full bg-emerald-400" />
        <div className="mt-4 flex gap-2">
          {[0.75, 1, 1.25].map((speed) => (
            <Button key={speed} variant="ghost">{speed}x</Button>
          ))}
        </div>
      </div>
      <p className="mt-6 text-xl leading-relaxed">
        The manager confirmed the{' '}
        <input className="mx-2 rounded-xl bg-white p-2 text-slate-900" value={answers[0]} onChange={(event) => setAnswers([event.target.value, answers[1]])} />
        after reviewing the travel{' '}
        <input className="mx-2 rounded-xl bg-white p-2 text-slate-900" value={answers[1]} onChange={(event) => setAnswers([answers[0], event.target.value])} />.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {listeningExercise.suggestions.map((suggestion) => <Badge key={suggestion}>{suggestion}</Badge>)}
      </div>
      <Button className="mt-6" onClick={() => setSubmitted(true)}>Nộp bài</Button>
      {submitted && (
        <div className="mt-4 grid gap-2">
          {listeningExercise.blanks.map((blank, index) => (
            <div key={blank} className={fuzzyMatch(answers[index], blank) ? 'text-emerald-600' : 'text-red-600'}>
              {answers[index] || '(trống)'} → {blank}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
