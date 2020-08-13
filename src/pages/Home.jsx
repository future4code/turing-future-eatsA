import React, { useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import FoodTypeBar from '../components/FoodTypeBar/FoodTypeBar';
import CardFood from '../components/CardFood/CardFood';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import FooterMenu from '../components/FooterMenu/FooterMenu';
import { Container, FoodTypeBarContainer, CardFoodContainer } from './styles/Home'
import useGetRestaurants from "../hooks/useGetRestaurants";
import { useHistory } from "react-router-dom";

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'

export default props => {
    const history = useHistory();
    const [restaurantsList, getRestaurants] = useGetRestaurants(
    `${baseUrl}/restaurants`, [], 'restaurants' 
  )

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token === null) {
      history.push("/")
    }
  }, [history])

    return (
        <Container>
            <HeaderTitle />
            <SearchBar />
            <FoodTypeBarContainer>
                <FoodTypeBar />
            </FoodTypeBarContainer>
            <CardFoodContainer>
                <CardFood restaurantsList={restaurantsList}/>
            </CardFoodContainer>
            <FooterMenu />
        </Container>
    );

}