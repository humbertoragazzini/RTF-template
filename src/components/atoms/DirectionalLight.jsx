import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import Gimbal from "../molecules/Gimball";

export default function DirectionalLight({position,name}){
    
  const directionalRef = useRef();
  useHelper(directionalRef, DirectionalLightHelper, 5, "red");
    return(
        <Gimbal position={position} rotation={{x:0,y:0,z:0}} name={name}>
            <directionalLight
                ref={directionalRef}
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
        </Gimbal>
    )
}