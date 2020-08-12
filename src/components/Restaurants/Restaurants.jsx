import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

import { initialState, RestaurantDetailsReducer} from '../../reducers/RestaurantDetailsReducer'

import RestaurantDetailsContext from '../../contexts/RestaurantDetailsContext'
import RestaurantListProducts from '../../contexts/RestaurantListProductsContext'

import CardRestaurant from './CardRestaurant'
import CardProducts from './CardProducts'
import CardActiveOrder from './CardActiveOrder'

export const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/"
export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InN6RGU0bGJnQ3BKQjBKTXBKa1pSIiwibmFtZSI6Ikp1bGlvIiwiZW1haWwiOiJqdWxpb2dhYnJpZWxAb3V0bG9vay5jb20iLCJjcGYiOiIyNTYuNDcxLjExNS00OCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE1OTcwNzA3NTN9.GT6nJ4TvMQVl35AyQeFXaliR2PSMqQGAFpllHJxQ9Cg"
const idRestaurant = "1" 

function Restaurants() {

    const [state, dispatch] = useReducer(RestaurantDetailsReducer, initialState)

    useEffect(() => {
        getRestaurantDetail()
    }, [])

    const getRestaurantDetail = () => {
        axios.get(`${baseUrl}restaurants/${idRestaurant}`, {
            headers: {
              auth: token  
            }
        })
        .then((response) => {
           handleRestaurantDetails(response.data.restaurant)
        })
        .catch((error) => {
            console.log("entrei no erro")
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
                <CardRestaurant></CardRestaurant>
                <CardProducts></CardProducts>
                {/* <CardActiveOrder></CardActiveOrder> */}
            </RestaurantListProducts.Provider>
        </RestaurantDetailsContext.Provider>
    )
}

export default Restaurants