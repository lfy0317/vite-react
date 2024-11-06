import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Spin, theme } from "antd";
import ChatLayoutSider from "@/pages/chat/compontents/ChatLayoutSider";

const { Sider, Content } = Layout;

function ChatLayout() {
    const [collapsed] = useState<boolean>(false);
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    // backgroundImage: "url('assets/bg.png')"
    return (
        <Layout hasSider style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed} width={208}>
                <ChatLayoutSider />
            </Sider>
            <Layout>
                <Content style={{ margin: "24px 16px", overflow: "initial" }}>
                    <div
                        style={{
                            padding: 24,
                            textAlign: "center",
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG
                        }}
                    >
                        <Suspense fallback={<Spin />}>
                            <Outlet />
                        </Suspense>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default ChatLayout;
