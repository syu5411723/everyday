import { Header } from "../organisms/header/Header"

import styled from "styled-components"

const LayoutContainer = styled.div`
    width:1300px;
`
const LayoutInner = styled.div`
    width: 90%;
    margin: 0 auto;

`

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <LayoutContainer>
                <LayoutInner>
                    {children}
                </LayoutInner>
            </LayoutContainer>
        </>
    )
}
