/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import { movies } from "../../util/database";
import Layout from '../../components/Layout.js';
import Head from 'next/head';

const mainStyle = css`
display: flex;
align-items: center;
flex-wrap: wrap;
flex-flow: column;
color: #F4925D ;
font-family: 'Saira', sans-serif;
background-image: url("/images/background/Checkout.svg");
height: 1000px;
`;
const containerItem = css `
padding: 2%;
flex: 1 16%;
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
  <div css={mainStyle}>
   
    <h1>{props.title}</h1>
    <h2>{movie.actor}</h2>
    <h5>price:${movie.price}</h5>
    <h4>{movie.info}</h4>
    <img src={movie.image} height="500px" alt={movie.title} />
    
    
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