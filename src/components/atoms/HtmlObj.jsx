import { Html, Shape } from "@react-three/drei";
import Gimbal from "../molecules/Gimball";
import { DoubleSide } from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/Addons.js";
import * as THREE from "three"
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function HtmlObj({ position, occlude, children, name }) {

  const htmlRef = useRef();
  const meshRef = useRef();
  const [scale,setScale] = useState();

    useFrame(()=>{
      if(meshRef.current.children[0].children[0].scale.y !== scale){
        // setScale(meshRef.current.children[0].children[0].scale.y);
      }
    })

    function createRoundedRectShape(w, h, r, s = 8){
        // This function uses width, height, radiusCorner and smoothness
        //TODO we need a responsive way to make this have the same border radius than our html element
        const pi2 = Math.PI * 2;
        const n = (s + 1) * 4; // number of segments
        let indices = [];
        let positions = [];
        let uvs = [];
        let qu, sgx, sgy, x, y;
      
        for (let j = 1; j < n + 1; j++) indices.push(0, j, j + 1); // 0 is center
        indices.push(0, n, 1);
        positions.push(0, 0, 0); // rectangle center
        uvs.push(0.5, 0.5);
        for (let j = 0; j < n; j++) contour(j);
      
        const geometry = new THREE.BufferGeometry();
        geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(new Float32Array(positions), 3)
        );
        geometry.setAttribute(
          "uv",
          new THREE.BufferAttribute(new Float32Array(uvs), 2)
        );
      
        return geometry;
      
        function contour(j) {
          qu = Math.trunc((4 * j) / n) + 1; // quadrant  qu: 1..4
          sgx = qu === 1 || qu === 4 ? 1 : -1; // signum left/right
          sgy = qu < 3 ? 1 : -1; // signum  top / bottom
          x = sgx * (w / 2 - r) + r * Math.cos((pi2 * (j - qu + 1)) / (n - 4)); // corner center + circle
          y = sgy * (h / 2 - r) + r * Math.sin((pi2 * (j - qu + 1)) / (n - 4));
      
          positions.push(x, y, 0);
          uvs.push(0.5 + x / w, 0.5 + y / h);
        }
      }
      
    return (
        <Gimbal position={{ x: position[0], y: position[1], z: position[2] }} rotation={{ x: 0, y: 0, z: 0 }} name={name}>
            <mesh ref={meshRef}>
                <Html position={[0,0,0]} occlude={"blending"} transform castShadow ref={htmlRef}
                    receiveShadow
                    // geometry={<primitive object={createRoundedRectShape(1.0,1.0,0.1,50)}/>}
                    // geometry={<planeGeometry></planeGeometry>}
                    >
                    {children}
                </Html>
            </mesh>
        </Gimbal>

    )
}