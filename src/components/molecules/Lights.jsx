import AmbientLight from "../atoms/AmbientLight";
import DirectionalLight from "../atoms/DirectionalLight";

export default function Lights() {
  return (
    <group>
      <AmbientLight></AmbientLight>
      <DirectionalLight position={{x:0,y:50,z:50}} name={"directional-light-1"}></DirectionalLight>
    </group>
  );
}
