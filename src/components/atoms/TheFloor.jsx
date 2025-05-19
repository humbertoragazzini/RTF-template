import { mx_bilerp_0 } from "three/src/nodes/materialx/lib/mx_noise.js";
import Gimbal from "../molecules/Gimball";

export default function TheFloor() {
  return (
    <mesh receiveShadow>
      <Gimbal position={{ x: 0, y: 0, z: 0 }} rotation={{ x: -Math.PI / 2, y: 0, z: 0 }} name={"TheFloor"}>
        <mesh>
          <planeGeometry args={[50, 50, 50]}></planeGeometry>
          <meshStandardMaterial color={"white"}></meshStandardMaterial>
        </mesh>
      </Gimbal>
    </mesh>
  );
}
