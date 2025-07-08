import { CubeCamera } from "@react-three/drei";
import TheBox from "./TheBox";
import TheFloor from "./TheFloor"
import { useFrame } from "@react-three/fiber";

export default function ReflectionScene() {
    useFrame(({camera})=>{
    // console.log(camera)
    })
    return (
        <CubeCamera frames={1} resolution={256} near={1} far={1000}>
            {(envMap) => (
                <>
                    <TheBox envMap={envMap} name={"new-box-1"} position={[0,0.5,-1.5]}></TheBox>
                    <TheBox envMap={envMap} name={"new-box-2"} position={[0,0.5,0]}></TheBox>
                    <TheBox envMap={envMap} name={"new-box-3"} position={[0,0.5,1.5]}></TheBox>
                    <TheFloor envMap={envMap}></TheFloor>
                </>
            )}
        </CubeCamera>
    )
}