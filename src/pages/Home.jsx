import React from 'react';


import styled from 'styled-components'
import {Container, ImgContainer} from './styles/Home'
import SearchBar from '../components/SearchBar/SearchBar'
import FoodTypeBar from '../components/FoodTypeBar/FoodTypeBar'
import CardFood from '../components/CardFood/CardFood'
import HeaderTitle from '../components/HeaderTitle/HeaderTitle'
import FooterMenu from '../components/FooterMenu/FooterMenu'


const CardFoodContainer = styled.div`
    height: 70vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`
const FoodTypeBarContainer = styled.div`
    height: 6vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`

export default props =>{

    return (
        <Container>
            <HeaderTitle />
            <SearchBar />
            <FoodTypeBarContainer>
                <FoodTypeBar />
            </FoodTypeBarContainer>
            <CardFoodContainer>
                <CardFood />
                <CardFood />
                <CardFood />
                <CardFood />
                <CardFood />
                <CardFood />
            </CardFoodContainer>
            <FooterMenu />
        </Container>
    );

}