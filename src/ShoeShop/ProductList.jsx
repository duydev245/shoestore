import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        const { productsData, setStateModal } = this.props
        return (
            <div className='row'>
                {productsData.map((shoe, index) => {
                    return <ProductItem key={index} shoe={shoe} setStateModal={setStateModal} />
                })}
            </div>
        )
    }
}
