import CustomCubeCamera from "../atoms/ReflectionScene";
import HtmlObj from "../atoms/HtmlObj";
import TheBox from "../atoms/TheBox";
import TheFloor from "../atoms/TheFloor";
export default function Scene() {
  return (
    <group>
      <CustomCubeCamera>
        <TheBox envMap={envMap} name={"new-box-1"} position={[0,0.5,-1.5]}></TheBox>
        <TheBox envMap={envMap} name={"new-box-2"} position={[0,0.5,0]}></TheBox>
        <TheBox envMap={envMap} name={"new-box-3"} position={[0,0.5,1.5]}></TheBox>
        <TheFloor envMap={envMap}></TheFloor>
      </CustomCubeCamera>
      <HtmlObj occlude={true} position={[0, 0, -11.5]} name={"new-html-2"}> 
          <div className="overflow-hidden h-screen w-screen border-2 border-black">
           <p className="text-base text-black">This is a div</p>
          </div>
      </HtmlObj>
    </group>
  );
}
