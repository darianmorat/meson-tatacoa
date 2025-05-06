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
               <div>
                  <h3>Intrucciones de uso</h3>
                  <p>
                     Aca ira la informcion y detalles de como poder usar mejor el mapa, de
                     esa manera los usuarios no estaran perdidos.
                  </p>
                  <br />
                  <h3>Informacion relevante</h3>
                  <p>
                     Aca ira la informcion y detalles de como poder usar mejor el mapa, de
                     esa manera los usuarios no estaran perdidos.
                  </p>
                  <br />
                  <h3>Informacion relevante</h3>
                  <p>
                     Aca ira la informcion y detalles de como poder usar mejor el mapa, de
                     esa manera los usuarios no estaran perdidos.
                  </p>
               </div>
            </>
         )}
      </div>
   );
};

export default ViewerPanel;
