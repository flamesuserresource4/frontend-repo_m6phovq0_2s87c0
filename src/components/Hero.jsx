import Spline from '@splinetool/react-spline';
import { ArrowRight, Book, Music, FolderOpen } from 'lucide-react';

function QuickLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-neutral-900/70 px-4 py-2 text-neutral-200 ring-1 ring-white/10 backdrop-blur transition hover:bg-neutral-800/80 hover:ring-white/20"
    >
      <Icon className="h-4 w-4 text-neutral-300 transition group-hover:text-white" />
      <span className="text-sm font-medium">{label}</span>
      <ArrowRight className="h-4 w-4 translate-x-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
    </a>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-12 text-left">
        <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Notes from a Quiet Constellation
        </h1>
        <p className="mt-3 max-w-2xl text-base text-neutral-300 sm:text-lg">
          I write to make sense of the noise: gentle essays, music that lingers, and small projects that feel like home.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <QuickLink href="#blog" icon={Book} label="Read the blog" />
          <QuickLink href="#music" icon={Music} label="Music archive" />
          <QuickLink href="#portfolio" icon={FolderOpen} label="Creative work" />
        </div>
        <p className="mt-3 text-xs text-neutral-400">
          P.S. I promise to be profound, but I might also make a tasteful meme about tea vs. coffee.
        </p>
      </div>
    </section>
  );
}
