"use client";
import BreadCrumb from "@/app/lib/BreadCrumb";
import {
  Button,
  Checkbox,
  Form,
  FormItemProps,
  Input,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React, { useState } from "react";
import { GoUpload } from "react-icons/go";
const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const pageTitle = "Career Details";
const page = () => {
  const onFinish = (value: object) => {
    console.log(value);
  };
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange: UploadProps["onChange"] = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const props = {
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange: handleChange,
    multiple: true,
  };
  return (
    <section>
      <div>
        <BreadCrumb items={[{ title: "Careers" }]} title={pageTitle} />
      </div>
      <div className="container max-w-screen-xl m-auto my-20 sm:grid grid-cols-2 gap-10">
        <div className="px-5 py-5">
          <ul className="bg-gray-100 rounded grow flex justify-between flex-wrap px-6 py-5 gap-3">
            <li className="text-slate-500">
              <span className="block font-medium pb-2 text-black">Slots</span>1
            </li>
            <li className="text-slate-500">
              <span className="block font-medium pb-2 text-black">
                Salary Range
              </span>
              30,000 - 60,000
            </li>
            <li className="text-slate-500">
              <span className="block font-medium pb-2 text-black">
                Job Type
              </span>
              Full Time
            </li>
            <li className="text-slate-500">
              <span className="block font-medium pb-2 text-black">
                Date Posted
              </span>
              November 10, 2023
            </li>
          </ul>
          <div className="py-5">
            <h3 className="font-medium text-2xl md:text-xl">Job Summary</h3>
            <p>
              A registered nurse, or RN, typically monitors patients,
              administers medications, keeps records, consults with healthcare
              providers, educates patients and more. They typically do not need
              to meet the master's degree requirement of a nurse practitioner.
            </p>
          </div>
          <ul>
            <h4 className="font-medium text-2xl md:text-xl">Qualifications</h4>
            <li>
              <span className="font-medium">
                Minimum Educational Attainment:
              </span>
              Licensed Healthcare Professional
            </li>
            <li>
              <span className="font-medium">Work Experience:</span>At least
              eight (8) years of work experience in an eye center or similar
              environment, inclusive of at least four (4) years in a managerial
              capacity.
            </li>
            <li>
              <span className="font-medium">Skills:</span>Urgent care and
              emergency care, Checking and monitoring vital signs, Patient and
              family education, Patient safety, Technology skills.
            </li>
          </ul>
        </div>
        <div className="bg-blue-700 px-5 py-5 text-white ">
          <h2 className=" text-2xl font-medium pb-5 md:text-xl">
            Application Form
          </h2>
          <Form layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={["user"]}>
              <MyFormItemGroup prefix={["name"]}>
                <MyFormItem name="firstName" label="First Name">
                  <Input />
                </MyFormItem>
                <MyFormItem name="lastName" label="Last Name">
                  <Input />
                </MyFormItem>
              </MyFormItemGroup>

              <MyFormItem name="contact" label="Contact Number">
                <Input />
              </MyFormItem>
              <MyFormItem name="email" label="Email Address">
                <Input />
              </MyFormItem>
              <MyFormItem>
                <h3>Attachment</h3>
                <Upload {...props} fileList={fileList}>
                  <Button icon={<GoUpload />}>Upload</Button>
                </Upload>
                <span>
                  Only accepts .pdf, .doc and .docx files. Maximum file size is
                  1MB
                </span>
              </MyFormItem>
              <MyFormItem>
                <Checkbox onChange={onChange}>
                  <span className="text-white"> I agree to the </span>
                  <span className="text-yellow-400 underline">
                    Terms and Conditions
                  </span>
                  <span className="text-white"> and the </span>
                  <span className="text-yellow-400 underline">
                    Privacy Policy
                  </span>
                  .
                </Checkbox>
              </MyFormItem>
            </MyFormItemGroup>
            <Button htmlType="submit" className="bg-white">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="mb-28 max-w-[1280px] m-auto ">
        <div className="md:container">
          <div className=" bg-center bg-cover bg-[url('/building.jpg')] ">
            <div className=" bg-blue-800 opacity-80 py-6 px-5 my-10 text-white ">
              <h5 className="text-lg font-medium uppercase ">Contact Us</h5>
              <ul className="pt-3 grid gap-y-1">
                <li>
                  Adress:
                  <span className="font-medium">
                    llustre Ave., Brgy. Palanas, Lemery Batangas
                  </span>
                </li>
                <li>
                  Email:
                  <span className="font-medium">
                    customerservice@mlmc.com.ph
                  </span>
                </li>
                <li>
                  Contact No.: <span className="font-medium">0917-509-048</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
