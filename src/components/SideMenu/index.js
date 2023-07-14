import React from "react";
import { Space, Menu } from "antd";

function SideMenu() {
  return (
    <div className="SideMenu">
      <Menu
        // onClick={
        //   (item = {
        //     // item.key
        //   })
        // }
        items={[
          {
            label: "Dashboard",
            key: "/",
          },
          {
            label: "Inventory",
            key: "/inventory",
          },
          {
            label: "Orders",
            key: "/orders",
          },
          {
            label: "Customers",
            key: "/customers",
          },
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
