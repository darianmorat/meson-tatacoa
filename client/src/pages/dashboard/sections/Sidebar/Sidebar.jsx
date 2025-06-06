import { useState } from "react";
import { useAuthStore } from "../../../../stores/useAuthStore";
import { MenuBtn } from "../../../../components/menuBtn/MenuBtn";
import styles from "./Sidebar.module.css";

export const SideBar = ({ sections, activeSection, setActiveSection }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const handleSectionChange = (sectionId) => {
      setActiveSection(sectionId);
      sessionStorage.setItem("activeSection", sectionId);

      if (window.innerWidth < 768) {
         setIsMenuOpen(false);
      }
   };

   const { logout } = useAuthStore();

   return (
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.active : ""}`}>
         <div className={styles.sidebarContainer}>
            <h1 className={styles.sidebarTitle}>Admin Panel</h1>
            <MenuBtn menuOpen={isMenuOpen} onClick={toggleMenu} color={"white"} />
         </div>
         <div className={styles.sectionBtns}>
            {sections.map((section) => (
               <button
                  key={section.id}
                  className={`${styles.sectionBtn} ${activeSection === section.id ? styles.active : ""}`}
                  onClick={() => {
                     handleSectionChange(section.id);
                  }}
               >
                  {section.name}
               </button>
            ))}
            <button
               className={styles.logoutBtn}
               onClick={() => {
                  sessionStorage.setItem("activeSection", "dashboard"), logout();
               }}
            >
               CERRAR SESION
            </button>
         </div>
      </div>
   );
};
