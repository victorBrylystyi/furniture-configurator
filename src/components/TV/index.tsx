/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useCallback, useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh
    Mesh_1: THREE.Mesh
    Mesh_2: THREE.Mesh
    Mesh_3: THREE.Mesh
    lamp: THREE.Mesh
    display: THREE.Mesh
  }
  materials: {
    Bottom: THREE.MeshPhysicalMaterial
    Stand: THREE.MeshPhysicalMaterial
    Case: THREE.MeshPhysicalMaterial
    StripeBottom: THREE.MeshPhysicalMaterial
    Light: THREE.MeshPhysicalMaterial
    Screen: THREE.MeshPhysicalMaterial
  }
}

export const TV = (props: JSX.IntrinsicElements['group']) => {

    const { nodes, materials } = useGLTF('/models/tv.glb') as GLTFResult;
    const getBoxMaterial = useCallback(() => (
        <meshStandardMaterial 
            color={'black'}
            roughness={0.8}
            metalness={0.2}
        />
    ), [])


    return (
        <group {...props} dispose={null}>
        <group name="Scene">
            <group name="Scene_Collection" userData={{ name: 'Scene Collection' }}>
            <group name="Collection" userData={{ name: 'Collection' }}>
                <group name="TV" userData={{ name: 'TV' }}>
                <mesh
                    name="Mesh"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh.geometry}
                    // material={materials.Bottom}
                >
                    {getBoxMaterial()}
                </mesh>
                <mesh
                    name="Mesh_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_1.geometry}
                    // material={materials.Stand}
                >
                    {getBoxMaterial()}
                </mesh>
                <mesh
                    name="Mesh_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_2.geometry}
                    // material={materials.Case}
                >
                    {getBoxMaterial()}
                </mesh>
                <mesh
                    name="Mesh_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_3.geometry}
                    // material={materials.StripeBottom}
                >
                    {getBoxMaterial()}
                </mesh>
                </group>
                <mesh
                name="lamp"
                castShadow
                receiveShadow
                geometry={nodes.lamp.geometry}
                //   material={materials.Light}
                userData={{ name: 'lamp' }}
                >
                    <meshStandardMaterial 
                        color={'blue'}
                    />
                </mesh>
                <mesh
                name="display"
                castShadow
                receiveShadow
                geometry={nodes.display.geometry}
                //   material={materials.Screen}
                userData={{ name: 'display' }}
                >
                    {/* <group position={[2, 20.8, 1.4]} rotation-y={Math.PI / 2}> */}
                        <Html 
                            className="content"
                            scale={[2,2,1]} 
                            prepend 
                            transform 
                            occlude
                            position={[1.44, 20.8, 1.4]}
                            rotation-y={Math.PI / 2}
                        >
                            <div 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    // backgroundColor:'red'
                                }} 
                                onPointerDown={(e) => e.stopPropagation()}
                            >
                                <iframe title="embed" width={'100%'} height={'100%'} src="https://docs.pmnd.rs/react-three-fiber/getting-started/examples" />
                            </div>
                        </Html>
                    {/* </group> */}
                </mesh>
            </group>
            </group>
        </group>
        </group>
    )
}

useGLTF.preload('/models/tv.glb')
