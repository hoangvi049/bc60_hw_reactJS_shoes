import React, { Component } from "react";
import ProductList from "./product-list";
import data from "./data.json";
import Modal from "./modal";
export default class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: data,
      seletedProduct: data[0],
    };
  }
  getProductInfor = (id) => {
    const listClone = [...this.state.productList];
    const product = listClone.filter((item) => {
      return item.id === id;
    });

    this.setState({
      seletedProduct: product[0],
    });
  };
  render() {
    const { productList, seletedProduct } = this.state;
    return (
      <div className="container">
        <h1>Shoes Shop</h1>
        <ProductList
          productList={productList}
          getProductInfor={this.getProductInfor}
        />
        <Modal seletedProduct={seletedProduct} />
      </div>
    );
  }
}
