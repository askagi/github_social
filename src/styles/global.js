import { createGlobalStyle } from 'styled-components'

export const GlocalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-color: ${props => props.theme['blue-200']};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, button {
    font-family: 'Rubik', sans-serif;
    font-size: 1.2rem;
} 
`