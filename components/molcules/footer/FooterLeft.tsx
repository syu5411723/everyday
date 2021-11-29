import styled from "styled-components"
import { useContext } from "react"

import { FooterAnnounce } from "../../atoms/footer/FooterAnnounce"
import { FooterRightItem } from "../../atoms/footer/FooterRightItem"
import {DataContext} from "../../../pages/index"


const data = {
    id: 1,
    text1:"",
    text2:""
}
const Wrapper = styled.div`

`
const Inner = styled.div``


export const FooterLeft = () => {
    const {data} = useContext(DataContext)
    return (
        <Wrapper>
            <Inner>
                <FooterAnnounce />
                <FooterRightItem title="1" Data={data} />
            </Inner>
        </Wrapper>
    )
}
