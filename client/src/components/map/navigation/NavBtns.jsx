import { useState } from "react";
import { HOTSPOTS, POOL_HOTSPOT } from "../../../data/hotspots";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBtns.module.css";

const ALL_HOTSPOTS = [...HOTSPOTS, ...POOL_HOTSPOT];

const NavigationBtns = ({ selectedHotspot, handleHotspotClick, sceneContainerClass }) => {
   const currentIndex = ALL_HOTSPOTS.findIndex((h) => h.id === selectedHotspot);

   const handlePool = () => {
      handleHotspotClick(POOL_HOTSPOT[0].id);
   };

   const handlePrev = () => {
      const newIndex = currentIndex === 0 ? HOTSPOTS.length - 1 : currentIndex - 1;
      handleHotspotClick(HOTSPOTS[newIndex].id);
   };

   const handleNext = () => {
      const newIndex = currentIndex === HOTSPOTS.length - 1 ? 0 : currentIndex + 1;
      handleHotspotClick(HOTSPOTS[newIndex].id);
   };

   const [isFullscreen, setIsFullscreen] = useState(false);

   const toggleFullscreen = () => {
      const container = document.querySelector(`.${sceneContainerClass}`);
      if (!isFullscreen) {
         container?.requestFullscreen?.().then(() => setIsFullscreen(true));
      } else {
         document.exitFullscreen?.().then(() => setIsFullscreen(false));
      }
   };

   return (
      <>
         <div className={styles.actionBtns}>
            <button
               onClick={() => handleHotspotClick(selectedHotspot)}
               aria-label="Inicio"
               title="Inicio"
            >
               <FontAwesomeIcon icon="fa-solid fa-home" />
            </button>
            <button
               onClick={toggleFullscreen}
               aria-label={
                  isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"
               }
               title={isFullscreen ? "Modo ventana" : "Pantalla completa"}
            >
               <FontAwesomeIcon
                  icon={isFullscreen ? "fa-solid fa-compress" : "fa-solid fa-expand"}
               />
            </button>
         </div>

         <div className={styles.navBtns}>
            <button onClick={handlePool} aria-label="Piscina" title="Piscina ">
               <FontAwesomeIcon icon="fa-solid fa-water" />
            </button>
            <button onClick={handlePrev} aria-label="Anterior" title="Anterior">
               <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            </button>
            <button onClick={handleNext} aria-label="Siguiente" title="Siguiente">
               <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </button>
         </div>
      </>
   );
};

export default NavigationBtns;
