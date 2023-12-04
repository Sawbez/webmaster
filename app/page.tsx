import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by viewing below.&nbsp;
        </p>
      </div>

      <div className={`${styles.center} ${styles.hero}`}>
        Clean Energy is the future. Learn more below.
      </div>

      <div className={styles.grid}>
        <a
          href="/who_we_are"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Information <span>-&gt;</span>
          </h2>
          <p>Learn about who we are, our results, and why this stuff matters.</p>
        </a>

        <a
          href="/how_to_help"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Opportunities <span>-&gt;</span>
          </h2>
          <p>Find opportunities to make your home more green, with tax information.</p>
        </a>

        <a
          href="/information"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Daily Habits <span>-&gt;</span>
          </h2>
          <p>Explore daily habits you can implement to reduce your carbon footprint.</p>
        </a>

        <a
          href="/growth"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Donate <span>-&gt;</span>
          </h2>
          <p>
            Find 501(c) charities to elevate your impact on stopping climate change.
          </p>
        </a>
      </div>
    </main>
  )
}
