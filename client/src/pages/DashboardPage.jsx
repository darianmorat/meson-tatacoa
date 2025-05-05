import { useState } from "react";
import { usePrivateStore } from "../stores/usePrivateStore";

const DashboardPage = () => {
   const [activeSection, setActiveSection] = useState("dashboard");
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const { logout } = usePrivateStore();

   const sections = [
      { id: "dashboard", name: "DASHBOARD" },
      { id: "slider", name: "SLIDER" },
      { id: "alojamiento", name: "ALOJAMIENTO" },
      { id: "restaurante", name: "RESTAURANTE" },
      { id: "megafauna", name: "MEGA FAUNA" },
   ];

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   const handleSectionChange = (sectionId) => {
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
   };

   const renderContent = () => {
      switch (activeSection) {
         case "dashboard":
            return (
               <div className="content">
                  <h2>Resumen del Panel</h2>
                  <p>
                     Bienvenido al panel de administración. Seleccione una sección del
                     menú para gestionar.
                  </p>
                  <div className="stats">
                     <div className="stat-card">Visitantes Totales: --</div>
                     <div className="stat-card">Reservas Activas: --</div>
                     <div className="stat-card">Mensajes: --</div>
                  </div>
               </div>
            );
         case "slider":
            return (
               <div className="content">
                  <h2>Gestion del Slider</h2>
                  <p>Aquí puedes administrar las imágenes del slider principal.</p>
                  <div className="placeholder">Contenido del slider iría aquí</div>
               </div>
            );
         case "alojamiento":
            return (
               <div className="content">
                  <h2>Gestion de Alojamiento</h2>
                  <p>Administra las opciones y disponibilidad de alojamiento.</p>
                  <div className="placeholder">Contenido de alojamiento iría aquí</div>
               </div>
            );
         case "restaurante":
            return (
               <div className="content">
                  <h2>Gestion del Restaurante</h2>
                  <p>Actualiza el menú y reservas del restaurante.</p>
                  <div className="placeholder">Contenido del restaurante iría aquí</div>
               </div>
            );
         case "megafauna":
            return (
               <div className="content">
                  <h2>Gestion de Megafauna</h2>
                  <p>Edita información sobre la fauna local.</p>
                  <div className="placeholder">Contenido de megafauna iría aquí</div>
               </div>
            );
         default:
            return <div className="content">Seleccione una sección</div>;
      }
   };

   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      toggleMobileMenu();
      setMenuOpen(!menuOpen);
   };

   return (
      <div className="dashboard-container">
         <div className={`sidebar ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="sidebar-container">
               <h1 className="sidebar-title">Admin Panel</h1>
               <button
                  className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
                  onClick={toggleMenu}
                  aria-label="Toggle mobile menu"
               >
                  <span
                     className="mobile-menu-icon"
                     style={{ backgroundColor: "white" }}
                  ></span>
                  <span
                     className="mobile-menu-icon"
                     style={{ backgroundColor: "white" }}
                  ></span>
                  <span
                     className="mobile-menu-icon"
                     style={{ backgroundColor: "white" }}
                  ></span>
               </button>
            </div>
            <div className="section-buttons">
               {sections.map((section) => (
                  <button
                     key={section.id}
                     className={`section-btn ${activeSection === section.id ? "active" : ""}`}
                     onClick={() => {
                        handleSectionChange(section.id)/* , toggleMenu() */; // I NEED TO TOGGLE THIS WITHOUT BREAKING THE APP
                        // PENDING BUG
                     }}
                  >
                     {section.name}
                  </button>
               ))}
               <button className="logout-btn" onClick={() => logout()}>
                  CERRAR SESION
               </button>
            </div>
         </div>
         <div className="main-content">{renderContent()}</div>
      </div>
   );
};

export default DashboardPage;
