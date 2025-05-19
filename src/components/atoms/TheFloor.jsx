import Gimbal from "../molecules/Gimball"
import { CubeCamera } from "@react-three/drei"

export default function TheFloor() {
  return (
    <mesh receiveShadow>
      <Gimbal
        position={{ x: 0, y: 0, z: 0 }}
        rotation={{ x: -Math.PI / 2, y: 0, z: 0 }}
        name={"TheFloor"}
      >
        <group>
          <CubeCamera frames={1} resolution={256} near={1} far={1000}>
            {(texture) => (
              <mesh>
                <planeGeometry args={[50, 50, 50]} />
                <meshStandardMaterial
                  color="black"
                  envMap={texture}
                  metalness={1}
                  roughness={0.1}
                />
              </mesh>
            )}
          </CubeCamera>
        </group>
      </Gimbal>
    </mesh>
  )
}
