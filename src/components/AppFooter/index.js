import React from "react";
import { Image, Space, Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456k745">+23366575234</Typography.Link>
      <Typography.Link href="www.google.com" target="_blank">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="www.google.com" target={"_blank"}>
        Terms of Use
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
