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
    <>
      <div className="container mx-auto">
        <div className="w-full flex flex-wrap h-screen">
          <div className="w-1/2 hidden md:flex h-screen justify-center items-center">
            <img className="w-full hidden md:block" src="/login-bg.png" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center login-form">
            <div className="w-full flex flex-col justify-center md:justify-start my-auto px-8">
              <img
                src="/logo.png"
                className="mx-auto w-[11rem] md:w-[22rem] "
              />
              <p className="text-center text-xl lg:text-5xl text-gray font-light mt-10">
                Welcome to Accounting
              </p>
              <div className="w-full max-w-[23rem] mx-auto">
                <Form
                  className="flex flex-col pt-3 md:pt-8"
                  initialValues={{ remember: false }}
                  //onFinish={LoginHandler}
                  //fields={fields}
                >
                  <span className="text-danger">{errorSms}</span>

                  <div className="flex flex-col pt-4">
                    <label className="text-xs md:text-base">Username</label>
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
                        className="appearance-none border-none bg-secondary rounded-lg h-14 w-full mb-0 px-3 text-gray-300 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        value={email}
                      />
                    </Form.Item>
                  </div>

                  <div className="flex flex-col pt-4">
                    <label className="text-xs md:text-base">Password</label>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password
                        className="appearance-none border-none bg-secondary rounded h-14 w-full mb-0 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </Form.Item>
                  </div>

                  <div className="flex flex-wrap pt-4">
                    <div className="w-1/2">
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        className="mb-0"
                      >
                        <Checkbox
                          className="text-[12px] md:text-xs md:text-base"
                          onChange={() => setRemember(!remember)}
                        >
                          Remember me
                        </Checkbox>
                      </Form.Item>
                    </div>
                    <div className="w-1/2 text-right pt-1">
                      <Link href="/forgot-password">
                        <a className="text-[12px] md:text-xs text-primary md:text-base">
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
                        className="w-full bg-primary rounded-lg h-14"
                      >
                        Login
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
