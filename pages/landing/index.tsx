import { Button, Checkbox, Form, Input, Progress } from "antd";
import SkeletonInput from "antd/lib/skeleton/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const [isLogin, setIsLogin] = useState<number>(0);
  const [passlogin, setPasslogin] = useState<boolean>(false);
  const [isClickSubmit, setIsClickSubmit] = useState<number>(0);
  const [userPrivate, setUserPrivate] = useState<string>("");

  const router = useRouter();

  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('user')as string);
    const passlogin = JSON.parse(localStorage.getItem('userpass')as string);

    if (!items) {
      setIsLogin(0)
      router.push("/")
    }else{
      if(passlogin){
        setIsClickSubmit(1)
        setUserPrivate(items.privateKey)
      }

      setIsLogin(1)
    }
  },[])

  const loginHandler = () => {
    console.log("pass", passlogin)
    if(passlogin){
      localStorage.setItem('userpass', JSON.stringify(1));
      const items = JSON.parse(localStorage.getItem('user')as string);
      setUserPrivate(items.privateKey)
    } else {
      const items = JSON.parse(localStorage.getItem('user')as string);
      setUserPrivate(items.privateKey)
    }
    
    setIsClickSubmit(1)
    
  }

  return (
    <div>
      {isClickSubmit?(
        <div>
        Send data to 3party: {userPrivate}
        </div>
      ):(
        <div>
      <>
      {(isLogin) ? (
        <div className="container mx-auto">
        <div className="w-full flex flex-wrap h-screen">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center mx-auto login-form">
            <div className="w-full flex flex-col justify-center md:justify-start mx-auto my-auto px-14 bg-white rounded-xl py-16 md:max-w-[448px] border-borderGray border-[1px]">
              <img
                src="/logo.png"
                className="mx-auto w-[11rem] md:w-[182px] "
              />
              <p className="text-xl lg:text-[27px] font-bold mt-2 text-center">
              Transaction Request
              </p>
              <div className="w-full mt-8 text-center">
                <div>
                  <Link href="/">
                    <a className="underline">www.multichain.finance</a>
                  </Link>
                  <p className="mt-2 text-gray">Wants you to approve the following :</p>
                </div>
                <div className="mt-8">
                  <p className="font-bold">Know your Multichain Account Name.</p>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="ิborder-primary border-[2px] w-[117px] text-primary mt-4"
                >
                  scjjw.wam
                </Button>
                <div className="mt-8 text-gray">
                      <Checkbox className="text-[13px] text-gray" onChange={()=>setPasslogin(!passlogin)}>Automatically login into www.multichain.finance</Checkbox>
                </div>
                <div className="flex flex-col pt-6">
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={loginHandler}
                    className="w-full rounded-full h-14 bg-gradient-to-r from-bgradian1 to-bgradian2 text-[16px] font-bold"
                  >
                    Login
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full rounded-full h-14 bg-bgray text-[16px] text-black font-bold border-0 mt-4"
                  >
                    Deny
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ):(
        <div className="flex justify-center">
        </div>
      )}
    </>
        </div>
      )}

    </div>
  );
}
