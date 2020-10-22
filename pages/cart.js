/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import { buttonStyleJoystix } from '../components/Styles.js';

const container = css`
margin-top: 140px;
width: 80%;
margin-left: auto;
margin-right: auto;
background-color: white;
border-radius: 20px;
padding: 10px;
`


export default function Cart () {
  return (
<Layout>
<main>
<div css={container}>
  <h1>Shopping Cart</h1>
    <Link href="/movies/movie-list">
      <a className="backToShop">Back to shop</a>
    </Link>
    <div className="tableItems">
     <div className="headings">
        <h4>Movie</h4>
        <h4>Cover</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
        <h4>&nbsp;</h4>
      </div>
    </div>
 </div>

   <Link href="/checkout">
      <a data-cy="checkout-button">
        <button css={buttonStyleJoystix}>Proceed to checkout</button>
      </a>
  </Link>
 
</main>
</Layout>
);
}