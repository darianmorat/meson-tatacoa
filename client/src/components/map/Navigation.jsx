import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HOTSPOTS, POOL_HOTSPOT } from "../../data/hotspots";

const ALL_HOTSPOTS = [...HOTSPOTS, ...POOL_HOTSPOT];

const NavigationBtns = ({ selectedHotspot, handleHotspotClick }) => {
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

   return (
      <>
         <div className="navigation-btns">
            <button
               onClick={() => handleHotspotClick(selectedHotspot)}
               className="home-btn"
            >
               <FontAwesomeIcon icon="fa-solid fa-home" className="icon-left" />
               Inicio
            </button>
            <button className="pool-btn" onClick={handlePool}>
               <FontAwesomeIcon icon="fa-solid fa-water" className="icon-left" />
               Piscina
            </button>
            <button className="prev-btn" onClick={handlePrev}>
               <FontAwesomeIcon icon="fa-solid fa-angle-left" className="icon-left" />
               Prev
            </button>
            <button className="next-btn" onClick={handleNext}>
               Next
               <FontAwesomeIcon icon="fa-solid fa-angle-right" className="icon-right" />
            </button>
         </div>
      </>
   );
};

export default NavigationBtns;
