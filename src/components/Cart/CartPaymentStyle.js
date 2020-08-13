import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const ContainerCartPayment = styled.form
`
width: 360px;
display: flex;
flex-direction: column;
`

export const Titulo = styled.p
`
margin: 0;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
`

export const BotaoConfirmar = styled(Button)
`
width: 328px;
background-color: #5cb646;
align-self: center;
`