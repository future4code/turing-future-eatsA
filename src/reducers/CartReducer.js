export const initialState = {
    productsInCart: [],
    quantity: "",
    restaurant: [],
    subTotal: ""
}

export const CartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_PRODUCT_TO_CART":
            const productIncart = state.productsInCart.findIndex((product) => {
                return product.id === action.product.id
            })

            let newCart

            if (productIncart === -1) {
                newCart = [...state.productsInCart, { ...action.product, quantity: action.quantity}]
            } else {
                newCart = state.productsInCart.map((product) => {
                    if (action.product.id === product.id) {
                        return {
                            ...product,
                            quantity: action.quantity
                        }
                    } else {
                        return product
                    }
                })
            }
            return {...state, productsInCart: newCart, restaurant: action.restaurant}
        
        case "RM_PRODUCT_IN_CART": 
            const newCarts = state.productsInCart.filter((product) => {
                return product.id !== action.product.id
            })

            if (newCarts.length === 0 ) {
                return {...state, restaurant: [], productsInCart: []}
            }

            return {...state, productsInCart: newCarts}
        
        default: 
            return state
    }
}