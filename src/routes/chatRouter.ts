import { WechatWorkOutlined, SearchOutlined } from "@ant-design/icons";
import { RouterPath } from "./routerConfig";

const chatRouter = [
  {
    name: "ChatGLM",
    route: RouterPath.CHAT_GLM,
    filePath: "@/pages/chat/chatGLM/index.tsx",
    icon: WechatWorkOutlined
  },
  {
    name: "AI搜索",
    route: RouterPath.CHAT_AI_SEARCH,
    filePath: "@/pages/chat/AISearch/index.tsx",
    icon: SearchOutlined
  }
];

export default chatRouter;
