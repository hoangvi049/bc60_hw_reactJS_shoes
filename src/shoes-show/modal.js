import React, { Component } from "react";

export default class Modal extends Component {
  renderModal = () => {
    const { seletedProduct } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={seletedProduct.image}
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{seletedProduct.name}</h5>
          <p className="card-text">{seletedProduct.description}</p>
          <p className="card-text text-success">
            price: {seletedProduct.price}$
          </p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div
        className="modal fade"
        id="myModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Shoe Information</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>

            <div className="modal-body">{this.renderModal()}</div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
