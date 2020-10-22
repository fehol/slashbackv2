/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import { buttonStyleJoystix } from '../components/Styles.js';
import {useEffect, useState} from 'react';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';
import { movies } from '../util/database.js';


export default function Shop (props) {
const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  const items = movies
    
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

  const addToCart = (el) => {
    let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === el.id) addIt = false;
    }

    if (addIt) {
      setCart([...cart, el]);

      setAlert("");
    } else setAlert(`Chill out ${el.title} its already in your cart`);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
    setAlert("");
  };

  const listItems = items.map((el) => (
    <>
    <div key={el.id}>
      {`${el.title}: $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)}></input>
    </div>
    <img src={items.image} />
    </>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.title}: $${el.price}`}
      <input
        type="submit"
        value="remove"
        onClick={() => removeFromCart(el)}
      ></input>
    </div>
  ));

  return (
    <div>
      STORE
      <div>{listItems}</div>
      <div></div>
      <div>CART</div>
      <div>{cartItems}</div>
      <div>Total: {cartTotal}</div>
      <div>{alert}</div>
    </div>
  );
};


export function getServerSideProps(context) {
  return {
    props: { title: context.query.title},    
  };
}