import React, { useContext, useState, useEffect } from 'react'

import { ContainerCategorias, TituloDasCategorias, ImagemDoProduto, TituloDoProduto, DescricaoDoProduto, 
        PrecoDoProduto, BotaoAdicionarProduto, ContainerProduct, ContainerInfoProduct} from './CardProductsStyle'

import RestaurantListProductsContext from '../../contexts/RestaurantListProductsContext'

import CardAddProductCart from './CardAddProductCart'

function CardProducts() {

    const restaurantProducts = useContext(RestaurantListProductsContext) 
    const [categorys, setCategorys] = useState([])
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
    }

    const onClickAddCart = (product) => {
        setWindowAddItemCart(true)
    }

    const onClickCloseAddCart = () => {
        setWindowAddItemCart(false)
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

    return (
        <ContainerCategorias>
            {categorys.map((category) => {
                return (
                    <div key={category}>
                        <TituloDasCategorias>{category}</TituloDasCategorias>
                        <hr></hr>
                        {restaurantProducts.map((product) => {
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
                                        <BotaoAdicionarProduto onClick={() => onClickAddCart(product)}>
                                            Adicionar
                                        </BotaoAdicionarProduto>
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