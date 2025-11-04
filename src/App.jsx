import Hero from './components/Hero';
import RotatingQuotes from './components/RotatingQuotes';
import ContentSections from './components/ContentSections';
import FooterSocials from './components/FooterSocials';

function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-serif text-lg text-white">Quiet Constellation</a>
          <nav className="flex items-center gap-4 text-sm text-neutral-300">
            <a href="#blog" className="hover:text-white transition">Blog</a>
            <a href="#music" className="hover:text-white transition">Music</a>
            <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <RotatingQuotes />
        <ContentSections />
      </main>

      <FooterSocials />
    </div>
  );
}

export default App;
