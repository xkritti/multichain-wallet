import {
  Button,
  Divider,
  Dropdown,
  Form,
  Input,
  Menu,
  MenuProps,
  message,
  Modal,
  Space,
} from "antd";
import { DownOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { multichain } from "../../pages/api/hello";
import { useEffect, useState } from "react";
const { Option } = Select;

export default function DetailDashborad() {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const [isChainData, setIsChainData] = useState<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    handleChange({ value: "29" });
  }, []);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const handleChange = async (value: { value: string }) => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    const data = await multichain({
      privatekey: user.privateKey,
      chainid: value.value,
    });
    console.log("data : ", data);
    setIsChainData(data);
  };

  return (
    <div className="bg-white mt-3 lg:px-5 lg:py-7">
      <div className="flex justify-between items-center">
        <p className="text-xl lg:text-[24px] text-gray font-bold text-black">
          Token
        </p>
        <Button
          type="primary"
          htmlType="submit"
          className=" w-48 rounded-lg h-10 bg-gradient-to-r from-bgradian1 to-bgradian2 text-[16px]"
          onClick={showModal}
        >
          Add Custom Token
        </Button>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <Select
          className="w-full"
          //   suffixIcon={}
          labelInValue
          defaultValue={{ value: "29", label: "Fin Chain" }}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="4">Rinkeby Test Network</Option>
          <Option value="29">Fin Chain</Option>
          <Option value="97">Bitkub Chain</Option>
          <Option value="25925">BSC Testnet</Option>
        </Select>
        <Input
          className="w-[200px]"
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </div>

      {isChainData ? (
        <div className="flex items-center justify-between">
          <div className="flex items-start mt-5">
            <img
              className="w-[50px] h-[50px]"
              src={isChainData.jsonRPC.nativeCurrency.name + ".png"}
              alt=""
            />
            <p className="text-xl lg:text-[16px] text-gray text-black">
              <div className="flex flex-col">
                <div>{isChainData.jsonRPC.nativeCurrency.name}</div>
                <div>{isChainData.balance}</div>
              </div>
            </p>
          </div>
          -
        </div>
      ) : null}
      <Modal
        className="rounded-xl"
        title="Add Constom Token"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="w-full">
          <Form
            className="flex flex-col pt-3 md:pt-3"
            initialValues={{ remember: false }}
            //   onFinish={LoginHandler}
            //fields={fields}
          >
            <div className="flex flex-col">
              <label className="text-xs md:text-base text-gray">
                Token Symbol
              </label>
              <Form.Item
                name="token_symbol"
                rules={[
                  {
                    required: true,
                    message: "Please input your token symbol!",
                  },
                ]}
              >
                <Input
                  className="appearance-none bg-white rounded-lg h-14 w-full mb-0 px-3 text-gray-300 mt-1 leading-tight focus:outline-none focus:shadow-outline border-lightGray"
                  //   onChange={(e) => setEmail(e.target.value)}
                  id="token_symbol"
                  // value={email}
                  placeholder="Your token symbol"
                />
              </Form.Item>
            </div>
            <div className="flex flex-col">
              <label className="text-xs md:text-base text-gray">
                Decimal Places
              </label>
              <Form.Item
                name="decimal_places"
                rules={[
                  {
                    required: true,
                    message: "Please input your decimal places!",
                  },
                ]}
              >
                <Input
                  className="appearance-none bg-white rounded-lg h-14 w-full mb-0 px-3 text-gray-300 mt-1 leading-tight focus:outline-none focus:shadow-outline border-lightGray"
                  //   onChange={(e) => setEmail(e.target.value)}
                  id="decimal_places"
                  // value={email}
                  placeholder="Your decimal places"
                />
              </Form.Item>
            </div>
            <div className="flex flex-col">
              <label className="text-xs md:text-base text-gray">
                Token Contract
              </label>
              <Form.Item
                name="token_contract"
                rules={[
                  {
                    required: true,
                    message: "Please input your token contract!",
                  },
                ]}
              >
                <Input
                  className="appearance-none bg-white rounded-lg h-14 w-full mb-0 px-3 text-gray-300 mt-1 leading-tight focus:outline-none focus:shadow-outline border-lightGray"
                  //   onChange={(e) => setEmail(e.target.value)}
                  id="token_contract"
                  // value={email}
                  placeholder="Your token contract"
                />
              </Form.Item>
            </div>
            <div className="flex flex-col">
              <label className="text-xs md:text-base text-gray">
                Token Name
              </label>
              <Form.Item
                name="token_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your token name!",
                  },
                ]}
              >
                <Input
                  className="appearance-none bg-white rounded-lg h-14 w-full mb-0 px-3 text-gray-300 mt-1 leading-tight focus:outline-none focus:shadow-outline border-lightGray"
                  //   onChange={(e) => setEmail(e.target.value)}
                  id="token_name"
                  // value={email}
                  placeholder="Your token name"
                />
              </Form.Item>
            </div>
            <div className="flex flex-col">
              <label className="text-xs md:text-base text-gray">
                Token Image
              </label>
              <Form.Item
                name="token_image"
                rules={[
                  {
                    required: true,
                    message: "Please input your token image!",
                  },
                ]}
              >
                <Input
                  className="appearance-none bg-white rounded-lg h-14 w-full mb-0 px-3 text-gray-300 mt-1 leading-tight focus:outline-none focus:shadow-outline border-lightGray"
                  //   onChange={(e) => setEmail(e.target.value)}
                  id="token_image"
                  // value={email}
                  placeholder="Your token image"
                />
              </Form.Item>
            </div>
          </Form>
          <Button
            type="primary"
            htmlType="submit"
            className=" w-full rounded-lg h-10 bg-gradient-to-r from-bgradian1 to-bgradian2 text-[16px]"
            onClick={showModal}
          >
            Add Custom Token
          </Button>
        </div>
      </Modal>
    </div>
  );
}
