import React from "react";
import Store from "@/store";
import type { Route } from "../types/router";

export const AppContext = React.createContext<{ menus: Route[]; store: Store | null }>({
    menus: [],
    store: null
});
