
export enum TableHeightTypes {
    default = 'Default',
    h1 = '100mm',
    h2 = '200mm',
    h3 = '300mm',
}

export enum MaterialTypes {
    default = 'Default',
    v1 = 'v1',
    v2 = 'v2'
}

export enum TVContentTypes {
    html = 'HTML',
    video = 'video',
}
export enum PresetsType {
    apartment = "apartment",
    city = "city",
    dawn = "dawn",
    forest = "forest",
    lobby = "lobby",
    night = "night",
    park = "park",
    studio = "studio",
    sunset = "sunset",
    warehouse = "warehouse"
};

export type StoreType = {
    tableHeight: TableHeightTypes
    tableCoverColor: string
    materials: MaterialTypes
    tvContent: TVContentTypes
    envPresets: PresetsType
}
