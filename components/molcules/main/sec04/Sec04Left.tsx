import styled from "styled-components"
import { Sec04Head } from "../../../atoms/main/main/sec04/Sec04Head"
import { Button } from "../../../design/Button"

const Wrapper = styled.div`
    
`

export const Sec04Left = () => {
    return (
        <Wrapper>
            <Sec04Head />
            <Button text="Shop 2022 Calendars" />
        </Wrapper>
    )
}
