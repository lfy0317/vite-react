import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Menu } from "antd";
import type { MenuProps } from "antd";
import Icon, { PlusOutlined } from "@ant-design/icons";
import chatRouter from "@/routes/chatRouter";
import css from "./ChatLayoutSider.module.less";
import KnowledgeIcon from "@/icons/KnowledgeIcon.svg?react";
import DatabaseIcon from "@/icons/DatabaseIcon.svg?react";

const items: MenuProps["items"] = chatRouter.map(item => {
    return {
        key: item.route,
        icon: React.createElement(item.icon),
        label: item.name
    };
});

export default function ChatLayoutSider() {
    console.log(css);

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const onClickMenu: MenuProps["onClick"] = ({ key }) => {
        navigate(key);
    };

    return (
        <div className={css.chatLayoutSiderWrapper}>
            <div className={css.logoVertical}>
                <img src="/src/assets/logo.png" height={42} />
            </div>
            <div className={css.createChatBtnWrapper}>
                <Button type="primary" block icon={<PlusOutlined />} className={css.createChatBtn}>
                    新建对话
                </Button>
            </div>
            <div className={css.conversations}>
                <div className={css.conversationsContent}>会话列表</div>
                <Menu
                    className={css.chatLayoutSiderMenu}
                    mode="inline"
                    defaultSelectedKeys={[pathname]}
                    items={items}
                    theme="dark"
                    onClick={onClickMenu}
                />
            </div>
            <div className={css.footer}>
                <div className={css.footerRow}>
                    <Icon component={KnowledgeIcon} className={css.icon} />
                    知识库会话
                    <Button
                        icon={<PlusOutlined style={{ fontSize: 12 }} />}
                        type="primary"
                        size="small"
                        shape="circle"
                        className={css.addBtn}
                    />
                </div>
                <div className={css.footerRow}>
                    <Icon component={DatabaseIcon} className={css.icon} />
                    数据库会话
                    <Button
                        icon={<PlusOutlined style={{ fontSize: 12 }} />}
                        type="primary"
                        size="small"
                        shape="circle"
                        className={css.addBtn}
                    />
                </div>
            </div>
        </div>
    );
}
