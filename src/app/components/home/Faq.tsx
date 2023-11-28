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
    <section
      className="bg-center bg-cover bg-[url('/faq-background.jpg')] "
      id="contact"
    >
      <div className="backdrop-blur-lg bg-white/30 py-20">
        <div className="container grid gap-10 lg:grid-cols-2 max-w-screen-md m-auto px-5">
          <div>
            <div className="pb-5">
              <div>
                <h3 className="font-bold text-center">GET IN TOUCH WITH US</h3>
                <h2 className=" text-2xl text-blue-700 text-center">
                  Contact Us
                </h2>
              </div>
            </div>

            <Form
              {...layout}
              layout="vertical"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <div className="grid md:grid-cols-2 gap-x-5">
                <Form.Item name={["firstname"]} rules={[{ required: true }]}>
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item name={["lastname"]} rules={[{ required: true }]}>
                  <Input placeholder="Last Name" />
                </Form.Item>

                <Form.Item name={["email"]} rules={[{ type: "email" }]}>
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item name={["number"]} rules={[{ required: true }]}>
                  <Input placeholder="Phone number" />
                </Form.Item>
              </div>
              <Form.Item className=" ">
                <Select placeholder="Subject">
                  <Select.Option value="Appointment">Appointment</Select.Option>
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
          <div>
            <div className="w-full">
              <h3>FAQS</h3>
              <h2 className="text-blue-600 text-2xl">
                Frequently Ask Questions
              </h2>
            </div>
            <div className="pt-5">
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

      <iframe
        src="https://maps.google.com/maps?q=comlogik%20business%20systems%20inc.&t=&z=15&ie=UTF8&iwloc=&output=embed"
        name="myiFrame"
        height="400"
        width="100%"
      ></iframe>
    </section>
  );
};
