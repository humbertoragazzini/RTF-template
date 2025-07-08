import Effects from "../atoms/Effects";
import HtmlObj from "../atoms/HtmlObj";
import TheBox from "../atoms/TheBox";
import TheFloor from "../atoms/TheFloor";
export default function Scene() {
  return (
    <group>
      <Effects>
        {(texture) => {
          return (
            <group>
              <TheBox envMap={texture} name={"new-box-1"} position={[0, 1.5, -1.5]}></TheBox>
              <TheBox envMap={texture} name={"new-box-2"} position={[0, 1.5, 0]}></TheBox>
              <TheBox envMap={texture} name={"new-box-3"} position={[0, 1.5, 1.5]}></TheBox>
              <TheFloor envMap={texture}></TheFloor>
            </group>)
        }}
      </Effects>
      <HtmlObj occlude={true} position={[0, 0, -11.5]} name={"new-html-2"}>
        <div className="overflow-hidden h-screen w-screen border-2 border-black">
          <p className="text-base text-black">This is a div</p>
        </div>
      </HtmlObj>
    </group>
  );
}
