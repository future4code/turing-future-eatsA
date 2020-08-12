import React, {useContext, useReducer} from 'react'
import styled from 'styled-components'

import { ContainerProduct, ImagemDoProduto, ContainerInfoProduct, TituloDoProduto, DescricaoDoProduto, PrecoDoProduto } from '../Restaurants/CardProductsStyle'
import { BotaoRemover, Quantidade} from './CartStyle'

import CartContext from '../../contexts/CartContext'

import CartAddress from './CartAddress'
import CartRestaurant from './CartRestaurant'

const ContainerTeste = styled.div
`
margin: 16px 0 0 16px;
`

function Cart() {

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
                <ContainerTeste>
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
                </ContainerTeste>
            )
        } else {
            return (
                <div>Carrinho vazio</div>
            )
        }
    }

    return(
        <div>
            <CartAddress />
            <CartRestaurant />
            {renderizaNaTela()} 
        </div>
    )
}

export default Cart