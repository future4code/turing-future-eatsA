import React from 'react'
import { useHistory } from "react-router-dom";
import { Image, Restaurante, TempoDeEntrega, TaxaDeEntrega, CardInfo } from '../CardFood/CardFoodStyle'


export default function CardFood(props) {
    const history = useHistory();
    const {restaurantsList, getRestaurants} = props;

    console.log(restaurantsList)

    return (
        <div>
            {restaurantsList.map((idx) => {
                return <CardInfo>
                    {idx.logoUrl && <Image bg={idx.logoUrl} />}
                    <Restaurante>{idx.name}</Restaurante>
                    <TempoDeEntrega>{idx.deliveryTime} min</TempoDeEntrega>
                    <TaxaDeEntrega>Frete: R${idx.shipping.toFixed(2)}</TaxaDeEntrega>
                </CardInfo>
            })}
        </div>
    )
}