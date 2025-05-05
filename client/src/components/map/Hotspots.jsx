import { useState } from "react";
import { Html } from "@react-three/drei";
import hotspotReservation from "../../assets/map-section/hotspot-img/3dicons-map-pin-dynamic-color.png";
import hotspotPool from "../../assets/map-section/hotspot-img/3dicons-bookmark-iso-color.png";

const Hotspot = ({ position, category, isSelected, onClick }) => {
   const [isHovered, setIsHovered] = useState(false);
   let hotspotImg = hotspotReservation;

   if (category == "pool") {
      hotspotImg = hotspotPool;
   } else {
      hotspotImg = hotspotReservation;
   }

   return (
      <group position={position}>
         <Html center>
            <div
               className="hotspot-container"
               style={{
                  cursor: "pointer",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: isSelected ? "#cccccc60" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: isSelected ? "0 2px 5px rgba(0,0,0,0.3)" : "none",
                  backdropFilter: isSelected ? "blur(1px)" : "none",
                  transform: isHovered
                     ? "scale(1.7)"
                     : isSelected
                       ? "scale(1.7)"
                       : "scale(1.5)",
                  transition: "all 0.1s ease",
               }}
               onClick={onClick}
               onPointerEnter={() => setIsHovered(true)}
               onPointerLeave={() => setIsHovered(false)}
            >
               <div
                  style={{
                     width: "34px",
                     height: "34px",
                     backgroundImage: `url(${hotspotImg})`,
                     backgroundSize: "contain",
                  }}
               />
            </div>
         </Html>
      </group>
   );
};

export default Hotspot;
