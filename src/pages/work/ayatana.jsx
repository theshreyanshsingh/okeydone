"use client";
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

function StatBlock({ value, label }) {
  return (
    <div className="flex flex-col justify-center p-4 text-center w-full sm:w-auto">
      <h2 className="text-2xl font-semibold">{value}</h2>
      <p className="text-xs text-gray-300 mt-1 font-[AntiqueMain]">{label}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="w-px sm:h-[40px] self-center bg-[#3B312C] hidden sm:block" />
  );
}

export default function Ayatana() {
  const challenges = [
    "Competition from legacy brands",
    "Away from touristy spots",
    "Regional Awareness Only",
    "Low Repeat Visit Potential",
  ];

  const data = [
    "High-impact visual storytelling to drive engagement",
    "Consistent, relatable content featuring popular faces and creators",
    "Successful influencer-led brand launch with zero ad spend",
    "Used trending formats and audio for maximum relatability",
    "Combined influencer marketing with performance campaigns for brand uplift and conversions",
    "Showcased Coorg’s waterfalls, misty hills, and forest trails to build brand identity",
    "Narrated stories of wellness, calm, and immersive travel experiences",
    "Engaged pan-India influencers to boost national reach",
    "Positioned Ayatana as a destination for cultural and traditional celebration",
  ];

  const milestoreadata = [
    "Most-followed stand-alone luxury resort in India on Instagram",
    "Consistent 8 to 12% engagement rate",
    "Awarded ‘Karnataka’s Leading Resort – 2024’ by the World Travel Awards",
    "Maintained a consistent 90% occupancy rate throughout the year",
    "Sold 54,000+ room nights, driven by integrated marketing across channels",
    "Delivered ₹120 Cr+ in revenue via performance marketing in 2024",
    "Achieved 1250% growth across digital platforms between 2018 and 2024",
    "Generated ₹3 Cr+ in revenue during the lockdown (June–August 2020) through a successful ‘Future Travel Voucher’ campaign",
  ];

  const rd = ["Followers 224k", "Interactions 3.2M+", "Views 50M +"];

  const reels = [
    "https://www.instagram.com/reel/DC6n05hhxg5/",
    "https://www.instagram.com/reel/C-5OW6JyVIy/",
    "https://www.instagram.com/reel/C7891DoyrMO/",
    "https://www.instagram.com/reel/C7y1LLzSNzZ/",
    "https://www.instagram.com/reel/C6dudMWsnj2/",
  ];

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
              categories={[
                "Social Media",
                "Performance Marketing",
                "Content Creation",
              ]}
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

            {/* Video */}
            <div className="justify-center items-center flex rounded-lg overflow-clip">
              <iframe
                src="https://drive.google.com/file/d/1cQoqVwjYak_NbVta2pnEEnJ4JdffhmpK/preview"
                allow="autoplay"
                className="h-[30vh] md:h-[50vh] sm:h-[80vh] sm:w-full overflow-clip rounded-lg mt-10"
              ></iframe>
            </div>

            {/* Brand Challenges */}
            <div className="justify-center items-center flex my-28 flex-col gap-10 w-full">
              <h2 className="font-[AntiqueMain] text-white text-[20px] sm:text-[2.2rem]">
                Brand Challenges
              </h2>
              <div className="flex flex-col sm:flex-col md:flex-row justify-center gap-6 w-full px-4">
                {challenges.map((item, index) => (
                  <div key={index} className="group relative w-full md:flex-1">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />

                    <div className="relative p-6 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 ease-out cursor-pointer hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-1 hover:shadow-blue-500/10">
                      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 text-center px-2">
                        <p className="text-white font-semibold text-base leading-relaxed tracking-wide text-center">
                          {item}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What we solved */}
            <div className="justify-center items-center flex">
              <h2 className="font-[AntiqueMain] sticky top-0  text-white text-[20px] sm:text-[2.2rem]">
                What we solved
              </h2>
            </div>

            <div className="my-20 relative flex flex-col gap-10 items-center max-h-[60vh] overflow-y-auto no-scrollbar px-4 sm:px-10">
              <div className="flex flex-col w-full top-10">
                {data.map((d, i) => (
                  <div
                    key={i}
                    style={{ top: `${i * 64}px` }}
                    className="sticky top-0  bg-opacity-20 backdrop-blur-sm px-4 sm:px-10 flex text-white font-[Matter] my-5 border-t border-white border-dashed"
                  >
                    <div className="flex justify-between items-start w-full py-2 sm:py-4">
                      <h3 className="min-w-[40px] sm:min-w-[60px] flex-shrink-0">
                        0{i + 1}
                      </h3>
                      <div className="ml-4 flex-grow">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="brandpage-section-image notop">
              <Image
                width={1440}
                height={1080}
                quality={100}
                src={ayatana2.src}
                alt="Ayatana Resort & Spa - Coorg partners with Bengaluru's best content marketing agency - Okay Done Media"
              />
            </div> */}

            {/* Milestones */}
            <div className="brandpage-section-campaign">
              <div className="title">
                <h2>Milestones</h2>
              </div>
              <div className="brandpage-section-campaign-stats">
                <div className="flex">
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
                  {/* web */}
                  <div className="justify-between  hidden relative sm:flex flex-col gap-10 items-center h-[60vh] overflow-y-auto no-scrollbar">
                    <div className="justify-center flex flex-col w-full top-10">
                      {milestoreadata.map((d, i) => (
                        <div
                          key={i}
                          style={{
                            top: `${i * 64}px`,
                          }}
                          className="sticky bg-white/1  backdrop-blur-sm top-0 px-20 flex gap-10 text-white font-[Matter] my-5  border-t-[0.5px] border-white border-dashed"
                        >
                          <div className="h-screen flex justify-between items-start w-full py-4 gap-5">
                            <h3>0{i + 1}</h3>
                            <div className="text-balance text-end ">{d}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* mobile */}
                <div className="my-10 relative max-sm:flex hidden flex-col gap-10 items-center max-h-screen overflow-y-auto no-scrollbar px-4 sm:px-10">
                  <div className="flex flex-col w-full top-10">
                    {milestoreadata.map((d, i) => (
                      <div
                        key={i}
                        style={{ top: `${i * 64}px` }}
                        className="sticky top-0  bg-opacity-20 backdrop-blur-sm px-4 sm:px-10 flex text-white text-[13px] font-[Matter] my-5 border-t border-white border-dashed"
                      >
                        <div className="flex justify-between items-start w-full py-2 sm:py-4">
                          <h3 className="min-w-[40px] sm:min-w-[60px] flex-shrink-0">
                            0{i + 1}
                          </h3>
                          <div className="ml-4 flex-grow">{d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Count */}
            <div className="flex flex-col sm:flex-col md:flex-row justify-center gap-6 w-full px-4">
              {rd.map((item, index) => (
                <div key={index} className="group relative w-full md:flex-1">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />

                  <div className="relative p-6 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 ease-out cursor-pointer hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-1 hover:shadow-blue-500/10">
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 text-center px-2">
                      <p className="text-white font-semibold text-base leading-relaxed tracking-wide text-center">
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-white w-full my-28 mx-auto overflow-hidden space-y-10 px-4 sm:px-0">
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row bg-[#2A211C] border-b rounded-lg gap-6 sm:gap-10 justify-between border-[#3B312C]">
                <StatBlock value="54,000+" label="Room nights sold" />
                <Divider />
                <StatBlock value="120 Cr" label="Revenue generated" />
                <Divider />
                <StatBlock value="90%" label="Occupancy rate" />
                <div className="flex flex-col font-sans justify-center items-center sm:items-end p-4 text-right text-xs text-gray-400 w-full sm:w-auto">
                  <span>Performance Marketing</span>
                  <span className="text-[11px]">(Jan 2021 – Dec 2024)</span>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col sm:flex-row justify-between bg-[#2A211C] rounded-lg flex-wrap gap-6 sm:gap-10">
                <StatBlock value="220k" label="Followers" />
                <Divider />
                <StatBlock value="3.5M+" label="Interactions" />
                <Divider />
                <StatBlock value="6–10%" label="Engagement" />
                <div className="flex flex-col justify-center font-sans items-center sm:items-end p-4 text-right text-xs text-gray-400 w-full sm:w-auto">
                  <span>INSTAGRAM</span>
                  <span className="text-[11px]">(Jun 2018 – Dec 2024)</span>
                </div>
              </div>
            </div>

            {/* Gallery */}
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
              <div></div>
            </div>
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-56 sm:my-40 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
              {reels.map((url, index) => (
                <div
                  key={index}
                  className="group relative flex-none w-[70vw] md:w-auto snap-start"
                >
                  {/* Subtle glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />

                  {/* Main card */}
                  <div className="relative p-0 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-1 hover:shadow-blue-500/10">
                    {/* Subtle accent line */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Reels iframe */}
                    <div className="relative w-full aspect-[9/16] bg-black overflow-hidden rounded-2xl">
                      <iframe
                        src={`${url}embed`}
                        className="w-full aspect-[9/16] border-none"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </div>
                  </div>
                </div>
              ))}
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
