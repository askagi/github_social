import { createGlobalStyle } from 'styled-components'

export const GlocalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme.Violet};
        transition: box-shadow 0.2s;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: ${props => props.theme['blue-200']};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, button{
    font-family: 'Rubik', sans-serif;
    font-size: 1.2rem;
  }

  a {
    font-family: 'Rubik', sans-serif;
    font-size: 0.9rem;
    text-decoration: none;
    color: ${(props) => props.theme['blue-800']};
    transition: color 0.2s;
    &:hover {
        color: ${(props) => props.theme.Violet};
    }
  }

  input {
        width: 100%;
        padding: 0.9rem 1.6rem;
        border: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['gray-100']};
        border-radius: 8px;
        color: ${(props) => props.theme['gray-600']};
        line-height: 14px;

        &::placeholder {
            color: ${(props) => props.theme['gray-200']};
    }   
}
`