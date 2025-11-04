import { ExternalLink, Music, Tags, PenSquare, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group rounded-xl border border-white/10 bg-neutral-900/60 p-5 shadow-md backdrop-blur hover:border-white/20"
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-neutral-400">
        <Icon className="h-4 w-4" />
        <span className="text-xs uppercase tracking-wider">{subtitle}</span>
      </div>
      <h2 className="font-serif text-3xl text-neutral-100">{title}</h2>
    </div>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader icon={PenSquare} title="Blog" subtitle="Essays, reflections, journals" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Card>
          <h3 className="font-serif text-xl text-white">On patience and other tiny revolutions</h3>
          <p className="mt-2 text-sm text-neutral-300">
            A slow walk through the habit of waiting, and what the kettle taught me about timing.
          </p>
          <a
            href="https://note.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm text-yellow-300 hover:text-yellow-200"
          >
            Read on Note <ExternalLink className="h-4 w-4" />
          </a>
        </Card>
        <Card>
          <h3 className="font-serif text-xl text-white">A short letter to the version of me that hums</h3>
          <p className="mt-2 text-sm text-neutral-300">
            On creative momentum, soft ambition, and making small things often.
          </p>
          <a
            href="https://www.facebook.com/groups/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm text-yellow-300 hover:text-yellow-200"
          >
            Join the conversation <ExternalLink className="h-4 w-4" />
          </a>
        </Card>
      </div>
    </section>
  );
}

function MusicArchive() {
  const Tag = ({ children }) => (
    <span className="rounded-full border border-white/10 bg-neutral-800/60 px-2 py-0.5 text-xs text-neutral-300">
      {children}
    </span>
  );

  return (
    <section id="music" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader icon={Music} title="Music Review Archive" subtitle="Listening, revisited" />
      <div className="mb-4 flex flex-wrap items-center gap-2 text-neutral-400">
        <Tags className="h-4 w-4" />
        <span className="text-xs">Browse by:</span>
        <Tag>Ambient</Tag>
        <Tag>Jazz</Tag>
        <Tag>Indie</Tag>
        <Tag>Late-night</Tag>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <div className="flex items-start justify-between">
              <h3 className="font-serif text-lg text-white">Album thoughts, vol. {i}</h3>
              <span className="rounded-full bg-yellow-400/10 px-2 py-0.5 text-xs text-yellow-300">mood</span>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              A track that feels like warm light under a door. Notes on texture, space, and small risks.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader icon={FolderOpen} title="Portfolio" subtitle="Projects and experiments" />
      <div className="grid gap-5 sm:grid-cols-3">
        <Card>
          <h3 className="font-serif text-lg text-white">Short films and edits</h3>
          <p className="mt-2 text-sm text-neutral-300">Quiet visuals for noisier days. Color, pacing, and story fragments.</p>
        </Card>
        <Card>
          <h3 className="font-serif text-lg text-white">Writing samples</h3>
          <p className="mt-2 text-sm text-neutral-300">Essays and articles on creative practice, technology, and care.</p>
        </Card>
        <Card>
          <h3 className="font-serif text-lg text-white">Interactive bits</h3>
          <p className="mt-2 text-sm text-neutral-300">Playful tools and prototypes that turn curiosity into buttons.</p>
        </Card>
      </div>
    </section>
  );
}

export default function ContentSections() {
  return (
    <div>
      <BlogSection />
      <MusicArchive />
      <PortfolioSection />
    </div>
  );
}
