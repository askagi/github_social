import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 36.8rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.white};
    border-radius: 8px;
    padding: 4.6rem 0  9.7rem;

    img {
        margin-bottom: 4.2rem;
    }

    span {
        color: ${props => props.theme["gray-600"]}
    }

    b {
        color: ${props => props.theme.Violet}
    }
`