import { Suspense, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { RouterContext } from "../routes/router-context";

function Layout() {
  const { menus } = useContext(RouterContext);

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <ul>
        {menus.map(item => (
          <li key={item.route}>
            <Link to={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Suspense fallback={<div>loading。。。</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
