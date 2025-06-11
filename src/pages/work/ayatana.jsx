"use client";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollContainer from "@/components/ScrollContainer";
import Head from "next/head";
import WorkHero from "@/sections/Work/WorkHero";
import logo from "../../assets/brands/ayatana/Ayatana.png";
import { AnimatePresence, motion } from "framer-motion";

import slide1 from "../../assets/brands/ayatana/pic1.jpg";
// import slide2 from "../../assets/brands/ayatana/cover.jpg";
import slide2 from "../../assets/brands/ayatana/_AK79105-min.jpg";
import slide3 from "../../assets/brands/ayatana/pic3.jpg";
import slide4 from "../../assets/brands/ayatana/pic4.jpg";
import slide5 from "../../assets/brands/ayatana/pic5.jpg";
import slide6 from "../../assets/brands/ayatana/pic6.jpg";
import slide7 from "../../assets/brands/ayatana/pic7.jpg";
import slide8 from "../../assets/brands/ayatana/pic8.jpg";
import slide9 from "../../assets/brands/ayatana/_AK79392-min.jpg";
import slide10 from "../../assets/brands/ayatana/_DKS6407_v1-min.jpg";
import slide11 from "../../assets/brands/ayatana/_DKS7873-min.jpg";
import slide12 from "../../assets/brands/ayatana/_DKS8329-min.jpg";
import slide13 from "../../assets/brands/ayatana/_OKD7723-min.jpg";

import CountUp from "react-countup";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("react-lottie-player/dist/LottiePlayerLight"),
  { ssr: false }
);

import duration from "../../assets/animaticons/dur-mod.json";
import interactions from "../../assets/animaticons/interaction-mod.json";
import followers from "../../assets/animaticons/follower-mod.json";
import { LoaderScreen } from "@/utilities";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";
import { GlareCard } from "@/components/ui/Glare-card";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import oneimg from "../../assets/brands/ayatana/reels/1image.jpg";
import twoimg from "../../assets/brands/ayatana/reels/2image.jpg";
import threeimg from "../../assets/brands/ayatana/reels/3image.jpg";
import fourimg from "../../assets/brands/ayatana/reels/4image.jpg";
import fiveimg from "../../assets/brands/ayatana/reels/5image.jpg";

function useMotionValue(initial) {
  const [value, setValue] = useState(initial);
  return {
    set: setValue,
    get: () => value,
  };
}

function useSpring(motionValue, config) {
  const [value, setValue] = useState(motionValue.get());
  const listenersRef = useRef(new Set());

  return {
    onChange: (callback) => {
      listenersRef.current.add(callback);
      return () => listenersRef.current.delete(callback);
    },
    set: (newValue) => {
      setValue(newValue);
      listenersRef.current.forEach((callback) => callback(newValue));
    },
  };
}

function useInViewMade(ref, options) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && options?.once) {
          setIsInView(true);
        } else if (!options?.once) {
          setIsInView(entry.isIntersecting);
        }
      },
      { rootMargin: options?.margin || "0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return isInView;
}

function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInViewMade(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState(0);

  const getNumericValue = (val) => {
    if (typeof val === "string") {
      const cleanValue = val.replace(/[,+]/g, "");

      if (cleanValue.includes("k") || cleanValue.includes("K")) {
        return parseFloat(cleanValue.replace(/[kK]/g, "")) * 1000;
      } else if (cleanValue.includes("M") || cleanValue.includes("m")) {
        return parseFloat(cleanValue.replace(/[Mm]/g, "")) * 1000000;
      } else if (cleanValue.includes("Cr")) {
        return parseFloat(cleanValue.replace(/Cr/g, "")) * 10000000;
      } else if (cleanValue.includes("%")) {
        return parseFloat(cleanValue.replace(/%/g, ""));
      }
      return parseFloat(cleanValue) || 0;
    }
    return val;
  };

  const formatDisplayValue = (num, originalValue) => {
    if (typeof originalValue === "string") {
      if (originalValue.includes("%")) {
        return Math.round(num) + "%";
      } else if (originalValue.includes("k") || originalValue.includes("K")) {
        return (num / 1000).toFixed(num >= 1000 ? 0 : 1) + "k";
      } else if (originalValue.includes("M")) {
        return (num / 1000000).toFixed(1) + "M+";
      } else if (originalValue.includes("Cr")) {
        return Math.round(num / 10000000) + " Cr";
      } else if (originalValue.includes(",")) {
        return (
          Math.round(num).toLocaleString() +
          (originalValue.includes("+") ? "+" : "")
        );
      }
    }
    return Math.round(num);
  };

  useEffect(() => {
    if (isInView) {
      const numericTarget = getNumericValue(value);

      // Animate to target value
      let start = 0;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        const current = start + (numericTarget - start) * easeProgress;

        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{formatDisplayValue(displayValue, value)}</span>;
}

function StatBlock({ value, label, afterlabel }) {
  return (
    <div className="flex flex-col justify-center p-4 sm:p-6 text-center w-full sm:w-auto min-w-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">
        <AnimatedCounter value={value} /> {afterlabel}
      </h2>
      <p className="text-xs sm:text-sm text-white/80 mt-1 sm:mt-2 break-words">
        {label}
      </p>
    </div>
  );
}

function Divider() {
  return <div className="hidden sm:block w-px bg-white/20 self-stretch my-4" />;
}

function OptimizedStatsCards() {
  return (
    <div className="mt-14  flex items-center justify-center p-4">
      <div className="text-white w-full max-w-6xl space-y-10">
        {/* Top Row - Performance Marketing */}
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row flex-1 justify-around items-center">
            <div className="lg:w-[25%]">
              <StatBlock value="54,000+" label="Room nights sold" />
            </div>
            <Divider />
            <div className="lg:w-[25%]">
              <StatBlock
                value="120 Cr"
                label="Revenue generated"
                afterlabel="+"
              />
            </div>
            <Divider />
            <div className="lg:w-[25%]">
              <StatBlock value="90%" label="Occupancy rate" />
            </div>
          </div>
          <div className="flex flex-col lg:w-[25%] font-[AntiqueMain] justify-center items-center p-6 text-center sm:text-right bg-black/10">
            <span className="font-bold justify-center items-center text-sm sm:text-base text-center">
              Performance Marketing
            </span>
            <span className="text-xs text-white/80 justify-center items-center  text-center">
              (Jan 2021 – Dec 2024)
            </span>
          </div>
        </div>

        {/* Bottom Row - Instagram */}
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row flex-1 justify-around items-center">
            <div className="lg:w-[25%]">
              <StatBlock value="224k" label="Followers" />
            </div>
            <Divider />
            <div className="lg:w-[25%]">
              <StatBlock value="3.5M+" label="Interactions" />
            </div>
            <Divider />
            <div className="lg:w-[25%]">
              <StatBlock value="10%" label="Engagement" />
            </div>
          </div>
          <div className="flex lg:w-[25%] flex-col font-[AntiqueMain] justify-center items-center p-6 text-center sm:text-right bg-black/10">
            <span className="font-bold text-sm sm:text-base justify-center items-center text-center">
              Social Media
            </span>
            <span className="text-xs text-white/80 items-center justify-center text-center">
              (Jun 2018 – Dec 2024)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Ayatana() {
  const { ref: solutionsRef, inView: solutionsInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: milestonesRef, inView: milestonesInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const challenges = [
    "Competition from legacy brands",
    "Away from touristy spots",
    "Regional awareness only",
    "Low repeat visit potential",
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

  const reels = [
    {
      p: oneimg,
      v: "/videos/1.mp4",
    },
    {
      p: twoimg,
      v: "/videos/2.mp4",
    },
    {
      p: threeimg,
      v: "/videos/3.mp4",
    },
    {
      p: fourimg,
      v: "/videos/4.mp4",
    },
    {
      p: fiveimg,
      v: "/videos/5.mp4",
    },
  ];

  const [playingStates, setPlayingStates] = useState(
    reels.reduce((acc, _, index) => ({ ...acc, [index]: false }), {})
  );

  const handleClick = (index) => {
    setPlayingStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const combined = [
    { type: "heading", text: "What we solved" },
    {
      type: "item",
      data: [
        "High-impact visual storytelling to drive engagement",
        "Consistent, relatable content featuring popular faces and creators",
        "Successful influencer-led brand launch with zero ad spend",
        "Used trending formats and audio for maximum relatability",
        "Combined influencer marketing with performance campaigns for brand uplift and conversions",
        "Showcased Coorg’s waterfalls, misty hills, and forest trails to build brand identity",
        "Narrated stories of wellness, calm, and immersive travel experiences",
        "Engaged pan-India influencers to boost national reach",
        "Positioned Ayatana as a destination for cultural and traditional celebration",
      ],
    },
    { type: "heading", text: "Milestones" },
    {
      type: "item",
      data: [
        "Most-followed stand-alone luxury resort in India on Instagram",
        "Consistent 8 to 12% engagement rate",
        "Awarded ‘Karnataka’s Leading Resort – 2024’ by the World Travel Awards",
        "Maintained a consistent 90% occupancy rate throughout the year",
        "Sold 54,000+ room nights, driven by integrated marketing across channels",
        "Delivered ₹120 Cr+ in revenue via performance marketing in 2024",
        "Achieved 1250% growth across digital platforms between 2018 and 2024",
        "Generated ₹3 Cr+ in revenue during the lockdown (June–August 2020) through a successful ‘Future Travel Voucher’ campaign",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Element is visible when it enters viewport (with some margin)
      const isInViewport =
        rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;

      setIsVisible(isInViewport);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

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
            <div className="flex justify-center items-center rounded-lg overflow-hidden mt-10">
              <div className="w-full max-w-5xl aspect-[16/9] rounded-lg overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1cQoqVwjYak_NbVta2pnEEnJ4JdffhmpK/preview"
                  allow="autoplay"
                  className="w-full h-full border-0"
                  style={{ pointerEvents: "auto", isolation: "isolate" }}
                ></iframe>
              </div>
            </div>
            {/* Brand Challenges */}
            <div className="justify-center items-center flex my-8 sm:my-16 md:my-20 lg:my-28 flex-col gap-6 sm:gap-8 md:gap-10 w-full">
              <h2 className="font-[AntiqueMain] text-white text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] text-center px-4">
                Brand Challenges
              </h2>
              <div className="group flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-6 w-full sm:px-6 md:px-8 lg:px-12 max-w-none md:max-w-6xl lg:max-w-7xl mx-auto">
                {challenges.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white/5 justify-center w-full md:flex-1 md:max-w-none min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] overflow-hidden cursor-pointer transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:scale-105 group-hover:shadow-blue-500/20 transform-gpu  backdrop-blur-sm border border-white/[0.18] rounded-[10px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
                    <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 text-center px-3 sm:px-4 md:px-3 lg:px-4 py-4 sm:py-5 md:py-6 w-full">
                      <p className="text-white font-semibold text-sm sm:text-base md:text-sm lg:text-base xl:text-lg leading-relaxed tracking-wide text-center break-words hyphens-auto">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated */}
            <div className="mb-20">
              {/* First heading - ALWAYS visible at top, NEVER overlaps */}
              <div className="sticky top-0 z-[100] flex items-start justify-start col-span-2  py-6 px-4">
                <h2 className="font-[AntiqueMain] my-3 text-white text-[20px] sm:text-[2.2rem]">
                  What we solved
                </h2>
              </div>
              <div className="h-[500px]  overflow-auto no-scrollbar">
                <div className="h-[500px] mt-10 sm:mt-10">
                  {/* Content for first section - starts BELOW the header */}
                  <div
                    ref={solutionsRef}
                    className="h-[200px] z-10 grid grid-cols-2 col-span-2 gap-4 pt-20 pb-20 px-4"
                  >
                    {solutionsInView &&
                      data.map((d, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                            delay: i * 0.08,
                          }}
                          className="font-sans text-white flex items-start justify-start"
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full mt-2 mx-2 flex-shrink-0"
                            style={{ backgroundColor: "#A374FF" }}
                          />
                          <p className="text-white text-sm sm:text-lg font-sans">
                            {d}
                          </p>
                        </motion.div>
                      ))}
                  </div>
                </div>
                <div className="sticky top-0 z-20  border-t-[0.5px] border-white/50   flex items-start justify-start col-span-2  py-6 px-4">
                  <h2 className="font-[AntiqueMain] py-3 text-white text-[20px] sm:text-[2.2rem]">
                    Milestones
                  </h2>
                </div>

                <div
                  ref={milestonesRef}
                  className="h-[400px] my-3 z-10 grid grid-cols-2 col-span-2 gap-4 pt-20 pb-20 px-4"
                >
                  {milestonesInView &&
                    milestoreadata.map((d, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                          delay: i * 0.08,
                        }}
                        className="font-sans text-white flex items-start justify-start"
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full mt-2 mx-2 flex-shrink-0"
                          style={{ backgroundColor: "#A374FF" }}
                        />
                        <p className="text-white text-sm sm:text-lg font-sans">
                          {d}
                        </p>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>

            <div>
              {/* Count */}
              <div className="flex flex-col md:flex-row justify-center gap-4 w-full px-4">
                <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-4">
                  <div className="group relative w-full md:w-[30%] p-3 flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 ease-out cursor-pointer hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 hover:shadow-blue-500/20 transform-gpu">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
                    <div className="absolute top-0 justify-center items-center left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Lottie
                        animationData={followers}
                        play
                        style={{ width: 150, height: 170 }}
                      />
                    </div>

                    <div className="relative z-10 text-center flex-1 group-hover:translate-y-1 transition-transform duration-300">
                      <p className="text-white font-sans font-semibold text-xl leading-relaxed tracking-wide text-left whitespace-pre-line group-hover:text-blue-200 transition-colors duration-300">
                        Followers
                      </p>
                      <p className="font-[AntiqueMain] text-3xl text-white group-hover:text-blue-100 transition-colors duration-300">
                        224k
                      </p>
                    </div>
                  </div>

                  <div className="group relative w-full md:w-[30%] p-3 flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 ease-out cursor-pointer hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 hover:shadow-purple-500/20 transform-gpu">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
                    <div className="absolute top-0 justify-center items-center left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Lottie
                        animationData={interactions}
                        play
                        style={{ width: 150, height: 170 }}
                      />
                    </div>

                    <div className="relative z-10 text-center flex-1 group-hover:translate-y-1 transition-transform duration-300">
                      <p className="text-white font-sans font-semibold text-xl leading-relaxed tracking-wide text-left whitespace-pre-line group-hover:text-purple-200 transition-colors duration-300">
                        Interactions
                      </p>
                      <p className="font-[AntiqueMain] text-3xl text-white group-hover:text-purple-100 transition-colors duration-300">
                        3.2M+
                      </p>
                    </div>
                  </div>

                  <div className="group relative w-full md:w-[30%] p-3 flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 ease-out cursor-pointer hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 hover:shadow-purple-500/20 transform-gpu">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
                    <div className="absolute top-0 justify-center items-center left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Lottie
                        animationData={duration}
                        play
                        style={{ width: 250, height: 170 }}
                      />
                    </div>

                    <div className="relative z-10 text-center flex-1 group-hover:translate-y-1 transition-transform duration-300">
                      <p className="text-white font-sans font-semibold text-xl leading-relaxed tracking-wide text-left whitespace-pre-line group-hover:text-purple-200 transition-colors duration-300">
                        Views
                      </p>
                      <p className="font-[AntiqueMain] text-3xl text-white group-hover:text-purple-100 transition-colors duration-300">
                        50M+
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {OptimizedStatsCards()}

              {/* Reels & Gallery */}
              <div className="justify-between flex items-center flex-col ">
                {/* Gallery */}
                <div className="brandpage-section-campaign mbottom w-full">
                  <div className="brandpage-section-campaign-slider min-h-[400px] md:min-h-[500px] lg:min-h-[500px]">
                    <h2 className="mb-6 md:mb-8 lg:mb-10">Gallery</h2>
                    <Swiper
                      modules={[Autoplay]}
                      spaceBetween={50}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      loopedSlides={13} // Total number of slides you have
                      speed={800}
                      className="h-[300px] md:h-[400px] lg:h-[500px]"
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
                    >
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide1.src}
                          alt="Ayatana Resort Coorg Infinity Pool shot by Bengaluru's finest content marketing agency - Okay Done Media"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide2.src}
                          alt="Ayatana Resort Coorg Infinity pool shot with social media influencer - Okay Done Media"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide3.src}
                          alt="Ayatana Resort Coorg evening shot by Bengaluru's finest content marketing agency - Okay Done Media"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide4.src}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide5.src}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide6.src}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide7.src}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide8.src}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide9.src}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide10.src}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide11.src}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide12.src}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="brandpage-section-campaign-slider-slide">
                        <Image
                          width={500}
                          height={400}
                          quality={100}
                          src={slide13.src}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>

                {/* Reels */}
                <div className="justify-center items-center flex flex-col no-scrollbar md:overflow-hidden">
                  <div className="relative no-scrollbar w-full max-w-full">
                    {/* Left scroll button - mobile only */}
                    <button
                      className="md:hidden absolute left-[-150px] top-1/2 -translate-y-1/2 z-100 bg-black/70 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/80 transition-all duration-200 shadow-lg border border-white/20"
                      onClick={() => {
                        const container =
                          document.getElementById("reels-container");
                        if (container) {
                          container.scrollBy({
                            left: -280,
                            behavior: "smooth",
                          });
                        }
                      }}
                      aria-label="Scroll left"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                      </svg>
                    </button>

                    {/* Right scroll button - mobile only */}
                    <button
                      className="md:hidden absolute right-[-150px] top-1/2 -translate-y-1/2 z-100 bg-black/70 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/80 transition-all duration-200 shadow-lg border border-white/20"
                      onClick={() => {
                        const container =
                          document.getElementById("reels-container");
                        if (container) {
                          container.scrollBy({ left: 280, behavior: "smooth" });
                        }
                      }}
                      aria-label="Scroll right"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                      </svg>
                    </button>

                    {/* Reels container */}
                    <div
                      id="reels-container"
                      className="no-scrollbar z-10 flex overflow-x-auto scrollbar-hide gap-4 p-4 scroll-smooth snap-x snap-mandatory"
                    >
                      {reels.map((reel, index) => (
                        <div
                          key={index}
                          className="group z-10 relative flex-none w-[70%] md:w-auto snap-start"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
                          <div className="relative p-0 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-1 hover:shadow-blue-500/10">
                            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div
                              className="relative w-full aspect-[9/16] bg-black overflow-hidden rounded-2xl"
                              onClick={() => handleClick(index)}
                            >
                              {playingStates[index] ? (
                                <video
                                  src={reel.v}
                                  className="w-[255px] h-full object-cover"
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  controls={false}
                                />
                              ) : (
                                <>
                                  <Image
                                    height={400}
                                    width={225}
                                    src={reel.p}
                                    className="w-full h-full object-cover"
                                    alt="Video thumbnail"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-[60px] h-[60px] flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
