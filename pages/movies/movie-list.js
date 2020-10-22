/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Layout from '../../components/Layout.js';
import {movies} from '../../util/database'
import {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import { buttonStyleJoystix } from '../../components/Styles.js';


const flexContainer = css `
display: flex;
flex-wrap: wrap;
font-size: 12px;
background: linear-gradient(
    to bottom,
    #8900ba,
    #2a61ed,
    #8900ba,
    black
  );
`;

const containerItem = css `
padding: 2%;
flex: 1 16%;
`


const movieImage = css `
cursor: url('https://cur.cursors-4u.net/people/peo-4/peo359.cur'), auto !important;
`

Cookies.set('cart', 'true', {expires: 14}); 

const myCookie = Cookies.get('cart')

if(myCookie){

}


export default function movieList() {
  const [cart, setCart] = useState([]);


 const addtoCart = (movie) => {
    setCart([...cart, movie])
  };



  return (
    <>
    <Layout>
     <div>
       <Link href="/cart"><button css={buttonStyleJoystix}>Go to cart({cart.length})</button></Link>
        <div css={flexContainer}>       
            {movies.map((movie) => {
              return (
              <div css={containerItem} key={movie.id}>
                <h2>{movie.title}</h2>
                <h4>${movie.price}</h4>
                <Link href={`/movies/${movie.title}`}>
                  <a>
                  <img css={movieImage} src={movie.image} width="200px" height="350px" alt={movie.title} />
                  </a>
                </Link>
                <button css={buttonStyleJoystix} onClick={() => addtoCart(movie)}>
                    Add to Cart
                </button >
                
              </div>);
            })}
          </div>
 </div>
 </Layout>
    </>
  );
}

// export funtion getServerSideProps(context) {
//   const allCo
// }