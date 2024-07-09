import { useTexture } from "@react-three/drei"

type TexturesType = {
    map: string,
    normalMap: string,
    roughnessMap?: string,
    metalnessMap?: string,
    displacementMap?: string
}

type TexturesAssetsType = {
    wood: TexturesType,
    metal: TexturesType
}

export const useTableTextures = () => {

    const metalV1 = useTexture<TexturesType>({
        map: '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Color.jpg',
        normalMap: '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_NormalGL.jpg',
        // roughnessMap: '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Roughness.jpg',
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

    const plastic = useTexture<TexturesType>({
        map: '/textures/v1/Plastic007_1K-JPG/Plastic007_1K-JPG_Color.jpg',
        normalMap: '/textures/v1/Plastic007_1K-JPG/Plastic007_1K-JPG_NormalGL.jpg',
        roughnessMap: '/textures/v1/Plastic007_1K-JPG/Plastic007_1K-JPG_Roughness.jpg',
        displacementMap: '/textures/v1/Plastic007_1K-JPG/Plastic007_1K-JPG_Displacement.jpg',
        // metalnessMap: '/textures/v1/Wood028_1K-JPG/Wood028_1K-JPG_Metalness.jpg',
    });

    // const [colorMapV1, displMapV1, metalMapV1, normalMapV1, roughMapV1] = useTexture([
    //     '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Color.jpg',
    //     '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Displacement.jpg',
    //     '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Metalness.jpg',
    //     '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_NormalGL.jpg',
    //     '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Roughness.jpg',
    // ]);

    // const [colorMapV1, displMapV1, metalMapV1, normalMapV1, roughMapV1] = useTexture([
    //     '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Color.jpg',
    //     '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Displacement.jpg',
    //     '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Metalness.jpg',
    //     '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_NormalGL.jpg',
    //     '/textures/v1/Metal036_1K-JPG/Metal036_1K-JPG_Roughness.jpg',
    // ]);


    return {
        plastic,
        metal: metalV1,
        wood: [woodV1, woodV2],
        // v1: [metalV1, woodV1]
    }
}