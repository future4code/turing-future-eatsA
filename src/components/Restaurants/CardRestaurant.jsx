import React, { useContext } from 'react'
import styled from 'styled-components'

import RestaurantDetailsContext from '../../contexts/RestaurantDetailsContext'

const ContainerRestaurante = styled.div
`
margin: 17px 0 0 16px;
font-family: roboto;
width: 328px;
display: flex;
flex-direction: column;
`

const ContainerValores = styled.div
`
margin: 0 0 2px 0;
width: 328px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const LogoDoRestaurante = styled.img
`
width: 328;
height: 120px;
border-radius: 8px 8px 0 0;
`

const NomeDoRestaurante = styled.h3
`
margin: 12px 0 0 0;
font-size: 16px;
color: #5cb646;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px
`

const InfoDoRestaurante = styled.h5
`
margin: 8px 0 0 0;
font-size: 16px;
color: #b8b8b8;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px
`

function CardRestaurant() {

    const restaurantDetails = useContext(RestaurantDetailsContext)

    return (
        <ContainerRestaurante>
            <LogoDoRestaurante src={restaurantDetails.logoUrl}></LogoDoRestaurante>
            <NomeDoRestaurante>{restaurantDetails.name}</NomeDoRestaurante>
            <InfoDoRestaurante>{restaurantDetails.category}</InfoDoRestaurante>
            <ContainerValores>
                <InfoDoRestaurante>{restaurantDetails.deliveryTime} min</InfoDoRestaurante>
                <InfoDoRestaurante>Frete R$ {restaurantDetails.shipping},00</InfoDoRestaurante>
            </ContainerValores>
            <InfoDoRestaurante>{restaurantDetails.address}</InfoDoRestaurante>
        </ContainerRestaurante>
    )

}

export default CardRestaurant