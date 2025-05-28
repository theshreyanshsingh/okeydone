import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollContainer from "@/components/ScrollContainer";
import Head from "next/head";
import WorkHero from "@/sections/Work/WorkHero";
import logo from "../../assets/brands/ayatana/Ayatana.png";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ayatana2 from "../../assets/brands/ayatana/pic2.jpg";
import slide1 from "../../assets/brands/ayatana/pic1.jpg";
import slide2 from "../../assets/brands/ayatana/cover.jpg";
import slide3 from "../../assets/brands/ayatana/pic3.jpg";
import slide4 from "../../assets/brands/ayatana/pic4.jpg";
import slide5 from "../../assets/brands/ayatana/pic5.jpg";
import slide6 from "../../assets/brands/ayatana/pic6.jpg";
import slide7 from "../../assets/brands/ayatana/pic7.jpg";
import slide8 from "../../assets/brands/ayatana/pic8.jpg";

import CountUp from "react-countup";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("react-lottie-player/dist/LottiePlayerLight"),
  { ssr: false }
);

// import duration from "../../assets/animaticons/duration.json"
// import spend from "../../assets/animaticons/spend.json"
import interactions from "../../assets/animaticons/interactions.json";
import { LoaderScreen } from "@/utilities";
import Image from "next/image";
// import followers from "../../assets/animaticons/followers.json"

export default function Ayatana() {
  return (
    <>
      <Head>
        <title>Ayatana Coorg | Winning Strategy for Hospitality</title>
        <meta
          name="description"
          content="Our winning marketing strategy has unlocked the door to marvellous sales for Ayatana Resorts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://okaydone.in/work/ayatana" />
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation noLogo={true} theme={true} />
        <ScrollContainer>
          <div className="brandpage-hero">
            <WorkHero
              brand={"Ayatana, Coorg"}
              categories={["Social Media", "Performance Marketing"]}
              back={"/work"}
              logo={logo.src}
              alt="Ayatana Resort & Spa - Coorg Logo 2019 x Okay Done Media partnership"
              color={"black"}
            />
          </div>
          <div className="container">
            <div className="brandpage-section-brand">
              <h1>
                Adopting new-age strategies to build India&apos;s most{" "}
                <span>popular luxury resort</span>
              </h1>
            </div>
            <div className="brandpage-section-content">
              <div className="title">
                <h2>Brand Challenges</h2>
              </div>
              <div className="subtitle">
                <ul>
                  <motion.li
                    key={`rcb-subtitle-miles1`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.2,
                    }}
                  >
                    Newly Launched Brand
                  </motion.li>
                  <motion.li
                    key={`rcb-subtitle-miles2`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.3,
                    }}
                  >
                    Competition from legacy brands
                  </motion.li>
                  <motion.li
                    key={`rcb-subtitle-miles3`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.4,
                    }}
                  >
                    Century&apos;s worst flood hit the region days from the
                    launch
                  </motion.li>
                  <motion.li
                    key={`rcb-subtitle-miles3`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.5,
                    }}
                  >
                    Away from touristy spots
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="brandpage-section-image notop">
              <Image
                width={1440}
                height={1080}
                quality={100}
                src={ayatana2.src}
                alt="Ayatana Resort & Spa - Coorg partners with Bengaluru's best content marketing agency - Okay Done Media"
              />
            </div>
            <div className="brandpage-section-content">
              <div className="title">
                <h2>What we solved</h2>
              </div>
              <div className="subtitle">
                <ul>
                  <motion.li
                    key={`rcb-subtitle-miles1`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.2,
                    }}
                  >
                    Focused heavily on <span>visual content</span> to garner
                    eyeballs.
                  </motion.li>
                  <motion.li
                    key={`rcb-subtitle-miles2`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.3,
                    }}
                  >
                    Consistent, relatable content with{" "}
                    <span>popular faces</span> was ensured through and through.
                  </motion.li>
                  <motion.li
                    key={`rcb-subtitle-miles3`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.4,
                    }}
                  >
                    Branding was primarily through influencer marketing with{" "}
                    <span>zero ad spends</span> through the brand launch.
                  </motion.li>
                  <motion.li
                    key={`rcb-subtitle-miles4`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.5,
                    }}
                  >
                    Portrayed Coorg as a safe region to travel and explore to
                    gain first mover advantage after the flood.
                  </motion.li>
                  <motion.li
                    key={`rcb-subtitle-miles5`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.6,
                    }}
                  >
                    <span>Hopped onto trends</span> to increase relatability
                    with the audience which increased awareness.
                  </motion.li>
                  <motion.li
                    key={`rcb-subtitle-miles5`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.7,
                    }}
                  >
                    Paired influencer marketing with performance marketing to
                    increase positive brand uplift which resulted in{" "}
                    <span>higher conversions and sales</span>.
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="brandpage-section-campaign">
              <div className="title">
                <h2>Milestones</h2>
              </div>
              <div className="brandpage-section-campaign-stats">
                <div className="row">
                  <div className="col-3 col-sm-12">
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.4,
                        delay: 0.1,
                        duration: 0.5,
                      }}
                      className="counter-box"
                    >
                      <div className="counter-box-icon normal">
                        <Lottie
                          animationData={interactions}
                          play
                          style={{ width: 150, height: 100 }}
                        />
                      </div>
                      <div className="counter-box-title">Interactions</div>
                      <div className="couter-box-counter">
                        <CountUp
                          className="counter-box-counter-number"
                          start={0}
                          end={1}
                          decimal="."
                          suffix="M+"
                          duration={1}
                          startOnMount={false}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-9 col-sm-12">
                    {/* <h2>&nbsp;</h2> */}
                    <ul className="brandpage-section-campaign-stats-list">
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          bounce: 0.4,
                          type: "spring",
                          duration: 0.5,
                          delay: 0.0,
                        }}
                      >
                        <span>Most followed</span> stand-alone luxury resort on
                        instagram
                      </motion.li>
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          bounce: 0.4,
                          type: "spring",
                          duration: 0.5,
                          delay: 0.1,
                        }}
                      >
                        <span>8 - 12%</span> engagement rate
                      </motion.li>
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          bounce: 0.4,
                          type: "spring",
                          duration: 0.5,
                          delay: 0.2,
                        }}
                      >
                        Created a <span>monopoly</span> in the Coorg region
                      </motion.li>
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          bounce: 0.4,
                          type: "spring",
                          duration: 0.5,
                          delay: 0.3,
                        }}
                      >
                        <span>1250% growth</span> on all digital platforms
                      </motion.li>
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          bounce: 0.4,
                          type: "spring",
                          duration: 0.5,
                          delay: 0.5,
                        }}
                      >
                        Generated <span>3Cr+ revenue</span> during the lockdown,
                        in Future Travel - Vouchers from June to August, 2020
                      </motion.li>
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          bounce: 0.4,
                          type: "spring",
                          duration: 0.5,
                          delay: 0.4,
                        }}
                      >
                        <span>6200+ room nights sold</span> and a revenue of{" "}
                        <span>10 crores generated</span> through performance
                        marketing from July to December 2021.
                      </motion.li>
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          bounce: 0.4,
                          type: "spring",
                          duration: 0.5,
                          delay: 0.6,
                        }}
                      >
                        Revenue of <span>10 crores</span> generated through
                        performance marketing from January to December 2021
                      </motion.li>
                      <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          bounce: 0.4,
                          type: "spring",
                          duration: 0.5,
                          delay: 0.7,
                        }}
                      >
                        A constant of <span>90% occupancy</span> throughout the
                        year
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="brandpage-section-campaign mbottom">
              <div className="brandpage-section-campaign-slider">
                <h2>Gallery</h2>
                <Swiper
                  spaceBetween={50}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <Image
                      width={500}
                      height={400}
                      quality={100}
                      src={slide1.src}
                      alt="Ayatana Resort Coorg Infinity Pool shot by Bengaluru's finest content marketing agency - Okay Done Media"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <Image
                      width={500}
                      height={400}
                      quality={100}
                      src={slide2.src}
                      alt="Ayatana Resort Coorg Infinity pool shot with social media influencer - Okay Done Media"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <Image
                      width={500}
                      height={400}
                      quality={100}
                      src={slide3.src}
                      alt="Ayatana Resort Coorg evening shot by Bengaluru's finest content marketing agency - Okay Done Media"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <Image
                      width={500}
                      height={400}
                      quality={100}
                      src={slide4.src}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <Image
                      width={500}
                      height={400}
                      quality={100}
                      src={slide5.src}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <Image
                      width={500}
                      height={400}
                      quality={100}
                      src={slide6.src}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <Image
                      width={500}
                      height={400}
                      quality={100}
                      src={slide7.src}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <Image
                      width={500}
                      height={400}
                      quality={100}
                      src={slide8.src}
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <p>&nbsp;</p>
          <br />
          <br />
          <Footer />
        </ScrollContainer>
      </main>
    </>
  );
}
