
import React from "react";
import "../css/productCard.css";

function ProductCard({ product }) {
  return (
    <div className="productCard">
      <img
        src={product.image}
        alt={product.name}
        className="productImage"
      />

      <div className="productDetails">
        <h3>{product.name}</h3>

        <p className="productCategory">
          {product.category}
        </p>

        <h4>₹{product.price}</h4>

        <button className="addCart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;


