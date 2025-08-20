/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const containerStyle = css`
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 15px;
`;

const Container = ({children})=> {
    return <div css={containerStyle}>{children}</div>
}

export default Container;