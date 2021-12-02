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
                <FooterRightItem title="ニュース" Data={data[0]} />
                <FooterRightItem title="店舗案内" Data={data[1]} />
                <FooterRightItem title="注目カテゴリー" Data={data[2]} />
                <FooterRightItem title="MoNAについて" Data={data[3
                ]} />
            </Inner>
        </Wrapper>
    )
}
