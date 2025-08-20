import styled from "styled-components";

import { LogoutIcon } from "../../icons";

const HeaderAuthWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    color: #18181B;
    cursor: pointer;
`

const HeaderAuth = ()=> {
    return (
        <HeaderAuthWrapper>
            <LogoutIcon />
            Log Out
        </HeaderAuthWrapper>
    )
}

export default HeaderAuth;