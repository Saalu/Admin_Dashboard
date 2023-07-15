import React, { useState, useEffect } from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { getCustomers, getInventory } from "../../api";

function Customers() {
  return (
    <div>
      <Typography.Title level={4}>Customers</Typography.Title>
      <Space>
        <Customer />
      </Space>
    </div>
  );
}

function Customer() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* <Typography.Title level={4}> Customers</Typography.Title> */}
      <Table
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            key: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
            key: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
            key: "lastName",
          },
          {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
          },

          {
            title: "Address",
            dataIndex: "address",
            key: "address",
            render: (address) => {
              return (
                <span>
                  {address.address},{address.city}
                </span>
              );
            },
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

export default Customers;
