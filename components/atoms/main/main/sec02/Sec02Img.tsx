import styled from "styled-components"
import Image from "next/image"

const Wrapper = styled.div`
    width:400px;
    height: 550px;
    position:relative;
`

export const Sec02Img = () => {
    return (
        <Wrapper>
            <Image src="/" layout="fill" objectFit="cover" />
        </Wrapper>
    )
}
