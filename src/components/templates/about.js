import * as React from "react";
import * as Styles from "../../styles/sass/module/_about.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

const About = () => {
  return (
    <section className={Styles.about}>
      <div className="headline">
        <h2>About</h2>
        <span>私について</span>
      </div>
      <div className="content">
        <h3>Profile</h3>
        <table className={Styles.about__table}>
          <tbody>
            <tr>
              <td>-Name</td>
              <td>大本 泰史（Ohmoto Taishi）</td>
            </tr>
            <tr>
              <td>-Date of birth</td>
              <td>1998.5.30</td>
            </tr>
            <tr>
              <td>-Birthplace</td>
              <td>Japan / Hiroshima</td>
            </tr>
            <tr>
              <td>-Hobby</td>
              <td>Fashion,Sauna</td>
            </tr>
            <tr>
              <td>-SNS</td>
              <td>
                <Button target="_blank" href="https://github.com/taic-dev/" style={{ padding: "0" }}>
                  <GitHubIcon style={{ fontSize: "50px", color: "#000" }} />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default About;
