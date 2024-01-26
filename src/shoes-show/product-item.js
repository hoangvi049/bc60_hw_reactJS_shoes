import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product, getProductInfor } = this.props;
    return (
      <div className="card mt-3 mr-2" style={{ maxWidth: "24%" }}>
        <img
          data-toggle="modal"
          data-target="#myModal"
          className="card-img-top"
          src={product.image}
          alt="Card image"
          style={{ width: "60%", cursor: "pointer" }}
          onClick={() => {
            getProductInfor(product.id);
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.shortDescription}</p>
          <p className="card-text text-success">price: {product.price}$</p>
          <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>
    );
  }
}
