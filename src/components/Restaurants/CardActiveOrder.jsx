import React from 'react'
import styled from 'styled-components'

import {createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Schedule from '@material-ui/icons/Schedule'

const ContainerCardActiveOrder = styled.div
`
background-color: #5cb646;
width: 360px;
height: 118px;
display: flex;
align-items: center;
position: fixed;
bottom: 0;
`

const ContainerSchedule = styled.div
`
margin: 0 0 0 24px;
`

const ContainerInfoPedido = styled.div
`
margin-left: 24px;
width: 256px;
height: 118px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

const Pedido = styled.p
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

const Restaurante = styled.p
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

const SubTotal = styled.p
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

const tema = createMuiTheme({
    palette: {
      primary: {
        main: "#FFFFFF"
      },
      secondary: {
        main:"#0000FF"
      }
    }
  })

function CardActiveOrder() {
    return (
        <MuiThemeProvider theme={tema}>
            <ContainerCardActiveOrder>
                <ContainerSchedule>
                    <Schedule color="primary"/>
                </ContainerSchedule>
                <ContainerInfoPedido>
                    <Pedido>Pedido em Andamento</Pedido>
                    <Restaurante>Restaurante Teste</Restaurante>
                    <SubTotal>Subtotal</SubTotal>
                </ContainerInfoPedido>
            </ContainerCardActiveOrder>
        </MuiThemeProvider>
        
    )
}

export default CardActiveOrder