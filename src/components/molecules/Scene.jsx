import TheBox from "../atoms/TheBox";
import TheFloor from "../atoms/TheFloor";

export default function Scene() {
  return (
    <group>
      <TheBox></TheBox>
      <TheFloor></TheFloor>
    </group>
  );
}
