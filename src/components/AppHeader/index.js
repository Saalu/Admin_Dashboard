import React from "react";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, List, Image, Drawer, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../api";

function AppHeader() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="AppHeader">
      <Image width={40} src=""></Image>
      <Typography.Title>Saalu's Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotification(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        placement="right"
        onClose={() => {
          setCommentsOpen(false);
        }}
        open={commentsOpen}
        maskClosable
      >
        <List
          // header={<div>Oure customers reviews</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={comments}
          renderItem={(item) => {
            return (
              <List.Item>
                {item.body}
                {/* <Typography.Text mark>[ITEM]</Typography.Text> {item} */}
              </List.Item>
            );
          }}
        />
      </Drawer>
      <Drawer
        title="Notification"
        placement="right"
        onClose={() => {
          setNotification(false);
        }}
        open={notification}
        maskClosable
      >
        <List
          bordered
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text mark>[Ordered]</Typography.Text> {item.title}
              </List.Item>
            );
          }}
        />
      </Drawer>
    </div>
  );
}

export default AppHeader;
