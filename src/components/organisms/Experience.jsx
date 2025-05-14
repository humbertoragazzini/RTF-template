import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Camera from "../atoms/Camera";
import Lights from "../molecules/Lights";
import Scene from "../molecules/Scene";
import { OrbitControls, PerformanceMonitor, SoftShadows } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <Canvas
      shadows
      gl={{
        toneMapping: THREE.NoToneMapping,
        outputEncoding: THREE.sRGBEncoding,
        physicallyCorrectLights: true,
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
      }}
    >
      <Perf position="top-left"/>
      <OrbitControls></OrbitControls>
      <Camera></Camera>
      <SoftShadows focus={2} samples={15} size={20}></SoftShadows>
      <Lights></Lights>
      <Scene></Scene>
    </Canvas>
  );
}
