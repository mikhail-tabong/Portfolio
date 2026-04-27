'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#hero', label: 'home' },
  { href: '#expertise', label: 'expertise' },
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#skills', label: 'skills' },
  { href: '#portfolio', label: 'projects' },
  { href: '#blog', label: 'blog' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[9999] bg-gradient-to-r from-accent-green to-accent-blue shadow-[0_0_8px_rgba(0,255,163,0.4)] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <nav
        aria-label="Primary navigation"
        className="nav-anim fixed top-0 left-0 right-0 z-[8000] h-[58px] bg-bg0/90 backdrop-blur-xl border-b border-line flex items-center justify-between px-[clamp(1rem,5vw,3rem)]"
      >
        <div className="font-mono text-[0.82rem] font-semibold text-accent-green tracking-wider flex items-center gap-1">
          <span className="text-muted font-light">~/</span>tabong
          <span className="inline-block w-[7px] h-[14px] bg-accent-green animate-blink ml-0.5" aria-hidden="true" />
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="md:hidden border border-line2 text-txt px-2.5 py-1.5 rounded-md hover:border-accent-green hover:text-accent-green transition-colors"
        >
          ☰
        </button>

        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-0 md:gap-[clamp(0.75rem,1.8vw,1.75rem)] items-stretch md:items-center absolute md:relative top-[58px] md:top-0 left-0 right-0 md:left-auto md:right-auto bg-bg1 md:bg-transparent border-b md:border-0 border-line py-4 md:py-0 list-none`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block md:inline px-8 md:px-0 py-3 md:py-0 font-mono text-[0.7rem] font-medium text-sub uppercase tracking-[0.1em] hover:text-txt transition-colors relative md:after:content-[''] md:after:absolute md:after:bottom-[-2px] md:after:left-0 md:after:w-0 md:after:h-px md:after:bg-accent-green md:hover:after:w-full md:after:transition-[width] md:after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
