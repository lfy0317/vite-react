import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterContext } from "./router-context";
import { RouterPath } from "./routerConfig";
import { DefaultLayout, Layout } from "../layout";
import NotFound from "../NotFound";
import Page4 from "../pages/page4";
import type { Route } from "../types/router";

const modules = import.meta.glob("../pages/*/index.tsx") as Record<string, () => Promise<any>>;
const components = Object.keys(modules).reduce<Record<string, any>>((prev, cur) => {
  prev[cur.replace("../pages", "")] = modules[cur];
  return prev;
}, {});

const router = createBrowserRouter([
  {
    path: RouterPath.ROOT,
    Component: Layout,
    children: []
  },
  {
    path: RouterPath.PAGE_4,
    Component: Page4
  },
  {
    path: RouterPath.CHAT,
    Component: DefaultLayout,
    children: [
      {
        path: RouterPath.CHAT,
        Component: lazy(components["/page4/index.tsx"])
      }
    ]
  },
  {
    path: RouterPath.NOT_FOUND,
    Component: NotFound
  }
]) as any;

// 设置 / 下的动态路由
function setPermissionRouter(routes: Route[]) {
  console.info(components);
  // 获取菜单后动态添加路由
  router.routes[0].children = routes.map(item => ({
    path: item.route,
    Component: lazy(components[item.filePath])
  })) as any;
}

export { router, components, RouterContext, setPermissionRouter, RouterPath };
