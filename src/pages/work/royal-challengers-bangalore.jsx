import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollContainer from "@/components/ScrollContainer";
import Head from "next/head";
import { useRouter } from "next/router";
import WorkHero from "@/sections/Work/WorkHero";
import logo from "../../assets/brands/rcb/royal-challengers-bangalore.png";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import "swiper/css";
import rcb from "../../assets/brands/rcb/cover_large.jpg";
import CountUp from "react-countup";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("react-lottie-player/dist/LottiePlayerLight"),
  { ssr: false }
);

import duration from "../../assets/animaticons/duration.json";
import spend from "../../assets/animaticons/spend.json";
import interactions from "../../assets/animaticons/interactions.json";
import followers from "../../assets/animaticons/followers.json";
import Image from "next/image";
import { LoaderScreen } from "@/utilities";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

defaults.font.family = "Matter";
defaults.font.size = 12;
defaults.font.weight = 500;
defaults.color = "#FFFFFF";

export default function RCB() {
  const [xx, setXx] = useState(null);
  const tooltipgen = (tooltipItems) => {
    if (tooltipItems[0]?.label === "2022") {
      return "#8 Sports team in the world";
    } else if (tooltipItems[0]?.label === "2023") {
      return "🎉 #5 Sports team in the world";
    } else {
      return "";
    }
  };
  const options = {
    responsive: true,
    animations: {
      tension: {
        duration: 3000,
        easing: "ease-in-out",
        from: 0.7,
        to: 0.15,
        loop: true,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          color: "#FFFFFF",
          font: {
            family: "Matter", // Add your font here to change the font of your legend label
          },
        },
      },
      tooltip: {
        bodyColor: "#FFC64E",
        callbacks: {
          footer: tooltipgen,
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Interactions (In Millions)",
          font: {
            size: 16,
          },
        },
        grid: { color: "#ffffff10" },
      },
      x: {
        title: {
          display: true,
          text: "Years",
          font: {
            size: 16,
          },
        },
        grid: { color: "#ffffff10" },
      },
    },
  };
  const labels = ["2020", "2021", "2022", "2023"];

  const data = {
    labels,
    datasets: [
      {
        label: "Interactions (In Millions)",
        data: [139, 155, 820, 948],
        borderColor: "#A374FF",
        backgroundColor: "#A374FF",
        pointStyle: "circle",
        pointRadius: 6,
      },
    ],
  };
  const router = useRouter();
  const { filter } = router.query;
  return (
    <>
      <Head>
        <title>
          Making RCB #1 | Team Behind World&rsquo;s Most Popular Cricket Team
        </title>
        <meta
          name="description"
          content="Ever wondered who's behind World's most popular cricket team's digital startegy? Wonder no more, it was us at Okay Done."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://okaydone.in/work/royal-challengers-bangalore"
        />
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation noLogo={true} theme={true} />
        <ScrollContainer>
          <div className="brandpage-hero">
            <WorkHero
              brand={"Royal Challengers Bangalore"}
              categories={["Social Media"]}
              back={"/work"}
              logo={logo.src}
              alt={
                "Royal Challengers Bangalore (RCB) IPL 2022 Logo x Okay Done Media"
              }
              color={"gold"}
            />
          </div>
          <div className="container">
            <div className="brandpage-section-brand">
              <h1>
                Enabling an epic <span>fan movement</span> through powerful
                social media showmanship
              </h1>
            </div>
            <div className="brandpage-section-chart">
              <div className="title">
                <h2>Milestones</h2>
              </div>
              <Line options={options} data={data} />
            </div>
            <div className="brandpage-section-content">
              <div className="title">
                <h2>Recent Milestones</h2>
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
                    The <span>most popular cricket team in the world</span>{" "}
                    ranked by interactions on Instagram during 2022: 948M
                    Impressions
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
                    The 5th <span>most popular sports team in the world</span>{" "}
                    ranked by total interactions during 2022
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
                    Most popular Cricket team <span>in Asia</span>
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="brandpage-section-image">
              <Image
                src={rcb.src}
                alt="Royal Challengers Bangalore (RCB) Team IPL 2022 #PlayBold campaign by social media agency in Bengaluru"
                width={1080}
                height={720}
                style={{ objectFit: "cover" }}
                quality={100}
              />
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
                    Lack of effective communication
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
                    Low interaction
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
                    Monotonous content
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
                    Weak connection with fans
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="brandpage-section-campaign">
              <div className="title">
                <h2>
                  <span style={{ "--spancolor": "#FFC64E" }}>Campaign #1</span>
                  <br />
                  Ee Sala Cup Namde
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
                          suffix=" DAYS"
                          end={67}
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
                          end={653.0}
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
                      <div className="counter-box-title">Interactions</div>
                      <div className="couter-box-counter">
                        <CountUp
                          className="counter-box-counter-number"
                          start={0.0}
                          end={6.66}
                          separator=" "
                          decimals={2}
                          decimal="."
                          suffix="M+"
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
              <div className="title">
                <h2>
                  <span style={{ "--spancolor": "#FFC64E" }}>Campaign #2</span>
                  <br />
                  New Decade New RCB
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
                          suffix=" DAYS"
                          end={7}
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
                          end={480.0}
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
                      <div className="counter-box-title">Interactions</div>
                      <div className="couter-box-counter">
                        <CountUp
                          className="counter-box-counter-number"
                          start={0.0}
                          end={6.1}
                          separator=" "
                          decimals={1}
                          decimal="."
                          suffix="M+"
                          duration={3}
                          startOnMount={false}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="brandpage-section-campaign">
              <div className="brandpage-section-campaign-slider">
                <Swiper
                  spaceBetween={50}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 30
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20
                    },
                  }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <img src={slide1.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <img src={slide2.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="brandpage-section-campaign-slider-slide">
                    <img src={slide3.src} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div> */}
          </div>
          <Footer />
        </ScrollContainer>
      </main>
    </>
  );
}
