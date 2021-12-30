import React from "react";
import { Nav, Footer, DropDown } from "@components/common";
const Layout: React.FC = (props) => {
  return (
    <div>
      <Nav />
      <DropDown />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
