import { CubeCamera } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useState } from "react"

export default function Effects() {
  const cubeCamRef = useRef()
  const { camera: mainCamera } = useThree()
  const [envMap, setEnvMap] = useState()

  useFrame(() => {
    if (cubeCamRef.current) {
    //   const internalCam = cubeCamRef.current.children[0]
    //   internalCam.position.copy(mainCamera.position)
    //   internalCam.quaternion.copy(mainCamera.quaternion)
    }
  })

  return (
    <>
      {/* CubeCamera only renders the scene to a cubemap */}
      <CubeCamera
        ref={cubeCamRef}
        frames={1}
        resolution={1024}
        near={0.1}
        far={5000}
      >
        {(texture) => {
          setEnvMap(texture)
          return null // do not render reflective objects inside here
        }}
      </CubeCamera>

      {/* Reflective objects go OUTSIDE and consume the generated envMap */}
      <mesh position={[0, 5, 0]}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshStandardMaterial
          color="black"
          envMap={envMap}
          metalness={0.5}
          roughness={0.0}
        />
      </mesh>

      <mesh position={[0, 5, 3]}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshStandardMaterial
          color="yellow"
          envMap={envMap}
          metalness={0.0}
          roughness={0.7}
        />
      </mesh>
    </>
  )
}
    