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
        <td className="product_name">
            {ProductName}
        </td>      
        <td className="product_number">
            {ProductNumber}
        </td>    
        <td className="product_color">
            {Color}
        </td>    
        <td className="product_price">
            {ListPrice}
        </td>    
        <td className="product_modified_date">
            {ModifiedDate}
        </td>     
        <td className="product_actions">
            <Link> 
                <button>Edit</button>
            </Link>
            <Link> 
                <button>Delete</button>
            </Link>
        </td>    
    </tr>
  );
};

export default Product;