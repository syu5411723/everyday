import { DetailContext } from "../../../../pages/posts/[id]"
import { useContext } from "react"
import { DetailItem } from "../../../atoms/main/detail/DetailItem"
import { DetailTitle } from "../../../atoms/main/detail/DetailTitle"

export const DetalLeft = () => {
    const { data } = useContext(DetailContext)
    return (
        <>
            <DetailTitle />
            <DetailItem />
        </>
    )
}
