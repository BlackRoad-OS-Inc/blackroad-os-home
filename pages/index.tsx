import Head from 'next/head';
import styles from '@/styles/Home.module.css';

const highlights = [
  {
    title: 'Unified Hub',
    description: 'The single destination for how BlackRoad OS ships product, runs meetings, and scales governance.',
  },
  {
    title: 'Actionable Playbooks',
    description: 'Templates and rituals you can adopt immediately for product reviews, hiring, and execution cadence.',
  },
  {
    title: 'Transparent Governance',
    description: 'Clear, documented processes for decisions and escalation so teams move fast without chaos.',
  },
];

const pillars = [
  {
    title: 'Build Velocity',
    detail: 'Battle-tested release trains, definition of done, and observability patterns to keep shipping predictable.',
  },
  {
    title: 'Operator Clarity',
    detail: 'Handbooks and runbooks that outline ownership, priorities, and feedback loops across the org.',
  },
  {
    title: 'Customer Obsession',
    detail: 'Tight feedback cycles with users through discovery, support, and postmortem templates.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>BlackRoad OS | Home</title>
        <meta
          name="description"
          content="BlackRoad OS home: operating system, handbook, meeting templates, and governance for how we work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.badge}>BlackRoad OS</p>
          <h1>Operate with conviction. Ship with confidence.</h1>
          <p className={styles.lede}>
            A public hub for the rituals, templates, and governance powering BlackRoad OS. Everything you need to
            understand how we build, decide, and collaborate.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="#pillars">
              Explore the OS
            </a>
            <a className={styles.secondaryCta} href="#handbook">
              View handbook
            </a>
          </div>
        </section>

        <section className={styles.gridSection} id="pillars">
          <header className={styles.sectionHeader}>
            <p className={styles.kicker}>Operating pillars</p>
            <h2>Built for modern, resilient product teams</h2>
            <p>Principles and practices that keep momentum high without sacrificing quality or clarity.</p>
          </header>
          <div className={styles.cardGrid}>
            {pillars.map((pillar) => (
              <article key={pillar.title} className={styles.card}>
                <h3>{pillar.title}</h3>
                <p>{pillar.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.gridSection} id="handbook">
          <header className={styles.sectionHeader}>
            <p className={styles.kicker}>The handbook</p>
            <h2>Always-on documentation for how we work</h2>
            <p>Curated resources that help new teammates ramp quickly and keep teams aligned.</p>
          </header>
          <div className={styles.cardGrid}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.footerCta}>
          <div>
            <p className={styles.kicker}>Status</p>
            <h2>Healthy and ready for production</h2>
            <p>
              The home service includes a simple health endpoint at <code>/health.json</code> returning a JSON payload
              suitable for uptime checks.
            </p>
          </div>
          <a className={styles.primaryCta} href="/health.json">
            Check health
          </a>
        </section>
      </main>
    </>
  );
}
