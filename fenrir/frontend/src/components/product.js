import React, { Component } from 'react'

export class product extends Component {
  render() {
    return (
      <div className="product">
        <img className="img-product" src={"data:image/jpeg; base64, " + this.props.product.picture} alt="" />
        <h4>Цена {this.props.product.price}</h4>
        <h3>{this.props.product.name}</h3>
        <button className="btn-product btn-info">Узнать больше</button>
      </div>
    )
  }
}

export default product