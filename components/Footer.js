/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { CgFacebook } from 'react-icons/cg';
import { CgInstagram } from 'react-icons/cg';
import {BsFillPeopleFill} from 'react-icons/bs'


const FooterStyle = css`
  background: black;
  margin: 0;
  padding: 10px;
  color: #ff0ae6;
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  padding: 10px;
  background: black;
`;

const IconStyle = css `
cursor: url('https://cur.cursors-4u.net/people/peo-4/peo359.cur'), auto !important;
display: flex;
justify-content: space-between;
`
const AboutUsStyle = css `
font-size: 15px;
transition-duration: 0.4s;
 background-color: #ff0ae6;
color: black;
cursor: url('https://cur.cursors-4u.net/people/peo-4/peo359.cur'), auto !important;
`




export default function Footer() {
  return (
    <footer css={FooterStyle}>
      <div css={IconStyle}>
        <CgFacebook />
      <CgInstagram />
      </div>
      <div>
        
        <Link href="/about-us"><a>
                <BsFillPeopleFill /></a>
              </Link>
              </div>
    </footer>
  );
}
