
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

export type StoreType = {
    tableHeight: TableHeightTypes
    tableCoverColor: string
    materials: MaterialTypes
}
