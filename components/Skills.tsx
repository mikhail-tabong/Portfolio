import Section from './Section';

const SKILLS = [
  {
    group: 'Languages & Libraries',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'SQL', 'R'],
  },
  {
    group: 'Data Engineering',
    items: ['ETL Pipelines', 'dbt', 'REST APIs', 'MySQL', 'PostgreSQL', 'Database Design', 'Docker', 'Git', 'Linux'],
  },
  {
    group: 'Analytics & Viz',
    items: ['Tableau', 'PowerBI', 'Excel', 'Pivot Tables', 'Plotly', 'Jupyter Notebook'],
  },
  {
    group: 'Machine Learning',
    items: ['Supervised Learning', 'Classification', 'K-Means', 'Decision Trees', 'SVM', 'KNN', 'ROC-AUC'],
  },
  {
    group: 'Compliance & Domain',
    items: ['AML Investigations', 'Regulatory Reporting', 'Financial Crimes', 'BSA/FinCEN'],
  },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Toolkit">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-4">
        {SKILLS.map((skill, i) => (
          <div
            key={skill.group}
            className={`reveal reveal-delay-${Math.min(i + 1, 4)} bg-bg0 border border-line rounded-md overflow-hidden hover:border-line2 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all`}
          >
            <div className="bg-bg2 border-b border-line px-3.5 py-2 font-mono text-[0.67rem] text-accent-amber tracking-[0.12em] uppercase before:content-['[_'] before:text-line2 after:content-['_]'] after:text-line2">
              {skill.group}
            </div>
            <div className="p-3.5 flex flex-wrap gap-1.5">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="bg-bg2 text-txt border border-line2 rounded px-3 py-1 font-mono text-[0.74rem] hover:border-accent-green hover:text-accent-green hover:bg-accent-green/[0.04] transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
