import { lazy } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { RouterContext } from "./router-context";
import { RouterPath } from "./routerConfig";
import { Layout, ChatLayout } from "../layout";
import NotFound from "../NotFound";
import Page4 from "../pages/page4";
import type { Route } from "../types/router";

const modules = import.meta.glob("../pages/*/index.tsx") as Record<string, () => Promise<any>>;
const components = Object.keys(modules).reduce<Record<string, any>>((prev, cur) => {
  prev[cur.replace("../pages", "")] = modules[cur];
  return prev;
}, {});

const router: any = createBrowserRouter(
  [
    {
      path: RouterPath.ROOT,
      loader: () => {
        if (location.pathname === RouterPath.ROOT) {
          return redirect(RouterPath.CHAT);
        }
        return true;
      }
    },
    {
      path: RouterPath.PAGE,
      Component: Layout,
      loader: () => {
        if (location.pathname === RouterPath.PAGE) {
          return redirect("/page/page1");
        }
        return true;
      },
      children: []
    },
    {
      path: RouterPath.PAGE_4,
      Component: Page4
    },
    {
      path: RouterPath.CHAT,
      Component: ChatLayout,
      children: [
        {
          path: RouterPath.CHAT_ID,
          Component: lazy(components["/chat/index.tsx"])
        }
      ]
    },
    {
      path: RouterPath.NOT_FOUND,
      Component: NotFound
    }
  ],
  {
    future: {
      v7_normalizeFormMethod: true
    }
  }
);

// 设置 / 下的动态路由
function setPermissionRouter(routes: Route[]) {
  console.info(components);
  // 获取菜单后动态添加路由
  router.routes[1].children = routes.map(item => ({
    path: item.route,
    Component: lazy(components[item.filePath])
  }));
}

export { router, components, RouterContext, setPermissionRouter, RouterPath };
