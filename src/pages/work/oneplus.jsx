import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollContainer from "@/components/ScrollContainer";
import Head from "next/head";
import WorkHero from "@/sections/Work/WorkHero";
import logo from "../../assets/brands/oneplus/oneplus-logo.webp";
import { motion } from "framer-motion";
import LazyLoad from "react-lazyload";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
SwiperCore.use([Autoplay]);
import CountUp from "react-countup";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("react-lottie-player/dist/LottiePlayerLight"),
  { ssr: false }
);

import duration from "../../assets/animaticons/duration.json";
import interactions from "../../assets/animaticons/interactions.json";

//camp 3 videos
// import video1 from "../../assets/brands/oneplus/videos/video1.mp4"

//campaign1 pics
import mpic1 from "../../assets/brands/oneplus/mirror/pic1.jpg";
import mpic2 from "../../assets/brands/oneplus/mirror/pic2.jpg";
import mpic3 from "../../assets/brands/oneplus/mirror/pic3.jpg";
import mpic4 from "../../assets/brands/oneplus/mirror/pic4.jpg";
import mpic5 from "../../assets/brands/oneplus/mirror/pic5.jpg";
import mpic6 from "../../assets/brands/oneplus/mirror/pic6.jpg";
import mpic7 from "../../assets/brands/oneplus/mirror/pic7.jpg";
import mpic8 from "../../assets/brands/oneplus/mirror/pic8.jpg";
import mirrorMain1 from "../../assets/brands/oneplus/mirror/main1.jpg";
import mirrorMain2 from "../../assets/brands/oneplus/mirror/main2.jpg";

//campaign2 pics
import cpic1 from "../../assets/brands/oneplus/campaign1/pic1.jpg";
import cpic2 from "../../assets/brands/oneplus/campaign1/pic2.jpg";
import cpic3 from "../../assets/brands/oneplus/campaign1/pic3.jpg";
import cpic4 from "../../assets/brands/oneplus/campaign1/pic4.jpg";
import cpic5 from "../../assets/brands/oneplus/campaign1/pic5.jpg";
import cpic6 from "../../assets/brands/oneplus/campaign1/pic6.jpg";
import cpic7 from "../../assets/brands/oneplus/campaign1/pic7.jpg";
import cMain1 from "../../assets/brands/oneplus/campaign1/main1.jpg";
import cMain2 from "../../assets/brands/oneplus/campaign1/main2.jpg";

//diwali campaign
import dMain1 from "../../assets/brands/oneplus/diwali/main1.jpg";
import dMain2 from "../../assets/brands/oneplus/diwali/main2.jpg";
import { LoaderScreen } from "@/utilities";
import Image from "next/image";

export default function OnePlus() {
  return (
    <>
      <Head>
        <title>OnePlus | Infleuncer Marketing</title>
        <meta
          name="description"
          content="Here's how we made sure OnePlus stand out in the Influencer Marketing race. The collaboration between Bangalore's top marketing agency and India's best smartphone brand ensured they remain on top.  "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation noLogo={true} theme={true} />
        <ScrollContainer>
          <div className="brandpage-hero">
            <WorkHero
              brand={"OnePlus"}
              categories={["Influencer Marketing"]}
              back={"/work"}
              alt="OnePlus phone logo x Okay Done Media Brand collaboration 2019"
              logo={logo.src}
              color={"red"}
            />
          </div>
          <div className="container">
            <div className="brandpage-section-brand">
              <h1>
                Creative <span>influencer campaign</span> for the most
                successful smartphone brand in India
              </h1>
            </div>
            <div className="brandpage-section-campaign">
              <div className="title">
                <h2>
                  <span style={{ "--spancolor": "#FFC64E" }}>Campaign #1</span>
                  <br />
                  OnePlus 7T Pro: Mirror Campaign
                </h2>
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
                      <div className="counter-box-title">Total Engagement</div>
                      <div className="couter-box-counter">
                        <CountUp
                          className="counter-box-counter-number"
                          formattingFn={(value) =>
                            value
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          }
                          end={5040321}
                          duration={3}
                          startOnMount={false}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-9 col-sm-12">
                    <h2 className="brandpage-section-campaign-stats-head">
                      Campaign Insights
                    </h2>
                    <ul className="brandpage-section-campaign-stats-list">
                      <li>
                        The campaign represented the 90Hz refresh rate in the
                        OnePlus 7T Pro through multiple mirror reflections of
                        artists
                      </li>
                      <li>Collaborated with ten celebrities</li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <div className="brandpage-section-campaign-stats-divider">
                      &nbsp;
                    </div>
                  </div>
                  <div className="col-6 col-sm-12">
                    <Image
                      alt="Vijay Deverakonda in black and white as part of massive OnePlus 7T Pro mirror influencer campaign"
                      width={800}
                      height={600}
                      quality={100}
                      className="brandpage-section-campaign-stats-image left"
                      src={mirrorMain1.src}
                    />
                  </div>
                  <div className="col-6 col-sm-12">
                    <Image
                      alt="Divya Agarwal in black and white as part of massive OnePlus 7T Pro mirror influencer campaign"
                      width={800}
                      height={600}
                      quality={100}
                      className="brandpage-section-campaign-stats-image right"
                      src={mirrorMain2.src}
                    />
                  </div>
                </div>
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
                      <Image
                        alt="Anita Hassanandani Reddy in black and white as part of massive OnePlus 7T Pro mirror influencer campaign"
                        width={500}
                        height={400}
                        quality={100}
                        src={mpic1.src}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        alt="Carry Minati in black and white as part of massive OnePlus 7T Pro mirror influencer campaign"
                        width={500}
                        height={400}
                        quality={100}
                        src={mpic2.src}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        alt="Nupur Sanon in black and white as part of massive OnePlus 7T Pro mirror influencer campaign"
                        width={500}
                        height={400}
                        quality={100}
                        src={mpic3.src}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        alt="Vijay Deverakonda in black and white as part of massive OnePlus 7T Pro mirror influencer campaign"
                        width={500}
                        height={400}
                        quality={100}
                        src={mpic4.src}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        alt=""
                        width={500}
                        height={400}
                        quality={100}
                        src={mpic5.src}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        alt=""
                        width={500}
                        height={400}
                        quality={100}
                        src={mpic6.src}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        alt=""
                        width={500}
                        height={400}
                        quality={100}
                        src={mpic7.src}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        alt="Divya Agarwal in black and white as part of massive OnePlus 7T Pro mirror influencer campaign"
                        width={500}
                        height={400}
                        quality={100}
                        src={mpic8.src}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="brandpage-section-campaign">
              <div className="title">
                <h2>
                  <span style={{ "--spancolor": "#FFC64E" }}>Campaign #2</span>
                  <br />
                  Oneplus 7T Pro McLaren Edition
                </h2>
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
                      <div className="counter-box-title">Total Engagement</div>
                      <div className="couter-box-counter">
                        <CountUp
                          className="counter-box-counter-number"
                          formattingFn={(value) =>
                            value
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          }
                          end={5041385}
                          duration={3}
                          startOnMount={false}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-9 col-sm-12">
                    <h2 className="brandpage-section-campaign-stats-head">
                      Campaign Insights
                    </h2>
                    <ul className="brandpage-section-campaign-stats-list">
                      <li>
                        The campaign captures the alter ego of individuals to
                        represent the new avatar of OnePlus’s Limited Edition:
                        7T PRO!
                      </li>
                      <li>Collaborated with eight celebrities</li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <div className="brandpage-section-campaign-stats-divider">
                      &nbsp;
                    </div>
                  </div>
                  <div className="col-6 col-sm-12">
                    <Image
                      width={800}
                      height={600}
                      quality={100}
                      className="brandpage-section-campaign-stats-image left"
                      src={cMain1.src}
                      alt="Neha Sharma in black posing for OnePlus 7T Pro Mclaren edition influencer campaign"
                    />
                  </div>
                  <div className="col-6 col-sm-12">
                    <Image
                      width={800}
                      height={600}
                      quality={100}
                      className="brandpage-section-campaign-stats-image right"
                      src={cMain2.src}
                      alt="Kajol Aggarwal in black posing for OnePlus 7T Pro Mclaren edition influencer campaign"
                    />
                  </div>
                </div>
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
                      <Image
                        width={500}
                        height={400}
                        quality={100}
                        src={cpic1.src}
                        alt="Sunny Leone in black posing for OnePlus 7T Pro Mclaren edition influencer campaign"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        width={500}
                        height={400}
                        quality={100}
                        src={cpic2.src}
                        alt="Kajol Aggarwal in black posing for OnePlus 7T Pro Mclaren edition influencer campaign"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        width={500}
                        height={400}
                        quality={100}
                        src={cpic3.src}
                        alt="Neha Sharma in black posing for OnePlus 7T Pro Mclaren edition influencer campaign"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        width={500}
                        height={400}
                        quality={100}
                        src={cpic4.src}
                        alt="Rakul Preet Singh in black posing for OnePlus 7T Pro Mclaren edition influencer campaign"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        width={500}
                        height={400}
                        quality={100}
                        src={cpic5.src}
                        alt="Heena Khan in black posing for OnePlus 7T Pro Mclaren edition influencer campaign"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        width={500}
                        height={400}
                        quality={100}
                        src={cpic6.src}
                        alt="Jannat Zubair Rahmani in black posing for OnePlus 7T Pro Mclaren edition influencer campaign"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="brandpage-section-campaign-slider-slide">
                      <Image
                        width={500}
                        height={400}
                        quality={100}
                        src={cpic7.src}
                        alt="Avneet Kaur in black posing for OnePlus 7T Pro Mclaren edition influencer campaign"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="brandpage-section-campaign">
              <div className="title">
                <h2>
                  <span style={{ "--spancolor": "#FFC64E" }}>Campaign #3</span>
                  <br />
                  #YourFestiveShot (Diwali campaign)
                </h2>
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
                      <div className="counter-box-icon">
                        <Lottie
                          animationData={duration}
                          play
                          style={{ width: 150, height: 100 }}
                        />
                      </div>
                      <div className="counter-box-title">Duration</div>
                      <div className="couter-box-counter">
                        <CountUp
                          className="counter-box-counter-number"
                          suffix=" DAYS"
                          end={10}
                          duration={3}
                          startOnMount={false}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-9 col-sm-12">
                    <h2 className="brandpage-section-campaign-stats-head">
                      Milestones
                    </h2>
                    <ul className="brandpage-section-campaign-stats-list">
                      <li>250+ entries received during the campaign period</li>
                      <li>
                        Collaborated with 75+ photographers, influencers, &
                        travelers for #YourFestiveShot campaign
                      </li>
                      <li>OnePlus’s most successful O2O campaign</li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <div className="brandpage-section-campaign-stats-divider">
                      &nbsp;
                    </div>
                  </div>
                  <div className="col-6 col-sm-12">
                    <Image
                      width={800}
                      height={600}
                      quality={100}
                      className="brandpage-section-campaign-stats-image left"
                      src={dMain1.src}
                      alt="#ShotonOnePlus campaign billboard "
                    />
                  </div>
                  <div className="col-6 col-sm-12">
                    <Image
                      width={800}
                      height={600}
                      quality={100}
                      className="brandpage-section-campaign-stats-image right"
                      src={dMain2.src}
                      alt="#ShotonOnePlus campaign billboard "
                    />
                  </div>
                </div>
              </div>
              <div className="brandpage-section-campaign-videos">
                <div className="row">
                  <div className="col-6 col-sm-12 h-200">
                    <video
                      className="brandpage-section-campaign-videos-video left"
                      controls
                    >
                      <source
                        src="/videos/video1.mp4#t=0.001"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="col-6 col-sm-12 h-200">
                    <video
                      className="brandpage-section-campaign-videos-video right"
                      controls
                    >
                      <source
                        src="/videos/video2.mp4#t=0.001"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="col-6 col-sm-12"></div>
                </div>
              </div>
            </div>
            <div className="brandpage-section-content notop">
              <div className="title">
                <h2>Campaign Insights</h2>
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
                    As celebrations and festivities double up when shared with
                    others, <span>#YourFestiveShot</span> gave users a chance to
                    feature their festive Diwali photographs on OnePlus
                    billboards around the country!
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
                    The images on the billboard kept changing in real-time, as
                    more and more people uploaded their festive shots on social
                    media using the hashtag <span>#YourFestiveShot</span>
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
                    The festive shots were displayed on billboards across
                    Bangalore, Mumbai, Pune, Kolkata, Hyderabad, Delhi, Jaipur,
                    and Ahmedabad, illuminating the night sky with beautiful
                    moments shot on OnePlus.
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
                    Diwali 2021 was about things looking up after a long time.
                    The OOH campaign captured this thought beautifully, making
                    people look up quite literally!
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <Footer />
        </ScrollContainer>
      </main>
    </>
  );
}
