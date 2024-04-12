import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { Button, Form } from "antd";
import { InputOTP } from "antd-input-otp";

const HomePage = () => {
  const navigate = useNavigate();
  const handleJoinRoom = (otp) => {
    navigate(`/room/${otp}`);
  };

  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const { otp } = values;
    if (!otp || otp.includes(undefined) || otp.includes("")) {
      return form.setFields([
        {
          name: "otp",
          errors: ["OTP is invalid."],
        },
      ]);
    }
    handleJoinRoom(otp.join(""));
  };

  return (
    <div
      style={{
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>Enter Room ID</h2>
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            name="otp"
            className="center-error-message"
            rules={[{ validator: async () => Promise.resolve() }]}
          >
            <InputOTP autoFocus length={5} />
          </Form.Item>
          <div
            style={{
              width: "100%",
            }}
          >
            <Form.Item noStyle>
              <Button block htmlType="submit" type="primary">
                Join Room
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default HomePage;
