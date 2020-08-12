import React, { useContext, useEffect } from 'react'

import { ContainerRestaurante, NomeDoRestaurante, InfoDoRestaurante } from '../Restaurants/CardRestaurantStyle'

import CartContext from '../../contexts/CartContext'

function CardRestaurant() {

    const cardContext = useContext(CartContext)
    const dispatch = cardContext.dispatch

    return (
        <ContainerRestaurante>
            <NomeDoRestaurante>{cardContext.state.restaurant.name}</NomeDoRestaurante>
            <InfoDoRestaurante>{cardContext.state.restaurant.address}</InfoDoRestaurante>
            <InfoDoRestaurante>{cardContext.state.restaurant.deliveryTime}</InfoDoRestaurante>
        </ContainerRestaurante>
    )
}

export default CardRestaurant