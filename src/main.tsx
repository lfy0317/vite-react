import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import zh_CN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                cssVar: { prefix: "fufan" },
                hashed: false,
                token: {
                    colorPrimary: "#005A4E",
                    // colorPrimaryHover: "#005A4E",
                    colorSuccess: "#37B375",
                    colorError: "#F56C6C",
                    colorBgLayout: "#0E2625"
                },
                components: {
                    Layout: {
                        siderBg: "#012D2C"
                    },
                    Menu: {
                        darkItemBg: "#012D2C"
                    }
                }
            }}
            locale={zh_CN}
            wave={{ disabled: true }}
        >
            <App />
        </ConfigProvider>
    </React.StrictMode>
);
