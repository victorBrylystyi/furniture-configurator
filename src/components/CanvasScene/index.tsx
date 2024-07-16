import { MeshReflectorMaterial } from "@react-three/drei"
import { Suspense } from "react"
import { StandingDesk } from "../StandingDesk"

const ReflectionFloor = () => {

    return (
        <mesh 
            position={[0, 0, 0]} 
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[25, 25]} />
            <MeshReflectorMaterial
                blur={[300, 300]}
                resolution={2048}
                mixBlur={1}
                mixStrength={40}
                depthScale={1.2}
                minDepthThreshold={0.4}
                color="#101010"
                metalness={0.6}
                roughness={0.2} 
                mirror={1}          
            />
        </mesh>
    )

}

export const CanvasScene = () => {

    return (
        <>
            <ReflectionFloor />
            <Suspense fallback={null}>
                <StandingDesk />
            </Suspense>
        </>
    )

}