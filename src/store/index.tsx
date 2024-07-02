
import { proxy } from "valtio";
import { StoreType } from "../helpers/types";

export const state = proxy<StoreType>({
    tableCoverColor: {
        r:0,
        g:0,
        b:255
    }
});