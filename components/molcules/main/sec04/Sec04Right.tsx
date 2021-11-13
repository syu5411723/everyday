import styled from "styled-components"
import { Sec04Date } from "../../../atoms/main/sec04/Sec04Date"
import { Sec04Img } from "../../../atoms/main/sec04/Sec04Img"

const Wrapper = styled.div`

`

export const Sec04Right = () => {
    return (
        <Wrapper>
            <Sec04Img />
            <Sec04Date />
        </Wrapper>
    )
}
