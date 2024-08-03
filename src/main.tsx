import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import zh_CN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={{ cssVar: true }} locale={zh_CN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
