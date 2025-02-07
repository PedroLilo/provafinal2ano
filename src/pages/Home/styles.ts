import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const SSection = styled.section`
  table {
    border: 1px solid ${colors.black};
    border-collapse: collapse;
    width: 100%;
    margin-top: 1rem;

    tr{
        border: 1px solid ${colors.black};
    }
        th{
            border: 1px solid ${colors.black};
            padding: 0.5rem;
        }
        td{
            border: 1px solid ${colors.black};
            padding: 0.5rem;
        }
  }
`