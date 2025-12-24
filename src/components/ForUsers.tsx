import { useState, useEffect } from "react";
import CoverFlowSlider from "./CoverFlowSlider";
import FAQs from "./FAQs";
import InfiniteMarquee from "./InfiniteMarquee";

const questions = [
  {
    q: "What is Flowvahub?",
    a: "Flowvahub is your productivity sidekick — helping you discover new tools, manage subscriptions, and earn rewards for staying productive.",
  },
  {
    q: "Is my data secure with Flowvahub?",
    a: "Yes, we take data security seriously. Flowvahub uses industry-standard encryption and security practices to protect your information.",
  },
  {
    q: "How does team collaboration work?",
    a: "Flowvahub allows teams to share tools, manage subscriptions collectively, and track productivity metrics in one place.",
  },
  {
    q: "How do Smart Tool Recommendations work?",
    a: "Flowvahub uses AI to analyze your workflow and suggest tools that can enhance your productivity.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your subscription at any time through your account settings.",
  },
  {
    q: "Can I manage all my subscriptions in one place?",
    a: "Yes, Flowvahub provides a centralized dashboard where you can view and manage all your subscriptions in one place.",
  },
  {
    q: "Do you offer mobile apps?",
    a: "Yes 😃 Our iOS and Android apps are launching soon, so you can manage subscriptions, get recommendations, earn rewards, and stay connected anywhere.",
  },
  {
    q: "What if I need help getting started?",
    a: "We provide onboarding guides, tutorials, and email support. Pro users get priority support, while Teams and Organizations receive dedicated onboarding and training.",
  },
  {
    q: "Can I connect with other tech professionals on Flowva?",
    a: "Yes! Flowva has an active community of tech enthusiasts, freelancers, and remote professionals. You can connect with others, discuss tools, get feedback, and collaborate with like-minded users, all while discovering new ways to optimize your workflow.",
  },
  {
    q: "What rewards can I earn with Flowva?",
    a: "All users earn basic rewards by using Flowva, with extra perks for Premium. Rewards come from completing simple tasks — trying recommended tools or sharing feedback — and can be redeemed for gift cards, cash, or community perks.",
  },
];

const steps = [
  {
    number: "1",
    title: "Sign up & Connect",
    desc: "Set up your workspace in minutes",
    img: "/assets/signin-complete-DI0ghP4O.png",
    imgClass: "right-5 -top-10 w-[300px]",
  },
  {
    number: "2",
    title: "Organize & Track",
    desc: "Add your tools, subscriptions, and tasks.",
    img: "/assets/organize-track-CepKxGUD.png",
    imgClass: "right-5 -top-14 w-[300px]",
  },
  {
    number: "3",
    title: "Earn & Enjoy",
    desc: "Check in daily, try new tools, and watch your points grow.",
    coins: true,
  },
];

const testimonials = [
  {
    quote:
      "Flowvahub makes finding tools effortless. Instead of wasting hours jumping between sites, I just open Discover Tools everything’s clear, organized, and right there. Feels less like searching, more like unlocking possibilities. ☕💜",
    name: "Ummaratu M.",
    role: "Freelancer & Virtual Assistant",
    color: "bg-[#5dceff]", // Light blue
  },
  {
    quote:
      "Flowvahub is my new sidekick. It keeps my apps in line, my subs in check, and still finds a way to pay me in rewards. If it could make coffee, I’d marry it",
    name: "Adewale O.",
    role: "Freelancer & Digital Creator",
    color: "bg-[#f7ff5d]", // Light yellow
  },
  {
    quote:
      "Didn’t even realise how much I was drowning in scattered tools until I saw Flowvahub. The idea of getting rewarded just for organizing my stack? That’s the kind of motivation I need.",
    name: "Lois E.",
    role: "Social media manager",
    color: "bg-[#ed85f9]", // Light purple
  },
  {
    quote:
      "The ultimate dashboard for freelancers and techies. Flowvahub is nothing but amazing!",
    name: "Stella R.",
    role: "Trainee at Digital Witch Community",
    color: "bg-[#60ff5d]", // Light green
  },
  {
    quote:
      "My favorite feature is subscription management — it helps me avoid wasting money and makes sure every penny counts.",
    name: "Uchechukwu P.",
    role: "Freelancer",
    color: "bg-[#5dffe9]", // Light cyan
  },
];
const SLIDE_DURATION = 5000;

const ForUsers = () => {
  const rewardOrder = [
    "chatgpt-BGNzlBAl",
    "flowva_coin-DtzxpoyE",
    "asana-CMGFl365",
    "flowva_coin-DtzxpoyE",
    "vs_code-5ANMQ9dH",
    "flowva_coin-DtzxpoyE",
    "framer-p0HsK72y",
    "flowva_coin-DtzxpoyE",
    "google3d-9SxgZoSW",
    "flowva_coin-DtzxpoyE",
    "zoom-DiYJr0tw",
    "flowva_coin-DtzxpoyE",
    "canva-Dtq16jy0",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) {
      setProgress(progress);
      return;
    }

    setProgress(0);

    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / SLIDE_DURATION) * 100;

      if (newProgress >= 100) {
        setActiveIndex((prev) => (prev + 1) % steps.length);
      } else {
        setProgress(newProgress);
      }
    }, 50);

    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeIndex, isPlaying]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 3 : 1);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <>
      <div className="opacity-100 transform-none">
        <div className="flex justify-center items-center w-full">
          <h1 className="text-[40px] md:text-[72px] mt-[55px] md:mt-[130px] text-center font-[Impact] leading-[120%] w-[85%]">
            YOUR{" "}
            <span className="inline-flex px-5 rounded-[100px] text-white bg-[linear-gradient(90deg,_#9013FE_0%,_#FF8687_100%)]">
              SMART
            </span>{" "}
            SPACE TO MANAGE YOUR <br />
            DIGITAL LIFE AND BE REWARDED
          </h1>
        </div>
      </div>

      <button className="mt-8 md:mt-10 relative left-1/2 -translate-x-1/2 w-[232px] rounded-[100px] border border-[#9013FE1A] p-[6px] font-bold text-sm font-manrope">
        <div className=" w-full text-sm whitespace-nowrap p-[24px] rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
          Start Earning Today
        </div>
      </button>

      <div className="w-full overflow-hidden bg-white py-8">
        <InfiniteMarquee rewardOrder={rewardOrder} />
      </div>

      <div className="flex justify-center items-center">
        <p className="px-[14px] text-[20px] md:text-[30px] mt-[70px] mb-20 md:my-12 text-center font-semibold font-manrope md:leading-[12px] md:leading-[40px] md:px-10 md:w-[1000px]">
          Turn productivity into rewards with a calm, smart space that organizes
          your tools, and keeps you in control.
        </p>
      </div>

      <section className="flex justify-center items-center w-full px-5">
        <div className="flex flex-col md:flex-row w-full justify-center gap-5">
          <div className=" w-full shadow-md max-w-[417.67px] pb-10 flex flex-col justify-between p-[16px] h-[327px] md:h-[384px] rotate-0 opacity-100 rounded-2xl border border-[#0000001F] bg-[#F5EBFF]">
            <div className=" flex flex-col gap-[12px]">
              <h2 className="font-[impact] text-[56px]">10,000+</h2>
              <p className="text-[24px]">Users</p>
            </div>
            <p className="text-[20px] font-manrope text-[#5F5F5F]">
              Already simplifying their workflow with Flowva
            </p>
            <div className="flex items-center gap-2">
              <img src="/assets/users_chip-Bbqn3miE.svg" alt="users" />
              <span className="font-semibold font-manrope">10,000+</span>
            </div>
          </div>
          <div className=" w-full shadow-md max-w-[417.67px] pb-10  flex flex-col justify-between p-[16px] h-[327px] md:h-[384px] rotate-0 opacity-100 rounded-2xl border border-[#0000001F] bg-[#F5EBFF]">
            <div className=" flex flex-col gap-[12px]">
              <h2 className="font-[impact] text-[56px]">200+</h2>
              <p className="text-[24px]">Tools</p>
            </div>
            <p className="text-[20px] font-manrope text-[#5F5F5F]">
              Curated and organized for you in the library
            </p>
            <div className="flex items-center gap-2">
              <img src="/assets/Tools_chip-2aCfSVxA.svg" alt="tools" />
              <span className="font-semibold font-manrope">and many more</span>
            </div>
          </div>
          <div className=" w-full shadow-md max-w-[417.67px] pb-10  flex flex-col justify-between p-[16px] h-[327px] md:h-[384px] rotate-0 opacity-100 rounded-2xl border border-[#0000001F] bg-[#F5EBFF]">
            <div className=" flex flex-col gap-[12px]">
              <h2 className="font-[impact] text-[56px]">25+</h2>
              <p className="text-[24px]">Countries</p>
            </div>
            <p className="text-[20px] font-manrope text-[#5F5F5F]">
              Reviewing tools and building smarter stacks every day
            </p>
            <div className="flex items-center">
              <img src="/assets/country_flags-CgQMcyc7.svg" alt="flags" />
            </div>
          </div>
        </div>
      </section>

      <CoverFlowSlider />

      <section className="flex justify-center mb-20 mx-[14px]">
        <div className="xl:max-w-[80%] w-full flex flex-col md:flex-row items-center gap-8">
          <div className="bg-[#FFD7D780] max-w-[580px] w-full rounded-[16px] md:rounded-[32px] p-[16px] md:p-[40px] h-full">
            <button className="p-[10px_16px] bg-[#0000000D] text-sm rounded-[100px]">
              Download
            </button>
            <h2 className="mt-5 mb-3 text-[20px] md:text-[32px] font-semibold">
              ORGANIZE, DISCOVER, AND EARN ON THE GO.
            </h2>
            <div className="w-full flex flex-col md:flex-row items-center justify-center">
              <div
                className="
            shadow-[1px_4px_10px_0px_#ABABAB1A,
             2px_17px_17px_0px_#ABABAB17,
             5px_39px_24px_0px_#ABABAB0D,
             9px_69px_28px_0px_#ABABAB03,
             15px_108px_30px_0px_#ABABAB00] rounded-[32px] flex-1 p-[16px] md:p-[24px] flex lg:flex-row w-full justify-between items-center gap-[-1]
            "
              >
                <div className="flex flex-col text-[20px] gap-4 rounded-3xl bg-[#FFFFFF] md:py-6 md:px-6 p-5">
                  <button className="bg-[#F1F1F1] flex justify-center items-center gap-2 rounded-[100px] p-[16px] w-full">
                    <img
                      src="/assets/appstore-ksfiS9rm.svg"
                      alt="app store icon"
                    />
                    Apple App Store
                  </button>
                  <button className="bg-[#F1F1F1] flex justify-center items-center gap-2 rounded-[100px] p-[16px] w-full">
                    <img
                      src="/assets/playstore-DQQkwWQK.svg"
                      alt="play store icon"
                    />
                    Google Play Store
                  </button>
                </div>
              </div>
              <div className="hidden -ml-8 md:block">
                <img
                  src="/assets/barcode-DFUdq9wC.png"
                  className="w-[150px]"
                  alt="barcode"
                />
              </div>
            </div>
            <button className="rounded-[100px] bg-[#FFFFFFCC] w-full mt-3 p-[16px] md:p-[24px] text-[20px] text-start">
              ⌛ Coming soon
            </button>
          </div>
          <div className="bg-[#111111] rounded-[16px] md:rounded-[32px] max-w-[580px]  p-[16px] md:p-[40px] w-full h-full">
            <button className="p-[10px_16px] bg-[#FFFFFF3D] text-white text-sm rounded-[100px]">
              Benefits
            </button>
            <ul className="space-y-4 my-5">
              <li className="flex items-center gap-4">
                <span className="w-4 h-4 rounded-full bg-white flex-shrink-0"></span>
                <span className="text-[18px] md:text-[24px] font-bold text-white">
                  QUICK DAILY CHECK-INS
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-4 h-4 rounded-full bg-[#ffffff4f] flex-shrink-0"></span>
                <span className="text-[18px] md:text-[24px] font-bold text-[#ffffff4f]">
                  DISCOVER TOOLS ANYWHERE
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-4 h-4 rounded-full bg-[#ffffff4f] flex-shrink-0"></span>
                <span className="text-[18px] md:text-[24px] font-bold text-[#ffffff4f]">
                  NEVER MISS A REWARD
                </span>
              </li>
            </ul>
            <img
              src="/assets/how_it_works-DSuy1oyD.png"
              alt="how it works"
              className="mt-10"
            />
          </div>
        </div>
      </section>

      <section className="my-24 px-4 md:px-8">
        <h2 className="text-[56px] md:text-[64px] leading-[120%] font-impact text-center mb-10 font-bold">
          SIMPLE, REWARDING, CALM
        </h2>

        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden bg-[#ECD6FF] border border-[#0000001F] rounded-xl p-6 cursor-pointer transition-all duration-700 ease-in-out h-[552px] ${
                  activeIndex === index ? "col-span-8" : "col-span-2"
                }`}
              >
                <div className="flex flex-col justify-between h-full">
                  <h2 className="font-impact text-black text-[120px] xl:text-[180px] leading-none">
                    {step.number}
                  </h2>
                  <div>
                    <h3 className="text-[24px] xl:text-[36px] font-manrope font-bold xl:font-semibold text-black mb-2">
                      {step.title}
                    </h3>
                    {activeIndex === index && (
                      <p className="text-[20px] text-black font-manrope font-semibold">
                        {step.desc}
                      </p>
                    )}
                  </div>
                </div>

                {activeIndex === index && step.img && (
                  <img
                    src={step.img}
                    alt={step.title}
                    className={`absolute rounded-[32px] ${step.imgClass}`}
                  />
                )}

                {activeIndex === index && step.coins && (
                  <div className="absolute right-5 top-8 flex flex-col gap-4">
                    {[1, 2, 3].map((row) => (
                      <div
                        key={row}
                        className={`flex items-center gap-1 ${
                          row === 2 ? "-ml-20" : ""
                        }`}
                      >
                        {[...Array(4)].map((_, i) => (
                          <img
                            key={`${i}-${row}`}
                            src="/assets/flowva_coin-DtzxpoyE.svg"
                            alt="coin"
                            className="w-16 h-16"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-12 gap-8 ">
            <button
              onClick={togglePlayPause}
              className="w-16 h-16 bg-gray-200 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="4" width="4" height="16" fill="#000" />
                  <rect x="14" y="4" width="4" height="16" fill="#000" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7L8 5z" fill="#000" />
                </svg>
              )}
            </button>

            <div className="flex items-center gap-4 bg-gray-200 p-6 rounded-full">
              {steps.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative cursor-pointer"
                >
                  <div
                    className={`${
                      index === activeIndex ? "w-12" : "w-3"
                    }  h-3 bg-gray-300 rounded-full overflow-hidden`}
                  >
                    <div
                      className="h-full bg-black transition-all duration-300"
                      style={{
                        width: index === activeIndex ? `${progress}%` : "0%",
                      }}
                    />
                  </div>

                  {index !== activeIndex && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-400 rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#ECD6FF] border border-[#0000001F] rounded-xl p-6 h-[407px] pb-10 flex flex-col justify-between relative overflow-hidden"
            >
              <h2 className="font-impact text-black text-[150px] leading-none font-semibold">
                {step.number}
              </h2>
              <div>
                <h3 className="text-[30px] font-manrope font-semibold text-black">
                  {step.title}
                </h3>
                <p className="text-[16px] font-manrope font-semibold text-black">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[14px]">
        <div className="flex justify-center">
          <svg
            width="73"
            height="51"
            viewBox="0 0 73 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.3275 8.59811C24.8945 7.27805 21.9922 13.7634 21.9922 13.7634C21.9922 13.7634 15.8152 10.2518 10.6035 15.7135C4.29112 22.3286 9.00907 38.5919 30.4172 39.486C47.1481 26.0999 41.3302 10.1969 32.3275 8.59811Z"
              stroke="#141B34"
              stroke-width="5"
              stroke-linecap="round"
            ></path>
            <path
              d="M51.5082 11.8063C51.5278 11.8317 51.5469 11.8567 51.5657 11.8814C51.5938 11.8684 51.6225 11.8553 51.6516 11.8422C52.367 11.5191 53.3873 11.146 54.6095 10.9494C57.0896 10.5504 60.3684 10.8912 63.4954 13.7232C67.3936 17.2538 68.1628 23.5668 65.2679 29.1475C62.3396 34.7924 55.7171 39.7049 44.7588 40.9448L44.2939 40.9974L43.9083 40.7324C34.8198 34.4857 31.2847 27.0364 31.3543 20.6775C31.4231 14.391 35.0702 9.18095 40.1707 7.89782C44.262 6.86855 47.316 8.10946 49.3174 9.6277C50.3036 10.3759 51.0288 11.1849 51.5082 11.8063Z"
              fill="#9013FE"
            ></path>
          </svg>
        </div>
        <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center font-semibold">
          JOIN A GROWING COMMUNITY
        </h2>
        <div className="flex justify-center">
          <div className="w-full w-screen md:max-w-[90%] ">
            <section className="pt-4 pb-10 px-4 md:px-8 bg-gray-50">
              <div className="w-full max-w-7xl mx-auto overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / slidesPerView)
                    }%)`,
                  }}
                >
                  {[...testimonials, ...testimonials].map(
                    (testimonial, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 px-4 leading-tighter tighter"
                        style={{ flexBasis: `${100 / slidesPerView}%` }}
                      >
                        <div
                          className={`max-h-[590px] p-8 rounded-3xl shadow-xl flex flex-col justify-between ${testimonial.color}`}
                        >
                          <p className="text-lg md:text-xl font-medium text-gray-800 mb-8">
                            "{testimonial.quote}"
                          </p>

                          <div>
                            <div className="mb-6">
                              <svg
                                width="124"
                                height="20"
                                viewBox="0 0 124 20"
                                fill="none"
                              >
                                {[...Array(5)].map((_, i) => (
                                  <path
                                    key={i}
                                    d="M9.99675 1.04199C10.8711 1.04199 11.5599 1.70244 11.9996 2.59359L13.468 5.55463C13.5125 5.64627 13.618 5.77531 13.7767 5.89336C13.9352 6.01128 14.0905 6.07634 14.1926 6.0935L16.8506 6.53876C17.8107 6.70011 18.6155 7.17074 18.8767 7.99024C19.1378 8.80907 18.7553 9.66 18.0649 10.3517L15.9993 12.4344C15.9174 12.5169 15.8257 12.6723 15.7682 12.8749C15.7111 13.076 15.7061 13.2592 15.732 13.3776L16.3231 15.9548C16.5681 17.0268 16.4869 18.0898 15.7309 18.6455C14.9723 19.2031 13.9356 18.9559 12.9938 18.395L10.5021 16.9078C10.3975 16.8453 10.2178 16.7947 10.0009 16.7947C9.78561 16.7947 9.60214 16.8447 9.4907 16.9095L7.0024 18.3947C6.06171 18.9575 5.02628 19.2003 4.26759 18.6422C3.51208 18.0863 3.42678 17.0254 3.67259 15.9543L4.26325 13.3793C4.28951 13.2592 4.28444 13.076 4.22733 12.8749C4.16983 12.6723 4.07815 12.5169 3.99631 12.4344L1.92988 10.3509C1.24387 9.65919 0.862672 8.809 1.12162 7.99137C1.38133 7.17136 2.18452 6.70016 3.14528 6.53871L5.8011 6.09382C5.89931 6.07678 6.05225 6.01246 6.2104 5.89423C6.36884 5.77578 6.47466 5.64645 6.51927 5.55463L7.98802 2.5928C8.43247 1.70122 9.12336 1.04199 9.99675 1.04199Z"
                                    fill="#141B34"
                                    transform={`translate(${i * 26} 0)`}
                                  />
                                ))}
                              </svg>
                            </div>

                            <div>
                              <h4 className="text-2xl font-bold text-gray-900">
                                {testimonial.name}
                              </h4>
                              <p className="text-md text-gray-700">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex % testimonials.length
                        ? "bg-gray-800 w-10"
                        : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <FAQs questions={questions} />

      <section className="flex justify-center px-[14px]  mt-6 mb-6">
        <div className="bg-[#F7FF5D] relative overflow-hidden min-h-[394px] md:min-h-[550px] py-16 border border-[#00000014]  w-full rounded-[16px] md:rounded-[32px] md:max-w-[80%]">
          <div className="flex justify-center">
            <h2 className="text-[40px] md:text-[64px] leading-[120%]  font-[impact] mb-10 text-center w-[50%]">
              STAY PRODUCTIVE. GET REWARDED.
            </h2>
          </div>
          <div className="flex justify-center">
            <p className="md:text-[28px] leading-[30px] md:leading-[35px] font-semibold text-center font-manrope w-[70%]">
              Turn your tools, subscriptions, and daily habits into rewards all
              in one calm space
            </p>
          </div>

          <button className="mt-20 left-1/2 font-manrope right-1/2 -translate-x-1/2 relative w-[232px]  text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-[6px]">
            <div className=" w-full text-sm whitespace-nowrap p-[24px] rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
              Unlock Rewards Now
            </div>
          </button>

          <div className="absolute -left-16 top-[60%]   md:-left-10 md:top-1/2 md:-translate-y-1/2">
            <img src="/assets/flowva_coin-DtzxpoyE.svg" alt="flowva_coin" />
            <img
              src="/assets/flowva_coin-DtzxpoyE.svg"
              className="ml-28"
              alt="flowva_coin"
            />
            <img
              src="/assets/flowva_coin-DtzxpoyE.svg"
              className="ml-24"
              alt="flowva_coin"
            />
            <img src="/assets/flowva_coin-DtzxpoyE.svg" alt="flowva_coin" />
          </div>
          <div className="absolute -right-24 -top-[68%] rotate-180 transition md:-right-10 md:top-1/2 md:-translate-y-1/2">
            <img src="/assets/flowva_coin-DtzxpoyE.svg" alt="flowva_coin" />
            <img
              src="/assets/flowva_coin-DtzxpoyE.svg"
              className="ml-28"
              alt="flowva_coin"
            />
            <img
              src="/assets/flowva_coin-DtzxpoyE.svg"
              className="ml-24"
              alt="flowva_coin"
            />
            <img src="/assets/flowva_coin-DtzxpoyE.svg" alt="flowva_coin" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ForUsers;
