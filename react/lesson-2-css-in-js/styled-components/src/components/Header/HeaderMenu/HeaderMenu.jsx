import styled from "styled-components";

import headerMenuItems from "./headerMenuItems";

const HeaderMenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const HeaderMenuLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.active ? "#006FEE" : "#18181B")};
  font-size: 16px;

  &:hover {
    color: #006fee;
  }
`;

const HeaderMenu = () => {
  const elements = headerMenuItems.map(({ id, href, text, active }) => (
    <li key={id}>
      <HeaderMenuLink active={active} href={href}>
        {text}
      </HeaderMenuLink>
    </li>
  ));

  return (
    <HeaderMenuWrapper>
      {elements}
      {/* <li>
                <HeaderMenuLink active href="/vehicles">Vehicles</HeaderMenuLink>
            </li>
            <li>
                <HeaderMenuLink href="/Users">Users</HeaderMenuLink>
            </li>
            <li>
                <HeaderMenuLink href="/add-vehicle">Add vehicle</HeaderMenuLink>
            </li>
            <li>
                <HeaderMenuLink href="/auction">Auction</HeaderMenuLink>
            </li> */}
    </HeaderMenuWrapper>
  );
};

export default HeaderMenu;
