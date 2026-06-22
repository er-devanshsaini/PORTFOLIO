import FadeIn from './FadeIn';

const services = [
  {
    number: '01',
    name: 'SIEM & Threat Hunting',
    description:
      'Configuring Splunk and Sysmon to collect Windows security logs, building SPL dashboards to investigate suspicious activity, and performing threat hunting with MITRE ATT&CK and IOC analysis.',
  },
  {
    number: '02',
    name: 'Penetration Testing',
    description:
      'Web application security assessments using Burp Suite to identify OWASP Top 10 vulnerabilities including SQL Injection, XSS, and misconfigurations, with detailed remediation reports.',
  },
  {
    number: '03',
    name: 'Incident Response',
    description:
      'Detecting, investigating, and responding to security incidents through IOC analysis, phishing email inspection, root cause analysis, and malware behavior investigation.',
  },
  {
    number: '04',
    name: 'Network Security',
    description:
      'Monitoring and securing networks using Wireshark, Nmap, TCPDump, Firewalls, and IDS/IPS. Analyzing TCP/IP, DNS, DHCP, and HTTP/HTTPS protocols to identify anomalies.',
  },
  {
    number: '05',
    name: 'Endpoint Security',
    description:
      'Monitoring Windows environments via Event Logs, Active Directory, process and registry analysis. Detecting lateral movement, privilege escalation, and persistence mechanisms.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1 }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              <span
                className="font-black flex-shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {service.number}
              </span>
              <div className="flex flex-col justify-center gap-1 sm:gap-2 pt-2">
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', color: '#0C0C0C' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    color: '#0C0C0C',
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
