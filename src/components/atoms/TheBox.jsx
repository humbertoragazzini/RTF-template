import { useFrame } from "@react-three/fiber";
import Gimbal from "../molecules/Gimball";
import { useRef } from "react";

export default function TheBox({name,position}) {
  const meshRef = useRef(null)

  useFrame(()=>{
    if(meshRef.current !== null){
      meshRef.current.rotation.x += 0.1
      meshRef.current.rotation.y += 0.1
    }
  })

  return (
    <Gimbal position={{x:position[0],y:position[1],z:position[2]}} rotation={{x:0,y:0,z:0}} name={name}>
      <mesh ref={meshRef} scale={0.5} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]}></boxGeometry>
        <meshStandardMaterial color={"blue"}></meshStandardMaterial>
      </mesh>
    </Gimbal>
  );
}
