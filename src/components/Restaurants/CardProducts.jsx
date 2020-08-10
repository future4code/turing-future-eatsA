import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import RestaurantDetailsContext from '../../contexts/RestaurantDetailsContext'
import { useEffect } from 'react'

function CardProducts() {

    const restaurantDetails = useContext(RestaurantDetailsContext)
    
    const [category, setCategory] = useState([])

    useEffect(() => {
        createCategory()
    }, [])

    const createCategory = () => {
        restaurantDetails.products.map((product) => {
            console.log(product.category)
        })
    }

    console.log(restaurantDetails.products)

    return (
        <div>
            
        </div>
    )
}

export default CardProducts