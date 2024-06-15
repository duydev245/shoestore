import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { shoe, setStateModal } = this.props
        const { name, price, shortDescription, image } = shoe;
        return (
            <div className="card col-3">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}$</p>
                    <p className="card-text">{shortDescription}</p>
                    <button type='button' onClick={() => { setStateModal(shoe) }} className="btn btn-dark">More Detail</button>
                </div>
            </div>
        )
    }
}
