import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { ContainerCartGeral } from './CartStyle'

import CartAddress from './CartAddress'
import CartRestaurant from './CartRestaurant'
import CartValues from './CartValues'
import CartPayment from './CartPayment'
import CartRenderProducts from './CartRenderProducts'

function Cart() {

    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            history.push("/login")
        }
    }, [history])

    return(
        <ContainerCartGeral data-testid={"cart"}>
            <CartAddress />
            <CartRestaurant />
            <CartRenderProducts /> 
            <CartValues />
            <CartPayment />
        </ContainerCartGeral>
    )
}

export default Cart