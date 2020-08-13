import React, { useState } from 'react'

import { ContainerCartPayment, Titulo, BotaoConfirmar } from './CartPaymentStyle'

import { makeStyles } from '@material-ui/core/styles'
import {createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3)
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0)
    }
}))

const tema = createMuiTheme({
    palette: {
      primary: {
        main: "#FFFFFF"
      },
      secondary: {
        main:"#5cb646"
      }
    }
})

function CartPayment() {

    const classes = useStyles()
    const [value, setValue] = useState("")
  
    const handleRadioChange = (event) => {
      setValue(event.target.value)
    }
  
    const handleSubmit = (event) => {
        console.log(value)
        event.preventDefault()
    }

    return (
        <MuiThemeProvider theme={tema}>
            <ContainerCartPayment onSubmit={() => handleSubmit(value)}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <Titulo>Forma de pagamento</Titulo>
                    <hr></hr>
                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                        <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                        <FormControlLabel value="card" control={<Radio />} label="Cartão de crédito"/>
                    </RadioGroup>
                </FormControl>
                <BotaoConfirmar type="submit" variant="contained" color="secondary" className={classes.button}>
                    Confirmar
                </BotaoConfirmar>
            </ContainerCartPayment>
        </MuiThemeProvider>
    )
}

export default CartPayment