import * as React from "react";
import Main from "../templates/main";
import Sidebar from "../templates/sidebar";

const Layout = () => {
  return (
    <section className="wrapper">
      <Sidebar></Sidebar>
      <Main></Main>
    </section>
  );
};

export default Layout;
