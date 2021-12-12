import Image from "next/image"
import styled from "styled-components"

const Wrapper = styled.div`
    position:relative;
`


export const Sec06Movie = () => {
    return (
        <Wrapper>
            <Image src="/"  layout="fill" objectFit="cover"/>
        </Wrapper>
    )
}
