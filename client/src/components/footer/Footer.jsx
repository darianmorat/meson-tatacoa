import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const scrollToTop = () => {
      window.scrollTo(0, 0);
   };

   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            <div className={styles.content}>
               <div className={styles.sectionLogo}>
                  <Link to="/" onClick={scrollToTop}>
                     <img src={logo} alt="logo" className={styles.logo} />
                  </Link>
                  <p className={styles.description}>
                     Lugar propicio para desarollo de actividades turísticas ubicado en la
                     vereda Libano Cabuyal Mpio Villavieja Huila, corazón del desierto La
                     Tatacoa.
                  </p>
               </div>

               <div className={styles.sectionData}>
                  <div>
                     <h3 className={styles.heading}>Enlaces</h3>
                     <ul className={styles.navLinks}>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-paperclip"
                              className={styles.icon}
                           />
                           <Link to="/" onClick={scrollToTop}>
                              Ir a inicio
                           </Link>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-paperclip"
                              className={styles.icon}
                           />
                           <Link to="#">Sobre nosotros</Link>
                        </li>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-paperclip"
                              className={styles.icon}
                           />
                           <Link to="#">Otros servicios</Link>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h3 className={styles.heading}>Contacto</h3>
                     <ul className={styles.contact}>
                        <li>
                           <FontAwesomeIcon
                              icon="fa-solid fa-phone-volume"
                              className={styles.icon}
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
                              className={styles.icon}
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
                              className={styles.icon}
                           />
                           <Link to="mailto:mesondelatatacoa@gmail.com">
                              mesontatacoa@gmail.com
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className={styles.sectionBottom}>
               <p>&copy; {currentYear}. Todos los derechos reservados.</p>
               <div className={styles.legalLinks}>
                  <Link to="#">Política de Privacidad</Link>
                  <Link to="#">Términos de Servicio</Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
