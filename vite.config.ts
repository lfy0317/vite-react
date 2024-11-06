import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr({ svgrOptions: { icon: true } })],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    css: {
        modules: {
            hashPrefix: "prefix", // 增加随机前缀，避免样式冲突
            generateScopedName: "[name]__[local]__[hash:base64:5]" // 默认为 [local]__[hash:base64:5]
        },
        preprocessorOptions: {
            less: {
                math: "parens-division", // 使用括号包裹除法
                javascriptEnabled: true
            }
        }
    }
});
