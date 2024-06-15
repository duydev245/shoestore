import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const { name, price, description, shortDescription, quantity, image } = this.props.content;
    return (
      <div id='tbtInfor' className="row mt-5" style={{ display: 'none' }}>
        <div className="col-3">
          <h3 className='text-center'>{name}</h3>
          <img src={image} height={300} alt="" />
        </div>
        <div className="col-9">
          <h3 className='text-center'>Detail</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Price:</td>
                <td>{price}$</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{description}</td>
              </tr>
              <tr>
                <td>Short Description:</td>
                <td>{shortDescription}</td>
              </tr>
              <tr>
                <td>Quantity:</td>
                <td>{quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
