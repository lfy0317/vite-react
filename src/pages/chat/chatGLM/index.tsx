import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChatInput } from "../compontents/ChatInput";
import { observer } from "mobx-react";

const ChatGLM = observer(() => {
    // 获取 route 对象参数
    const params = useParams();

    useEffect(() => {
        console.info(params);
    }, [params]);

    return (
        <div>
            Chat GLM
            <ChatInput />
        </div>
    );
});

export default ChatGLM;
