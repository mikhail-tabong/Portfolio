import Section from './Section';
import Timeline, { TimelineItem } from './Timeline';

const EDUCATION: TimelineItem[] = [
  {
    logo: '/umd-logo.png',
    logoAlt: 'University of Maryland',
    role: 'B.Sci in Information Science',
    org: 'University of Maryland, College Park',
    meta: ['College Park, MD', 'Aug 2023 – May 2026', 'Data Science Concentration'],
    bullets: [
      'Relevant coursework: Data Visualization, Data Science, Health Data Analytics, Database Design & Modeling, R for Data Science, Data Wrangling and Analysis',
      'Achievement: Google Data Analytics Professional Certificate',
    ],
  },
  {
    logo: '/aacc-logo.png',
    logoAlt: 'Anne Arundel Community College',
    role: 'General Education',
    org: 'Anne Arundel Community College',
    meta: ['Arnold, MD', '2022 – 2023'],
  },
];

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      <Timeline items={EDUCATION} />
    </Section>
  );
}
