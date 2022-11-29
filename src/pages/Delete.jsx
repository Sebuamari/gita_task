import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProductStyle from "../styles/Product.module.scss"

const Delete = () => {
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
    <div className="delete-container">
      <div className="delete-container-headers">
        <h1>Confirm Delete Product</h1>
        <h2>Are you sure you want to delete the next product?</h2>
      </div>
      <div className="product-data-container">
        <div className="product-data">
            <p>Product ID:</p>
            <p>{ProductId}</p>
        </div>
        <div className="product-data">
            <p>Name:</p>
            <p>{ProductName}</p>
        </div>
        <div className="product-data">
            <p>Product Number:</p>
            <p>{ProductNumber}</p>
        </div>
        <div className="product-data">
            <p>Color:</p>
            <p>{Color}</p>
        </div>
        <div className="product-data">
            <p>Standart Cost:</p>
            <p>{StandartCost}</p>
        </div>
        <div className="product-data">
            <p>List Price:</p>
            <p>{ListPrice}</p>
         </div>
        <div className="product-data">
            <p>Size:</p>
            <p>{Size}</p>
        </div>
        <div className="product-data">
            <p>Weight:</p>
            <p>{Weight}</p>
        </div>
        <div className="product-data">
            <p>Product Category ID:</p>
            <p>{ProductCategoryId}</p>
        </div>
        <div className="product-data">
            <p>Product Model ID:</p>
            <p>{ProductModelId}</p>
        </div>
        <div className="product-data">
            <p>Sell Start Date:</p>
            <p>{SellStartDate}</p>
        </div>
        <div className="product-data">
            <p>Modified Date:</p>
            <p>{ModifiedDate}</p>
        </div>
      </div>
      <div className="delete-actions">
        <Link to="/App">
          <button className="delete-actions-delete">Delete the Product!</button>
        </Link>
        <Link to="/App">
          <button className="delete-actions-back">Cancel - Back to List</button>
        </Link>
      </div>
    </div>
  );
};

export default Delete;