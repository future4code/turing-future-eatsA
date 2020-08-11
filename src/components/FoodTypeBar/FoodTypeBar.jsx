import React from 'react'
import styled from 'styled-components'

const Filtro = styled.div`
    width: 360px;
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SelectedText = styled.span`
    width: 87px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    color: #5cb646;
    margin: 4px;
`
const Text = styled.span`
    width: 87px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
`

export default function FoodTypeBar() {

    return (
        <Filtro>
            <SelectedText>Burguer</SelectedText>
            <Text>Asiatica</Text>
            <Text>Massas</Text>
            <Text>Saudaveis</Text>
        </Filtro>
    )
}