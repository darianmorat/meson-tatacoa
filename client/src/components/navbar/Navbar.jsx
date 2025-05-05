import { useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const scrollToTop = () => {
      window.scrollTo(0, 0);
   };

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   const closeMenu = () => {
      setMenuOpen(false);
   };

   return (
      <nav className="navbar">
         <div className="navbar-container">
            <div className="navbar-logo">
               <img src={logo} alt="Logo" onClick={scrollToTop} />
            </div>

            {/* Mobile Menu Button */}
            <button
               className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
               onClick={toggleMenu}
               aria-label="Toggle mobile menu"
            >
               <span className="mobile-menu-icon"></span>
               <span className="mobile-menu-icon"></span>
               <span className="mobile-menu-icon"></span>
            </button>

            <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
               <li>
                  <a href="#map" onClick={closeMenu}>
                     Hospedaje
                  </a>
               </li>
               <li>
                  <a href="#restaurant" onClick={closeMenu}>
                     Restaurante
                  </a>
               </li>
               <li>
                  <a href="#mega-fauna" onClick={closeMenu}>
                     Mega-Fauna
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
