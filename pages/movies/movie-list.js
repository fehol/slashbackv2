/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Layout from '../../components/Layout.js';
import { buttonStyleJoystix } from '../../components/Styles.js';
import { moviesData } from '../../util/database';
import { useState, useEffect } from 'react';
import nextCookies from 'next-cookies';
import { addMovieCookie } from '../../util/cookies.js';

const container = css`
  display: flex;
  background: linear-gradient(to bottom, #8900ba, #2a61ed, #8900ba);
  padding: 10px;
  flex-direction: column;
`;
const listStyle = css`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 250px;
  justify-content: flex-end;
  align-items: center;
`;
const box1 = css`
  font-size: 30px;
  display: flex;
  flex-wrap: wrap;
`;

export default function MovieList(props) {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState('');
  const [cartTotal, setCartTotal] = useState(0);

  console.log(props.getMovieCart);

  useEffect(() => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  }, [cart]);

  const addToCart = (movie) => {
    let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === movie.id) addIt = false;
    }
    if (addIt) {
      setCart([...cart, movie]);
      addMovieCookie(movie.id);

      setAlert('');
    } else setAlert(`Chill out "${movie.title}" is already in your cart`);
  };

  const removeFromCart = (movie) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== movie.id);
    setCart(hardCopy);
    setAlert('');
  };

  const listItems = moviesData.map((movie) => (
    <div css={listStyle} key={movie.id}>
      {`${movie.title}: $${movie.price}`}
      <Link href={`/movies/${movie.title}`}>
        <a>
          <img src={movie.image} width="200" height="300" alt={movie.title} />
        </a>
      </Link>
      <button
        css={buttonStyleJoystix}
        onClick={() => addToCart(movie)}
        // here I have to put in the cookie and than let it use addtoCart
      >
        add to Cart
      </button>
    </div>
  ));

  const cartItems = cart.map((movie) => (
    <div css={listStyle} key={movie.id}>
      {`${movie.title}: $${movie.price}`}
      <img src={movie.image} width="150px" height="200px" alt={movie.title} />
      <button
        css={buttonStyleJoystix}
        type="submit"
        value="remove"
        onClick={() => removeFromCart(movie)}
      >
        remove
      </button>
    </div>
  ));

  // const allItems = moviesData.filter((movie) => {
  //   <div css={listStyle} key={movie.id}>
  //     {`${movie.title}: $${movie.price}`}
  //     <img src={movie.image} width="150px" height="200px" alt={movie.title}/>
  //   </div>
  //   };

  return (
    <Layout>
      <div css={container}>
        <div css={box1}>{listItems}</div>

        <div css={box1}>{cartItems}</div>

        <div css={box1}>Total: ${cartTotal}</div>

        <div css={box1}>{alert}</div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getMoviesData } = await import('../../util/database');
  const movies = await getMoviesData();
  const allCookies = nextCookies(context);
  const getMovieCart = allCookies.movieCart || [];
  console.log(movies);

  return {
    props: {
      getMovieCart,
      movies: movies,
    },
  };
}

// Ich brauch eine Funktion die den State und das Cookie verbindet.
// Array der Datenbank gleicht mit einem Array des Cookies die Daten ab und wenn etwas gleich
//ist dann displayed er das auf der Seite.
