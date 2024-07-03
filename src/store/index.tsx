
import { proxy } from "valtio";
import { StoreType } from "../helpers/types";

export const state = proxy<StoreType>({
    tableCoverColor: {
        r:255,
        g:255,
        b:255
    },
    tableLegsColor: {
        r:0,
        g:0,
        b:0
    },
});