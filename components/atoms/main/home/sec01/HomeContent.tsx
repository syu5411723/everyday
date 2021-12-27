import styled from "styled-components"
import {VFC} from "react"
const wrapper = styled.div`

`

type Props = {
    text: string
}
const ContentData = [
    {
        text:"",
    },
    {
        text:"",
    },
    {
        text:"",
    },
]


export const HomeContent:VFC<Props>= ({text}) => {
    return (
        <div>

        </div>
    )
}