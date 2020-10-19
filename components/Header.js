/** @jsx jsx */
/** @jsxFrag React.Fragment */

import Link from 'next/link';
import { jsx, css } from '@emotion/core';
import { GiAudioCassette } from 'react-icons/gi';
import { GiMountains } from 'react-icons/gi';
import { GiShoppingCart } from 'react-icons/gi';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: black;
  font-size: 3rem;
  color: #ff0ae6;
  
`;

export const IconCursor = css `
cursor: pointer;
`


export default function Header() {
  return (
    <header>
      <div css={headerStyle}>
        <div css={IconCursor}>
          <Link href="/">
            <GiMountains />
          </Link>
        </div>
        <div css={IconCursor}>
          <GiShoppingCart />
          <Link href="/movies/movie-list">
            <GiAudioCassette />
          </Link>
        </div>
      </div>
    </header>
  );
}
