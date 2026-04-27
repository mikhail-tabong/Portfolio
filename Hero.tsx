import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="px-[clamp(1.25rem,6vw,4rem)] py-[clamp(4.5rem,9vw,7rem)] min-h-[calc(100vh-58px)] flex items-center relative z-10"
    >
      <div className="max-w-[1080px] mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-[clamp(2rem,5vw,5rem)] items-center justify-items-center sm:justify-items-start text-center sm:text-left">
          {/* Photo */}
          <div className="photo-shell hero-photo-anim relative shrink-0 w-[clamp(170px,18vw,260px)]">
            <Image
              src="/profile.png"
              alt="Kyle Tabong smiling in a navy blazer"
              width={260}
              height={347}
              priority
              className="relative z-[1] w-full aspect-[3/4] object-cover object-top rounded-lg contrast-[1.05] saturate-[0.88] hover:contrast-[1.08] hover:saturate-100 transition-all"
            />
            <div className="absolute bottom-0 left-0 right-0 z-[2] bg-bg0/95 border-t border-line rounded-b-lg px-3 py-1.5 font-mono text-[0.64rem] text-accent-green flex items-center gap-1.5">
              <span className="status-dot w-[7px] h-[7px] rounded-full bg-accent-green shrink-0 shadow-[0_0_6px_#00FFA3]" />
              <span className="text-sub">status:</span>&nbsp;open to opportunities
            </div>
          </div>

          {/* Text */}
          <div className="hero-text-anim">
            <p className="font-mono text-[0.7rem] text-sub uppercase tracking-[0.12em] flex items-center justify-center sm:justify-start gap-1.5 mb-3.5 before:content-['>_'] before:text-accent-green">
              Financial Crimes &amp; Data Analyst
            </p>

            <h1 className="text-[clamp(2.1rem,5vw,4.2rem)] font-bold leading-none tracking-[-0.03em] text-txt mb-4">
              Mikhail
              <br />
              <em className="text-accent-green not-italic">&ldquo;Kyle&rdquo;</em>
              <br />
              Tabong
            </h1>

            <div className="font-mono text-[0.78rem] text-sub leading-[2.15] mb-7">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 before:content-['#'] before:text-line2">
                Financial Crimes Compliance Analyst @{' '}
                <span className="text-accent-amber">Protiviti</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 before:content-['#'] before:text-line2">
                Project Manager @{' '}
                <span className="text-accent-amber">UMD iConsultancy</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 before:content-['#'] before:text-line2">
                InfoSci Graduate (May 2026) @{' '}
                <span className="text-accent-amber">University of Maryland</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 before:content-['#'] before:text-line2">
                Annapolis, MD
              </div>
            </div>

            <p className="text-[clamp(0.9rem,1.35vw,1.02rem)] text-txt leading-[1.75] max-w-[500px] mb-8 sm:pl-4 pt-2.5 sm:pt-0 sm:border-l-2 border-t-2 sm:border-t-0 border-accent-green sm:border-t-transparent mx-auto sm:mx-0">
              I pair rare <strong>AML and regulatory-reporting</strong> domain expertise with strong technical execution, including ETL pipelines, SQL, and Python. At <strong>Protiviti</strong> I delivered <strong>20% efficiency gains</strong> on Fortune 500 client data; at <strong>Chosan</strong> I automated ingestion across <strong>150+ sources</strong>.
            </p>

            <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
              <a
                href="#portfolio"
                className="font-mono text-xs font-medium tracking-wide px-5 py-2.5 rounded-md bg-accent-green text-black inline-flex items-center gap-1.5 hover:bg-accent-green2 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,255,163,0.25)] transition-all"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-medium tracking-wide px-5 py-2.5 rounded-md bg-transparent text-txt border border-line2 inline-flex items-center gap-1.5 hover:border-accent-green hover:text-accent-green hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,255,163,0.1)] transition-all"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="font-mono text-xs font-medium tracking-wide px-5 py-2.5 rounded-md bg-transparent text-txt border border-line2 inline-flex items-center gap-1.5 hover:border-accent-green hover:text-accent-green hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,255,163,0.1)] transition-all"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
