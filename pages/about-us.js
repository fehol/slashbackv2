/** @jsx jsx */
/** @jsxFrag React.Fragment */


import { jsx, css } from '@emotion/core';
import Layout from '../components/Layout.js';

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

export default function AboutUs() {
  return (
    <>
    
    <Layout>
    <main css={mainStyle}>
      <h1>About-Us</h1>
      <h2>Welcome to Slashback - IT'S SHOWTIME</h2>
    <p> Slashback is a Videostore specialized on 80s Action movies.
       We only got the best of the best. Punchline after Punchline enjoy high Quality Material. 
    </p>
    </main>
    </Layout>
    </>
    );
    
}
