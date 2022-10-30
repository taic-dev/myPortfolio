import * as React from "react";
import Me from "../../images/me.png";
import * as Styles from "../../styles/sass/module/_fv.module.scss";

const Fv = () => {
  return (
    <section className={Styles.fv}>
      <div className={Styles.fv__icon}>
        <img src={Me} alt="アイコン" />
        <h1 className={Styles.fv__title}>
          Hello World !! <br />
          My name is Taic-dev
        </h1>
      </div>
      <p className={Styles.fv__text}>
        Web開発者。HP制作、WEBアプリ開発、業務効率化ツール制作と幅広く手がけています。
        中でもHP制作を得意としており、フロントエンド開発が大好きです。
        <b>「自分が死んだ後も使われるようなサービスを作る」</b>
        という思いで日々開発をしております。
      </p>
    </section>
  );
};

export default Fv;
