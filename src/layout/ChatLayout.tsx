import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import { Loading } from "../compontents/Loading";

function ChatLayout() {
  return (
    <Suspense fallback={<div />}>
      <Outlet />
    </Suspense>
  );
}

export default ChatLayout;
