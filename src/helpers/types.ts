import { RGB } from "three"

export enum TableHeightTypes {
    default = 'Default',
    h1 = '100mm',
    h2 = '200mm',
    h3 = '300mm',
}

export enum MaterialTypes {
    default = 'Default',
    v1 = 'v1',
    v2 = 'v2',
    // h2 = '200mm',
    // h3 = '300mm',
}

export type StoreType = {
    tableHeight: TableHeightTypes
    tableCoverColor: string
    tableLegsColor: RGB
    materials: MaterialTypes
}
