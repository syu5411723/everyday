import styled from "styled-components"
import { VFC } from "react"

type Props = {
    item: string
}
const Item = styled.li`
    
`


export const DetailItem: VFC<Props> = ({ item }) => {
    return (
        <>
            <Item>{ item }</Item>
        </>
    )
}
