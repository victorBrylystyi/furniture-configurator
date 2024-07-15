import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { CanvasScene } from "./components/CanvasScene";
import { SceneEnv } from "./components/SceneEnv";
import { Overlay } from "./components/Overlay";
import { R3FStoreProvider } from "./store/R3FStore";


const App = () => {

  const rootRef = useRef(document.getElementById('#root') as HTMLElement);

  return <>
    <Canvas 
      gl={{ preserveDrawingBuffer: true }} 
      dpr={[1, 2]} 
      camera={{ position: [0, 2.5, 2.5], fov: 30 }}
    >
      <OrbitControls target={[0,1,0]}  />
      <R3FStoreProvider />
      <CanvasScene />
      <SceneEnv />
      <Stats showPanel={0} className="stats" parent={rootRef}/>
    </Canvas>
    <Overlay />
  </>


}

export default App;