import { Youtube, Instagram, Twitter, Mail } from 'lucide-react';

function SocialLink({ href, label, icon: Icon, highlight = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 ring-1 transition ${
        highlight
          ? 'bg-red-600/20 text-red-200 ring-red-500/30 hover:bg-red-600/30 hover:ring-red-400/40'
          : 'bg-neutral-900/60 text-neutral-200 ring-white/10 hover:bg-neutral-800/80 hover:ring-white/20'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

export default function FooterSocials() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur">
        <div className="mb-4">
          <p className="font-serif text-xl text-neutral-100">Let's keep in touch.</p>
          <p className="mt-1 text-sm text-neutral-400">Gentle updates, occasional jokes, and the odd song stuck in my head.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <SocialLink
            href="https://youtube.com"
            label="YouTube channel"
            icon={Youtube}
            highlight
          />
          <SocialLink href="https://instagram.com" label="Instagram" icon={Instagram} />
          <SocialLink href="https://twitter.com" label="Twitter/X" icon={Twitter} />
          <SocialLink href="mailto:hello@example.com" label="Email" icon={Mail} />
        </div>
        <p className="mt-6 text-xs text-neutral-500">
          Built with care. If you got this far, you deserve a cookie. (Metaphorically. I'm still learning cookie logistics.)
        </p>
      </div>
    </footer>
  );
}
