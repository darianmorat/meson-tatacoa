import React from "react";
import styles from "./route360.module.css";

const My360Route = () => {
   return (
      <div className={styles.route360}>
         <div className={styles.container}>
            <iframe
               src="https://www.youtube-nocookie.com/embed/ZcvtFyhkqDY?si=4kEC1E2_dwmutsht"
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen
               className={styles.iframe}
            ></iframe>
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
