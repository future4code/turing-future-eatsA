import styled from 'styled-components'

export const ContainerCardActiveOrder = styled.div
`
background-color: #5cb646;
width: 360px;
height: 118px;
display: flex;
align-items: center;
position: fixed;
bottom: 0;
`

export const ContainerSchedule = styled.div
`
margin: 0 0 0 24px;
`

export const ContainerInfoPedido = styled.div
`
margin-left: 24px;
width: 256px;
height: 118px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

export const Pedido = styled.p
`
margin: 0;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #ffffff;
`

export const Restaurante = styled.p
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

export const SubTotal = styled.p
`
margin: 0;
font-family: Roboto;
font-size: 16px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
text-transform: uppercase;
`