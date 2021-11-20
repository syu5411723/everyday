import styled from "styled-components"
import { FooterAnnounce } from "../../atoms/footer/FooterAnnounce"

const Wrapper = styled.div`

`
const Inner = styled.div``

export const FooterLeft = () => {
    return (
        <Wrapper>
            <Inner>
                <FooterAnnounce />
            </Inner>
        </Wrapper>
    )
}
