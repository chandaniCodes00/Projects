import react from "react";
import "../css/footer.css";
function Footer() {
  return (
    <div>
      <footer>
        <div>
          <h3>shopsy</h3>
          <p>Your One-step destination for online shopping</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Cart</a>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>Email: Support@123gmail.com</p>
          <p>Phone: +91 3245671896</p>
        </div>

        <div>
          <p>@ 2026 Shopsy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
