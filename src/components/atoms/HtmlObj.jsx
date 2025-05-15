import { Html } from "@react-three/drei";
import Gimbal from "../molecules/Gimball";
import { DoubleSide } from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/Addons.js";
import * as THREE from "three"

export default function HtmlObj({ position, occlude, children, name }) {


    function createRoundedPlaneGeometry(width, height, radius, segments = 5) {
        const shape = new THREE.Shape()
        const hw = width / 2
        const hh = height / 2
      
        // Start top-left corner
        shape.moveTo(-hw + radius, -hh)
      
        // Top edge
        shape.lineTo(hw - radius, -hh)
        shape.quadraticCurveTo(hw, -hh, hw, -hh + radius)
      
        // Right edge
        shape.lineTo(hw, hh - radius)
        shape.quadraticCurveTo(hw, hh, hw - radius, hh)
      
        // Bottom edge
        shape.lineTo(-hw + radius, hh)
        shape.quadraticCurveTo(-hw, hh, -hw, hh - radius)
      
        // Left edge
        shape.lineTo(-hw, -hh + radius)
        shape.quadraticCurveTo(-hw, -hh, -hw + radius, -hh)
      
        return new THREE.ShapeGeometry(shape, segments)
      }

    return (
        <Gimbal position={{ x: position[0], y: position[1], z: position[2] }} rotation={{ x: 0, y: 0, z: 0 }} name={name}>
            <mesh>
                <Html occlude={"blending"} transform castShadow
                    receiveShadow
                    geometry={createRoundedPlaneGeometry(1.6,0.9,1.5,5)}
                    >
                    {children}
                </Html>
            </mesh>
        </Gimbal>

    )
}