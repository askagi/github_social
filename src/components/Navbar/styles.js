import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["blue-600"]};
    padding: 1.7rem;

    nav {
        display: flex;
        flex: 1;
        justify-content: space-between;

        ul {
            display: flex;
            list-style: none;
            gap: 1.6rem;
        }
    }
`
export const LinkExitApp = styled(Link)`
    color: ${props => props.theme.white};
    font-size: 1.6rem;

    &:hover {
        color: ${props => props.theme["gray-100"]};  
    }
`