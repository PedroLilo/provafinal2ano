import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SHeader = styled.header`
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color: ${colors.primary};
    img {
        height: 70px;
        padding: 0.5rem
    }
    div {
        display: flex;
        a{
            margin: 0 0.7rem;
            text-decoration: none;
            color: ${colors.black};
            font-size: 1.2rem;
        }
        a:hover{
            font-weight: bold;
        }
    }
`