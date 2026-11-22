

import React from "react";
import { Link } from "react-router-dom";
import "../css/categories.css";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: "fa-solid fa-laptop",
      description: "Explore gadgets and electronic products"
    },
    {
      id: 2,
      name: "Fashion",
      icon: "fa-solid fa-shirt",
      description: "Discover the latest fashion trends"
    },
    {
      id: 3,
      name: "Home Appliances",
      icon: "fa-solid fa-house",
      description: "Make your home smarter"
    },
    {
      id: 4,
      name: "Accessories",
      icon: "fa-solid fa-bag-shopping",
      description: "Find your everyday essentials"
    },
    {
      id: 5,
      name: "Footwear",
      icon: "fa-solid fa-shoe-prints",
      description: "Find comfortable and stylish footwear"
    },
    {
      id: 6,
      name: "Sports",
      icon: "fa-solid fa-futbol",
      description: "Explore sports and fitness products"
    }
  ];

  return (
    <div className="categoriesPage">
      <div className="categoriesHeader">
        <h1>Explore Categories</h1>
        <p>Find everything you need, all in one place.</p>
      </div>

      <div className="categoriesGrid">
        {categories.map((category) => (
          <div className="categoryCard" key={category.id}>
            <div className="categoryIcon">
              <i className={category.icon}></i>
            </div>

            <h3>{category.name}</h3>
            <p>{category.description}</p>

            <Link to="/products" className="exploreBtn">
              Explore Products
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
