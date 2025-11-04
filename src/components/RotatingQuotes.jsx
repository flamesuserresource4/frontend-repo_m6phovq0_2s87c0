import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const QUOTES = [
  "I keep a small library of unsent letters to the future.",
  "Some days the silence says more than paragraphs ever could.",
  "Art is just courage wearing a sweater.",
  "I put my worries in the dishwasher; they come out warm and manageable.",
  "Between songs and sentences, I find a place to breathe.",
];

export default function RotatingQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section aria-label="Rotating quotes" className="relative mx-auto max-w-4xl px-6 py-10">
      <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 shadow-lg backdrop-blur">
        <div className="mb-3 flex items-center gap-2 text-neutral-400">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs uppercase tracking-wider">Today in thoughts</span>
        </div>
        <blockquote className="font-serif text-2xl leading-snug text-neutral-100 transition">
          “{QUOTES[index]}”
        </blockquote>
        <div className="mt-4 flex gap-1">
          {QUOTES.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full transition ${
                i === index ? 'bg-yellow-400' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
