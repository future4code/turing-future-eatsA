import React, { useState, useContext } from 'react'
import axios from 'axios'

import { ContainerCartPayment, Titulo, BotaoConfirmar } from './CartPaymentStyle'

import { baseUrl } from  '../Restaurants/Restaurants'

import CartContext from '../../contexts/CartContext'

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
    const cartContext = useContext(CartContext)

    console.log(cartContext.state.productsInCart)
  
    const handleRadioChange = (event) => {
      setValue(event.target.value)
    }
  
    const handleSubmit = (event) => {
        console.log(value)
        event.preventDefault()
    }

    const postPlaceOrder = () => {

      const token = window.localStorage.getItem("token")

      const products = () => {
        let array = []
        cartContext.state.productsInCart.map((product) => {
          array.push(product.id, product.quantity)
        })
        console.log(array)
      }
      
      products()

      const body = {
        "products": [{
          "id": "CnKdjU6CyKakQDGHzNln",
          "quantity": 10
        }, {
          "quantity": 1,
          "id": "KJqMl2DxeShkSBevKVre"
        }],
        "paymentMethod": "creditcard"
      }

      axios.post(`${baseUrl}restaurants/:restaurantId/order`, body, {
        headers: {
          auth: token
        }
      })
      .then((response) => {
        
      })
      .catch((error) => {
        alert(error.message)
      })
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