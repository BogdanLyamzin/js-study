import styled from "styled-components";

import Container from "../Container/Container";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderAuth from "./HeaderAuth/HeaderAuth";

const HeaderWrapper = styled.header`
    padding: 16px 0 22px;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <HeaderLogo href="/">logo</HeaderLogo>
          <HeaderMenu />
          <HeaderAuth />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
