import React, { useContext, useState, useEffect } from 'react'

import { ContainerCategorias, TituloDasCategorias, ImagemDoProduto, 
        TituloDoProduto, DescricaoDoProduto, PrecoDoProduto, BotaoAdicionarProduto, 
        ContainerProduct, ContainerInfoProduct, BotaoRemover, Quantidade } from './CardProductsStyle'

import RestaurantListProductsContext from '../../contexts/RestaurantListProductsContext'
import RestaurantDetailsContext from '../../contexts/RestaurantDetailsContext'
import CartContext from '../../contexts/CartContext'

import CardAddProductCart from './CardAddProductCart'

function CardProducts() {

    const restaurantProducts = useContext(RestaurantListProductsContext)
    const restaurantDetails = useContext(RestaurantDetailsContext)
    const cartContext = useContext(CartContext)

    const dispatch = cartContext.dispatch

    const [categorys, setCategorys] = useState([])
    const [product, setProduct] = useState({})
    const [listProducts, setListProducts] = useState([])
    const [windowAddItemCart, setWindowAddItemCart] = useState(false) 

    useEffect(() => {
        pegaCategorias()
    }, [restaurantProducts])

    const pegaCategorias = () => {
        const arrayPegaCategorias = []
    
        restaurantProducts.map((product) => {
            arrayPegaCategorias.push(product.category)
        })

        const arrayRemoveRepetidos = [ ...new Set(arrayPegaCategorias) ]
        setCategorys(arrayRemoveRepetidos)
        verificaComOCarrinho()
    }

    useEffect(() => {
        verificaComOCarrinho()
    }, [cartContext.state.productsInCart])

    const verificaComOCarrinho = () => {
        if (cartContext.state.productsInCart.length > 0) {
            let arrayPegaTudo = []
            cartContext.state.productsInCart.map((product) => {
                arrayPegaTudo.push(product)
            })
            
            restaurantProducts.map((product) => {
                arrayPegaTudo.push(product)
            })

            arrayPegaTudo.map((product, index) => {
                 arrayPegaTudo.map((prod, ind) => {
                    if ((product.id === prod.id) && (index !== ind)) {
                        if ((product.quantity === undefined) && (prod.quantify === undefined)) {
                            arrayPegaTudo.splice(index, 1)
                        } else if ((prod.quantity === undefined) && (product.quantify === undefined)){
                            arrayPegaTudo.splice(ind, 1)
                        }
                    }
                })
            })
            setListProducts(arrayPegaTudo)
        } else {
            setListProducts(restaurantProducts)
        }
    }

    const onClickAddCart = (product) => {
        setWindowAddItemCart(true)
        setProduct(product)
    }

    const onClickCloseAddCart = (quantity) => {
        setWindowAddItemCart(false)
        if (quantity > 0) {
            const addProductInCart = {
                type: "ADD_PRODUCT_TO_CART",
                product: product,
                quantity: quantity,
                restaurant: restaurantDetails
            }
            dispatch(addProductInCart)
        }
    }

    const renderizaNaTela = () => {
        if (windowAddItemCart) {
            return (
                <CardAddProductCart 
                    onClickCloseAddCart={onClickCloseAddCart}
                />
            )
        }
    }

    const onClickRemoveProduct = (product) => {
        const removeProduct = {
            type: "RM_PRODUCT_IN_CART",
            product: product 
        }
        dispatch(removeProduct)
    }

    return (
        <ContainerCategorias>
            {categorys.map((category) => {
                return (
                    <div key={category}>
                        <TituloDasCategorias>{category}</TituloDasCategorias>
                        <hr></hr>
                        {listProducts.map((product) => {
                             if (product.category === category) {
                                 return (
                                     <ContainerProduct key={product.id}>
                                        <div>
                                            <ImagemDoProduto src={product.photoUrl}></ImagemDoProduto>
                                        </div>
                                        <ContainerInfoProduct>
                                            <TituloDoProduto>{product.name}</TituloDoProduto>
                                            <DescricaoDoProduto>{product.description}</DescricaoDoProduto>
                                            <PrecoDoProduto>R$ {product.price}</PrecoDoProduto>
                                        </ContainerInfoProduct>
                                        {product.quantity === undefined ? 
                                        <BotaoAdicionarProduto onClick={() => onClickAddCart(product)}>
                                            Adicionar
                                        </BotaoAdicionarProduto> : 
                                        <div>
                                            <Quantidade>{product.quantity}</Quantidade>
                                            <BotaoRemover onClick={() => onClickRemoveProduct(product)}>Remover</BotaoRemover>
                                        </div> }
                                        
                                     </ContainerProduct>    
                                 )
                             }
                        })}
                    </div>
                )
            })}
            {renderizaNaTela()}
        </ContainerCategorias>

    )
}

export default CardProducts