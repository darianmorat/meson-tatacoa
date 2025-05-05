// Dependencies
import React, { Suspense, useRef, useState, useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import gsap from "gsap";
import sunset_hdr from "../../assets/map-section/texture-img/sunset.hdr";
import "./map.css";

// Components
import Model from "./Model";
import Hotspot from "./Hotspots";
import Skybox from "./Skybox";
import ViewerPanel from "./InfoPanel";
import NavigationBtns from "./Navigation";

// Data
import { ALL_HOTSPOTS } from "../../data/hotspots";

// Constants
const ANIMATION_DURATION = 0.7;
const CLOSE_TIMEOUT = 200;
const CAMERA_INITIAL_POSITION = [-5, 0.5, 4];
const CAMERA_FOV = 44;

const MapRender = () => {
   const [selectedHotspot, setSelectedHotspot] = useState(null);

   const controlsRef = useRef();
   const cameraRef = useRef();

   // Selected hotspot data
   const selectedHotspotData = useMemo(() => {
      return ALL_HOTSPOTS.find((h) => h.id === selectedHotspot);
   }, [selectedHotspot]);

   // Camera animation
   const animateCamera = useCallback((position) => {
      if (cameraRef.current) {
         gsap.to(cameraRef.current.position, {
            x: position[0],
            y: position[1],
            z: position[2],
            duration: ANIMATION_DURATION,
            ease: "power2.inOut",
         });
      }
   }, []);

   const handleHotspotClick = useCallback(
      (hotspotId) => {
         const hotspot = ALL_HOTSPOTS.find((h) => h.id === hotspotId);

         if (selectedHotspot === hotspotId) {
            // Return to original view
            animateCamera(CAMERA_INITIAL_POSITION);

            // Handle closing
            setTimeout(() => {
               setSelectedHotspot(null);
            }, CLOSE_TIMEOUT);
         } else {
            // Move camera closer to hotspot
            setSelectedHotspot(hotspotId);

            // Calculate camera position using vector math
            const hotspotPosition = [...hotspot.position];
            const distance = 1.2; // Controls how close the camera gets to the hotspot

            // Calculate direction vector from origin to hotspot
            const directionVector = hotspotPosition.map(
               (coord) =>
                  coord /
                  Math.sqrt(
                     hotspotPosition[0] ** 2 +
                        hotspotPosition[1] ** 2 +
                        hotspotPosition[2] ** 2,
                  ),
            );

            // Calculate position slightly offset from hotspot position (looking at it)
            const newPosition = directionVector.map((coord) => coord * distance);

            // Offset the camera height (Y) slightly to look down at the hotspot
            newPosition[1] += 0.4;

            // Animate camera to new position
            animateCamera(newPosition);

            // Calculate where to look (target) - directly at the hotspot
            if (controlsRef.current) {
               gsap.to(controlsRef.current.target, {
                  x: hotspotPosition[0],
                  y: hotspotPosition[1],
                  z: hotspotPosition[2],
                  duration: ANIMATION_DURATION,
                  ease: "power2.inOut",
               });
            }
         }
      },
      [selectedHotspot, animateCamera],
   );

   const handleReservationClick = useCallback(() => {
      const reservationData = encodeURIComponent(
         JSON.stringify(selectedHotspotData.info),
      );
      window.open(`/reservation?data=${reservationData}`, "_blank");
   }, [selectedHotspotData]);

   return (
      <div className="map-render-container">
         <ViewerPanel
            hotspotId={selectedHotspot}
            hotspotData={selectedHotspotData}
            onReservation={handleReservationClick}
         />

         <div className="scene-container">
            <NavigationBtns
               selectedHotspot={selectedHotspot}
               handleHotspotClick={handleHotspotClick}
            />

            <Canvas className="canvas">
               <PerspectiveCamera
                  makeDefault
                  position={CAMERA_INITIAL_POSITION}
                  fov={CAMERA_FOV}
                  ref={cameraRef}
               />
               <color attach="background" args={["#101010"]} />
               <fog attach="fog" args={["#101010", 1, 0]} />

               <Suspense fallback={<LoadingFallback />}>
                  <Skybox />
                  <Model />
                  <Environment
                     files={sunset_hdr} // load enviorment
                     environmentRotation={[0, Math.PI / 1, 4]}
                  />
                  {ALL_HOTSPOTS.map((hotspot) => (
                     <Hotspot
                        key={hotspot.id}
                        position={hotspot.position}
                        category={hotspot.category}
                        isSelected={selectedHotspot === hotspot.id}
                        onClick={() => handleHotspotClick(hotspot.id)}
                     />
                  ))}
                  {/* <axesHelper args={[5]} /> */}
                  {/* <gridHelper /> */}
               </Suspense>

               <OrbitControls
                  ref={controlsRef}
                  makeDefault
                  enablePan={false}
                  minDistance={1}
                  maxDistance={8}
                  target={[0, 0, 0]}
                  maxPolarAngle={Math.PI / 2 - 0.1}
                  minPolarAngle={0.5}
                  enableDamping={true}
                  dampingFactor={0.05}
               />
            </Canvas>
         </div>
      </div>
   );
};

// Loading fallback component
const LoadingFallback = () => (
   <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
   </mesh>
);

export default MapRender;
