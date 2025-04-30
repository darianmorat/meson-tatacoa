import { useState } from "react";
import { Html } from "@react-three/drei";
import hotspotImg from "../../assets/map-section/hotspot-img/hotspot.png";

const Hotspot = ({ position, isSelected, onClick }) => {
   const [isHovered, setIsHovered] = useState(false);

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
                  background: isSelected ? "#cccccc80" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: isSelected ? "0 2px 5px rgba(0,0,0,0.3)" : "none",
                  transform: isHovered
                     ? "scale(1.3)"
                     : isSelected
                       ? "scale(1.3)"
                       : "scale(1)",
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
