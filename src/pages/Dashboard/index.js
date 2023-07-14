import React from "react";
import { Typography, Space, Card, Statistic } from "antd";
import {
  ShoppingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

function Dashboard() {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          title={"Orders"}
          value={12345}
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 2,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={"Inventory"}
          value={12345}
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 2,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={"Customers"}
          value={12345}
          icon={
            <UserOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 2,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={"Orders"}
          value={12345}
          icon={
            <DollarCircleOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 2,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={"Orders"}
          value={12345}
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 2,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
        />
      </Space>
    </div>
  );
}

function DashboardCard({ title, value }) {
  return (
    <Card>
      <Space direction="horizontal">
        <ShoppingCartOutlined />
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
export default Dashboard;
