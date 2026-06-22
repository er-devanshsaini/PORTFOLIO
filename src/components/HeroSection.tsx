import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-20">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#D7E2EA' }}
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading — two lines so each word fits at large size */}
      <div className="overflow-hidden relative z-10">
        <FadeIn delay={0.15} y={40}>
          <div
            className="font-black uppercase tracking-tight leading-none w-full mt-4 md:mt-0 md:-mt-2 px-2"
          >
            <p className="hero-heading" style={{ fontSize: 'clamp(2rem, 10vw, 13rem)' }}>
              Hi, i&apos;m
            </p>
            <p className="hero-heading" style={{ fontSize: 'clamp(2.5rem, 15vw, 20rem)' }}>
              Devansh
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end mt-auto pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a cybersecurity analyst driven by securing systems and hunting threats
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Hero Portrait — inset-x-0 + flex justify-center avoids framer-motion transform conflict */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute right-[5%] bottom-0 z-10"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px]"
        >
          <img
            src="/assets/images/avatar.png"
            alt="Devansh Saini"
            className="w-full h-auto object-contain drop-shadow-2xl"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
