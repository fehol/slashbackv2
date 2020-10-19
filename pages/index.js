import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Slashback - Videostore</title>
      </Head>
      <Layout>
        <main>
          <div className={styles.body}>
            <div className={styles.wrapper}>
              <Link href="/movies/movie-list">
                <h1 className={styles.h1} data-text="Slashback">
                  Slashback
                </h1>
              </Link>
              <h2 className={styles.h2} data-text="VideoStore">
                Video Store
              </h2>
            </div>
            <div className={styles.graphContainer}>
              <div className={styles.graph}></div>
            </div>
          </div>
        </main>
       
      </Layout>
   </>);
}
