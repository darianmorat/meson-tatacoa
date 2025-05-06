import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import sceneUrl from "../../../assets/map-section/models/Meson de la tatacoa.glb?url";

const Model = () => {
   const { scene } = useGLTF(sceneUrl);
   const modelRef = useRef();

   useEffect(() => {
      if (scene) {
         scene.rotation.x = -Math.PI / -3;
      }
   }, [scene]);

   return (
      <group ref={modelRef} scale={0.2} position={[-1, 0.5, 2.5]}>
         <primitive object={scene} />
      </group>
   );
};

useGLTF.preload(sceneUrl);

export default React.memo(Model);
