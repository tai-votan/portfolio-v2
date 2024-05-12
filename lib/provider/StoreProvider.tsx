"use client";

import { type PropsWithChildren, useRef } from "react";
import { initializeStore, Provider } from "@/lib/zustand/store";
import { type StoreType } from "@/lib/zustand/types";

export const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
    const storeRef = useRef<StoreType>();

    if (!storeRef.current) {
        storeRef.current = initializeStore(props);
    }

    return <Provider value={storeRef.current}>{children}</Provider>;
};
