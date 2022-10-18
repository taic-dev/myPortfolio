import * as React from "react";
import Main from "./main";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <section className="wrapper">
      <Sidebar></Sidebar>
      <Main></Main>
    </section>
  );
};

export default Layout;
