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
const data = ContentData.map(t => t.text)


export const HomeContent:VFC<Props>= ({text}) => {
    return (
        <div>
                {data}
        </div>
    )
}