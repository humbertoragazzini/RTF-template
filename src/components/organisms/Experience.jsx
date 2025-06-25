import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Camera from "../atoms/Camera";
import Lights from "../molecules/Lights";
import Scene from "../molecules/Scene";
import { CubeCamera, PerformanceMonitor, SoftShadows } from "@react-three/drei";
import { Perf } from "r3f-perf";
import OrbitControls from "../atoms/OrbitControls";
import { useState } from "react";

export default function Experience() {
  const [fps,setFps] = useState(10)
  
  return (
    <Canvas
      shadows
      gl={{
        toneMapping: THREE.NoToneMapping,
        outputEncoding: THREE.sRGBEncoding,
        physicallyCorrectLights: true,
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        alpha: true
      }}
      frameloop={fps > 0 ? "demand" : "always"}
    >
      {/* {fps == null && <Perf position="top-left"/>} */}
      <OrbitControls fpsTarget={fps}></OrbitControls>
      {/* <OrbitControls makeDefault={false} enableDamping={false} ></OrbitControls> */}
      <Camera></Camera>
      {/* <SoftShadows focus={2} samples={15} size={20}></SoftShadows> */}
      <Lights></Lights>
      <Scene></Scene>
    </Canvas>
  );
}
