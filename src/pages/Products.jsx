import React from "react";
import Product from "../components/Product";
import ProductsArray from "../Data";
import ProductStyle from "../styles/Product.module.scss"

const Products = () => {
    return (
        <div className={ProductStyle.products}>
            <div>
                <h1>
                    Products
                </h1>
                <button>Show Filter</button>
            </div>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Product Number</th>
                    <th>Color</th>
                    <th>List Price</th>
                    <th>Modified Date</th>
                    <th>Actions</th>
                </tr>
                {
                    ProductsArray.map( (product) => {
                        return (
                            <Product
                                ProductName={product.ProductName}
                                ProductNumber={product.ProductNumber}
                                Color={product.Color}
                                ListPrice={product.ListPrice}
                                ModifiedDate={product.ModifiedDate}
                            />
                        );
                    })
                }
            </table>
        </div>
    );
}

export default Products;