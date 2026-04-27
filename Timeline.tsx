import Image from 'next/image';

export interface TimelineItem {
  logo: string;
  logoAlt: string;
  role: string;
  org: string;
  meta: string[];
  bullets?: string[];
  badge?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div
          key={`${item.org}-${i}`}
          className={`reveal reveal-delay-${Math.min(i + 2, 4)} bg-bg1 border border-line border-l-[3px] border-l-line rounded-md p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[52px_1fr] gap-5 items-start hover:border-l-accent-green hover:translate-x-1.5 hover:shadow-[-4px_0_20px_rgba(0,255,163,0.06)] transition-all`}
        >
          <Image
            src={item.logo}
            alt={item.logoAlt}
            width={52}
            height={52}
            className="w-[52px] h-[52px] object-contain rounded-md bg-white border border-line p-1 shrink-0"
          />
          <div>
            <div className="text-base font-bold text-accent-green mb-1 flex items-center gap-2 flex-wrap">
              {item.role}
              {item.badge && (
                <span className="font-mono text-[0.62rem] tracking-[0.08em] uppercase bg-accent-green/10 text-accent-green border border-accent-green/20 rounded-full px-2 py-0.5">
                  {item.badge}
                </span>
              )}
            </div>
            <div className="text-[0.88rem] font-medium text-txt mb-2">{item.org}</div>
            <div className="font-mono text-[0.7rem] text-sub flex gap-3.5 flex-wrap mb-2.5">
              {item.meta.map((m) => (
                <span key={m} className="before:content-['—_'] before:text-line2">
                  {m}
                </span>
              ))}
            </div>
            {item.bullets && (
              <ul className="list-none space-y-1">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-[0.87rem] text-sub leading-[1.7] pl-5 relative before:content-['>'] before:absolute before:left-0 before:text-accent-green before:font-mono"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
