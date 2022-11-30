import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";

const CreateNewProduct = () => {
  const [ProductName, setProductName] = useState("");
  const [ProductNumber, setProductNumber] = useState("");
  const [Color, setColor] = useState("");
  const [StandartCost, setStandartCost] = useState("");
  const [ListPrice, setListPrice] = useState("");
  const [Size, setSize] = useState("");
  const [Weight, setWeight] = useState("");
  const [SellStartDate, setSellStartDate] = useState("");
  const [NameValid, setNameValid] = useState();
  const [NumberValid, setNumberValid] = useState();
  const [PriceValid, setPriceValid] = useState();

  const { navigate, addNewProduct } = useDataContext();

  useEffect( () => {
    ProductName.length > 0 ? setNameValid(true) : setNameValid(false);
  }, [ProductName])

  useEffect( () => {
    ProductNumber.length > 0 ? setNumberValid(true) : setNumberValid(false);
  }, [ProductNumber])

  useEffect( () => {
    ListPrice > 0.1 && ListPrice < 100 ? setPriceValid(true) : setPriceValid(false);
  }, [ListPrice])

  const ProductData = {
    ProductName: ProductName ,
    ProductNumber: ProductNumber,
    Color: Color,
    StandartCost: StandartCost,
    ListPrice: ListPrice,
    Size: Size,
    Weight: Weight,
    SellStartDate: SellStartDate
  }

  return (
    <div className="edit-container">
      <h1>Create a new Product</h1>
      <div className="product-data-container">
        <div className="product-data">
          <div className="product-data-value">
            <p>Name:</p>
            <input type="text" onChange={(e) => setProductName(e.target.value)}/>
          </div>
          <p className="alert">{!NameValid ? "The Name field is required" : ""}</p>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Product Number:</p>
            <input type="text" onChange={(e) => setProductNumber(e.target.value)}/>
          </div>
          <p className="alert">{!NumberValid ? "The Product Number field is required" : ""}</p>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Color:</p>
            <input type="text" onChange={(e) => setColor(e.target.value)}/>
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Standart Cost:</p>
            <input type="number" onChange={(e) => setStandartCost(e.target.value)}/>
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>List Price:</p>
            <input type="number" onChange={(e) => setListPrice(e.target.value)}/>
          </div>
          <p className="alert">{!PriceValid ? "The field List Price must be between 0.1 and 1000" : ""}</p>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Size:</p>
            <input type="number" onChange={(e) => setSize(e.target.value)}/>
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Weight:</p>
            <input type="number" onChange={(e) => setWeight(e.target.value)}/>
          </div>
        </div>
        <div className="product-data">
          <div className="product-data-value">
            <p>Sell Start Date:</p>
            <input type="date"  onChange={(e) => setSellStartDate(e.target.value)}/>
          </div>
        </div>
      </div>
      <div className="edit-actions">
        <button className="edit-actions-save" onClick={() => {
          addNewProduct(ProductData);
          navigate("/App");
        }}>Save</button>
        <Link to="/App">
          <button className="edit-actions-back">Back to List</button>
        </Link>
        <Link to="/App">
          <button className="edit-actions-delete">Delete</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateNewProduct;