import { useState, useEffect } from "react";

const slides = [
  {
    img: "/assets/org_tools-7DWlPw6L.png",
    title: "Organize your tools",
    desc: "Keep your apps, subscriptions, and tech stack in one simple space.",
    bg: "linear-gradient(to bottom, #ffebee 0%, #f8bbd0 100%)",
  },
  {
    img: "/assets/discover_tools-DZ0lYYtv.png",
    title: "Discover what works",
    desc: "Find new tools tailored to your workflow, curated for freelancers and remote workers.",
    bg: "linear-gradient(to bottom, #e8f5e9 0%, #c8e6c9 100%)",
  },
  {
    img: "/assets/get_rewarded-CI6jGT9Z.png",
    title: "Get Rewarded",
    desc: "Earn perks, gift cards and cashback just for staying productive.",
    bg: "linear-gradient(to bottom, #f3e5f5 0%, #e1bee7 100%)",
  },
];

export default function CoverFlowSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentBg = slides[activeIndex].bg;

  const getSlideStyle = (index: number) => {
    const diff = index - activeIndex;

    if (diff === 0) {
      return {
        transform: "translateX(0) translateZ(120px) rotateY(0deg) scale(1.1)",
        zIndex: 30,
        opacity: 1,
      };
    } else if (diff === -1 || diff === 2) {
      return {
        transform:
          "translateX(-480px) translateZ(-180px) rotateY(78deg) scale(0.82)",
        zIndex: 20,
        opacity: 0.55,
      };
    } else if (diff === 1 || diff === -2) {
      return {
        transform:
          "translateX(480px) translateZ(-180px) rotateY(-78deg) scale(0.82)",
        zIndex: 20,
        opacity: 0.55,
      };
    } else {
      return {
        opacity: 0,
        zIndex: 1,
      };
    }
  };

  return (
    <section className="px-4 md:px-8">
      <div
        className="w-full max-w-6xl mx-auto my-20 p-10 pb-10 pt-10 rounded-3xl md:rounded-[40px] transition-all duration-1000 ease-in-out relative overflow-hidden"
        style={{ background: currentBg }}
      >
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase tracking-wider">
          Everything in One Place
        </h2>

        <div className="relative h-[400px] perspective-[1000px] preserve-3d">
          <div className="absolute inset-1 flex items-center justify-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute flex flex-col items-center text-center max-w-lg transition-all duration-1000 ease-in-out"
                style={getSlideStyle(index)}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full max-w-sm h-48 object-contain pointer-events-none"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-md md:text-md text-gray-700 leading-relaxed px-6 max-w-2xl">
                    {slide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-gray-800 w-14" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
