import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ClientSlider = () => {
  return (
    <div
      data-cursor-text="DRAG"
      data-cursor-size="100px"
      data-cursor-color="#A374FF"
      className="clientslider"
    >
      <div className="stage">
        <div className="conta">
          <div className="ring">
            {[
              { bg: "gamyam-bg.jpg", logo: "gamyam-logo.png", extra: "large" },
              {
                bg: "motilal-bg.jpg",
                logo: "motilal-logo.png",
                extra: "large",
              },
              {
                bg: "heineken-bg.jpg",
                logo: "heineken-logo.png",
                extra: "large glass",
              },
              { bg: "lll-bg.jpg", logo: "lll-logo.png", extra: "glass" },
              { bg: "btp-bg.jpg", logo: "btp-logo.png", extra: "glass" },
              {
                bg: "godrej-bg.jpg",
                logo: "godrej-logo.png",
                extra: "glass dark",
              },
              { bg: "ceat-bg.jpg", logo: "ceat-logo.png", extra: "glass dark" },
              {
                bg: "hcg-bg.jpg",
                logo: "healthcare-global-logo.png",
                extra: "large",
              },
              {
                bg: "google-bg.jpg",
                logo: "google-logo.png",
                extra: "glass dark",
              },
              { bg: "bcp-bg.jpg", logo: "bcp-logo.png", extra: "glass dark" },
              { bg: "rcb-bg.jpg", logo: "rcb-logo.png", extra: "glass" },
              {
                bg: "oneplus-bg.jpg",
                logo: "oneplus-logo.png",
                extra: "large",
              },
              {
                bg: "ayatana-bg.jpg",
                logo: "ayatana-logo.png",
                extra: "glass light",
              },
              {
                bg: "pernod-bg.jpg",
                logo: "pernod-logo.png",
                extra: "glass large",
              },
              { bg: "nrai-bg.jpg", logo: "nrai-logo.png", extra: "" },
              {
                bg: "clear-trip-bg.jpg",
                logo: "clear-trip-logo.png",
                extra: "glass light large",
              },
              { bg: "itbt-bg.jpg", logo: "itbt-logo.png", extra: "dark" },
              {
                bg: "stepinout-bg.jpg",
                logo: "steppin-out-logo.png",
                extra: "large",
              },
              { bg: "jain-bg.jpg", logo: "jain-logo.png", extra: "" },
              {
                bg: "startup-karnataka-bg.jpg",
                logo: "startup-karnataka-logo.png",
                extra: "large",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="img"
                style={{ backgroundImage: `url(./clients/${item.bg})` }}
              >
                <div className={item.extra.includes("glass") ? "glass" : ""}>
                  <Image
                    width={300}
                    height={300}
                    quality={100}
                    className={`logo ${item.extra}`}
                    src={`/clients/${item.logo}`}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CustoArrow = ({ dir }) => (
  <div
    data-cursor-sticky={`#bw-${dir}`}
    data-cursor-text={dir === "next" ? "Next" : "Prev"}
    data-cursor-size="60px"
    data-cursor-color="#000000"
    className={`bw-client-slider-arrow bw-${dir}`}
  ></div>
);

export const BWClientSlider = ({ data }) => {
  return (
    <div
      data-cursor-text="OUR CLIENTS"
      data-cursor-size="100px"
      data-cursor-color="#A374FF"
      className="bw-client-slider"
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        centeredSlides
        modules={[Navigation, A11y, Autoplay]}
        navigation={{
          prevEl: ".bw-prev",
          nextEl: ".bw-next",
        }}
        loop
        allowTouchMove={false}
        disableOnInteraction={false}
        autoplay={{ delay: 0 }}
        speed={5000}
        breakpoints={{
          300: { slidesPerView: 3, spaceBetween: 10 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 5 },
        }}
      >
        {data?.clientDetails.slice(0, 12).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bw-client-slider-slide">
              <Image
                className="md:h-[120px] h-[80px]"
                src={item.clientLogo.url}
                alt={item.clientName}
                width={300}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        centeredSlides
        modules={[Navigation, A11y, Autoplay]}
        navigation={{
          prevEl: ".bw-prev",
          nextEl: ".bw-next",
        }}
        loop
        allowTouchMove={false}
        disableOnInteraction={false}
        autoplay={{ delay: 0, reverseDirection: true }}
        speed={5000}
        breakpoints={{
          300: { slidesPerView: 3, spaceBetween: 10 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 5 },
        }}
      >
        {data?.clientDetails.slice(12, 24).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bw-client-slider-slide">
              <Image
                className="md:h-[120px] h-[80px]"
                src={item.clientLogo.url}
                alt={item.clientName}
                width={300}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSlider;
