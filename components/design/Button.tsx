import styled from "styled-components"
import {VFC} from "react"

type Props = {
    text:string
}

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid;
    width:250px;
    height: 50px;
    border-radius:2%;
    &:hover {
    
    }
`
const Text = styled.p`
    font-size: 18px;
`

export const Button:VFC<Props> = ({text}) => {
    return (
        <Wrapper>
            <Text>{text}</Text>
        </Wrapper>
    )
}
