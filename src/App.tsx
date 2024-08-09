import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router, RouterContext, setPermissionRouter } from "./routes";
import { NProgressLoading } from "@/compontents";
import { getAdminMenus } from "./service";
import type { Route } from "./types/router";
import "./App.css";

function App() {
  const [menus, setMenus] = useState<Array<Route>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAdminMenus().then(data => {
      setMenus(data);
      setLoading(false);
      // 获取菜单后动态添加路由
      setPermissionRouter(data);
    });
  }, []);

  if (loading) {
    return <NProgressLoading />;
  }

  return (
    <RouterContext.Provider value={{ menus }}>
      <RouterProvider router={router} />
    </RouterContext.Provider>
  );
}

export default App;
