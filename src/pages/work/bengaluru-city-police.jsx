import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollContainer from "@/components/ScrollContainer";
import Head from "next/head";
import WorkHero from "@/sections/Work/WorkHero";
import logo from "../../assets/brands/bcp/logo.png";
import { motion } from "framer-motion";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CountUp from "react-countup";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("react-lottie-player/dist/LottiePlayerLight"),
  { ssr: false }
);

import { TwitterTweetEmbed } from "react-twitter-embed";
import duration from "../../assets/animaticons/duration.json";
import spend from "../../assets/animaticons/spend.json";
import interactions from "../../assets/animaticons/interactions.json";
import followers from "../../assets/animaticons/followers.json";
import { LoaderScreen } from "@/utilities";
SwiperCore.use([Autoplay]);
export default function BCP() {
  return (
    <>
      <Head>
        <title>Bengaluru City Police | Humorous & Relatable Content</title>
        <meta
          name="description"
          content="Consistent, platform-centric content with humor and relatable communication for Bengaluru City Police, ensured we bridged the gap between the public and the police. Okay Done took BCP's social media game to another level."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://okaydone.in/work/bengaluru-city-police"
        />
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation noLogo={true} theme={true} />
        <ScrollContainer>
          <div className="brandpage-hero">
            <WorkHero
              brand={"Bengaluru City Police"}
              categories={["Social Media"]}
              back={"/work"}
              logo={logo.src}
              alt={
                "Bengaluru City Police (BCP) Logo 2017 x Okay Done partnership"
              }
              color={"black"}
            />
          </div>
          <div className="container">
            <div className="brandpage-section-brand">
              <h1>
                Empowering the Bengaluru City Police in fighting crimes through{" "}
                <span>recent, relevant & relatable</span> content.
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
                    Lack of communication
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
                    Misunderstood brand
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
                    Lack of topical content
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
                    No transparency
                  </motion.li>
                  <motion.li
                    key={`rcb-subtitle-miles3`}
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      bounce: 0.4,
                      type: "spring",
                      delay: 0.6,
                    }}
                  >
                    Zero accessibility
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="brandpage-section-content">
              <div className="title">
                <h2>What we did</h2>
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
                    Consistency in the quality of the content by leaving no room
                    for the audience to troll or ridicule the institution.
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
                    Platform-centric content that is appealing to the respective
                    audience bases.
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
                    Brought humor as an element to bridge the gap between the
                    institution and the general public through memes &
                    pop-culture references.
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
                    Humanised the institution by adopting a more relatable and
                    personable communication style.
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="brandpage-section-campaign">
              <div className="title">
                <h2>
                  <span style={{ "--spancolor": "#FFC64E" }}>Milestones</span>
                  <br />
                  1400% followers growth/ week
                </h2>
              </div>
              <div className="brandpage-section-campaign-stats">
                <div className="row">
                  <div className="col-3 col-sm-6">
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
                      <div className="counter-box-icon">
                        <Lottie
                          animationData={duration}
                          play
                          style={{ width: 150, height: 100 }}
                        />
                      </div>
                      <div className="counter-box-title">Campaign Duration</div>
                      <div className="couter-box-counter">
                        <CountUp
                          className="counter-box-counter-number"
                          suffix=" WEEKS"
                          end={9}
                          duration={3}
                          startOnMount={false}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-3 col-sm-6">
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
                      <div className="counter-box-icon">
                        <Lottie
                          animationData={spend}
                          play
                          style={{ width: 150, height: 100 }}
                        />
                      </div>
                      <div className="counter-box-title">CAMPAIGN SPENDS</div>
                      <div className="couter-box-counter">
                        <CountUp
                          className="counter-box-counter-number"
                          prefix="₹"
                          end={0}
                          duration={3}
                          startOnMount={false}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-3 col-sm-6">
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
                          animationData={followers}
                          play
                          style={{ width: 150, height: 100 }}
                        />
                      </div>
                      <div className="counter-box-title">Followers Gained</div>
                      <div className="couter-box-counter">
                        <CountUp
                          className="counter-box-counter-number"
                          start={0.0}
                          end={400.0}
                          separator=" "
                          decimals={3}
                          decimal=","
                          suffix="+"
                          duration={5}
                          startOnMount={false}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-3 col-sm-6">
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
                      <div className="counter-box-title">Posts Shared</div>
                      <div className="couter-box-counter">
                        <CountUp
                          className="counter-box-counter-number"
                          start={0.0}
                          end={10.0}
                          separator=" "
                          decimals={3}
                          decimal=","
                          suffix="+"
                          duration={3}
                          startOnMount={false}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="brandpage-section-campaign">
              <div className="brandpage-section-campaign-slider twitter">
                <h2>Tweets</h2>
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
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  loopedSlides={3}
                  direction={"horizontal"}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <TwitterTweetEmbed tweetId={"865085841315639297"} />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <TwitterTweetEmbed tweetId={"911110637060624385"} />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <TwitterTweetEmbed tweetId={"882480553370427392"} />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <TwitterTweetEmbed tweetId={"859051129367400450"} />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <TwitterTweetEmbed tweetId={"868771374432567296"} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <Footer />
        </ScrollContainer>
      </main>
    </>
  );
}
