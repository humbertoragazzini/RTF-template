export default function TheFloor() {
  return (
    <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50, 50]}></planeGeometry>
      <meshStandardMaterial color={"white"}></meshStandardMaterial>
    </mesh>
  );
}
