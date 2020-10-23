/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import { moviesData } from "../../util/database";
import Layout from '../../components/Layout.js';



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



export default function MovieData (props) {
  const movieData = moviesData.find((movie) => {
    if (movie.title === props.title) {
      return true;
    }
    return false;
  })
  return (
    <Layout>
  <div css={mainStyle}>
    <h1>{props.title}</h1>
    <h2>{movieData.actor}</h2>
    <h5>price:${movieData.price}</h5>
    <h4>{movieData.info}</h4>,
    <img src={movieData.image} height="500px" alt={movieData.title} /> 
    
 </div>
 </Layout>
 );
}

export function getServerSideProps(context) {
  return {
    props: { title: context.query.title},    
  };
}