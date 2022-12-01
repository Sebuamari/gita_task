import React, { createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom';

const DataContext = createContext();

let ProductsArray = [
    {
        ProductId: 1,
        ProductCategoryId: 1,
        ProductModelId: 1,
        ProductName: "HL Road Frame - Black, 58",
        ProductNumber: "FR-R928-58",
        Color: "Black",
        StandartCost: "1000.00",
        ListPrice: "900.00",
        Size: 58,
        Weight: 1016.04,
        SellStartDate: new Date(2022, 11, 29).toISOString().split('T')[0],
        ModifiedDate: new Date(2012, 4, 7).toISOString().split('T')[0]
    }, 
    {
        ProductId: 2,
        ProductCategoryId: 1,
        ProductModelId: 13,
        ProductName: "HL Road Frame - Black, 58",
        ProductNumber: "FR-R928-58",
        Color: "Red",
        StandartCost: "1000.00",
        ListPrice: "230.80",
        Size: 58,
        Weight: 1016.04,
        SellStartDate: new Date(2022, 11, 29).toISOString().split('T')[0],
        ModifiedDate: new Date(2022, 12, 21).toISOString().split('T')[0]
    }, 
    {
        ProductId: 3,
        ProductCategoryId: 1,
        ProductModelId: 1,
        ProductName: "HL Road Frame - Black, 58",
        ProductNumber: "FR-R918-58",
        Color: "Black",
        StandartCost: "1000.00",
        ListPrice: "906.40",
        Size: 58,
        Weight: 1016.04,
        SellStartDate: new Date(2022, 11, 29).toISOString().split('T')[0],
        ModifiedDate: new Date(2022, 11, 27).toISOString().split('T')[0]
    }, 
    {
        ProductId: 4,
        ProductCategoryId: 5,
        ProductModelId: 1,
        ProductName: "HL Road Frame - Black, 52",
        ProductNumber: "FR-B928-52",
        Color: "Red",
        StandartCost: "1000.00",
        ListPrice: "927.00",
        Size: 58,
        Weight: 1016.04,
        SellStartDate: new Date(2022, 11, 29).toISOString().split('T')[0],
        ModifiedDate: new Date(2022, 10, 7).toISOString().split('T')[0]
    }, 
    {
        ProductId: 5,
        ProductCategoryId: 1,
        ProductModelId: 1,
        ProductName: "HL Road Frame - Black, 58",
        ProductNumber: "FR-R928-58",
        Color: "Red",
        StandartCost: "1000.00",
        ListPrice: "230.80",
        Size: 58,
        Weight: 1016.04,
        SellStartDate: new Date(2022, 11, 29).toISOString().split('T')[0],
        ModifiedDate: new Date(2022, 12, 21).toISOString().split('T')[0]
    }, 
    {
        ProductId: 6,
        ProductCategoryId: 1,
        ProductModelId: 1,
        ProductName: "HL Road Frame - Black, 63",
        ProductNumber: "FR-R928-63",
        Color: "Black",
        StandartCost: "1000.00",
        ListPrice: "1430.50",
        Size: 58,
        Weight: 1016.04,
        SellStartDate: new Date(2022, 11, 29).toISOString().split('T')[0],
        ModifiedDate: new Date(2021, 2, 7).toISOString().split('T')[0]
    }, 
    {
        ProductId: 7,
        ProductCategoryId: 1,
        ProductModelId: 1,
        ProductName: "HL Road Frame - Black, 63",
        ProductNumber: "FR-R928-63",
        Color: "Black",
        StandartCost: "1000.00",
        ListPrice: "700.00",
        Size: 58,
        Weight: 1016.04,
        SellStartDate: new Date(2022, 11, 29).toISOString().split('T')[0],
        ModifiedDate: new Date(2022, 8, 20).toISOString().split('T')[0]
    }, 
    {
        ProductId: 8,
        ProductCategoryId: 1,
        ProductModelId: 1,
        ProductName: "HL Road Frame - Black, 58",
        ProductNumber: "FR-R928-58",
        Color: "Black",
        StandartCost: "1000.00",
        ListPrice: "2400.10",
        Size: 58,
        Weight: 1016.04,
        SellStartDate: new Date(2022, 11, 29).toISOString().split('T')[0],
        ModifiedDate: new Date(2022, 1, 7).toISOString().split('T')[0]
    }, 
    {
        ProductId: 9,
        ProductCategoryId: 1,
        ProductModelId: 1,
        ProductName: "HL Road Frame - Black, 58",
        ProductNumber: "FR-R928-58",
        Color: "Black",
        StandartCost: "1000.00",
        ListPrice: "900.00",
        Size: 58,
        Weight: 1016.04,
        SellStartDate: new Date(2022, 11, 29).toISOString().split('T')[0],
        ModifiedDate: new Date(2012, 4, 7).toISOString().split('T')[0]
    }, 
];

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();

  const addNewProduct = (newProduct) => {
    ProductsArray[ProductsArray.length + 1] = {
      ProductId: ProductsArray[ProductsArray.length - 1].ProductId + 1,
      ModifiedDate: new Date().toISOString().split("T")[0],
      ...newProduct,
    };
  };

  const deleteProduct = (id) => {
    ProductsArray = ProductsArray.filter((product) => {
      return product.ProductId !== id;
    });
  };

  const changeProduct = (id, data, value) => {
    ProductsArray.find((product) => product.ProductId === id)[data] = value;
  };

  const filterProducts = (name, minPrice, maxPrice) => {
    ProductsArray = ProductsArray.filter((product) => {
      return name.length > 0 && minPrice === 0 && maxPrice === 0
        ? product.ProductName.includes(name)
        : name.length === 0 && minPrice > 0 && maxPrice === 0
        ? Number(product.ListPrice) >= minPrice
        : name.length === 0 && minPrice === 0 && maxPrice > 0
        ? Number(product.ListPrice) <= maxPrice
        : name.length > 0 && minPrice > 0 && maxPrice === 0
        ? product.ProductName.includes(name) &&
          Number(product.ListPrice) >= minPrice
        : name.length > 0 && minPrice === 0 && maxPrice > 0
        ? product.ProductName.includes(name) &&
          Number(product.ListPrice) <= maxPrice
        : name.length === 0 && minPrice > 0 && maxPrice > 0
        ? Number(product.ListPrice) >= minPrice &&
          Number(product.ListPrice) <= maxPrice
        : Number(product.ListPrice) >= minPrice &&
          Number(product.ListPrice) <= maxPrice &&
          product.ProductName.includes(name);
    });
  };

  console.log(ProductsArray)

  return (
    <DataContext.Provider
      value={{
        ProductsArray,
        navigate,
        addNewProduct,
        changeProduct,
        deleteProduct,
        filterProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
    return useContext(DataContext)
}