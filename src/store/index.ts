
import { proxy } from "valtio";
import { MaterialTypes, StoreType, TableHeightTypes, TVContentTypes } from "../helpers/types";
import { WebGLRenderTarget } from "three";

export const colors = ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934']; 

export const state = proxy<StoreType>({
    materials: MaterialTypes.default,
    tableHeight: TableHeightTypes.default,
    tableCoverColor: colors[0],
    rt: null,
    tvContent: TVContentTypes.video
});

export const updateTableHeight = (heightType: TableHeightTypes) => state.tableHeight = heightType;
export const updateTableCoverColor= (colorIndex: number) => state.tableCoverColor = colors[colorIndex];
export const updateTableMaterial= (type: MaterialTypes) => state.materials = type;
export const setRT = (rt: WebGLRenderTarget) => state.rt = rt;
export const updateTVcontentType = (status: boolean) => state.tvContent = status ? TVContentTypes.html : TVContentTypes.video;
