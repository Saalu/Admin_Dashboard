import React, { useState, useEffect } from "react";
import { Typography, Card, Space, Table, Statistic } from "antd";
import {
  ShoppingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { getOrders } from "../../api";

function Dashboard() {
  return (
    <Space size={20} direction="vertical">
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
          title={"Revenue"}
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
      <Space>
        <RecentOrders />
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 4));
      console.log({ data: res.products });
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            key: "price",
          },
          {
            title: "Discount",
            dataIndex: "discountPercentage",
            key: "discountPercentage",
          },
          {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      />
    </>
  );
}

export default Dashboard;
