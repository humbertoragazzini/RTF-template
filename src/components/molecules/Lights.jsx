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
      ></directionalLight>
    </group>
  );
}
