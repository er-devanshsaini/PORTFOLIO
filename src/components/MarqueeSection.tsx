import { useEffect, useRef, useState } from 'react';

const row1Tools = [
  { name: 'Splunk', icon: '📊' },
  { name: 'Sysmon', icon: '🔍' },
  { name: 'Wireshark', icon: '🦈' },
  { name: 'Burp Suite', icon: '🕷' },
  { name: 'Nmap', icon: '🗺' },
  { name: 'Kali Linux', icon: '🐉' },
  { name: 'VirusTotal', icon: '🛡' },
  { name: 'MITRE ATT&CK', icon: '⚔' },
  { name: 'OWASP Top 10', icon: '🌐' },
  { name: 'Python', icon: '🐍' },
  { name: 'PowerShell', icon: '💻' },
];

const row2Tools = [
  { name: 'TCPDump', icon: '📡' },
  { name: 'Active Directory', icon: '🏢' },
  { name: 'Windows Event Logs', icon: '📋' },
  { name: 'NIST CSF', icon: '📜' },
  { name: 'Cyber Kill Chain', icon: '🔗' },
  { name: 'Incident Response', icon: '🚨' },
  { name: 'Threat Hunting', icon: '🎯' },
  { name: 'IOC Analysis', icon: '🔬' },
  { name: 'Bash', icon: '⚡' },
  { name: 'SQL', icon: '🗄' },
];

const tripled1 = [...row1Tools, ...row1Tools, ...row1Tools];
const tripled2 = [...row2Tools, ...row2Tools, ...row2Tools];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const newOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - moves right */}
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {tripled1.map((tool, i) => (
            <ToolBadge key={i} name={tool.name} icon={tool.icon} />
          ))}
        </div>

        {/* Row 2 - moves left */}
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {tripled2.map((tool, i) => (
            <ToolBadge key={i} name={tool.name} icon={tool.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 rounded-2xl border px-6 py-4"
      style={{
        borderColor: 'rgba(215, 226, 234, 0.15)',
        background: 'rgba(255,255,255,0.03)',
        minWidth: '180px',
        height: '64px',
      }}
    >
      <span className="text-xl leading-none">{icon}</span>
      <span
        className="font-medium uppercase tracking-wider whitespace-nowrap text-sm"
        style={{ color: '#D7E2EA' }}
      >
        {name}
      </span>
    </div>
  );
}
