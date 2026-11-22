import "../css/navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">MyPortfolio</h1>

        <div>
          <ul>
            <li>
              <a href="#home"> Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
