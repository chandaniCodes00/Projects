import React from "react";
import "../css/home.css"

function Home() {
  const categories = [
    "Electronics",
    "HomeAppliances",
    "Fashion",
    "Accessories",
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
    //   image: "https://placehold.co/300x200?text=Headphones",
    image:      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"

    },
    {
      id: 2,
      name: "Smart Watch",
      price: 1999,
    //   image: "https://placehold.co/300x200?text=Smart+Watch",
    image:      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"

    },
    {
      id: 3,
      name: "Running Shoes",
      price: 2999,
    //   image: "https://placehold.co/300x200?text=Shoes",
    image:      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"

    },
    {
      id: 4,
      name: "Backpack",
      price: 1499,
    //   image: "https://placehold.co/300x200?text=Backpack",
    image:      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80"

    },
  ];

  return (
    <div>
      {/* hero-section */}
      <div className="heroSection">
        <h1>Welcome to Shopsy</h1>
        <p>Discover the amazing products at best prices.</p>
        <a href="/products" className="showNow">
          Show Now
        </a>
      </div>

      {/* categories section */}
      <div className="categories">
        <h2>Shop by Categories</h2>
        <div className="">
          {categories.map((category, index) => (
            <div key={index}>
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* product features */}

      <div className="productFeature">
        <h2>Featured Products</h2>
        <div>
          {products.map((product) => (
            <div className="" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p> ₹{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;