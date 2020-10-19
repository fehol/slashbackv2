/** @jsx jsx */
/** @jsxFrag React.Fragment */

import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import { CgFacebook } from 'react-icons/cg';
import { CgInstagram } from 'react-icons/cg';


const FooterStyle = css`
  background: black;
  margin: 0;
  padding: 10px;
  display: flex;
  font-size: 3rem;
  color: #ff0ae6;
`;
const AboutUsStyle = css `
font-size: 20px;
transition-duration: 0.4s;
 background-color: #ff0ae6;
  color: black;
`

const IconCursor = css `
cursor: pointer;
`


export default function Footer() {
  return (
    <footer css={FooterStyle}>
      <div css={IconCursor}>
      <CgFacebook />
      <CgInstagram />
      <Link href="/about-us">
                <button css={AboutUsStyle}>
                  about-us
                </button>
              </Link>
              </div>
    </footer>
  );
}
