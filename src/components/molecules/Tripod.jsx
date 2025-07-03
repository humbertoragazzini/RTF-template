import Camera from "../atoms/Camera";
import OrbitControls from "../atoms/OrbitControls";

export default function Tripod({fps}){
    return(
        <>
            <OrbitControls fpsTarget={fps}></OrbitControls>
            <Camera></Camera>
        </>
    )
}