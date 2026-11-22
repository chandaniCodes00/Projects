
import React from "react";
import { useParams } from "react-router-dom";
import "../css/productDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      description: "High-quality wireless headphones with clear sound and comfortable ear cushions.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
      stock: 25
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 1999,
      description: "Smart watch with modern design and useful everyday features.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
      stock: 15
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Fashion",
      price: 2999,
      description: "Comfortable running shoes suitable for everyday activities.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
      stock: 20
    },
    {
      id: 4,
      name: "Backpack",
      category: "Accessories",
      price: 1499,
      description: "Stylish backpack with enough space for your daily essentials.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700",
      stock: 10
    }
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 className="notFound">Product Not Found</h2>;
  }

  return (
    <div className="productDetails">
      <div className="detailsImage">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detailsContent">
        <h1>{product.name}</h1>

        <p className="category">{product.category}</p>

        <h2>₹{product.price}</h2>

        <p>{product.description}</p>

        <p>Available Stock: {product.stock}</p>

        <button className="addCartButton">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
