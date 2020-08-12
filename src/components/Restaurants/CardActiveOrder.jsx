import React from 'react'

import { ContainerCardActiveOrder, ContainerSchedule, ContainerInfoPedido, 
        Pedido, Restaurante, SubTotal} from './CardActiveOrderStyle'

import {createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Schedule from '@material-ui/icons/Schedule'

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