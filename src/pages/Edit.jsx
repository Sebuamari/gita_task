import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";

const Edit = () => {
  const location = useLocation();
  const {
    ProductId,
    ProductName,
    ProductNumber,
    Color,
    StandartCost,
    ListPrice,
    Size,
    Weight,
    SellStartDate,
  } = location.state;

  const { navigate, changeProduct } = useDataContext();
  const [updatedProductName, setUpdatedProductName] = useState(ProductName);
  const [updatedProductNumber, setUpdatedProductNumber] = useState(ProductNumber);
  const [updatedColor, setUpdatedColor] = useState(Color);
  const [updatedStandartCost, setUpdatedStandartCost] = useState(StandartCost);
  const [updatedListPrice, setUpdatedListPrice] = useState(ListPrice);
  const [updatedSize, setUpdatedSize] = useState(Size);
  const [updatedWeight, setUpdatedWeight] = useState(Weight);
  const [updatedSellStartDate, setUpdatedSellStartDate] = useState(SellStartDate);
  const [NameValid, setNameValid] = useState(true);
  const [NumberValid, setNumberValid] = useState(true);
  const [PriceValid, setPriceValid] = useState(true);

  const change = () => {
    changeProduct(ProductId, "ProductName", updatedProductName);
    changeProduct(ProductId, "ProductNumber", updatedProductNumber);
    changeProduct(ProductId, "Color", updatedColor);
    changeProduct(ProductId, "StandartCost", updatedStandartCost);
    changeProduct(ProductId, "ListPrice", updatedListPrice);
    changeProduct(ProductId, "Size", updatedSize);
    changeProduct(ProductId, "Weight", updatedWeight);
    changeProduct(ProductId, "SellStartDate", updatedSellStartDate);
    changeProduct(ProductId, "ModifiedDate", new Date().toISOString().split('T')[0]);
    navigate("/App")
  }

  return (
    <div className="edit-container">
      <h1>Edit Product</h1>
      <div className="product-data-container">
        <div className="product-data">
          <div className="product-data-value">
            <p>Name:</p>
            <input
              id="ProductName"
              type="text"
              value={updatedProductName}
              onChange={(e) => {
                setUpdatedProductName(e.target.value);
                e.target.value.length > 0
                  ? setNameValid(true)
                  : setNameValid(false);
              }}
            />
          </div>
          <p className="alert">
            {!NameValid ? "The Name field is required" : ""}
          </p>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Product Number:</p>
            <input
              id="ProductNumber"
              type="text"
              value={updatedProductNumber}
              onChange={(e) => {
                setUpdatedProductNumber(e.target.value);
                e.target.value.length > 0
                  ? setNumberValid(true)
                  : setNumberValid(false);
              }}
            />
          </div>
          <p className="alert">
            {!NumberValid ? "The Product Number field is required" : ""}
          </p>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Color:</p>
            <input
              id="Color"
              type="text"
              value={updatedColor}
              onChange={(e) => setUpdatedColor(e.target.value)}
            />
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Standart Cost:</p>
            <input
              id="StandartCost"
              type="number"
              value={updatedStandartCost}
              onChange={(e) => setUpdatedStandartCost(e.target.value)}
            />
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>List Price:</p>
            <input
              id="ListPrice"
              type="number"
              value={updatedListPrice}
              onChange={(e) => {
                setUpdatedListPrice(e.target.value);
                e.target.value > 0.1 && e.target.value < 1000
                  ? setPriceValid(true)
                  : setPriceValid(false);
              }}
            />
          </div>
          <p className="alert">
            {!PriceValid
              ? "The field List Price must be between 0.1 and 1000"
              : ""}
          </p>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Size:</p>
            <input
              id="Size"
              type="number"
              value={updatedSize}
              onChange={(e) => setUpdatedSize(e.target.value)}
            />
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Weight:</p>
            <input
              id="Weight"
              type="number"
              value={updatedWeight}
              onChange={(e) => setUpdatedWeight(e.target.value)}
            />
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Sell Start Date:</p>
            <input
              id="SellStartDate"
              type="date"
              value={updatedSellStartDate}
              onChange={(e) => setUpdatedSellStartDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="edit-actions">
        <button
          className="edit-actions-save"
          onClick={() =>
            NameValid && NumberValid && PriceValid ? change() : ""
          }
        >
          Save
        </button>
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