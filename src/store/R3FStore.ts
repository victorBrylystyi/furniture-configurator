import { RootState, useStore } from '@react-three/fiber';
import { StoreApi, UseBoundStore } from 'zustand';

export const R3FRef: { current: UseBoundStore<StoreApi<RootState>> | null } = { current: null };

export const R3FStoreProvider= () => {

    R3FRef.current = useStore() as unknown as UseBoundStore<StoreApi<RootState>>; 

    return null;
};
