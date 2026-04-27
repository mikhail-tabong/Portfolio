import Section from './Section';

const CONTACT = [
  { label: 'phone', value: '(808) 388-2725', href: 'tel:8083882725' },
  { label: 'email', value: 'mikhailtabong@gmail.com', href: 'mailto:mikhailtabong@gmail.com' },
  { label: 'linkedin', value: 'linkedin.com/in/mikhail-tabong', href: 'https://linkedin.com/in/mikhail-tabong' },
  { label: 'github', value: 'github.com/mikhail-tabong', href: 'https://github.com/mikhail-tabong' },
];

export default function Contact() {
  return (
    <>
      <Section id="contact" eyebrow="Contact" title="Get In Touch" alt>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {CONTACT.map((c, i) => (
            <div
              key={c.label}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} bg-bg0 border border-line rounded-md p-5 flex flex-col gap-1 hover:border-accent-green hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,255,163,0.08)] transition-all`}
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                {c.label}
              </span>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[0.95rem] text-txt hover:text-accent-green transition-colors break-words"
              >
                {c.value}
              </a>
            </div>
          ))}
        </div>
      </Section>

      <footer className="px-[clamp(1.25rem,6vw,4rem)] py-6 border-t border-line bg-bg0 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <span className="font-mono text-xs text-muted">© 2026 Mikhail Tabong</span>
        <div className="flex gap-5 flex-wrap justify-center">
          <a
            href="https://linkedin.com/in/mikhail-tabong"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-sub hover:text-accent-green transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mikhail-tabong"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-sub hover:text-accent-green transition-colors"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-sub hover:text-accent-green transition-colors"
          >
            Resume
          </a>
        </div>
      </footer>
    </>
  );
}
