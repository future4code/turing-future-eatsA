import React from 'react'
import { useHistory } from "react-router-dom";
import { Rectangle, Image, Restaurante, TempoDeEntrega, TaxaDeEntrega } from '../CardFood/CardFoodStyle'


export default function CardFood(props) {
    const history = useHistory();
    const {restaurantsList, getRestaurants} = props;

    console.log(restaurantsList)

    return (
        <Rectangle>
            {restaurantsList.map((idx) => {
                return <div>
                    <Image src={idx.logoUrl} />
                    <Restaurante>{idx.name}</Restaurante>
                    <TempoDeEntrega>{idx.deliveryTime} min</TempoDeEntrega>
                    <TaxaDeEntrega>Frete: R${idx.shipping.toFixed(2)}</TaxaDeEntrega>
                    <TaxaDeEntrega>Frete: R${idx.shipping.toFixed(2)}</TaxaDeEntrega>
                </div>
            })}
        </Rectangle>
    )
}