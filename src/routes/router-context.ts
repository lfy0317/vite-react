import React from "react";
import type { Route } from "../types/router";

export const RouterContext = React.createContext<{ menus: Route[] }>({
  menus: []
});
