import styled from "styled-components"
import { HeaderNav } from "../../molcules/header/HeaderNav"
import { HeaderTitle } from "../../molcules/header/HeaderTitle"

const Container = styled.header`
    position:fixed;
    width:1300px;
`

export const Header = () => {
    return (
        <Container>
            <HeaderTitle />
            <HeaderNav />
        </Container>
    )
}
