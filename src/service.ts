import { pagePermissionRouter, pageRouter } from "./routes/pageRouter";
import type { Route } from "./types/router";

/**
 * 模拟服务端返回权限路由
 * @returns
 */
export const getAdminMenus = (): Promise<Route[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(pagePermissionRouter);
    }, 1000);
  });
};

export const getUserMenus = (): Promise<Route[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(pageRouter);
    }, 1000);
  });
};
