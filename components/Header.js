/** @jsx jsx */
/** @jsxFrag React.Fragment */

import Link from 'next/link';
import { jsx, css } from '@emotion/core';
import { GiAudioCassette } from 'react-icons/gi';
import { GiMountains } from 'react-icons/gi';
import { GiShoppingCart } from 'react-icons/gi';

const headerStyle = css``;

const iconStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: black;
  font-size: 3rem;
  color: #ff0ae6;
  width: 100%;
  position: sticky;
`;

const homeButton = css`
  cursor: url('https://cur.cursors-4u.net/people/peo-4/peo359.cur'), auto !important;
  padding: 0px;
  color: #ff0ae6;
`;
const linkButtons = css`
  cursor: url('https://cur.cursors-4u.net/people/peo-4/peo359.cur'), auto !important;
  justify-content: space-evenly;
  color: #ff0ae6;
`;

export default function Header() {
  return (
    <header css={headerStyle}>
      <div css={iconStyle}>
        <div css={homeButton}>
          <Link href="/">
            <a>
              <GiMountains />
            </a>
          </Link>
        </div>
        <div css={linkButtons}>
          <Link href="/cart">
            <a>
              <GiShoppingCart />
            </a>
          </Link>
          <Link href="/movies/movie-list">
            <a>
              <GiAudioCassette />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
