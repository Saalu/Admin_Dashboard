import React from "react";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Image, Space, Typography } from "antd";

function AppHeader() {
  return (
    <div className="AppHeader">
      <Image width={40} src=""></Image>
      <Typography.Title>Saalu's Dashboard</Typography.Title>
      <Space>
        <MailOutlined />
        <BellFilled />
      </Space>
    </div>
  );
}

export default AppHeader;
