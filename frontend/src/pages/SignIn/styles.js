import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    row-gap: 1.6rem;
    `

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.2rem;
`

export const CardSignIn = styled.div`
    display: flex;
    height: 36.8rem;
    flex-direction: column;
    align-items: center;
    padding: 3.7rem 7rem;
    border-radius: 8px;

    background-color: ${props => props.theme["blue-100"]};

    header {
        width: 15rem;
        text-align: center;
        margin-bottom: 2.5rem;
        
        span {
            font-size: 1.4rem;
            line-height: 17px;
            color: ${props => props.theme['gray-300']};
        }
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;

        input {
            width: 20.9rem;
            margin-bottom: 1rem;;
        }

        a {
            margin-bottom: 2.1rem;
        }

        button {
            border: none;
            padding: 0.95rem;
            font-weight: 700;
            color: ${props => props.theme.white};
            background-color: ${props => props.theme['blue-800']};
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s;
            
            &:hover {
                background-color: ${props => props.theme.Violet};
            }
        }
    }
`

export const LinkSignUp = styled(NavLink)`
    font-size: 1.2rem;
    margin-top: 1.6rem;
`

