import React from "react";
import My360Viewer from "../preview360/Preview360";
import styles from "./InfoPanel.module.css";

const ViewerPanel = ({ hotspotId, hotspotData, onReservation }) => {
   return (
      <div className={styles.viewer360}>
         {hotspotData ? (
            <>
               {hotspotData.category == "pool" ? (
                  <>
                     <My360Viewer id={hotspotId} />
                     <div className={styles.panelData}>
                        <div>
                           <h3>{hotspotData.info.title}</h3>
                           <p>{hotspotData.info.description}</p>
                        </div>
                        {/* <button className="reservation-btn" onClick={onReservation}> */}
                        {/*    Reservar Habitacion */}
                        {/* </button> */}
                     </div>
                  </>
               ) : (
                  <>
                     <My360Viewer id={hotspotId} />
                     <hr />
                     <div className={styles.panelData}>
                        <div>
                           <h3>{hotspotData.info.title}</h3>
                           <p>{hotspotData.info.description}</p>
                        </div>
                        <button className={styles.reservationBtn} onClick={onReservation}>
                           Reservar Habitacion
                        </button>
                     </div>
                  </>
               )}
            </>
         ) : (
            <>
               <div className={styles.extraData}>
                  <div>
                     <h3>Zonas recreativas:</h3>
                     <p>
                        Espacios apropiados para la recreación y descanso.En el Mesón de
                        la Tatacoa, nuestros visitantes disfrutan de la mejor experiencia
                        en las zonas grises del desierto de La Tatacoa.
                     </p>
                  </div>
                  <hr />
                  <div>
                     <h3>Cabañas Ecológicas:</h3>
                     <p>
                        Hechas en guadua y peñón contribuyen a mitigar el impacto
                        ambiental. Cuentan con cama doble y baño privado.
                     </p>
                  </div>
                  <hr />
                  <div>
                     <h3>Zona de Camping:</h3>
                     <p>
                        Zonas verdes propicias para atender grupos grandes en camping con
                        las comodidades necesarias del alojamiento rural.
                     </p>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default ViewerPanel;
