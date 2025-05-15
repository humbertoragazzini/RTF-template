import HtmlObj from "../atoms/HtmlObj";
import TheBox from "../atoms/TheBox";
import TheFloor from "../atoms/TheFloor";
export default function Scene() {
  return (
    <group>
      <TheBox name={"new-box-1"}></TheBox>
      <TheFloor></TheFloor>
      <HtmlObj position={[0,1.5,0]}>
        <div>
          This is a div
        </div>
      </HtmlObj>
    </group>
  );
}
