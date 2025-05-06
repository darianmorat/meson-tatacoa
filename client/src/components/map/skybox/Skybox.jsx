import React from "react";
import { useLoader } from "@react-three/fiber";
import { BackSide, TextureLoader } from "three";
import enviromentImg1 from "../../../assets/map-section/texture-img/eso0932a.jpg";

const Skybox = ({ backgroundImage = enviromentImg1 }) => {
   const texture = useLoader(TextureLoader, backgroundImage);

   return (
      <mesh scale={[1, 1, 1]}>
         <sphereGeometry args={[10, 32, 32]} />
         <meshBasicMaterial
            map={texture}
            side={BackSide}
            transparent={true}
            opacity={0.8}
         />
      </mesh>
   );
};

export default Skybox;
