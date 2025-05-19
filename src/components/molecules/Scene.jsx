import HtmlObj from "../atoms/HtmlObj";
import TheBox from "../atoms/TheBox";
import TheFloor from "../atoms/TheFloor";
export default function Scene() {
  return (
    <group>
      <TheBox name={"new-box-1"} position={[0,1.5,-2]}></TheBox>
      <TheBox name={"new-box-2"} position={[0,1.5,0]}></TheBox>
      <TheBox name={"new-box-2"} position={[0,1.5,2]}></TheBox>
      <TheFloor></TheFloor>
      <HtmlObj position={[0, 0, -1]} name={"new-html-1"}>
        <div className="w-[160px] h-[90px] rounded-sm overflow-hidden bg-red-500">
          <div className="w-[150px] h-full aspect-video">
           <p className="text-black">This is a div</p>
          </div>
        </div>
      </HtmlObj>
      <HtmlObj position={[0, 0, 1]} name={"new-html-2"}> 
        <div className="w-[160px] h-[90px] rounded-sm overflow-hidden bg-red-500">
          <div className="w-[150px] h-full aspect-video">
           <p className="text-black">This is a div</p>
          </div>
        </div>
      </HtmlObj>
    </group>
  );
}
