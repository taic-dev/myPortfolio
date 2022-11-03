import * as React from "react";
import Button from "@mui/material/Button";
import * as Styles from "../../styles/sass/module/_contact.module.scss";
import { TextField, Box, Grid } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

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
          その他お問い合わせはこちらからよろしくお願いします。
        </p>
        <div className={Styles.contact__wrapper}>
          <form
            action="https://getform.io/f/73114a8e-cce7-4f9c-bd83-02f42b8339e7"
            method="POST"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={6} md={6}>
                  <div className={Styles.contact__group}>
                    <TextField
                      id="outlined-basic"
                      name="name"
                      type="text"
                      label="名前（フルネーム）"
                      variant="outlined"
                      size="small"
                      required
                    />
                  </div>
                </Grid>
                <Grid item xs={6} md={6}>
                  <div className={Styles.contact__group}>
                    <TextField
                      id="outlined-basic"
                      name="kana"
                      type="text"
                      label="名前（カナ）"
                      variant="outlined"
                      size="small"
                      required
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className={Styles.contact__group}>
                    <TextField
                      id="outlined-basic"
                      name="mail"
                      type="mail"
                      label="メールアドレス"
                      variant="outlined"
                      size="small"
                      required
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className={Styles.contact__group}>
                    <TextField
                      id="outlined-basic"
                      name="textarea"
                      type="textarea"
                      label="お問い合わせ内容"
                      variant="outlined"
                      rows={10}
                      multiline
                      required
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className={Styles.contact__btn}>
                    <Button type="submit" size="large" variant="contained" endIcon={<SendIcon />}>
                      送信
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
