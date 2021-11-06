import styled from "styled-components"
import { Sec01Content } from "../../atoms/main/sec01/Sec01Content"
import { Sec01Title } from "../../atoms/main/sec01/Sec01Title"

const Container = styled.div`
    width:100%;
`
const RightInner = styled.div`
    width:90%;
    margin:0 auto;
`
const RightWrapper = styled.div`
    width:70%;
    background-color: #FFB5AB;
`
const LeftWrapper = styled.div`
    width:30%;
`



export const Sec01 = () => {
    return (
        <Container>
            <RightWrapper>
                <RightInner>
                    <Sec01Title />
                    <Sec01Content />
                </RightInner>x
            </RightWrapper>
            <LeftWrapper>
            </LeftWrapper>
        </Container>
    )
}
