import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const projects = [
  {
    number: '01',
    category: 'Personal',
    name: 'Web Security Assessment Platform',
    tools: 'Burp Suite · OWASP Top 10 · Python',
    images: {
      col1top: '/assets/images/image.png',
      col1bottom: '/assets/images/image.png',
      col2: '/assets/images/image.png',
    },
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Threat Hunting with Splunk',
    tools: 'Splunk · Sysmon · Windows Event Logs',
    images: {
      col1top: '/assets/images/Screenshot_2026-06-19_205552.png',
      col1bottom: '/assets/images/Screenshot_2026-06-19_205552.png',
      col2: '/assets/images/Screenshot_2026-06-19_205552.png',
    },
  },
  {
    number: '03',
    category: 'Research',
    name: 'Phishing Email Analysis',
    tools: 'VirusTotal · Threat Intelligence · OSINT',
    images: {
      col1top: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      col1bottom: 'https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=800',
      col2: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
  },
];

const totalCards = projects.length;

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-40"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} totalCards={totalCards} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] relative" style={{ marginBottom: '0' }}>
      <motion.div
        className="sticky rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
        style={{
          top: `calc(6rem + ${index * 28}px)`,
          borderColor: '#D7E2EA',
          background: '#0C0C0C',
          scale,
          transformOrigin: 'top center',
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
            <span
              className="font-black leading-none"
              style={{ color: '#D7E2EA', fontSize: 'clamp(2rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span
                className="uppercase tracking-wider font-light text-xs sm:text-sm"
                style={{ color: 'rgba(215,226,234,0.5)' }}
              >
                {project.category}
              </span>
              <span
                className="font-medium uppercase"
                style={{ color: '#D7E2EA', fontSize: 'clamp(0.9rem, 2vw, 1.6rem)' }}
              >
                {project.name}
              </span>
              <span
                className="font-light text-xs sm:text-sm mt-0.5"
                style={{ color: 'rgba(215,226,234,0.5)' }}
              >
                {project.tools}
              </span>
            </div>
          </div>

          <a
            href="https://github.com/er-devanshsaini"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors"
            style={{ borderColor: '#D7E2EA', color: '#D7E2EA' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(215,226,234,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            View Project
          </a>
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left column 40% */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.images.col1top}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images.col1bottom}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right column 60% */}
          <div style={{ width: '60%' }}>
            <img
              src={project.images.col2}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
              style={{ minHeight: 'clamp(290px, 38vw, 580px)' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
