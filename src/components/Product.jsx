import React from "react";
import { Link } from "react-router-dom";
import ProductStyle from "../styles/Product.module.scss"

const Product = ({
  ProductName,
  ProductNumber,
  Color,
  StandartCost,
  ListPrice,
  Size,
  Weight,
  SellStartDate,
  ModifiedDate,
}) => {
  return (
    <tr className={ProductStyle.product}>
      <td className={ProductStyle.product_name}>{ProductName}</td>
      <td className={ProductStyle.product_number}>{ProductNumber}</td>
      <td className={ProductStyle.product_color}>{Color}</td>
      <td className={ProductStyle.product_price}>{ListPrice}</td>
      <td className={ProductStyle.product_modified_date}>{ModifiedDate}</td>
      <td className={ProductStyle.product_actions}>
        <Link
          to="/Edit"
          state={{
            ProductName: ProductName,
            ProductNumber: ProductNumber,
            Color: Color,
            StandartCost: StandartCost,
            ListPrice: ListPrice,
            Size: Size,
            Weight: Weight,
            SellStartDate: SellStartDate,
            ModifiedDate: ModifiedDate,
          }}
        >
          <button className={ProductStyle.product_actions_edit}>Edit</button>
        </Link>
        <Link
          to="/Delete"
          state={{
            ProductName: ProductName,
            ProductNumber: ProductNumber,
            Color: Color,
            StandartCost: StandartCost,
            ListPrice: ListPrice,
            Size: Size,
            Weight: Weight,
            SellStartDate: SellStartDate,
            ModifiedDate: ModifiedDate,
          }}
        >
          <button className={ProductStyle.product_actions_delete}>
            Delete
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Product;