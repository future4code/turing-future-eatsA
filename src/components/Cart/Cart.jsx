import React from 'react'

import { ContainerCartGeral } from './CartStyle'

import CartAddress from './CartAddress'
import CartRestaurant from './CartRestaurant'
import CartValues from './CartValues'
import CartPayment from './CartPayment'
import CartRenderProducts from './CartRenderProducts'

function Cart() {
    return(
        <ContainerCartGeral>
            <CartAddress />
            <CartRestaurant />
            <CartRenderProducts /> 
            <CartValues />
            <CartPayment />
        </ContainerCartGeral>
    )
}

export default Cart