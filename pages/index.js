import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import styles from '../styles/Home.module.css';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Slashback - Videostore</title>
      </Head>
      <Layout>
        <main>
          <main className={styles.body}>
            <main className={styles.wrapper}>
              <Link href="/movies/movie-list">
                <h1 className={styles.h1} data-text="Slashback">
                  Slashback
                </h1>
              </Link>
              <h2 className={styles.h2} data-text="VideoStore">
                Video Store
              </h2>
            </main>
            <main className={styles.graphContainer}>
              <main className={styles.graph}></main>
            </main>
          </main>
        </main>
       
      </Layout>
   </>);
}
