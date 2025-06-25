import Gimbal from "../molecules/Gimball";

export default function TheBox({name,position}) {
  return (
    <Gimbal position={{x:position[0],y:position[1],z:position[2]}} rotation={{x:0,y:0,z:0}} name={name}>
      <mesh scale={0.5} castShadow receiveShadow>
        <boxGeometry args={[50, 1, 1]}></boxGeometry>
        <meshStandardMaterial color={"blue"}></meshStandardMaterial>
      </mesh>
    </Gimbal>
  );
}
