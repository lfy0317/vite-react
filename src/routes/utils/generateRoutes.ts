import { lazy } from "react";
import type { Route } from "@/types/router";
import components from "./components";

// 生成路由
export default function generateRoutes(routes: Route[]) {
    return routes.map(item => ({
        path: item.route,
        Component: lazy(components[item.filePath])
    }));
}
