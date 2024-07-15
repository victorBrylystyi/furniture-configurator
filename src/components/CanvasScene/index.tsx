import { MeshReflectorMaterial } from "@react-three/drei"
import { Suspense, useEffect } from "react"
import { StandingDesk } from "../StandingDesk"
import { setRT, state } from "../../store"
import { NearestFilter, RGBAFormat, WebGLRenderTarget } from "three"
import { useThree } from "@react-three/fiber"


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

    const size = useThree(state => state.size);

    useEffect(() => {
  
        if (state.rt) state.rt.dispose();

        const newRT = new WebGLRenderTarget(size.width * window.devicePixelRatio, size.height * window.devicePixelRatio, {
            minFilter: NearestFilter,
            magFilter: NearestFilter,
            generateMipmaps: false,
            format: RGBAFormat,
            depthBuffer: false,
            colorSpace: 'srgb-linear',
        });

        // newRT.texture.flipY = false;

        setRT(newRT);

    }, [size])

    return (
        <>
            <ReflectionFloor />
            <Suspense fallback={null}>
                <StandingDesk />
            </Suspense>
        </>
    )

}