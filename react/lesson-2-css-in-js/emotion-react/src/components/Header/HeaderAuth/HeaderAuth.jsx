/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

import { LogoutIcon } from "../../icons";

const headerAuthStyle = css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    color: #18181B;
    cursor: pointer;
`

const HeaderAuth = ()=> {
    return (
        <div css={headerAuthStyle}>
            <LogoutIcon />
            Log Out
        </div>
    )
}

export default HeaderAuth;