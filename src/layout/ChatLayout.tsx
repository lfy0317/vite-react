import React, { Suspense, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Spin, theme, Button } from "antd";
import type { MenuProps } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
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
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const navigate = useNavigate();

  const onClickMenu: MenuProps["onClick"] = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout hasSider style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px" }}
          />
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
