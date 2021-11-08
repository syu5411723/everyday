import styled from "styled-components"

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

export const Button = () => {
    return (
        <Wrapper>
            <Text>Shop New</Text>
        </Wrapper>
    )
}
