/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

import Container from "../Container/Container";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderAuth from "./HeaderAuth/HeaderAuth";

const headerStyle = css`
    padding: 16px 0 22px;
`;

const headerContentStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <Container>
        <div css={headerContentStyle}>
          <HeaderLogo href="/">logo</HeaderLogo>
          <HeaderMenu />
          <HeaderAuth />
        </div>
      </Container>
    </header>
  );
};

export default Header;
