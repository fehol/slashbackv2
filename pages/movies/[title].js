/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';

import { movies } from "../../database";
import Layout from '../../components/Layout.js';
import Head from 'next/head';

const mainStyle = css`
  margin: 0;
  text-decoration: none;
  padding: 0;
  font-family: 'Saira', sans-serif;
   background-image: linear-gradient(
    to bottom,
    #8900ba,
    
    black);
    column-count: 3;
`;



export default function Movie (props) {
  const movie = movies.find((movie) => {
    if (movie.title === props.title) {
      return true;
    }

    return false;
  })

  return (
    <>
    <Layout>
      <Head><title>{props.title}</title></Head>
  <div css={mainStyle}>
    <h1>{props.title}</h1>
    <h2>{movie.actor}</h2>
    <h5>price: {movie.price}</h5>
    <img src={movie.image} height="300px" alt={movie.title} />
    <p>{movie.info}</p>
 </div>
 </Layout>
 </>
 );
}

export function getServerSideProps(context) {
  return {
    props: { title: context.query.title},
    
  };
}