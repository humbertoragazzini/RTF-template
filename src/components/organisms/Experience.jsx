import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Camera from "../atoms/Camera";
import Lights from "../molecules/Lights";
import Scene from "../molecules/Scene";
import { OrbitControls, PerformanceMonitor } from "@react-three/drei";
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
      <Perf />
      <OrbitControls></OrbitControls>
      <Camera></Camera>
      <Lights></Lights>
      <Scene></Scene>
    </Canvas>
  );
}
