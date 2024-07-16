import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { CanvasScene } from "./components/CanvasScene";
import { SceneEnv } from "./components/SceneEnv";
import { Overlay } from "./components/Overlay";

const App = () => {

  const rootRef = useRef(document.getElementById('#root') as HTMLElement);

  return <>
    <Canvas 
      gl={{ 
        // preserveDrawingBuffer: true,
        antialias: false
      }} 
      dpr={[1, 2]} 
      camera={{ position: [0, 2.5, 2.5], fov: 30 }}
    >
      <OrbitControls target={[0, 1.2, 0]} maxDistance={20} minDistance={2} makeDefault />
      <Suspense fallback={null}> 
        <CanvasScene />
        <SceneEnv />
      </Suspense>
      <Stats showPanel={0} className="stats" parent={rootRef}/>
    </Canvas>
    <Overlay />
  </>

}

export default App;