import { StateCreator } from "zustand";
import { State, Actions } from "@/lib/zustand/types";

import { navSlice } from "./navSlice";

const slices: StateCreator<State & Actions, [["zustand/devtools", never]], []> = (...arg) => ({
    ...navSlice(...arg),
});

export default slices;
