import React, { useContext, useReducer } from 'react'

import { BotaoRemover, Quantidade, ContainerCart, ContainerCarrinhoVazio } from './CartStyle'
import { ContainerProduct, ImagemDoProduto, ContainerInfoProduct, TituloDoProduto, DescricaoDoProduto, PrecoDoProduto } from '../Restaurants/CardProductsStyle'

import CartContext from '../../contexts/CartContext'

function CartRenderProducts() {

    const cartContext = useContext(CartContext)
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
    }

    return (
        <div>
            {renderizaNaTela()}
        </div>
    )
}

export default CartRenderProducts