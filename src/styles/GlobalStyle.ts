import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
    }
`

export const colors = {
        primary: "#FDAE02",
        black: "#000",
        white: "#fff"
}
