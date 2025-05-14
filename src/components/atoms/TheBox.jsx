export default function TheBox() {
  return (
    <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]}></boxGeometry>
      <meshStandardMaterial color={"red"}></meshStandardMaterial>
    </mesh>
  );
}
