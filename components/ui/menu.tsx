import { Menu, Image, Divider } from "antd";
import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import {
  HomeOutlined,
  LayoutOutlined,
  InsertRowBelowOutlined,
  LineChartOutlined,
  FileTextOutlined,
  DollarCircleOutlined,
  SettingOutlined,
  SendOutlined,
  InboxOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

type Props = {
  collapsedHandlerProp: () => void;
};

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

let items: MenuItem[];

interface DEFAULTMENUITEMDATA {
  label: string;
  key: string;
  icon: string;
  children: [];
}

export default function MenuTemplate({ collapsedHandlerProp }: Props) {
  return (
    <>
      <Menu>
        <Menu.Item className="flex items-center" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item className="flex items-center" icon={<LayoutOutlined />}>
          NFT
        </Menu.Item>
        <Menu.Item
          className="flex items-center"
          icon={<InsertRowBelowOutlined />}
        >
          dApps
        </Menu.Item>
        <Menu.Item className="flex items-center" icon={<LineChartOutlined />}>
          Steaking Rewards
        </Menu.Item>
        <Menu.Item className="flex items-center" icon={<FileTextOutlined />}>
          Multichian News
        </Menu.Item>
        <Menu.Item
          className="flex items-center"
          icon={<DollarCircleOutlined />}
        >
          Token Bridge
        </Menu.Item>
        <Menu.Item
          className="flex items-center"
          icon={<DollarCircleOutlined />}
        >
          NFT Bridge
        </Menu.Item>
        <Menu.Item className="flex items-center" icon={<SettingOutlined />}>
          Wallet Setting
        </Menu.Item>
      </Menu>
      <Divider />
      <Menu>
        <Menu.Item className="flex items-center" icon={<SendOutlined />}>
          Send
        </Menu.Item>
        <Menu.Item className="flex items-center" icon={<InboxOutlined />}>
          Receive
        </Menu.Item>
        <Menu.Item className="flex items-center" icon={<DatabaseOutlined />}>
          Resource
        </Menu.Item>
      </Menu>
    </>
  );
}
