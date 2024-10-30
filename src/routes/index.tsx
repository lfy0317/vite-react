import { createBrowserRouter, redirect } from "react-router-dom";
import { RouterPath } from "./routerConfig";
import { Layout, ChatLayout } from "../layout";
import NotFound from "../NotFound";
import { page4Router } from "./pageRouter";
import chatRouter from "./chatRouter";
import generateRoutes from "./utils/generateRoutes";

const router: any = createBrowserRouter(
    [
        ...generateRoutes(page4Router),
        {
            path: RouterPath.ROOT,
            loader: () => {
                if (location.pathname === RouterPath.ROOT) {
                    return redirect(RouterPath.CHAT_GLM);
                }
                return true;
            }
        },
        {
            path: RouterPath.PAGE,
            Component: Layout,
            // loader: () => {
            //   if (location.pathname === RouterPath.PAGE) {
            //     return redirect("/page/page1");
            //   }
            //   return true;
            // },
            children: []
        },
        {
            path: RouterPath.CHAT,
            Component: ChatLayout,
            // loader: () => {
            //     if (location.pathname === RouterPath.CHAT) {
            //       return redirect(RouterPath.CHAT_GLM);
            //     }
            //     return true;
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

export default router;
