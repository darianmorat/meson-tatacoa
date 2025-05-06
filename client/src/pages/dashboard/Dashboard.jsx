import { useState } from "react";
import { usePrivateStore } from "../../stores/usePrivateStore";
import styles from "./Dashboard.module.css";
import { MenuBtn } from "../../components/menuBtn/MenuBtn";

const DashboardPage = () => {
   const [activeSection, setActiveSection] = useState("dashboard");
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { logout } = usePrivateStore();

   const sections = [
      { id: "dashboard", name: "DASHBOARD" },
      { id: "slider", name: "SLIDER" },
      { id: "alojamiento", name: "ALOJAMIENTO" },
      { id: "restaurante", name: "RESTAURANTE" },
      { id: "megafauna", name: "MEGA FAUNA" },
   ];

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const handleSectionChange = (sectionId) => {
      setActiveSection(sectionId);
      if (window.innerWidth < 768) {
         setIsMenuOpen(false);
      }
   };

   const renderContent = () => {
      switch (activeSection) {
         case "dashboard":
            return (
               <div className={styles.content}>
                  <h2>Resumen del Panel</h2>
                  <p>
                     Bienvenido al panel de administración. Seleccione una sección del
                     menú para gestionar.
                  </p>
                  <div className={styles.stats}>
                     <div className={styles.statCard}>Visitantes Totales: --</div>
                     <div className={styles.statCard}>Reservas Activas: --</div>
                     <div className={styles.statCard}>Mensajes: --</div>
                  </div>
               </div>
            );
         case "slider":
            return (
               <div className={styles.content}>
                  <h2>Gestion del Slider</h2>
                  <p>Aquí puedes administrar las imágenes del slider principal.</p>
                  <div className={styles.placeholder}>Contenido del slider iría aquí</div>
               </div>
            );
         case "alojamiento":
            return (
               <div className={styles.content}>
                  <h2>Gestion de Alojamiento</h2>
                  <p>Administra las opciones y disponibilidad de alojamiento.</p>
                  <div className={styles.placeholder}>
                     Contenido de alojamiento iría aquí
                  </div>
               </div>
            );
         case "restaurante":
            return (
               <div className={styles.content}>
                  <h2>Gestion del Restaurante</h2>
                  <p>Actualiza el menú y reservas del restaurante.</p>
                  <div className={styles.placeholder}>
                     Contenido del restaurante iría aquí
                  </div>
               </div>
            );
         case "megafauna":
            return (
               <div className={styles.content}>
                  <h2>Gestion de Megafauna</h2>
                  <p>Edita información sobre la fauna local.</p>
                  <div className={styles.placeholder}>
                     Contenido de megafauna iría aquí
                  </div>
               </div>
            );
         default:
            return <div className={styles.content}>Seleccione una sección</div>;
      }
   };

   return (
      <div className={styles.dashboard}>
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
               <button className={styles.logoutBtn} onClick={() => logout()}>
                  CERRAR SESION
               </button>
            </div>
         </div>
         <div className={styles.mainContent}>{renderContent()}</div>
      </div>
   );
};

export default DashboardPage;
