import styled from "styled-components"

const Item = styled.li`
    font-weight: bold;
    transition: color 0.15s;
    color:#333;
    &:hover {
        transition: color 0.3s;
        color: #FFB5AB;
    }
`
export const NavItem = ({item}) => {
    return (
        <>
            <Item>{item}</Item>
        </>
    )
}
