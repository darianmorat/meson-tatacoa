import { useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import { MenuBtn } from "../menuBtn/MenuBtn";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const scrollToTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <nav className={styles.navbar}>
         <div className={styles.container}>
            <div className={styles.navbarLogo}>
               <img src={logo} alt="Logo" onClick={scrollToTop} />
            </div>

            <MenuBtn menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

            <ul className={`${styles.navbarLinks} ${menuOpen ? styles.open : ""}`}>
               <li>
                  <a href="#map" onClick={() => setMenuOpen(false)}>
                     Hospedaje
                  </a>
               </li>
               <li>
                  <a href="#restaurant" onClick={() => setMenuOpen(false)}>
                     Restaurante
                  </a>
               </li>
               <li>
                  <a href="#mega-fauna" onClick={() => setMenuOpen(false)}>
                     Mega-Fauna
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
