import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProductStyle from "../styles/Product.module.scss"

const Edit = () => {
  const location = useLocation();
  const {
    ProductId,
    ProductCategoryId,
    ProductModelId,
    ProductName,
    ProductNumber,
    Color,
    StandartCost,
    ListPrice,
    Size,
    Weight,
    SellStartDate,
    ModifiedDate,
  } = location.state;

  return (
    <div className="edit-container">
      <h1>Edit Product</h1>
      <div className="product-data-container">
        <div className="product-data">
          <div className="product-data-value">
            <p>Name:</p>
            <input type="text" value={ProductName} />
          </div>
          <p className="alert">The Name field is required</p>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Product Number:</p>
            <input type="text" value={ProductNumber} />
          </div>
          <p className="alert">The Product Number field is required</p>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Color:</p>
            <input type="text" value={Color} />
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Standart Cost:</p>
            <input type="number" value={StandartCost} />
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>List Price:</p>
            <input type="number" value={ListPrice} />
          </div>
          <p className="alert">The field List Price must be between 0.1 and 1000</p>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Size:</p>
            <input type="number" value={Size} />
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Weight:</p>
            <input type="number" value={Weight} />
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Sell Start Date:</p>
            <input type="date" value={SellStartDate} />
          </div>
        </div>
      </div>
      <div className="edit-actions">
        <button className="edit-actions-save">Save</button>
        <Link to="/App">
          <button className="edit-actions-back">Back to List</button>
        </Link>
        <Link to="/Delete">
          <button className="edit-actions-delete">Delete</button>
        </Link>
      </div>
    </div>
  );
};

export default Edit;