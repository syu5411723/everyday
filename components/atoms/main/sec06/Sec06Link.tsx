import Link from "next/link"
import styled from "styled-components"


const Wrapper = styled.div``
const Text = styled.p``

export const Sec06Link = () => {
    return (
        <Wrapper>
            <Link href="/">
                <Text>Watch The Video</Text>
            </Link>
        </Wrapper>
    )
}
