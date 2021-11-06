import styled from "styled-components"
import { NavItem } from "../../atoms/header/NavItem"

const Wrapper = styled.div`

`
const List = styled.ul`
    list-style:none;
    display:flex;
    width:100%;
`
export const HeaderNav = () => {
    return (
        <Wrapper>
            <List>
                <NavItem item="新商品" />
                <NavItem item="ホーム" />
                <NavItem item="キッチン" />
                <NavItem item="オフィス" />
                <NavItem item="テック" />
                <NavItem item="ファッション" />
                <NavItem item="ポスター＆アーティスト" />
                <NavItem item="クリスマス" />
                <NavItem item="キッズ" />
                <NavItem item="ギフト" />
            </List>
        </Wrapper>
    )
}
