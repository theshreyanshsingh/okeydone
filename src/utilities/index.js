import * as loadAnim from "../assets/animaticons/loader-3dots.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => import("react-lottie-player/dist/LottiePlayerLight"),
  { ssr: false }
);

import { motion } from "framer-motion";

export const setTransform = (el, transform) => {
  el.style.transform = transform;
  el.style.WebkitTransform = transform;
};

export const isVisibleTop = (el, container) => {
  const wHeight = window.innerHeight;
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentNode.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const offset = parentRect.top + el.offsetTop - containerRect.top;
  const visible = offset < wHeight && rect.bottom <= wHeight + rect.height;
  return visible;
};

export const isVisible = (start, end, yCurrent) => {
  const visible = start <= yCurrent && end >= yCurrent;
  return visible;
};

export const setStyles = (spacer, container) => {
  container.style.position = "fixed";
  container.style.left = 0;
  container.style.top = 0;
  container.style.zIndex = 2;
  container.style.width = "100%";
  container.classList.add("active");

  const containerHeight = container.getBoundingClientRect().height;
  spacer.style.height = containerHeight + "px";
  spacer.style.width = "1px";
  spacer.style.position = "relative";
};

export const updateElements = (blocks, yCurrent) => {
  blocks.forEach((b) => {
    if (isVisible(b.start, b.end, yCurrent)) {
      const el = b.el;
      const progress = -((b.start - yCurrent) / b.diffrence);
      const px = progress * (b.distance / 100) * 100;
      const position = parseFloat(px).toFixed(2);
      if (b.direction === "x")
        setTransform(el, "translateX(" + position + "px)");
      else setTransform(el, "translateY(" + position + "px)");
    }
  });
};

export const createBlock = (data, container) => {
  const el = data.children.ref.current;
  const { dataDirection, dataPx, dataPercent } = data;
  const wHeight = window.innerHeight;

  const direction = dataDirection || "y";
  const rect = el.getBoundingClientRect();
  const parentRect = el.parentNode.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const offset = parentRect.top + el.offsetTop - containerRect.top;
  const start = isVisibleTop(el, container) ? 0 : offset - wHeight;
  const distance = dataPx
    ? dataPx
    : dataPercent
    ? ((rect.height + wHeight) * dataPercent) / 100
    : 100;
  const end =
    direction === "y"
      ? start + rect.height + wHeight + Number(distance)
      : start + rect.height + wHeight;
  const diffrence = end - start;

  return {
    el,
    dataPx,
    dataPercent,
    start,
    end,
    distance,
    diffrence,
    direction,
  };
};

export const reCalculateBlocks = (blocks, container) => {
  return blocks.map((block) => {
    const el = block.el;
    const dataPx = block.dataPx;
    const dataPercent = block.dataPercent;
    const direction = block.direction;

    const wHeight = window.innerHeight;
    const rect = el.getBoundingClientRect();
    const parentRect = el.parentNode.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const offset = parentRect.top + el.offsetTop - containerRect.top;
    const start = isVisibleTop(el, container) ? 0 : offset - wHeight;
    const distance = dataPx
      ? dataPx
      : dataPercent
      ? ((rect.height + wHeight) * dataPercent) / 100
      : 100;
    const end =
      direction === "y"
        ? start + rect.height + wHeight + Number(distance)
        : start + rect.height + wHeight;
    const diffrence = end - start;

    return {
      ...block,
      start,
      end,
      distance,
      diffrence,
    };
  });
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const loaderOptions = {
  loop: true,
  autoplay: true,
  animationData: loadAnim,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const LoaderScreen = () => {
  return (
    <>
      <div id={"loaderbg"} />
      <motion.div
        key={"main-loader"}
        initial={{ y: "-120%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        id={"globalLoader"}
      >
        <Lottie
          options={loaderOptions}
          height={200}
          isClickToPauseDisabled={true}
          width={200}
        />
      </motion.div>
    </>
  );
};
