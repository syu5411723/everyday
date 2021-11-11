import { VFC } from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

type Props = {
    link: string
    img: string
    text: string
}

const Wrapper = styled.div`

`
const ImgWrapper = styled.div`
    position: relative;
`
const Content = styled.p``
export const Sec03Item:VFC<Props> = ({ link, img, text }) => {
    return (
        <Wrapper>
            <Link href={link}>
                <div>
                    <ImgWrapper>
                        <Image src={img} layout="fill" objectFit="cover" />
                    </ImgWrapper>
                    <Content>{text}</Content>
                </div>
            </Link>
        </Wrapper>
    )
}
