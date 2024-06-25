import React from "react";
import cls from "./styles.module.scss";
import { Input, Form } from "antd";

const required = { required: true, message: "This field is required!" };

const HeroForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      className={cls.form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Full Name" name="fullname" rules={[required]}>
        <Input />
      </Form.Item>
    </Form>
  );
};

export default HeroForm;
