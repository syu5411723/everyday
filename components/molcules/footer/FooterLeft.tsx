import styled from "styled-components"
import { FooterAnnounce } from "../../atoms/footer/FooterAnnounce"
import { FooterRightItem } from "../../atoms/footer/FooterRightItem"

const data = {
    id: 1,
    text1:"",
    text2:""
}
const Wrapper = styled.div`

`
const Inner = styled.div``

export const FooterLeft = () => {
    return (
        <Wrapper>
            <Inner>
                <FooterAnnounce />
                <FooterRightItem title="" Data={data} />
            </Inner>
        </Wrapper>
    )
}
