"use client";

import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";
import { devtools, redux } from "zustand/middleware";
import { type State, type Actions, type StoreType } from "./types";
import slices from "./slices";

const zustandContext = createContext<StoreType | null>(null);

export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: State & Actions) => T) => {
    const store = useContext(zustandContext);

    if (!store) throw new Error("Store is missing the provider");

    return useZustandStore(store, selector);
};

export const initializeStore = (preloadedState: Partial<State & Actions> = {}) => {
    return createStore<State & Actions>()(
        devtools(
            (...arg) => ({
                ...preloadedState,
                ...slices(...arg),
            }),
            {
                enabled: process.env.NODE_ENV !== "production",
            },
        ),
    );
};
