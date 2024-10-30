import React, { Suspense, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Spin, theme, Button } from "antd";
import type { MenuProps } from "antd";
// import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import "./index.css";
import chatRouter from "@/routes/chatRouter";
// import { NProgressLoading } from "../compontents/NProgressLoading";

const { Sider, Content } = Layout;

const items: MenuProps["items"] = chatRouter.map(item => {
    return {
        key: item.route,
        icon: React.createElement(item.icon),
        label: item.name
    };
});

function ChatLayout() {
    const { pathname } = useLocation();
    const [collapsed] = useState<boolean>(false);
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();
    const navigate = useNavigate();

    const onClickMenu: MenuProps["onClick"] = ({ key }) => {
        navigate(key);
    };

    return (
        <Layout hasSider style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed} width={240}>
                <div className="demo-logo-vertical">
                    {/* <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: "16px" }}
                    /> */}
                    <img src="/src/assets/logo.png" height={42} />
                </div>
                <div className="create-chat-btn-wrapper">
                    <Button type="primary" block icon={<PlusOutlined />} className="create-chat-btn">
                        新建对话
                    </Button>
                </div>
                <Menu mode="inline" defaultSelectedKeys={[pathname]} items={items} theme="dark" onClick={onClickMenu} />
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
