import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <h1>Patrick Peterson</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/about"
              className={activeLink === "/about" ? "active-link" : ""}
              onClick={() => handleSetActive("/about")}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={activeLink === "/portfolio" ? "active-link" : ""}
              onClick={() => handleSetActive("/portfolio")}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={activeLink === "/contact" ? "active-link" : ""}
              onClick={() => handleSetActive("/contact")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={activeLink === "/resume" ? "active-link" : ""}
              onClick={() => handleSetActive("/resume")}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
