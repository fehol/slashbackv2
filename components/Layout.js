import Header from './Header';
import Head from 'next/head';
import Footer from './Footer';
import Link from 'next/link';

export default function Layout(props) {
  return (
    <div>
    <Head><link rel="icon" href="/Favicon2.ico"></link></Head>
    <Header />
        <div>{props.children}</div>
        <Footer />
    </div>
  );
}

