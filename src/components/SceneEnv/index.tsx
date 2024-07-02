import { Environment } from "@react-three/drei"


export const SceneEnv = () => {


    return (
        <>
            <Environment preset='city' />
            <color attach="background" args={["#ffffff"]} />
            <ambientLight color={'white'} intensity={10.0} />
        </>
    )
}