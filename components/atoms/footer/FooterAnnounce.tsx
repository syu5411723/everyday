import styled from "styled-components"
import Link from "next/link"

const Wrapper = styled.div`
    
`
const Text = styled.div`

`

export const FooterAnnounce = () => {
    return (
        <Wrapper>
            <Link href="/">
                <Text></Text>
            </Link>
            <Link href="/">
                <Text></Text>
            </Link>
            <Link href="/">
                <Text></Text>
            </Link>
        </Wrapper>
    )
}
