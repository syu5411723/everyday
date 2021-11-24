import styled from "styled-components"
import { VFC } from "react"


type Props = {
    Data: any
    title: string
}
const Wrapper = styled.div`

`
const Title = styled.p``
const Text = styled.p``

export const FooterRightItem: VFC<Props> = ({ Data, title }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            {Data.map(data => <Text>{data.text}</Text>)}
        </Wrapper>
    )
}
