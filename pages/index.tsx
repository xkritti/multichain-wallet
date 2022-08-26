import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { loginMember } from "./api/hello";

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorSms, setErrorSms] = useState<string>("");
  const router = useRouter();

  const LoginHandler = async (user: any) => {
    console.log("user : ", user);
    const data = await loginMember({
      email: user.username,
      password: user.password,
    });

    const data1 = {
      email: "the.zerose@gmail.com",
      password: "11111111",
      walletdata: {
        data: {
          address: "0xd0FB24BDB82a14dbA8DeE19A8Ef0824C985158f5",
          mnemonicPhrase:
            "master will picture long device broken hour poem primary sand soccer connect",
          privateKey:
            "0x3c50445079883356b7020e40411394680094ab46eaa6f87f26313a365384dbfc",
        },
      },
    };

    if (data) {
      localStorage.setItem("user", JSON.stringify(data.data.walletdata.data));
      router.push("/dashboard");
    }
    console.log("data : ", data.data.walletdata.data);
  };

  return (
    <div className="login-bg">
      <div className="container mx-auto">
        <div className="w-full flex flex-wrap h-screen">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center mx-auto login-form">
            <div className="w-full flex flex-col justify-center md:justify-start mx-auto my-auto px-14 bg-white rounded-xl py-16 md:max-w-[448px]">
              <img src="/logo.png" className="w-[11rem] md:w-[182px] " />
              <p className="text-xl lg:text-[27px] text-gray font-bold mt-10 text-black">
                Sign in to Multichain
              </p>
              <div className="w-full">
                <Form
                  className="flex flex-col pt-3 md:pt-8"
                  initialValues={{ remember: false }}
                  onFinish={LoginHandler}
                  //fields={fields}
                >
                  <span className="text-danger">{errorSms}</span>

                  <div className="flex flex-col pt-4">
                    <label className="text-xs md:text-base text-gray">
                      Username
                    </label>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input
                        className="appearance-none bg-white rounded-lg h-14 w-full mb-0 px-3 text-gray-300 mt-1 leading-tight focus:outline-none focus:shadow-outline border-lightGray"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        value={email}
                        placeholder="Your email address"
                      />
                    </Form.Item>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs md:text-base text-gray">
                      Password
                    </label>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                      className="my-0 text-gray"
                    >
                      <Input.Password
                        className="appearance-none bg-white rounded-lg h-14 w-full mb-0 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline py-0 border-lightGray"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Your password"
                      />
                    </Form.Item>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="w-1/2"></div>
                    <div className="w-1/2 text-right">
                      <Link href="/forgot-password">
                        <a className="text-[12px] md:text-xs md:text-base text-gray">
                          Forgot your password?
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col pt-4">
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full rounded-full h-14 bg-gradient-to-r from-bgradian1 to-bgradian2 text-[16px]"
                      >
                        Login
                      </Button>
                    </Form.Item>
                  </div>
                  <div className="flex flex-col pt-4 text-center text-primary">
                    <p>Sign up to mutichain account</p>
                    <p className="mt-1">Terms | Policy</p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
