import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

import { initialState, RestaurantDetailsReducer} from '../../reducers/RestaurantDetailsReducer'

import RestaurantDetailsContext from '../../contexts/RestaurantDetailsContext'
import RestaurantListProducts from '../../contexts/RestaurantListProductsContext'

import CardRestaurant from './CardRestaurant'
import CardProducts from './CardProducts'
import CardActiveOrder from './CardActiveOrder'

export const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/"
 
function Restaurants() {

    const [state, dispatch] = useReducer(RestaurantDetailsReducer, initialState)
    const history = useHistory()
    const pathParams = useParams()

    useEffect(() => {
        getRestaurantDetail()
    }, [])

    const getRestaurantDetail = () => {
        const token = window.localStorage.getItem("token")
        axios.get(`${baseUrl}restaurants/${pathParams.id}`, {
            headers: {
              auth: token  
            }
        })
        .then((response) => {
           handleRestaurantDetails(response.data.restaurant)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const handleRestaurantDetails = (infoRestaurant) => {
        const restaurantDetails = {
            type: "Renderizar",
            restaurant: infoRestaurant
        }
        dispatch(restaurantDetails)
    }

    return (
        <RestaurantDetailsContext.Provider value={state.restaurantDetails}>
            <RestaurantListProducts.Provider value={state.restaurantProducts}>
                <CardRestaurant />
                <CardProducts />
                <CardActiveOrder />
            </RestaurantListProducts.Provider>
        </RestaurantDetailsContext.Provider>
    )
}

export default Restaurants