import React, { useContext, useEffect, useState } from 'react'

import { ContainerCartValues, Frete, SubTotal } from './CardValuesStyle'

import CartContext from '../../contexts/CartContext'

function CartValues() {

    const cartContext = useContext(CartContext)
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        if (cartContext.state.productsInCart.length !== 0) {
            setValue()
        } else {
            setSubTotal(0)
        }
    }, [cartContext.state.productsInCart])
    
    const setValue = () => {
        let result = 0
        cartContext.state.productsInCart.map((product) => {
            result = result + (product.price * product.quantity)
        })
        result = result + cartContext.state.restaurant.shipping
        setSubTotal(result)
    }

    return (
        <ContainerCartValues>
            <Frete>Frete R${cartContext.state.restaurant.shipping > 0 ? cartContext.state.restaurant.shipping : "0, 00"}</Frete>
            <SubTotal>
                <p>SUBTOTAL</p>
                <p>R$ {subTotal}</p>
            </SubTotal>
        </ContainerCartValues>
    )
}

export default CartValues