import styled from "styled-components"
import {VFC} from "react"

type Props = {
    text: string
}

const Wrapper = styled.div``

const Title = styled.p`
    
`

export const DetailTitle:VFC<Props> = ({text}) => {
    return (
        <Wrapper>
            <Title>{text}</Title>
        </Wrapper>
    )
}
