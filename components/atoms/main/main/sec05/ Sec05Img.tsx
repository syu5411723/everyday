import styled from "styled-components"
import Image from "next/image"

const Wrapper = styled.div`
    position:relative;
`

export const  Sec05Img = () => {
    return (
        <Wrapper>
            <Image src="/"  layout="fill" objectFit="cover"/>
        </Wrapper>
    )
}
