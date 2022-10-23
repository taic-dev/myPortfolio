import * as React from "react";
import { Link } from "gatsby";
import Modal from "react-modal";
import * as Styles from "../../styles/sass/module/_works.module.scss";
import Img from "../../images/demo.png";

import { WorksHP, WorksWEBSITE, Other } from "../object/works";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/scss";

Modal.setAppElement("#___gatsby");

const Works = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  console.log(modalOpen);

  return (
    <section className="works">
      <div className="headline">
        <h2>Works</h2>
        <span>制作物</span>
      </div>
      <div className="content">
        <h3>HP</h3>
        <Swiper
          className={Styles.works__list}
          spaceBetween={30}
          slidesPerView={2.5}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {WorksHP.map((value, index) => {
            return (
              <>
                <SwiperSlide
                  key={value.id}
                  className={Styles.works__item}
                  onClick={() => setModalOpen(value.name)}
                >
                  <img src={value.img} alt="画像" />
                  <div className={Styles.works__desc}>
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                    <span>
                      {value.year} / {value.company}
                    </span>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>

        {WorksHP.map((value) => {
          return (
            <Modal
              isOpen={modalOpen == value.name}
              onRequestClose={() => setModalOpen(false)}
              overlayClassName={{
                base: "overlay__base",
                afterOpen: "overlay__after",
                beforeClose: "overlay__before",
              }}
              className={{
                base: "content__base",
                afterOpen: "content__after",
                beforeClose: "content__before",
              }}
              closeTimeoutMS={600}
            >
              <p>{value.detail.detailText}</p>
              <p>modal</p>
              <p>modal</p>
              <p>modal</p>
              <p>modal</p>
            </Modal>
          );
        })}

        <h3>WEBSITE</h3>
        <Swiper
          className={Styles.works__list}
          spaceBetween={30}
          slidesPerView={2.5}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {WorksWEBSITE.map((value, index) => {
            return (
              <SwiperSlide
                key={value.id}
                className={Styles.works__item}
                onClick={() => setModalOpen(value.name)}
              >
                <Link to={value.link}>
                  <img src={value.img} alt="画像" />
                  <div className={Styles.works__desc}>
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                    <span>
                      {value.year} / {value.company}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {WorksWEBSITE.map((value) => {
          return (
            <Modal
              isOpen={modalOpen == value.name}
              onRequestClose={() => setModalOpen(false)}
              overlayClassName={{
                base: "overlay__base",
                afterOpen: "overlay__after",
                beforeClose: "overlay__before",
              }}
              className={{
                base: "content__base",
                afterOpen: "content__after",
                beforeClose: "content__before",
              }}
              closeTimeoutMS={600}
            >
              <p>{value.detail.detailText}</p>
              <p>modal</p>
              <p>modal</p>
              <p>modal</p>
              <p>modal</p>
            </Modal>
          );
        })}

        <h3>Other</h3>
        <Swiper
          className={Styles.works__list}
          spaceBetween={30}
          slidesPerView={2.5}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {Other.map((value, index) => {
            return (
              <SwiperSlide
                key={value.id}
                className={Styles.works__item}
                onClick={() => setModalOpen(value.name)}
              >
                <Link to={value.link}>
                  <img src={value.img} alt="画像" />
                  <div className={Styles.works__desc}>
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                    <span>
                      {value.year} / {value.company}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {Other.map((value) => {
          return (
            <Modal
              isOpen={modalOpen == value.name}
              onRequestClose={() => setModalOpen(false)}
              overlayClassName={{
                base: "overlay__base",
                afterOpen: "overlay__after",
                beforeClose: "overlay__before",
              }}
              className={{
                base: "content__base",
                afterOpen: "content__after",
                beforeClose: "content__before",
              }}
              closeTimeoutMS={600}
            >
              <p>{value.detail.detailText}</p>
              <p>modal</p>
              <p>modal</p>
              <p>modal</p>
              <p>modal</p>
            </Modal>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
