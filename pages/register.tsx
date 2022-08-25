import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { signup } from "./api/register";
import toast, { Toaster } from "react-hot-toast";


type Props = {};

export default function Register({}: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorSms, setErrorSms] = useState<string>("");
  const router = useRouter();

  const LoginHandler = async (e: SyntheticEvent) => {
    
    const data = await signup({email: email, password: password});
    if(data.walletdata){
      toast.success("success");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }
  

  return (
    <div className="login-bg">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto">
        <div className="w-full flex flex-wrap h-screen">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center mx-auto login-form">
            <div className="w-full flex flex-col justify-center md:justify-start mx-auto my-auto px-14 bg-white rounded-xl py-16 md:max-w-[448px]">
              <img src="/logo.png" className="w-[11rem] md:w-[182px] " />
              <p className="text-xl lg:text-[27px] text-gray font-bold mt-10 text-black">
                Create an account
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
                          message: "Please input your new password!",
                        },
                        { whitespace: true },
                        { min: 8 },
                      ]}
                    >
                      <Input.Password
                        className="appearance-none bg-white rounded-lg h-14 w-full mb-0 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline py-0 border-lightGray"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs md:text-base text-gray">
                      Confirm Password*
                    </label>
                    <Form.Item
                      name="confirmPassword"
                      dependencies={["password"]}
                      rules={[
                        {
                          required: true,
                          message: "Please input your confirm password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              "Passwords that you entered does not match"
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password
                        className="appearance-none bg-white rounded-lg h-14 w-full mb-0 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline py-0 border-lightGray"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Form.Item>
                  </div>
                  <div className="mt-6 text-gray">
                    <Checkbox className="text-[13px] text-gray">
                      I certify that I am 18 years of age or older and agree to
                      the User Agreement and Privacy Policy.
                    </Checkbox>
                  </div>
                  <div className="flex flex-col pt-4">
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full rounded-full h-14 bg-gradient-to-r from-bgradian1 to-bgradian2 text-[16px]"
                      >
                        Create account
                      </Button>
                    </Form.Item>
                  </div>
                  <div className="flex flex-col pt-4 text-center">
                    <p>
                      Already have an account?{" "}
                      <a className="text-primary" href="/">Sign in</a>
                    </p>
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
