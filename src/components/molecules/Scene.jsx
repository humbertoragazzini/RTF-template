import HtmlObj from "../atoms/HtmlObj";
import ReflectionScene from "../atoms/ReflectionScene";
export default function Scene() {
  return (
    <group>
      <ReflectionScene></ReflectionScene>
      <HtmlObj occlude={true} position={[0, 0, -11.5]} name={"new-html-2"}> 
          <div className="overflow-hidden h-screen w-screen border-2 border-black">
           <p className="text-base text-black">This is a div</p>
          </div>
      </HtmlObj>
    </group>
  );
}
