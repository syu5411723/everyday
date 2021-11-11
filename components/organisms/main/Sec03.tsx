﻿import styled from "styled-components"
import { Sec03Title } from "../../atoms/main/sec03/Sec03Title"
import { Sec03Lists } from "../../molcules/main/sec03/Sec03Lists"

const Container = styled.section`

`

export const Sec03 = () => {
    return (
        <Container>
            <Sec03Title />
            <Sec03Lists />
        </Container>
    )
}