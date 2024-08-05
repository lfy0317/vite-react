import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Suspense fallback={<div />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default DefaultLayout;
