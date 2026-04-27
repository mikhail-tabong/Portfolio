import Section from './Section';
import Timeline, { TimelineItem } from './Timeline';

const EXPERIENCE: TimelineItem[] = [
  {
    logo: '/protiviti-logo.png',
    logoAlt: 'Protiviti',
    role: 'Financial Crimes Compliance Analyst',
    org: 'Protiviti',
    meta: ['Remote', 'Jun 2025 – Present'],
    badge: 'Current',
    bullets: [
      'Cleaned, standardized, and integrated data across 10+ databases using Excel and SQL, reducing reporting errors and improving data integrity by 20%.',
      'Designed Excel dashboards and pivot tables to surface transaction anomalies, improving case triage efficiency by 20%.',
    ],
  },
  {
    logo: '/umd-logo.png',
    logoAlt: 'UMD iConsultancy',
    role: 'Project Manager',
    org: 'UMD iConsultancy x South Baltimore Gateway Partnership',
    meta: ['College Park, MD', 'Jan 2026 – Present'],
    badge: 'Current',
    bullets: [
      'Led a 5-person team analyzing and modernizing a nonprofit\u2019s manual HR process through gap analysis and stakeholder interviews.',
      'Produced a requirements matrix, platform assessment, and phased implementation roadmap presented to nonprofit leadership.',
    ],
  },
  {
    logo: '/chosan-logo.png',
    logoAlt: 'Chosan',
    role: 'Data Analyst Intern',
    org: 'Chosan',
    meta: ['Remote', 'Oct 2024 – Jan 2025'],
    bullets: [
      'Built end-to-end ETL pipelines in Python to automate weekly ingestion, validation, and transformation across 150+ sources.',
      'Developed interactive Tableau dashboards tracking 10+ KPIs across business units, enabling faster decisions.',
      'Collaborated with product and logistics teams on data models and schema logic for consistent reporting.',
    ],
  },
  {
    logo: '/pdsigma-logo.png',
    logoAlt: 'Phi Delta Sigma',
    role: 'Treasurer & Member',
    org: 'Phi Delta Sigma Fraternity, Inc.',
    meta: ['College Park, MD', '2024 – Present'],
    bullets: [
      'Manage fraternity finances, dues collection, and budgeting for cultural and philanthropic events.',
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work History" alt>
      <Timeline items={EXPERIENCE} />
    </Section>
  );
}
