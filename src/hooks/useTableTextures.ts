import { useTexture } from "@react-three/drei"


export const useTableTextures = () => {

    const [colorMapV1, displMapV1, metalMapV1, normalMapV1, roughMapV1] = useTexture([
        '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Color.jpg',
        '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Displacement.jpg',
        '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Metalness.jpg',
        '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_NormalGL.jpg',
        '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Roughness.jpg',
    ]);


    return {
        v1: [ colorMapV1, displMapV1, metalMapV1, normalMapV1, roughMapV1 ]
    }
}