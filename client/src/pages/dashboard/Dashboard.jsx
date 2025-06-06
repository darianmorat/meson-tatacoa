import { useState } from "react";
import { SliderSection } from "./sections/Slider/Slider";
import { MenuSection } from "./sections/Restaurant/Menu";
import { SideBar } from "./sections/Sidebar/Sidebar";
import styles from "./Dashboard.module.css";

const DashboardPage = () => {
   const currentActiveSection = sessionStorage.getItem("activeSection");
   const [activeSection, setActiveSection] = useState(currentActiveSection);

   const sections = [
      { id: "dashboard", name: "DASHBOARD" },
      { id: "slider", name: "SLIDER" },
      { id: "hospedaje", name: "HOSPEDAJE" },
      { id: "restaurante", name: "RESTAURANTE" },
      { id: "megafauna", name: "MEGA FAUNA" },
   ];

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
                  <div className={styles.placeholder}>
                     {/* Upload files using MULTER but we need a CLOUD STORAGE like SUPABASE */}
                     <SliderSection />
                  </div>
               </div>
            );
         case "hospedaje":
            return (
               <div className={styles.content}>
                  <h2>Gestion de Hospedaje</h2>
                  <p>Administra las opciones y disponibilidad de alojamiento.</p>
                  <div className={styles.placeholder}>...</div>
               </div>
            );
         case "restaurante":
            return (
               <div className={styles.content}>
                  <h2>Gestion del Restaurante</h2>
                  <p>Actualiza el menú y reservas del restaurante.</p>
                  <div className={styles.placeholder}>
                     <MenuSection />
                  </div>
               </div>
            );
         case "megafauna":
            return (
               <div className={styles.content}>
                  <h2>Gestion de Megafauna</h2>
                  <p>Edita información sobre la fauna local.</p>
                  <div className={styles.placeholder}>...</div>
               </div>
            );
         default:
            return <div className={styles.content}>Seleccione una sección</div>;
      }
   };

   return (
      <div className={styles.dashboard}>
         <SideBar
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
         />
         <div className={styles.mainContent}>{renderContent()}</div>
      </div>
   );
};

export default DashboardPage;
