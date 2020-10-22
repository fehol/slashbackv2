/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Layout from '../../components/Layout.js';
import { buttonStyleJoystix } from '../../components/Styles.js';
import {movies} from '../../util/database'
import {useState, useEffect} from 'react';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';

const h1Style= css `
display: flex;
text-align: center;
`



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


export default function MovieList(props) {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

useEffect(() => {
    total();
  }, [cart]);
 const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (movie) => {
    let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === movie.id) addIt = false;
    }
 if (addIt) {
      setCart([...cart, movie]);

     setAlert("");
    } else setAlert(`Chill out ${movie.title} its already in your cart`);
  };

   const removeFromCart = (movie) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== movie.id);
    setCart(hardCopy);
    setAlert("");
  };

   const listItems = movies.map((movie) => (

    <div key={movie.id}>
      <h4>{`${movie.title}: $${movie.price}}`}</h4>
      <Link href={`/movies/${movie.title}`}>
                  <a>
      <img src={movie.image} width="150" height="200" alt={movie.title}/></a></Link>
      <input css={buttonStyleJoystix} type="submit" value="add" onClick={() => addToCart(movie)}></input>
    </div>
  
  ));

    const cartItems = cart.map((movie) => (
    <div key={movie.id}>
      {`${movie.title}: $${movie.price}`}
      <img src={movie.image} width="100px" height="150px" alt={movie.title}/>
      <input css={buttonStyleJoystix}
        type="submit"
        value="remove"
        onClick={() => removeFromCart(movie)}
      ></input>
    </div>
  ));
// const addtoCart = (movie) => {
//     setCart([...cart, movie])
//  };


  return (
    <>
    <Layout>
       <div><h1 css={h1Style}>SHOP</h1></div>
      <div css={flexContainer}>
        
      <div css={containerItem}><h2>{listItems}</h2></div>
      <div css={containerItem}><h2>{cartItems}</h2></div>
      <div><h1>Total:{cartTotal}</h1></div>
      <div css={containerItem}><h1>{alert}</h1></div>
    
 </div>
 </Layout>
    </>
  );
}

