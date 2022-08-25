import React, { ReactNode, useState } from "react";
import { MenuOutlined, CloseOutlined, MailOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Toaster } from "react-hot-toast";

import HeaderTemplate from "../../components/ui/header";
import MenuTemplate from "../../components/ui/menu";
//import getWindowWidth from "../../helpers/window";

const { Header, Sider, Content, Footer } = Layout;

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const [collapsed1, setCollapsed1] = useState(true);

  const CustomTrigger = () => {
    return collapsed ? <CloseOutlined /> : <MenuOutlined />;
    
  };
  const collapsedHandler = () => {
    // if(getWindowWidth() < 1100) {
    //   setCollapsed(!collapsed)
    // }
  }

  return (
    <div className="bg-gray1">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full lg:px-[75px] mx-auto">
        <div className="w-full flex flex-wrap h-screen">
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                //console.log("broken", broken);
              }}
              // onCollapse={(collapsed, type) => {
              //   setCollapsed(!collapsed);
              //   console.log("collapsed", collapsed, type);
              // }}
              className="side-menu bg-white w-[272px] border-r-2 border-[#F5F5F5]"
              width="272"
              trigger={<CustomTrigger />}
              // collapsible
              // collapsed={!collapsed}
            >
              <div className="flex flex-wrap content-center logo my-3 h-9 my-5 md:my-6 md:h-12 bg-gray1">
                <img src="/logo.png" className="ml-5 md:mx-auto lg:ml-0 h-9" />
              </div>

              <MenuTemplate collapsedHandlerProp={collapsedHandler} />

            </Sider>
            <Layout className="bg-white">
              <HeaderTemplate />

              <Content className="bg-gray1 md:pl-4 pt-5 px-2 lg:pt-0 text-xs md:text-sm bg-[#F5F5F5]">
                <div className="w-full rounded-2xl bg-white h-full mt-3">
                  <img src="/dashboard-main.jpg" className="w-full" />
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    </div>
  );
}
