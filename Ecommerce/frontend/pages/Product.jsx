
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/products.css";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 1999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Fashion",
      price: 2999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
      id: 4,
      name: "Backpack",
      category: "Accessories",
      price: 1499,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    }
  ];

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

        // Price sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    }

    if (sortOrder === "highToLow") {
      return b.price - a.price;
    }

    return 0;
  });


  return (
    <div className="productsPage">
      <h1>Our Products</h1>
      <p>Explore our latest collection</p>

      {/* Category Filter */}
      <div className="categoryFilters">
        {["All", "Electronics", "Fashion", "Accessories"].map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "activeFilter" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>


      {/* Price Sorting */}
      <div className="sortProducts">
        <label>Sort by Price: </label>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Default</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* Product Display */}
      <div className="productsContainer">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* <div className="productsContainer">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Products;
