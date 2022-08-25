import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Navbar from "../../components/navbar";


type Props = {};


export default function dashboard({}: Props) {

  return (
    <>
    <Navbar />
    </>
  );
}
