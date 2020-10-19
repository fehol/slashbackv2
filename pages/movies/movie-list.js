/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Layout from '../../components/Layout.js';
import Head from 'next/head';
import {movies} from '../../database'


export const mainStyle = css`
  margin: 0;
  text-decoration: none;
  padding: 0;
  font-family: 'Saira', sans-serif;
   background-image: linear-gradient(
    to bottom,
    #8900ba,
    #2a61ed,
    #8900ba,
    black);
    column-count: 3;
`;

export default function movieList() {
  return (
    <>
    <Head><title>Movie-List</title></Head>
      <Layout>
        <div css={mainStyle}>
          <h1>Movie List</h1>
          <ul>
            {movies.map((movie) => {
              return (
              <li key={movie.id}>
                <Link href={`/movies/${movie.title}`}>
                  <a>
                    <h2>{movie.title}</h2>
                    <img src={movie.image} height="300px" alt={movie.title} />
                    <h4>${movie.price}</h4>
                    <button>
                    Add to Cart
                    </button>
                  </a>
                </Link>
              </li>
              );
            })}
          </ul>
        </div>
      </Layout>
    </>
  );
}

// What I did here:
// I set up the Array with the Movie Data
// I maped over it and showed the specific Data from the "Databank"
// Then I dynamic Linked the Movies