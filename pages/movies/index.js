/** @jsx jsx */
/** @jsxFrag React.Fragment */
import Head from 'next/head';
import Layout from '../../components/Layout';


import { jsx, css } from '@emotion/core';

export default function movies() {
  return (
    <>
    <Head>
      <title>Slashback - Videostore</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout><h1>Slashback</h1>
    </Layout>
  </>
  );
}