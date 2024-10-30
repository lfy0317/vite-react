import modules from "./modules";

const components = Object.keys(modules).reduce<Record<string, any>>((prev, cur) => {
    const filePath = cur.replace("/src/pages", "@/pages");
    prev[filePath] = modules[cur];
    return prev;
}, {});

export default components;
