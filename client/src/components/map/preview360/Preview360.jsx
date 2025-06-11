import React, { useMemo } from "react";
import View360, {
   ControlBar,
   EquirectProjection,
   LoadingSpinner,
} from "@egjs/react-view360";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image360_1 from "../../../assets/map-section/panoramic-img/1.JPG";
import image360_2 from "../../../assets/map-section/panoramic-img/2.JPG";
import image360_3 from "../../../assets/map-section/panoramic-img/3.JPG";
import image360_4 from "../../../assets/map-section/panoramic-img/4.JPG";
import image360_6 from "../../../assets/map-section/panoramic-img/6.JPG";
import image360_7 from "../../../assets/map-section/panoramic-img/7.JPG";
import image360_100 from "../../../assets/map-section/panoramic-img/pool.JPG";
import "@egjs/react-view360/css/view360.min.css";
import styles from "./Preview360.module.css";

const My360Viewer = ({ id }) => {
   const viewers = {
      1: {
         googleMap: "https://maps.app.goo.gl/eQihYFm9JQN7Uq8s7",
         imageSrc: image360_1,
      },
      2: {
         googleMap: "https://maps.app.goo.gl/PhdpLKjzk2Lb8mru6",
         imageSrc: image360_2,
      },
      3: {
         googleMap: "https://maps.app.goo.gl/eQihYFm9JQN7Uq8s7",
         imageSrc: image360_3,
      },
      4: {
         googleMap: "https://maps.app.goo.gl/eQihYFm9JQN7Uq8s7",
         imageSrc: image360_4,
      },
      6: {
         googleMap: "https://maps.app.goo.gl/eQihYFm9JQN7Uq8s7",
         imageSrc: image360_6,
      },
      7: {
         googleMap: "https://maps.app.goo.gl/eQihYFm9JQN7Uq8s7",
         imageSrc: image360_7,
      },
      100: {
         googleMap: "https://maps.app.goo.gl/PhdpLKjzk2Lb8mru6",
         imageSrc: image360_100,
      },
   };

   const currentHotspot = viewers[id];
   if (!currentHotspot) {
      return (
         <div className={styles.errorContainer360}>
            <p>Viewer with ID {id} not found</p>
         </div>
      );
   }

   const plugins = useMemo(() => [new ControlBar({}), new LoadingSpinner({})], []);
   const projection = useMemo(
      () =>
         new EquirectProjection({
            src: currentHotspot.imageSrc,
         }),
      [currentHotspot.imageSrc],
   );

   return (
      <>
         <div className={styles.container360}>
            <View360
               className={styles.is16by9}
               plugins={plugins}
               autoplay={{
                  delay: 5000,
                  delayOnMouseLeave: 1000,
                  speed: -2,
                  pauseOnHover: true,
               }}
               rotate={{
                  duration: 500,
                  keyboardScale: [2, 1.5],
               }}
               projection={projection}
            />
            <a href={currentHotspot.googleMap} target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon
                  icon="fa-solid fa-square-arrow-up-right"
                  className="icon-right"
               />
               Click para ver en GoogleMaps
            </a>
         </div>
      </>
   );
};

export default My360Viewer;
