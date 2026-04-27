'use client';

import { useState } from 'react';
import Section from './Section';

interface Project {
  category: string;
  tag: string;
  name: string;
  desc: string;
  links: { label: string; href: string }[];
  iconColor: string;
}

const FILTERS = [
  { label: 'all', value: 'all' },
  { label: 'data', value: 'data-eng' },
  { label: 'machine-learning', value: 'ml' },
  { label: 'visualization', value: 'viz' },
];

const PROJECTS: Project[] = [
  {
    category: 'data-eng',
    tag: 'data-engineering',
    name: 'Credit Card Spending & Risk Analysis',
    desc: 'End-to-end Python project analyzing spending patterns and credit risk. Built with pandas, DuckDB, Plotly, and Streamlit on a synthetic Kaggle dataset.',
    links: [
      { label: 'github', href: 'https://github.com/mikhail-tabong/credit_card_risk_assessment_data_project' },
    ],
    iconColor: '#4D9EFF',
  },
  {
    category: 'ml',
    tag: 'machine-learning',
    name: 'Spotify Genre Clustering',
    desc: 'Processed 200+ music genres, applied cosine similarity and agglomerative clustering, and built a Flask/MySQL app for real-time personalized playlist recommendations.',
    links: [{ label: 'github', href: 'https://github.com/ReservedbyDev/414Final' }],
    iconColor: '#00FFA3',
  },
  {
    category: 'ml',
    tag: 'machine-learning',
    name: 'Hepatitis Mortality Prediction',
    desc: 'Trained Decision Tree, SVM, and KNN models on UCI Hepatitis data. Achieved best ROC-AUC with SVM and conducted bias and fairness analysis across gender groups.',
    links: [
      { label: 'github', href: 'https://github.com/iamsamuelm/healthcare-data-analytics' },
      { label: 'slides', href: 'https://docs.google.com/presentation/d/1RMhShOQ0fRifDf3GJQxsEKP08El1Aenu/edit?usp=sharing' },
    ],
    iconColor: '#F5A623',
  },
  {
    category: 'viz',
    tag: 'visualization',
    name: 'Superstore Sales Dashboard',
    desc: 'Interactive Tableau dashboard analyzing 48 months of sales across 4 regions. Uncovered a 12% profit decline tied to over-discounting and recommended a pricing strategy.',
    links: [
      { label: 'tableau', href: 'https://public.tableau.com/app/profile/mikhail.tabong/viz/SuperstoreSalesDashboard_17461064261590/ExecutiveOverview' },
    ],
    iconColor: '#00FFA3',
  },
  {
    category: 'data-eng',
    tag: 'data-engineering',
    name: 'Diabetes Data Warehouse',
    desc: 'Research-ready SQL data warehouse with 70K+ patient records, designed with DEI, privacy, and longitudinal analysis in mind.',
    links: [
      { label: 'view doc', href: 'https://docs.google.com/document/d/1QBsg9b6iYg75UVbAEZNcIoZw9iWH9GyGdgjn27ZhO78/edit?usp=sharing' },
    ],
    iconColor: '#4D9EFF',
  },
  {
    category: 'ml',
    tag: 'machine-learning',
    name: 'Mapping Product Similarity',
    desc: 't-SNE and clustering pipeline to map e-commerce product similarity, supporting recommendation, pricing, and bundling strategies.',
    links: [{ label: 'github', href: 'https://github.com/mikhail-tabong/ecommerce-product-performace-analysis' }],
    iconColor: '#00FFA3',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Section id="portfolio" eyebrow="Portfolio" title="Selected Projects">
      <div className="reveal flex gap-1.5 flex-wrap mb-7">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`font-mono text-[0.7rem] tracking-wide px-3.5 py-1.5 rounded-md border transition-all hover:-translate-y-px before:content-['#'] before:mr-0.5 ${
              filter === f.value
                ? 'bg-accent-green text-black border-accent-green before:text-black/45'
                : 'bg-transparent text-sub border-line2 hover:bg-accent-green hover:text-black hover:border-accent-green before:text-line2 hover:before:text-black/45'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((p, i) => (
          <article
            key={p.name}
            className={`reveal reveal-delay-${Math.min((i % 3) + 1, 4)} bg-bg2 border border-line rounded-md overflow-hidden flex flex-col hover:border-accent-green/50 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all`}
          >
            <div
              className="w-full aspect-square bg-bg0 border-b border-line flex items-center justify-center"
              style={{ background: `radial-gradient(circle at center, ${p.iconColor}15, transparent 70%)` }}
            >
              <div
                className="w-16 h-16 rounded-lg border-2 flex items-center justify-center font-mono text-2xl font-bold"
                style={{ borderColor: p.iconColor, color: p.iconColor }}
              >
                {p.name.charAt(0)}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1 gap-2.5">
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-accent-amber before:content-['#'] before:text-line2 before:mr-0.5">
                {p.tag}
              </div>
              <h3 className="text-base font-bold text-txt leading-tight">{p.name}</h3>
              <p className="text-[0.85rem] text-sub leading-[1.6] flex-1">{p.desc}</p>
              <div className="flex gap-3 mt-2 pt-2.5 border-t border-line">
                {p.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.7rem] text-accent-green hover:underline flex items-center gap-1"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
