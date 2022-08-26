import { Popover } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
//import useUserStore from "../../store/user";

type Props = {};

export default function HeaderTemplate({}: Props) {
  // const avatarStore = useUserStore((state) => state.avatar);
  // const usernameStore = useUserStore((state) => state.username);
  // const userIdStore = useUserStore((state) => state.userId);
  // const roleStore = useUserStore((state) => state.role);
  // const firstNameStore = useUserStore((state) => state.firstname);
  // const lastNameStore = useUserStore((state) => state.lastname);
  // const emailStore = useUserStore((state) => state.email);

  const [userDisplayAddress, setUserDisplayAddress] = useState("");
  const [userMnemonic, setUserMnemonic] = useState("");
  const [userPrivateKey, setUserPrivateKey] = useState("");

  const router = useRouter();
  // const setLogoutData = useUserStore((state) => state.setDefaultData);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user") as string);
    if (items) {
      const text1 = items.address.substring(0, 6);
      const text2 = items.address.slice(-4);
      setUserDisplayAddress(text1 + "..." + text2);
    }
  }, []);

  // const userLogout = () => {
  //   setLogoutData();
  //   setTimeout(() => {
  //     router.push("/login");
  //   }, 1000);
  // };

  return (
    <>
      <Header
        className="flex site-layout-sub-header-background bg-white py-3 h-[58px] mb-1 lg:my-6 lg:h-12 header-shadow"
        style={{ padding: 0 }}
      >
        <div className="flex flex-wrap w-3/6 content-center bg-white pl-10">
          <img src="/logo.png" className="h-9 lg:hidden" />
        </div>
        <Popover trigger="hover" placement="bottomRight">
          <div className="flex flex-wrap w-3/6 justify-end content-center relative">
            <div className="flex flex-wrap">
              <div className="rounded-lg  mr-2 lg:w-[142px] h-[36px] bg-[#F5F7FC]">
                <p className="text-[14px] font-bold text-center leading-[30px]">
                  {userDisplayAddress}
                </p>
              </div>
            </div>
          </div>
        </Popover>
      </Header>
    </>
  );
}
