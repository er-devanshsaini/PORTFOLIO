import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />

      {/* Footer */}
      <footer
        className="text-center py-10 px-5"
        style={{ background: '#0C0C0C', borderTop: '1px solid rgba(215,226,234,0.1)' }}
      >
        <p
          className="font-light uppercase tracking-widest text-sm"
          style={{ color: 'rgba(215,226,234,0.4)' }}
        >
          &copy; {new Date().getFullYear()} Devansh Saini &mdash; Cybersecurity Analyst
        </p>
      </footer>
    </main>
  );
}
