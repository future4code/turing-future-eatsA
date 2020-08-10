import React from 'react'
import styled from 'styled-components'

const Rectangle = styled.div`
    width: 328px;
    height: 188px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    padding-bottom: 8px;
`
const Image = styled.img`
    width: 328px;
    height: 120px;
    object-fit: contain;
    border-radius: 8px 8px 0px 0px;
`
const Restaurante = styled.p`
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #5cb646;
    margin: 16px;
`
const TempoDeEntrega = styled.span`
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-left: 16px;
`
const TaxaDeEntrega = styled.span`
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-left: 136px;
`
export default function CardFood() {

    return (
        <Rectangle>
            <Image src={'https://picsum.photos/328/120'} />
            <Restaurante>Vinil Butanta</Restaurante>
            <TempoDeEntrega>50 - 60 min</TempoDeEntrega>
            <TaxaDeEntrega>Frete: R$6,00</TaxaDeEntrega>
        </Rectangle>
    )
}