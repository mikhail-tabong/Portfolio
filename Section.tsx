import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  alt?: boolean;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, alt = false, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-h`}
      className={`px-[clamp(1.25rem,6vw,4rem)] py-[clamp(4.5rem,9vw,7rem)] relative z-10 ${
        alt ? 'bg-bg1 border-y border-line' : ''
      }`}
    >
      <div className="max-w-[1080px] mx-auto">
        <p className="reveal font-mono text-[0.68rem] tracking-[0.22em] uppercase text-accent-green flex items-center gap-2.5 mb-2.5 before:content-['//'] before:text-line2">
          {eyebrow}
        </p>
        <h2
          id={`${id}-h`}
          className="reveal reveal-delay-1 text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-txt tracking-[-0.025em] leading-[1.15] mb-11"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
