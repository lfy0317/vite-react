import type { Route } from "./types/router";

export const getAdminMenus = (): Promise<Route[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          name: "page1",
          route: "/page1",
          filePath: "/page1/index.tsx"
        },
        {
          name: "page2",
          route: "/page2",
          filePath: "/page2/index.tsx"
        },
        {
          name: "page3",
          route: "/page3",
          filePath: "/page3/index.tsx"
        }
      ]);
    }, 1000);
  });
};

export const getUserMenus = (): Promise<Route[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          name: "page1",
          route: "/page1",
          filePath: "/page1/index.tsx"
        }
      ]);
    }, 1000);
  });
};
