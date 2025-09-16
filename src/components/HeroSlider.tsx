"use client";
import { motion, PanInfo } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Slide = {
  title: string;
  caption?: string;
  button?: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "WAN 2.2 Image generation",
    caption:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    button: "Try WAN 2.2",
    image: "/img-1.jpg",
  },
  {
    title: "FLUX.1 Krea",
    caption:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, or generate with it in Krea Image.",
    button: "Explore",
    image: "/img-2.jpg",
  },
  {
    title: "Open Source Model",
    caption: "Open-source models for flexible creation and experimentation.",
    button: "Download",
    image: "/img-3.jpg",
  },
  {
    title: "Open Source Model",
    caption: "Open-source models for flexible creation and experimentation.",
    button: "Download",
    image: "/img-4.jpg",
  },
  {
    title: "Open Source Model",
    caption: "Open-source models for flexible creation and experimentation.",
    button: "Download",
    image: "/img-5.jpg",
  },
  {
    title: "WAN 2.2 Image generation",
    caption:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    button: "Try WAN 2.2",
    image: "/img-1.jpg",
  },
  {
    title: "FLUX.1 Krea",
    caption:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, or generate with it in Krea Image.",
    button: "Explore",
    image: "/img-2.jpg",
  },
  {
    title: "Open Source Model",
    caption: "Open-source models for flexible creation and experimentation.",
    button: "Download",
    image: "/img-3.jpg",
  },
  {
    title: "Open Source Model",
    caption: "Open-source models for flexible creation and experimentation.",
    button: "Download",
    image: "/img-4.jpg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(700);
  const gap = 24;

  useEffect(() => {
    const update = () => {
      if (cardRef.current) {
        const w = cardRef.current.offsetWidth;
        setCardWidth(w + gap);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const t = setInterval(() => {
      setIndex((s) => (s + 1) % slides.length);
    }, 4200);
    return () => clearInterval(t);
  }, [isHovered]);

  function handleDragEnd(
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    const offset = info.offset.x;
    if (offset < -80) {
      setIndex((i) => Math.min(slides.length - 1, i + 1));
    } else if (offset > 80) {
      setIndex((i) => Math.max(0, i - 1));
    }
  }

  const translateX = -index * cardWidth;

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={{ x: translateX }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="flex items-stretch gap-6"
            style={{
              cursor: "grab",
              willChange: "transform",
              userSelect: "none",
            }}
          >
            {slides.map((s, i) => (
              <div
                ref={i === 0 ? cardRef : null}
                key={i}
                className="min-w-full sm:min-w-[600px] md:min-w-[700px] h-[300px] sm:h-[380px] rounded-xl shadow-2xl overflow-hidden relative bg-center bg-cover"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15)), url(${s.image})`,
                }}
              >
                {/* left label */}
                <div className="absolute left-5 top-5 text-xs text-white/80 uppercase tracking-wider">
                  NEW IMAGE MODEL
                </div>

                {/* content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-white/90 max-w-full sm:max-w-[80%]">
                    {s.caption}
                  </p>

                  <div className="mt-4">
                    <button className="inline-block bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full shadow">
                      {s.button}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* arrows */}
          <div className="absolute right-6 bottom-4 flex items-center gap-3">
            <button
              aria-label="prev"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className="w-9 h-9 rounded-full button-bg shadow flex items-center justify-center"
            >
              ‹
            </button>
            <button
              aria-label="next"
              onClick={() =>
                setIndex((i) => Math.min(slides.length - 1, i + 1))
              }
              className="w-9 h-9 rounded-full button-bg shadow flex items-center justify-center"
            >
              ›
            </button>
          </div>

          {/* pagination dots */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-black" : "bg-gray-100"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
