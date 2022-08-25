import { Menu, Image } from "antd";
import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { MailOutlined } from "@ant-design/icons";

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

// const DEFAULT_MENU_ITEM:any = MenuListDefault

export default function MenuTemplate({ collapsedHandlerProp }: Props) {
  // const projectStore = useUserStore((state) => state.projectList);
  // const activeProjectStore = useUserStore((state) => state.activeProject);
  // const roleStore = useUserStore((state) => state.role);
  // const setActiveProjectStore = useUserStore((state) => state.setActiveProject);
  // const [itemProjectMenu, setItemProjectMenu] = useState<MenuItem[]>();
  // const router = useRouter();

  // useEffect(() => {
  //   const userProject = projectStore.map((item: ProjectResInterface) => {
  //     const logo: string = `/${item.name}-logo.png`;
  //     const id: string = item.id;
  //     return getItem(item.name, item.id, <ImageIconWithErrorHandler logo={logo} width={"18px"}  />);
  //   });

  //   if (activeProjectStore !== "") {
  //     const defaultProject = projectStore.filter(
  //       (item) => item.id === activeProjectStore
  //     );
  //     const logo: string = `/${defaultProject[0].name}-logo.png`;
  //     items = [
  //       getItem(defaultProject[0].name, "sub1", <ImageIconWithErrorHandler logo={logo} width={"18px"}  />, userProject),
  //     ];
  //   } else {
  //     items = [
  //       getItem("Project", "sub1", <MailOutlined />, userProject),
  //     ];
  //   }

  //   let topRoleLevel = 'general';
  //   for (const key in DEFAULT_MENU_ITEM) {
  //       const checkRole = roleStore.filter(item => item.name === key);
  //       if(checkRole.length){
  //           topRoleLevel = key;
  //           break;
  //       }
  //   }

  //   DEFAULT_MENU_ITEM[topRoleLevel].forEach((element: DEFAULTMENUITEMDATA) => {

  //     let itemSub: any = []
  //     if(element.children && element.children.length > 0){
  //       element.children.forEach((element2:any) => {
  //         itemSub.push(getItem(element2.label, element2.key))
  //       })

  //     }

  //     if(itemSub.length > 0){
  //       items.push(getItem(element.label, element.key, <ProjectIcon pic={element.icon} />, itemSub))
  //     }else{
  //       items.push(getItem(element.label, element.key, <ProjectIcon pic={element.icon} />))
  //     }

  //   });

  //   setItemProjectMenu(items);
  // }, [projectStore, activeProjectStore, roleStore]);

  // const switchPathUrl = (key: string) => {
  //   switch (key) {
  //     case CustomMenu.dashboard:
  //       router.push("/");
  //       break;
  //     case CustomMenu.cost:
  //       router.push("/reports/costs");
  //       break;
  //     case CustomMenu.income1:
  //       router.push("/reports/incomes");
  //       break;
  //     case CustomMenu.income2:
  //       router.push("/reports/incomes-api");
  //       break;
  //     case CustomMenu.costManagement:
  //       router.push("/costs");
  //       break;
  //     case CustomMenu.incomeManagement:
  //       router.push("/income");
  //       break;
  //     case CustomMenu.userManagement:
  //       router.push("/users");
  //       break;
  //     default:
  //       setActiveProjectStore(key);
  //       router.push("/");
  //       break;
  //   }

  //   collapsedHandlerProp()
  // };

  return (
    <>
      <Menu>
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>item 2</Menu.Item>

      </Menu>
      ;
    </>
  );
}
