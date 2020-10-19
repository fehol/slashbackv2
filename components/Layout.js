import Header from './Header';
import Head from 'next/head';
import Footer from './Footer';
import Link from 'next/link';

export default function Layout(props) {
  return (
    <div>
    <div>
    <Head><link rel="icon" href="/Favicon2.ico"></link></Head></div>
       <div> <Header /></div>
        <main>{props.children}</main>
        <Footer />
</div>
  );
}

