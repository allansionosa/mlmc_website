import {
  Button,
  Collapse,
  CollapseProps,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
} from "antd";
import Image from "next/image";
import { faqList } from "../FaqList";

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 18 },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    // number: "${label} is not a valid number!",
  },
  // number: {
  //   range: "${label} must be between ${min:0} and ${max:99}",
  // },
};
const onFinish = (values: any) => {
  console.log(values);
};

const items: CollapseProps["items"] = faqList.map((item) => ({
  key: `${item.id}`,
  label: ` ${item.label}`,
  children: (
    <p key={item.id} className=" w-72 text-center">
      {item.list}
    </p>
  ),
}));

export const Faq = () => {
  const onChange = (key: string | string[]) => {
    // console.log(key);
  };
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/faq-background.jpg"
        alt=""
        width={0}
        height={0}
        className="w-full sm:h-[100vh] h-[120vh] object-cover"
      />
      <div className="absolute inset-0 grid justify-items-center sm:mt-28 mx-5">
        <div className="absolute top-8 grid sm:grid-cols-2">
          <div className="grid md:justify-end">
            <div className="font-bold text-center">GET IN TOUCH WITH US</div>
            <div className=" text-2xl text-blue-700 text-center">
              Contact Us
            </div>
            <div>
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{ maxWidth: 500 }}
                validateMessages={validateMessages}
              >
                <Space
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item name={["firstname"]} rules={[{ required: true }]}>
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item name={["lastname"]} rules={[{ required: true }]}>
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </Space>
                <Space
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item name={["email"]} rules={[{ type: "email" }]}>
                    <Input placeholder="Email" />
                  </Form.Item>

                  <Form.Item name={["number"]} rules={[{ required: true }]}>
                    <Input placeholder="Phone number" />
                  </Form.Item>
                </Space>
                <Form.Item className=" ">
                  <Select placeholder="Subject">
                    <Select.Option value="Appointment">
                      Appointment
                    </Select.Option>
                    <Select.Option value="Check-Up">Check-Up</Select.Option>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="description">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#0000e6]"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div>
            <div>FAQS</div>
            <div className="text-blue-600 text-2xl">
              Frequently Ask Questions
            </div>

            <div>
              <Collapse
                items={items}
                defaultActiveKey={["1"]}
                onChange={onChange}
                // className="bg-white"
                accordion={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://maps.google.com/maps?q=comlogik%20business%20systems%20inc.&t=&z=15&ie=UTF8&iwloc=&output=embed"
          name="myiFrame"
          height="400"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};
