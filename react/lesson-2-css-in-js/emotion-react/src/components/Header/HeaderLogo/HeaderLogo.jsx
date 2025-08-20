/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const headerLogoStyle = css`
    text-decoration: none;
    padding: 16px 23px;
    display: inline-block;
    background-color: #D4D4D4;
    color: #000;
    font-size: 16px;
`;

const HeaderLogo = ({children})=> {
    return <a href="/" css={headerLogoStyle}>{children}</a>
}

export default HeaderLogo;