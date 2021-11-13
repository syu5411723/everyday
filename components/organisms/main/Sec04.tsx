import styled from "styled-components"


import { Sec04Left } from "../../molcules/main/sec04/Sec04Left"
import { Sec04Right } from "../../molcules/main/sec04/Sec04Right"

const Container = styled.section``
const Inner = styled.div``

export const Sec04 = () => {
    return (
        <Container>
            <Inner>
                <Sec04Left />
                <Sec04Right />
            </Inner>
        </Container>
    )
}
