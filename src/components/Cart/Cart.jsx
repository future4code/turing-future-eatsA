import React, {useContext, useReducer} from 'react'
import styled from 'styled-components'

import { ContainerProduct, ImagemDoProduto, ContainerInfoProduct, TituloDoProduto, DescricaoDoProduto, PrecoDoProduto } from '../Restaurants/CardProductsStyle'
import { BotaoRemover, Quantidade, ContainerCart, ContainerCarrinhoVazio, ContainerCartGeral} from './CartStyle'

import CartContext from '../../contexts/CartContext'

import CartAddress from './CartAddress'
import CartRestaurant from './CartRestaurant'
import CartValues from './CartValues'
import CartPayment from './CartPayment'
import CartRenderProducts from './CartRenderProducts'

function Cart() {

    /*const cartContext = useContext(CartContext)
    const dispatch = cartContext.dispatch

    const onClickRemoveProduct = (product) => {
        const removeProduct = {
            type: "RM_PRODUCT_IN_CART",
            product: product 
        }
        dispatch(removeProduct)
    }

    const renderizaNaTela = () => {
        if (cartContext.state.productsInCart.length > 0) {
            return (
                <ContainerCart>
                    {cartContext.state.productsInCart.map((product) => {
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
                                <div>
                                    <Quantidade>{product.quantity}</Quantidade>
                                    <BotaoRemover onClick={() => onClickRemoveProduct(product)}>Remover</BotaoRemover>
                                </div>
                            </ContainerProduct>
                        )
                    })}
                </ContainerCart>
            )
        } else {
            return (
                <ContainerCarrinhoVazio>
                    Carrinho vazio
                </ContainerCarrinhoVazio>
            )
        }
    }*/

    return(
        <ContainerCartGeral>
            <CartAddress />
            <CartRestaurant />
            <CartRenderProducts /> 
            <CartValues />
            <CartPayment />
        </ContainerCartGeral>
    )
}

export default Cart