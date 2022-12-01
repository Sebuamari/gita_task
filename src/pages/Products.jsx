import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
import Product from "../components/Product";
import ProductStyle from "../styles/Product.module.scss"

const Products = () => {
    const { navigate, ProductsArray, filterProducts } = useDataContext();
    const [filterActive, setFilterActive] = useState(false);
    const [filterName, setFilterName] = useState("");
    const [filterMinPrice, setFilterMinPrice] = useState("");
    const [filterMaxPrice, setFilterMaxPrice] = useState("");

    const filter = () => {
      filterProducts(
        filterName,
        Number(filterMinPrice),
        Number(filterMaxPrice)
      );
      navigate("/App");
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
                  filterName.length > 0 ||
                  filterMinPrice.length > 0 ||
                  filterMaxPrice > 0
                    ? filter()
                    : ""
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
            <tbody>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Color</th>
                <th>List Price</th>
                <th>Modified Date</th>
                <th>Actions</th>
              </tr>
              {ProductsArray.map((product) => {
                return (
                  <Product
                    key={product.ProductId}
                    ProductId={product.ProductId}
                    ProductCategoryId={product.ProductCategoryId}
                    ProductModelId={product.ProductModelId}
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
            </tbody>
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