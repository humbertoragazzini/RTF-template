import { Html } from "@react-three/drei";

export default function HtmlObj({position,occlude,children}){
    return(
        <mesh position={position}>
            <Html occlude={occlude} transform>
                {children}
            </Html>
            <planeGeometry args={[1.6,0.9]}></planeGeometry>
            <meshBasicMaterial></meshBasicMaterial>
        </mesh>
    )
}