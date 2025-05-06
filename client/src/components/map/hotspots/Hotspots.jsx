import { useState } from "react";
import { Html } from "@react-three/drei";
import hotspotReservation from "../../../assets/map-section/hotspot-img/3dicons-map-pin-dynamic-color.png";
import hotspotPool from "../../../assets/map-section/hotspot-img/3dicons-bookmark-iso-color.png";
import styles from "./Hotspots.module.css";

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
               className={`${styles.container} ${
                  isSelected ? styles.selected : ""
               } ${isHovered ? styles.hovered : ""}`}
               onClick={onClick}
               onPointerEnter={() => setIsHovered(true)}
               onPointerLeave={() => setIsHovered(false)}
            >
               <div
                  className={styles.icon}
                  style={{ backgroundImage: `url(${hotspotImg})` }}
               />
            </div>
         </Html>
      </group>
   );
};

export default Hotspot;
