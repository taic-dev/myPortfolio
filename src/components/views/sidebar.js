import * as React from "react";
import Me from "../../images/me.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <aside>
        <a href="/">
          <img src={Me} alt="自分のアイコン" />
        </a>
        <nav>
          <ol>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
