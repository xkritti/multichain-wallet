import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";

//import { getLoginApi, getLoginStatus } from "./api/auth";
//import { FieldData } from "./../interface/fielddata.interface";
//import useUserStore from "../store/user";

type Props = {};

export default function Login({}: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //const [fields, setFields] = useState<FieldData[]>();
  const [remember, setRemember] = useState<boolean>(false);
  const [errorSms, setErrorSms] = useState<string>("");
  const router = useRouter();

  //const loadUserData = useUserStore((state) => state.setAllData);
  //const jwtStore = useUserStore((state) => state.jwt);

  // useEffect(() => {
  //   (async () => {
  //     if (jwtStore) {
  //       const userStatus = await getLoginStatus(jwtStore);
  //       if (userStatus) {
  //         if (userStatus.statusCode === 200) {
  //           await router.push("/");
  //         }
  //       }
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   /* Load email password from remember func */
  //   let rememberEmail: any = localStorage.getItem("remember_email");
  //   if (rememberEmail === null) {
  //     rememberEmail = "";
  //   }

  //   let rememberPassword: any = localStorage.getItem("remember_password");
  //   if (rememberPassword === null) {
  //     rememberPassword = "";
  //   }

  //   setEmail(rememberEmail);
  //   setPassword(rememberPassword);

  //   //set data in input text box
  //   let fieldData: FieldData[] = [];
  //   fieldData.push({ name: ["username"], value: rememberEmail });
  //   fieldData.push({ name: ["password"], value: rememberPassword });

  //   setFields(fieldData);
  // }, []);

  // const saveRememberInfo = () => {
  //   if (remember) {
  //     localStorage.setItem("remember_email", email);
  //     localStorage.setItem("remember_password", password);
  //   }
  // };

  // const LoginHandler = async (e: SyntheticEvent) => {
  //   saveRememberInfo();
  //   const loginStatus = await getLoginApi(email, password);

  //   if (loginStatus) {
  //     loadUserData({
  //       jwt: loginStatus.accessToken,
  //       username: loginStatus.firstname + " " + loginStatus.lastname,
  //       firstname: loginStatus.firstname,
  //       lastname: loginStatus.lastname,
  //       email: loginStatus.email,
  //       avatar: loginStatus.firstname.charAt(0),
  //       role: loginStatus.role,
  //       projectList: loginStatus.projectInfo,
  //       userId: loginStatus.id,
  //       logintime: Date.now(),
  //     });

  //     await router.push("/");
  //   }

  //   setErrorSms("Sorry, unrecognized username or password.");
  //   return false;
  // };

  return (
    <div className="login-bg">
      <div className="container mx-auto">
        <div className="w-full flex flex-wrap h-screen">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center mx-auto login-form">
            <div className="w-full flex flex-col justify-center md:justify-start mx-auto my-auto px-14 bg-white rounded-xl py-16 md:max-w-[448px]">
              <img
                src="/logo.png"
                className="w-[11rem] md:w-[182px] "
              />
              <p className="text-xl lg:text-[27px] text-gray font-bold mt-10">
                Sign in to Multichain
              </p>
              <div className="w-full">
                <Form
                  className="flex flex-col pt-3 md:pt-8"
                  initialValues={{ remember: false }}
                  //onFinish={LoginHandler}
                  //fields={fields}
                >
                  <span className="text-danger">{errorSms}</span>

                  <div className="flex flex-col pt-4">
                    <label className="text-xs md:text-base text-gray">Username</label>
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
                    <label className="text-xs md:text-base text-gray">Password</label>
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
                    <div className="w-1/2">

                    </div>
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
