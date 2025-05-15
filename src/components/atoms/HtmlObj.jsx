import { Html } from "@react-three/drei";
import Gimbal from "../molecules/Gimball";
import { DoubleSide } from "three";

export default function HtmlObj({ position, occlude, children, name }) {
    return (
        <Gimbal position={{ x: position[0], y: position[1], z: position[2] }} rotation={{ x: 0, y: 0, z: 0 }} name={name}>
            <mesh>
                <Html occlude={"blending"} transform castShadow
                    receiveShadow>
                    {children}
                </Html>
            </mesh>
        </Gimbal>

    )
}