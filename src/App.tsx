import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AppContext } from "@/store/app-context";
import Store from "@/store";
import { setPermissionRouter } from "./routes/utils/setPermissionRouter";
import { NProgressLoading } from "@/compontents";
import { getAdminMenus } from "./service";
import type { Route } from "./types/router";
import { useLocalStore } from "mobx-react";
import "./App.css";

const App = () => {
    const store = useLocalStore(() => new Store());
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
        <AppContext.Provider value={{ menus, store }}>
            <RouterProvider router={router} />
        </AppContext.Provider>
    );
};

export default App;
