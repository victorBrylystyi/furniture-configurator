import { useTexture } from "@react-three/drei"

type TexturesType = {
    map: string,
    normalMap: string,
    roughnessMap?: string,
    metalnessMap?: string,
    displacementMap?: string
}

export const useTableTextures = () => {

    const metalV1 = useTexture<TexturesType>({
        map: '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Color.jpg',
        normalMap: '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_NormalGL.jpg',
        metalnessMap: '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Metalness.jpg',

    });

    const woodV1 = useTexture<TexturesType>({
        map: '/textures/v1/Wood028_1K-JPG/Wood028_1K-JPG_Color.jpg',
        normalMap: '/textures/v1/Wood028_1K-JPG/Wood028_1K-JPG_NormalGL.jpg',
        roughnessMap: '/textures/v1/Wood028_1K-JPG/Wood028_1K-JPG_Roughness.jpg',
        displacementMap: '/textures/v1/Wood028_1K-JPG/Wood028_1K-JPG_Displacement.jpg',
        // metalnessMap: '/textures/v1/Wood028_1K-JPG/Wood028_1K-JPG_Metalness.jpg',
    });

    const woodV2 = useTexture<TexturesType>({
        map: '/textures/v1/Wood066_1K-JPG/Wood066_1K-JPG_Color.jpg',
        normalMap: '/textures/v1/Wood066_1K-JPG/Wood066_1K-JPG_NormalGL.jpg',
        roughnessMap: '/textures/v1/Wood066_1K-JPG/Wood066_1K-JPG_Roughness.jpg',
        displacementMap: '/textures/v1/Wood066_1K-JPG/Wood066_1K-JPG_Displacement.jpg',
        // metalnessMap: '/textures/v1/Wood028_1K-JPG/Wood028_1K-JPG_Metalness.jpg',
    });


    return {
        metal: metalV1,
        wood: [woodV1, woodV2],
    }
}