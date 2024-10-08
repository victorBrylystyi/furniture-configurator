
import { proxy } from "valtio";
import { MaterialTypes, PresetsType, StoreType, TableHeightTypes, TVContentTypes } from "../helpers/types";

export const colors = ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934']; 
 

export const state = proxy<StoreType>({
    materials: MaterialTypes.default,
    tableHeight: TableHeightTypes.default,
    tableCoverColor: colors[0],
    tvContent: TVContentTypes.video,
    envPresets: PresetsType.city
});

export const updateTableHeight = (heightType: TableHeightTypes) => state.tableHeight = heightType;
export const updateTableCoverColor= (colorIndex: number) => state.tableCoverColor = colors[colorIndex];
export const updateTableMaterial= (type: MaterialTypes) => state.materials = type;
export const updateTVcontentType = (status: boolean) => state.tvContent = status ? TVContentTypes.html : TVContentTypes.video;
export const updateEnvPreset= (env: PresetsType) => state.envPresets = env;