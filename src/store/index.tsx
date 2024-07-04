
import { proxy } from "valtio";
import { MaterialTypes, StoreType, TableHeightTypes } from "../helpers/types";

export const colors = ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934']; 

export const state = proxy<StoreType>({
    materials: MaterialTypes.default,
    tableHeight: TableHeightTypes.default,
    tableCoverColor: colors[2],
    tableLegsColor: {
        r:0,
        g:0,
        b:0
    },
});

export const updateTableHeight = (heightType: TableHeightTypes) => state.tableHeight = heightType;
export const updateTableCoverColor= (colorIndex: number) => state.tableCoverColor = colors[colorIndex];
export const updateTableMaterial= (type: MaterialTypes) => state.materials = type;