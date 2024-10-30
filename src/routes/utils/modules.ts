export type PageModule = () => Promise<{ default: any }>;

// 获取文件模块
const modules = import.meta.glob(["@/pages/*/index.tsx", "@/pages/chat/*/index.tsx"]) as {
    [path: string]: PageModule;
};

export default modules;
