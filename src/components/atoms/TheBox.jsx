import Gimbal from "../molecules/Gimball";

export default function TheBox() {
  return (
    <Gimbal position={{x:0,y:0.5,z:0}} rotation={{x:0,y:0,z:0}}>
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]}></boxGeometry>
      <meshStandardMaterial color={"red"}></meshStandardMaterial>
    </mesh>
    </Gimbal>
  );
}
