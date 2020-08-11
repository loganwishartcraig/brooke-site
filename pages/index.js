import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/pages/home.md';

export default function Home() {

  const { title, cats } = attributes;

  return (
    <div className={styles.container}>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>

    </div>
  )
}
