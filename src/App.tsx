import { Environment, MeshReflectorMaterial, OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { StandingDesk } from "./components/StandingDesk";

const App = () => {

  const rootRef = useRef(document.getElementById('#root') as HTMLElement);
//args={["#213547"]} 
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2], fov: 75 }}>
      <color attach="background" args={["#ffffff"]} />
      <OrbitControls />
      <ambientLight color={'white'} intensity={10.0} />
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
      <Suspense fallback={null}>
        <Environment preset='city' />
        <StandingDesk />
      </Suspense>
      <Stats showPanel={0} className="stats" parent={rootRef}/>
    </Canvas>
  );
}

export default App;
