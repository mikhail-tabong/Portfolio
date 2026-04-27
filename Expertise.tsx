import Section from './Section';

const EXPERTISE = [
  {
    icon: 'AML',
    name: 'Anti-Money Laundering Investigations',
    blurb: 'Reviewing transaction histories, escalating suspicious activity, and supporting case-level documentation for a Fortune 500 financial institution.',
  },
  {
    icon: 'Reporting',
    name: 'Regulatory Reporting',
    blurb: 'Preparing accurate, audit-ready data outputs that meet regulatory standards across multi-source pipelines.',
  },
  {
    icon: 'Monitoring',
    name: 'Transaction Monitoring',
    blurb: 'Designing Excel dashboards and pivot analyses to surface anomalies and prioritize high-risk flags for review.',
  },
  {
    icon: 'Compliance',
    name: 'Financial Crimes Compliance',
    blurb: 'Operating inside KYC/BSA workflows: data integrity, case triage, and analyst-ready artifacts for downstream review teams.',
  },
];

export default function Expertise() {
  return (
    <Section id="expertise" eyebrow="Domain Expertise" title="Where I Specialize" alt>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {EXPERTISE.map((item, i) => (
          <div
            key={item.name}
            className={`reveal reveal-delay-${i + 1} bg-bg2 border border-line rounded-md p-6 hover:border-line2 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all`}
          >
            <div className="font-mono text-xs uppercase tracking-widest text-accent-amber mb-2 before:content-['['] before:text-line2 before:mr-1 after:content-[']'] after:text-line2 after:ml-1 inline-block">
              {item.icon}
            </div>
            <div className="text-base font-bold text-txt mb-2 mt-1">{item.name}</div>
            <p className="text-sm text-sub leading-[1.65]">{item.blurb}</p>
          </div>
        ))}
      </div>

      <div className="reveal reveal-delay-2 mt-10 bg-bg0 border border-line rounded-md p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
        <div className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-accent-amber shrink-0 before:content-['//'] before:text-line2 before:mr-1.5">
          Open to roles in
        </div>
        <p className="text-sm text-sub leading-[1.65]">
          <strong className="text-txt">Data Analytics</strong>,{' '}
          <strong className="text-txt">Business Intelligence</strong>,{' '}
          <strong className="text-txt">ETL / Data Engineering</strong>, and{' '}
          <strong className="text-txt">Compliance Analytics</strong> across healthcare, fintech, consulting, and tech.
        </p>
      </div>
    </Section>
  );
}
