import React, { useState, useEffect } from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { getInventory } from "../../api";

function Inventory() {
  return (
    <div>
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Space>
        <RecentInventory />
      </Space>
    </div>
  );
}

function RecentInventory() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
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
            title: "Thumbnail",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Title",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Category",
            dataIndex: "category",
            key: "category",
          },
          {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },

          {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
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

export default Inventory;
