import { Environment } from "@react-three/drei"
import { useSnapshot } from "valtio"
import { state } from "../../store"
import { useEffect, useState, useTransition } from "react";


export const SceneEnv = () => {

    const envPreset = useSnapshot(state).envPresets;

    const [preset, setPreset] = useState(envPreset);
    const [, startTransition] = useTransition();

    useEffect(() => {
        startTransition(() => setPreset(envPreset));
    }, [envPreset])

    return (
        <>
            <Environment preset={preset} />
            <color attach="background" args={["#333b47"]} />
            <ambientLight color={'white'} intensity={10.0} />
        </>
    )
}