import * as React from "react";
import * as Styles from "../../styles/sass/module/_skill.module.scss";
import { Backend, Frontend, Other } from "../object/skill";
import html from "../../images/lang/html.svg";

const Skill = () => {
  return (
    <section className="skill">
      <div className="headline">
        <h2>Skill</h2>
        <span>スキルセット</span>
      </div>
      <div className="content">
        <h3>Development language</h3>
        <ul className={Styles.skill__list}>
          <li className={Styles.skill__item}>
            <h4 className={Styles.skill__title}>Front end</h4>
            <ul className={Styles.skill__langList}>
              {Frontend.map((value) => {
                return (
                  <li key={value.name} className={Styles.skill__langItem}>
                    <img
                      src={value.img}
                      alt="言語"
                      style={{ width: value.width && value.width }}
                    />
                    <div className={Styles.skill__langDesc}>
                      <p>{value.name}</p>
                      <p>Lv {value.lv}/10</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className={Styles.skill__item}>
            <h4 className={Styles.skill__title}>Back end</h4>
            <ul className={Styles.skill__langList}>
              {Backend.map((value) => {
                return (
                  <li key={value.name} className={Styles.skill__langItem}>
                    <img
                      src={value.img}
                      alt="言語"
                      style={{ width: value.width && value.width }}
                    />
                    <div className={Styles.skill__langDesc}>
                      <p>{value.name}</p>
                      <p>Lv {value.lv}/10</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className={Styles.skill__item}>
            <h4 className={Styles.skill__title}>Other</h4>
            <ul className={Styles.skill__langList}>
              {Other.map((value) => {
                return (
                  <li key={value.name} className={Styles.skill__langItem}>
                    <img
                      src={value.img}
                      alt="言語"
                      style={{ width: value.width && value.width }}
                    />
                    <div className={Styles.skill__langDesc}>
                      <p>{value.name}</p>
                      <p>Lv {value.lv}/10</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <h3>Github contributions</h3>
        <div className={Styles.skill__github}>
          <a href="https://github.com/taic-dev" target="_blank">
            <img src="https://github-contributions-api.deno.dev/taic-dev.svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skill;
