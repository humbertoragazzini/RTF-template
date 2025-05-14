import TheBox from "../atoms/TheBox";
import TheFloor from "../atoms/TheFloor";
export default function Scene() {
  return (
    <group>
      <TheBox name={"new-box-1"}></TheBox>
      <TheFloor></TheFloor>
    </group>
  );
}
