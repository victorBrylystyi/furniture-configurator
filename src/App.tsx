import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { CanvasScene } from "./components/CanvasScene";
import { SceneEnv } from "./components/SceneEnv";

const App = () => {

  const rootRef = useRef(document.getElementById('#root') as HTMLElement);
  
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 2.5, 2.5], fov: 75 }}>
      <OrbitControls />
      <CanvasScene />
      <SceneEnv />
      <Stats showPanel={0} className="stats" parent={rootRef}/>
    </Canvas>
  );
}

export default App;
