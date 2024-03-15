import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Lato", sans-serif;
        background-color: ${({ theme }) => theme.colors.colorLight};
        height: 100vh;
    }
`

export default GlobalStyle
