import { StateCreator } from "zustand";
import { Actions, State } from "@/lib/zustand/types";

export namespace Nav {
    export type State = {
        isOpen: boolean;
        isScroll: boolean;
    };

    export type Actions = {
        openNav: () => void;
        setScroll: (isScroll: boolean) => void;
    };
}

export const navSlice: StateCreator<State & Actions, [["zustand/devtools", never]], [], Nav.State & Nav.Actions> = (
    set,
    get,
) => ({
    isOpen: false,
    isScroll: false,
    openNav: () => {
        set({ isOpen: !get().isOpen }, false, "nav/openNav");
    },
    setScroll: (isScroll) => {
        set({ isScroll }, false, "nav/setScroll");
    },
});
