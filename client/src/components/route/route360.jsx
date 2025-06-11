import React, { useMemo } from "react";
import View360, {
   ControlBar,
   EquirectProjection,
   LoadingSpinner,
} from "@egjs/react-view360";
import video360_1 from "../../assets/route-section/megafauna.mp4";
import "@egjs/react-view360/css/view360.min.css";
import styles from "./route360.module.css";

const My360Route = () => {
   const plugins = useMemo(
      () => [
         new ControlBar({
            autoHide: true,
         }),
         new LoadingSpinner({}),
      ],
      [],
   );
   const projection = useMemo(
      () =>
         new EquirectProjection({
            src: video360_1,
            video: {
               autoplay: false,
            },
         }),
      [],
   );

   return (
      <div className={styles.route360}>
         <div className={styles.container}>
            <View360
               className={styles.is16by9}
               plugins={plugins}
               projection={projection}
            />
         </div>
         <div className={styles.description}>
            <div>
               <h3>Descripción:</h3>
               <p>
                  Es un sendero de 3.600 metros de recorrido por los terrenos del estadero
                  Mesón de la Tatacoa, ubicado en la vereda Cabuyal – Líbano, en pleno
                  corazón del desierto de la Tatacoa en el municipio de Villavieja Huila.
               </p>
            </div>
            <hr />
            <div>
               <h3>Objetivo:</h3>
               <p>
                  El objetivo de la ruta es sensibilizar de manera educativa a los
                  turistas a través del sendero conociendo la historia milenaria
                  paleontológica de la región, sus fósiles, estado natural de
                  conservación, su recolección, como se diferencian unos de otros.
               </p>
            </div>
         </div>
      </div>
   );
};

export default My360Route;
