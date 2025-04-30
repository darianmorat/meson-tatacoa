import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const scrollToTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <footer className="footer">
         <div className="footer-container">
            <div className="footer-content">
               <div className="footer-section logo">
                  <Link to="/" className="footer-logo" onClick={scrollToTop}>
                     <img src={logo} alt="logo" className="footer-logo" />
                  </Link>
                  <p className="footer-description">
                     Lugar propicio para desarollo de actividades turísticas ubicado en la
                     vereda Libano Cabuyal Mpio Villavieja Huila, corazón del desierto La
                     Tatacoa.
                  </p>
               </div>

               <div className="data-container">
                  <div className="footer-section">
                     <h3 className="footer-heading">Enlaces</h3>
                     <ul className="footer-links">
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-paperclip"
                              className="icons"
                           />
                           <Link to="/" onClick={scrollToTop}>
                              Ir a inicio
                           </Link>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-paperclip"
                              className="icons"
                           />
                           <Link to="#">Sobre nosotros</Link>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-paperclip"
                              className="icons"
                           />
                           <Link to="#">Otros servicios</Link>
                        </li>
                     </ul>
                  </div>

                  <div className="footer-section">
                     <h3 className="footer-heading">Contacto</h3>
                     <ul className="footer-contact">
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-phone-volume"
                              className="icons"
                           />
                           <a
                              href="https://web.whatsapp.com/send?phone=111111111&text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%21"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              +57 (111) 111-111
                           </a>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-brands fa-square-instagram"
                              className="icons"
                           />
                           <a
                              href="https://www.instagram.com/mesondelatatacoa/"
                              target="_blank"
                           >
                              @mesondelatatacoa
                           </a>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-envelope"
                              className="icons"
                           />
                           <Link to="mailto:mesondelatatacoa@gmail.com">
                              mesontatacoa@gmail.com
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="footer-bottom">
               <p>&copy; {currentYear}. Todos los derechos reservados.</p>
               <div className="footer-legal">
                  <Link to="#">Política de Privacidad</Link>
                  <Link to="#">Términos de Servicio</Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
