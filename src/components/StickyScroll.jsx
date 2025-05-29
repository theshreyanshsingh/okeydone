"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyScrollSection({ data }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to data index
  const dataIndex = useTransform(scrollYProgress, [0, 1], [0, data.length - 1]);

  useEffect(() => {
    const unsubscribe = dataIndex.onChange((latest) => {
      setCurrentIndex(Math.round(latest));
    });
    return unsubscribe;
  }, [dataIndex]);

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky header section */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center ">
        <div className="justify-start flex flex-col w-full h-[50vh] max-w-4xl px-8">
          {data.map((d, i) => (
            <motion.div
              key={`data-item-${i}-${d.slice(0, 10)}`}
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: i === currentIndex ? 1 : 0.3,
                scale: i === currentIndex ? 1.02 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="w-full border-t border-[0.5px] border-white border-dashed" />
              <div className="justify-between items-center flex text-white font-[Matter] my-5">
                <motion.h3
                  animate={{
                    color: i === currentIndex ? "#ffffff" : "#666666",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  0{i + 1}
                </motion.h3>
                <motion.div
                  animate={{
                    color: i === currentIndex ? "#ffffff" : "#666666",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {d}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Spacer to create scroll space */}
      <div style={{ height: `${data.length * 100}vh` }} />
    </div>
  );
}
