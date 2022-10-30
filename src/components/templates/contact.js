import * as React from "react";
import Button from '@mui/material/Button';
import * as Styles from "../../styles/sass/module/_contact.module.scss";

const Contact = () => {
  return (
    <section className={Styles.contact}>
      <div className="headline">
        <h2>Contact</h2>
        <span>お問い合わせ</span>
      </div>
      <div className="content">
        <p className={Styles.contact__text}>
          制作のご依頼 ・
          その他お問い合わせはこちらのボタンからよろしくお願いします。
        </p>
        <div className={Styles.contact__btn}>
          <Button variant="contained" href="https://forms.gle/B4Hvpu27CMznz9VQA" target="_blank">Contained</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
