import styled from "styled-components"
import { FooterLeft } from "../../molcules/footer/FooterLeft"
import { FooterRight } from "../../molcules/footer/FooterRight"

const Container = styled.footer``
const Inner = styled.div``

export const Footer = () => {
    return (
        <Container>
            <Inner>
                <FooterLeft />
                <FooterRight />
            </Inner>
        </Container>
    )
}
