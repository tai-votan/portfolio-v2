import { initializeStore } from "./store";
import { Nav } from "./slices/navSlice";

export type State = Nav.State;

export type Actions = Nav.Actions;

export type StoreType = ReturnType<typeof initializeStore>;
