import styled from "styled-components"
import Link from "next/link"

const TitleWrapper = styled.div`
    display:flex;
`
const Title1 = styled.h1`

`
const Title2 = styled.h1`

`

export const HeaderTitleItem = () => {
    return (
        <>
            <Link href="/">
                <TitleWrapper>
                    <Title1>MoMa</Title1>
                    <Title2>Design Store</Title2>
                </TitleWrapper>
            </Link>
        </>
    )
}
