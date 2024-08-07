import { lazy } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { RouterContext } from "./router-context";
import { RouterPath } from "./routerConfig";
import { Layout, ChatLayout } from "../layout";
import NotFound from "../NotFound";
import { page4Router } from "./pageRouter";
import chatRouter from "./chatRouter";
import type { Route } from "../types/router";

const modules = import.meta.glob(["../pages/*/index.tsx", "../pages/chat/*/index.tsx"]) as Record<
  string,
  () => Promise<any>
>;
const components = Object.keys(modules).reduce<Record<string, any>>((prev, cur) => {
  prev[cur.replace("../pages", "")] = modules[cur];
  return prev;
}, {});

// 生成路由
function generateRoutes(routes: Route[]) {
  return routes.map(item => ({
    path: item.route,
    Component: lazy(components[item.filePath])
  }));
}

const router: any = createBrowserRouter(
  [
    ...generateRoutes(page4Router),
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
      path: RouterPath.CHAT,
      Component: ChatLayout,
      // loader: () => {
      //   if (location.pathname === RouterPath.CHAT) {
      //     return redirect(RouterPath.CHAT_GLM);
      //   }
      //   return true;
      // },
      children: [
        // {
        //   path: RouterPath.CHAT_ID,
        //   Component: lazy(components["/chat/index.tsx"])
        // },
        ...generateRoutes(chatRouter)
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
  router.routes[1].children = generateRoutes(routes);
}

export { router, components, RouterContext, generateRoutes, setPermissionRouter, RouterPath };
