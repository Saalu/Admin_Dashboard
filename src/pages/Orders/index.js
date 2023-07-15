import React, { useState, useEffect } from "react";
import { Space, Table, Typography } from "antd";
import { getOrders } from "../../api";

function Orders() {
  return (
    <div>
      <Typography.Title level={4}>Orders</Typography.Title>
      <Space>
        <Order />
      </Space>
    </div>
  );
}

function Order() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* <Typography.Title level={4}> Inventory</Typography.Title> */}
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
            render: (value) => <span>${value}</span>,
          },
          {
            title: ",Quantity",
            dataIndex: "quantity",
            key: "quantity",
          },
          {
            title: "Discounted Price",
            dataIndex: "discountedPrice",
            key: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },

          {
            title: ",Total",
            dataIndex: "total",
            key: "total",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      />
    </>
  );
}

export default Orders;
