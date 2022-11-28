import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import ProductsArray from "../Data";
import ProductStyle from "../styles/Product.module.scss"

const Products = () => {
    const [filterActive, setFilterActive] = useState(false);
    const [filterName, setFilterName] = useState("");
    const [filterMinPrice, setFilterMinPrice] = useState("");
    const [filterMaxPrice, setFilterMaxPrice] = useState("");
    const [products, setProducts] = useState([]);

    const filter = (name, minPrice, maxPrice) => {
        // setProducts(ProductsArray.filter( (product) => {
        //     Number(product.ListPrice) === Number(minPrice)
        //     //Number(product.ListPrice) < Number(filterMaxPrice);
        //     // product.ProductName.match(filterName)
        //     // filterName.length > 0 ? 
        //     // product.ProductName.includes(filterName) &&
        //     // filterMinPrice !== undefined ? 
        // }))
        //console.log(typeof Number(filterMinPrice))
    }

    return (
      <div className={ProductStyle.products}>
        <div className={ProductStyle.filter}>
          <h1>Products</h1>
          <button onClick={() => setFilterActive(!filterActive)}>
            {filterActive ? "Hide Filter" : "Show Filter"}
          </button>
        </div>
        {filterActive ? (
          <div className={ProductStyle.filter_settings}>
            <p>
              Name:{" "}
              <input
                type="text"
                onChange={(e) => setFilterName(e.target.value)}
                value={filterName.length > 0 ? filterName : ""}
              />{" "}
              and Price between:{" "}
              <input
                type="number"
                onChange={(e) => setFilterMinPrice(e.target.value)}
                value={filterMinPrice.length > 0 ? filterMinPrice : ""}
              />{" "}
              and{" "}
              <input
                type="number"
                onChange={(e) => setFilterMaxPrice(e.target.value)}
                value={filterMaxPrice.length > 0 ? filterMaxPrice : ""}
              />{" "}
              <button
                className={ProductStyle.apply_button}
                onClick={() =>
                  filter(filterName, filterMinPrice, filterMaxPrice)
                }
              >
                Apply
              </button>
            </p>
          </div>
        ) : (
          ""
        )}
        <div className={ProductStyle.table_container}>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Color</th>
              <th>List Price</th>
              <th>Modified Date</th>
              <th>Actions</th>
            </tr>
            {ProductsArray.map((product, id) => {
              return (
                <Product
                  key={id}
                  ProductName={product.ProductName}
                  ProductNumber={product.ProductNumber}
                  Color={product.Color}
                  StandartCost={product.StandartCost}
                  ListPrice={product.ListPrice}
                  Size={product.Size}
                  Weight={product.Weight}
                  SellStartDate={product.SellStartDate}
                  ModifiedDate={product.ModifiedDate}
                />
              );
            })}
          </table>
        </div>
        <Link to="/CreateNewProduct">
          <button className={ProductStyle.new_product_button}>
            Create New Product
          </button>
        </Link>
      </div>
    );
}

export default Products;