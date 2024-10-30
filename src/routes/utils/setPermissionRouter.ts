import components from "./components";
import generateRoutes from "./generateRoutes";
import type { Route } from "@/types/router";
import router from "../index";

// 设置 / 下的动态路由
export function setPermissionRouter(routes: Route[]) {
    console.info(components);
    // 获取菜单后动态添加路由
    router.routes[1].children = generateRoutes(routes);
}
