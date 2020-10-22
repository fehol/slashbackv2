/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout.js';

export default function Checkout () {
  return (
<Layout>
<main>

    <div>
	    <label for="Firstname">Firstname</label>
	    <input type="text" name="Firstname" id="Firstname" />
    </div>
    <div>
	    <label for="Lastname">Lastname</label>
	    <input type="text" name="Lastname" id="Lastname"></input>
    </div>
    <div>
	    <label for="Adress">Adress</label>
	    <input type="text" name="Adress" id="Adress"></input>
    </div>
    <div>
      <label for="card" class="method card"></label>
    </div>
    <div class="card-logos">
          <img src="" alt="visacard"></img>
          <img src="" alt="mastercard"></img>
    </div>
  <button type="submit" id="submit-button">Buy Now</button>
</main>
</Layout>
);
}