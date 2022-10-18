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
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skill</a>
            </li>
            <li>
              <a href="">Works</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ol>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
