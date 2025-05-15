import { Html } from "@react-three/drei";
import Gimbal from "../molecules/Gimball";

export default function HtmlObj({ position, occlude, children }) {
    return (
        <Gimbal position={{ x: position[0], y: position[1], z: position[2] }} rotation={{ x: 0, y: 0, z: 0 }} name={"The-div"}>
            <mesh>
                <Html occlude={occlude} transform>
                    {children}
                </Html>
                <planeGeometry args={[1.6, 0.9]}></planeGeometry>
                <meshBasicMaterial></meshBasicMaterial>
            </mesh>
        </Gimbal>

    )
}