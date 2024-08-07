import { RouterPath } from "./routerConfig";

const pagePermissionRouter = [
  {
    name: "page1",
    route: "/page/page1",
    filePath: "/page1/index.tsx"
  },
  {
    name: "page2",
    route: "/page/page2",
    filePath: "/page2/index.tsx"
  },
  {
    name: "page3",
    route: "/page/page3",
    filePath: "/page3/index.tsx"
  }
];

const pageRouter = [
  {
    name: "page1",
    route: "/page/page1",
    filePath: "/page1/index.tsx"
  }
];

const page4Router = [
  {
    name: "page4",
    route: RouterPath.PAGE_4,
    filePath: "/page4/index.tsx"
  }
];

export { pagePermissionRouter, pageRouter, page4Router };
