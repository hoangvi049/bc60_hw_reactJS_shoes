import React, { Component } from "react";
import ProductItem from "./product-item";

export default class ProductList extends Component {
  render() {
    const { productList, getProductInfor } = this.props;
    return (
      <div className="row">
        {productList.map((item) => {
          return (
            <ProductItem
              key={item.id}
              product={item}
              getProductInfor={getProductInfor}
            />
          );
        })}
      </div>
    );
  }
}
