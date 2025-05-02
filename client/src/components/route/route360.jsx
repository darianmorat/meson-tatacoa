import React, { useMemo } from "react";
import View360, { ControlBar, EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";
import video360_1 from "../../assets/route-section/video360.mp4";
import "./route360.css";

const My360Route = () => {
   const plugins = useMemo(
      () => [
         new ControlBar({
            autoHide: true,
         }),
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
      <div className="route-360-container">
         <div className="route-360">
            <View360 className="is-16by9" plugins={plugins} projection={projection} />
         </div>
         <div className="viewer-360">
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
         </div>
      </div>
   );
};

export default My360Route;
