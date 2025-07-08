import { useFrame } from "@react-three/fiber"
import Gimbal from "../molecules/Gimball"
import { CubeCamera, MeshReflectorMaterial } from "@react-three/drei"

export default function TheFloor({envMap}) {
  useFrame(({camera})=>{
    // console.log(camera)
  })
  return (
    <mesh receiveShadow>
      <Gimbal
        position={{ x: 0, y: 0, z: 0 }}
        rotation={{ x: -Math.PI / 2, y: 0, z: 0 }}
        name={"TheFloor"}
      >
        <mesh>
          <planeGeometry args={[5, 5, 50]} />
          <MeshReflectorMaterial
                      blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
          />
        </mesh>
      </Gimbal>
    </mesh>
  )
}
