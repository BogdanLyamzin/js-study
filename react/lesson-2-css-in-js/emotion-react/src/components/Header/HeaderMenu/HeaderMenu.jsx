/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

import headerMenuItems from "./headerMenuItems";

const headerMenuUlStyle = css`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const headerMenuLinkStyle = ({active}) => css`
  text-decoration: none;
  color: ${active ? "#006FEE" : "#18181B"};
  font-size: 16px;

  &:hover {
    color: #006fee;
  }
`;

const HeaderMenu = () => {
  const elements = headerMenuItems.map(({ id, href, text, active }) => (
    <li key={id}>
      <a href={href} css={headerMenuLinkStyle({active})}>
        {text}
      </a>
    </li>
  ));

  return (
    <ul css={headerMenuUlStyle}>
      {elements}
    </ul>
  );
};

export default HeaderMenu;
