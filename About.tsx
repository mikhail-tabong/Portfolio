import Section from './Section';

const PROFILE_ROWS = [
  { key: 'location', value: 'Annapolis, MD' },
  { key: 'graduation', value: 'May 2026 ✓', highlight: true },
  { key: 'focus', value: 'Data Science, AML' },
  { key: 'leadership', value: 'Phi Delta Sigma, Inc.' },
  { key: 'cert', value: 'Google Data Analytics', link: 'https://coursera.org/verify/professional-cert/X58QUDR2TQC2' },
  { key: 'also', value: 'Deloitte Data Analytics Sim' },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I Am" alt>
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <div className="reveal reveal-delay-2 space-y-4 text-[0.95rem] leading-[1.75] text-sub">
          <p>
            Hi, I&apos;m <strong className="text-txt">Mikhail Tabong</strong> (pronounced{' '}
            <em className="not-italic text-accent-green">me-KYLE tah-BONG</em>), but most people just call me Kyle. I&apos;m a graduating senior at the University of Maryland majoring in <strong className="text-txt">Information Science</strong> with a Data Science concentration, finishing my degree in May 2026.
          </p>
          <p>
            I currently work as a <strong className="text-txt">Financial Crimes Compliance Analyst</strong> at Protiviti, supporting a financial crimes compliance engagement for a Fortune 500 client. I clean multi-source data, design Excel dashboards, and surface transaction anomalies for AML review. I also serve as a <strong className="text-txt">Project Manager</strong> on UMD&apos;s iConsultancy team, leading a 5-person group modernizing HR processes for a Baltimore nonprofit.
          </p>
          <p>
            My toolkit spans <strong className="text-txt">Python, SQL, R, Tableau, ETL pipelines, and machine learning</strong>. I&apos;m driven by turning complex datasets into things that actually help people make better decisions, especially in finance and healthcare.
          </p>
        </div>

        {/* Terminal card */}
        <div className="reveal reveal-delay-3 bg-bg0 border border-line rounded-md overflow-hidden hover:border-line2 hover:shadow-[0_0_24px_rgba(0,255,163,0.06)] transition-all">
          <div className="bg-bg2 border-b border-line px-3.5 py-2 flex items-center gap-1.5 font-mono text-[0.66rem] text-muted">
            <span className="w-[9px] h-[9px] rounded-full bg-accent-red" />
            <span className="w-[9px] h-[9px] rounded-full bg-accent-amber" />
            <span className="w-[9px] h-[9px] rounded-full bg-accent-green" />
            <span className="ml-1.5">profile.json</span>
          </div>
          <div className="px-4 py-3.5">
            {PROFILE_ROWS.map((row, i) => (
              <div
                key={row.key}
                className={`flex justify-between items-baseline py-2 font-mono text-[0.78rem] gap-3 ${
                  i < PROFILE_ROWS.length - 1 ? 'border-b border-line' : ''
                }`}
              >
                <span className="text-sub shrink-0 before:content-['$_'] before:text-line2">
                  {row.key}
                </span>
                <span className={`text-right ${row.highlight ? 'text-accent-green' : 'text-txt'}`}>
                  {row.link ? (
                    <a
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-green text-[0.73rem] hover:underline"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
