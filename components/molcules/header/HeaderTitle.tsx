import styled from "styled-components"
import { HeaderTitleItem } from "../../atoms/header/HeaderTitleItem"

const Wrapper = styled.div`
    width:100%;
`

export const HeaderTitle = () => {
    return (
        <Wrapper>
            <HeaderTitleItem />
        </Wrapper>
    )
}
