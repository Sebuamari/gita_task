import React from "react";
import { Link } from "react-router-dom";
import ProductStyle from "../styles/Product.module.scss"

const Product = ({
  ProductName,
  ProductNumber,
  Color,
  ListPrice,
  ModifiedDate,
}) => {
  return (
    <tr className={ProductStyle.product}>
        <td className={ProductStyle.product_name}>
            {ProductName}
        </td>      
        <td className={ProductStyle.product_number}>
            {ProductNumber}
        </td>    
        <td className={ProductStyle.product_color}>
            {Color}
        </td>    
        <td className={ProductStyle.product_price}>
            {ListPrice}
        </td>    
        <td className={ProductStyle.product_modified_date}>
            {ModifiedDate}
        </td>     
        <td className={ProductStyle.product_actions}>
            <Link> 
                <button className={ProductStyle.product_actions_edit}>Edit</button>
            </Link>
            <Link> 
                <button className={ProductStyle.product_actions_delete}>Delete</button>
            </Link>
        </td>    
    </tr>
  );
};

export default Product;