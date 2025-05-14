import { useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { DirectionalLightHelper } from "three";
import AmbientLight from "../atoms/AmbientLight";

export default function Lights() {
  const directionalRef = useRef();
  useHelper(directionalRef, DirectionalLightHelper, 5, "red");

  return (
    <group>
      <AmbientLight></AmbientLight>
      <directionalLight
        ref={directionalRef}
        position={[0, 10, 10]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        intensity={1.2}
        color={"#ffffff"}
      ></directionalLight>
    </group>
  );
}
