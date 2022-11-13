import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: ${props => props.theme["blue-300"]};
    padding: 0.7rem;
    border-radius: 8px;
    
    span, a {
        font-size: 1.2rem;
    }

    a::before {
        display: inline;
        content: '- ';
        color: ${props => props.theme["gray-600"]}
    }
`