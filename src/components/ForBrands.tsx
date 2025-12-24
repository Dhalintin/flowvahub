import { useRef, useState } from "react";
import FAQs from "./FAQs";
import InfiniteFlipMarquee from "./InfiniteFlipMarquee";
const questions = [
  {
    q: "What is Flowva and who are your users?",
    a: "Flowva is a curated platform for tech-savvy freelancers, remote workers, and professionals. Our users actively manage their tool libraries, try new software, and engage meaningfully with brand features. Your subscription gives you direct access to this verified, engaged audience.",
  },
  {
    q: "How does the subscription work?",
    a: "Brands pay a monthly subscription based on the tier they select. Your subscription includes the ability to run features, provide perks and discounts to users, and track engagement — all without additional fees.",
  },
  {
    q: "Can I run multiple features at once?",
    a: "Yes! The number of features you can run depends on your subscription tier. Launch allows 1–2 features per month, Accelerate allows 3–5, and Dominate provides unlimited features.",
  },
  {
    q: "How are users rewarded?",
    a: "Brands handle all perks, discounts, and rewards directly. Users earn these rewards by engaging with your features, such as trying a tool or providing feedback, ensuring meaningful participation.",
  },
  {
    q: "Can I target specific types of users?",
    a: "Yes. You can target users by role, and skill set to maximize engagement and relevance.",
  },
  {
    q: "What is optional premium support?",
    a: "Premium support allows Flowva’s team to manage and optimize your features for high impact. This includes advanced analytics, feature strategy, and priority placement within the platform.",
  },
  {
    q: "What happens when Early-Bird pricing ends?",
    a: "Your rate is locked in forever. New customers will pay standard rates once we reach 50,000 users.",
  },
  {
    q: "Can I switch plans anytime?",
    a: "Yes! Upgrade or downgrade anytime through your dashboard. Changes take effect immediately.",
  },
  {
    q: "Can I try before I buy?",
    a: "We offer flexible month-to-month billing so you can cancel anytime if it’s not working for you.",
  },
  {
    q: "What counts as a “featured campaign”?",
    a: "Each campaign features your tool across designated placements for 30 days. You control messaging, perks, and targeting through your dashboard.",
  },
];
export default function ForBrands() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [0, 1, 2];

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, offsetWidth } = sliderRef.current;
    const index = Math.round(scrollLeft / offsetWidth);
    setActiveIndex(index);
  };
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <h1 className="text-[40px] md:text-[72px] mt-[55px] md:mt-[130px] text-center font-[Impact] leading-[120%] w-[85%]">
          CONNECT WITH
          <span> </span>
          <span className="inline-flex px-9 rounded-[100px] text-white bg-[linear-gradient(90deg,_#9013FE_0%,_#FF8687_100%)]">
            TECH
          </span>
          <span> </span>
          <br /> PROFESSIONALS WHO ACTUALLY ENGAGE
        </h1>
      </div>

      <button className="mt-8 md:mt-10 relative left-1/2 -translate-x-1/2 w-[232px] rounded-[100px] border border-[#9013FE1A] p-[6px] font-bold text-sm font-manrope">
        <div className=" w-full text-sm whitespace-nowrap p-[24px] rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
          Start Your 3-day Trial Today
        </div>
      </button>

      <InfiniteFlipMarquee />

      <div className="text-center w-full flex justify-center my-16 md:my-24 px-[14px]">
        <div className="w-full md:max-w-[80%]">
          <p className="text-[#535862]">
            <strong>Trusted by 20+ forward-thinking brands</strong> <br /> Join
            companies already reaching 10,000+ remote workers and freelancers
            actively discovering and organizing their digital tools
          </p>
          <div className="flex justify-center flex-wrap w-full gap-5 mt-5">
            <img
              src="/assets/light_box_logo-ndvGdB1j.svg"
              className="w-[127.5px]"
              alt="logo 1"
            />
            <img
              src="/assets/light_box_logo-ndvGdB1j.svg"
              className="w-[127.5px]"
              alt="logo 2"
            />
            <img
              src="/assets/father_dev_logo-BlBKmy7S.svg"
              className="w-[127.5px]"
              alt="logo 3"
            />
            <img
              src="data:image/svg+xml,%3csvg%20width='167'%20height='48'%20viewBox='0%200%20167%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='22.6001'%20cy='24.25'%20r='20.5'%20stroke='%23535862'%20stroke-width='3'/%3e%3cpath%20d='M37.0956%209.75451C39.107%2011.7659%2039.7308%2015.163%2038.6472%2019.3771C37.5732%2023.5534%2034.8709%2028.2427%2030.7316%2032.3819C26.5924%2036.5212%2021.9031%2039.2235%2017.7268%2040.2975C13.5127%2041.3811%2010.1156%2040.7573%208.10422%2038.7459C6.09281%2036.7345%205.46896%2033.3374%206.55259%2029.1233C7.62658%2024.947%2010.3289%2020.2577%2014.4682%2016.1185C18.6074%2011.9792%2023.2967%209.27688%2027.473%208.20288C31.6871%207.11926%2035.0842%207.74311%2037.0956%209.75451Z'%20stroke='%23535862'%20stroke-width='3'/%3e%3cpath%20d='M8.10412%209.7545C10.1155%207.7431%2013.5126%207.11925%2017.7267%208.20287C21.903%209.27687%2026.5923%2011.9792%2030.7315%2016.1185C34.8708%2020.2577%2037.5731%2024.947%2038.6471%2029.1233C39.7308%2033.3374%2039.1069%2036.7345%2037.0955%2038.7459C35.0841%2040.7573%2031.687%2041.3811%2027.4729%2040.2975C23.2966%2039.2235%2018.6073%2036.5212%2014.4681%2032.3819C10.3288%2028.2427%207.62649%2023.5534%206.55249%2019.3771C5.46887%2015.163%206.09271%2011.7659%208.10412%209.7545Z'%20stroke='%23535862'%20stroke-width='3'/%3e%3cpath%20d='M63.4503%2034.2401C68.1603%2034.2401%2071.3403%2031.7801%2071.3403%2027.8501C71.3403%2019.5401%2060.3003%2023.0801%2060.3003%2018.7001C60.3003%2017.4701%2061.4103%2016.6301%2063.1803%2016.6301C65.1903%2016.6301%2066.4503%2017.7101%2066.6003%2019.3601H70.8903C70.7703%2015.3701%2067.7103%2012.7601%2063.1803%2012.7601C58.9203%2012.7601%2055.9203%2015.2201%2055.9203%2018.7001C55.9203%2026.9501%2066.8103%2023.8001%2066.8103%2027.9101C66.8103%2029.5001%2065.4603%2030.3401%2063.4503%2030.3401C61.2303%2030.3401%2059.8203%2028.9901%2059.6403%2026.8601H55.3203C55.5003%2031.3301%2058.6803%2034.2401%2063.4503%2034.2401Z'%20fill='%23535862'/%3e%3cpath%20d='M72.3605%2040.1201H76.5305V32.6501C77.3405%2033.6701%2078.8105%2034.2401%2080.5205%2034.2401C84.8705%2034.2401%2087.8105%2031.1501%2087.8105%2026.4401C87.8105%2021.7301%2085.1105%2018.6401%2080.8805%2018.6401C78.9305%2018.6401%2077.4305%2019.3601%2076.5305%2020.5301V18.8801H72.3605V40.1201ZM80.0105%2030.6401C77.7605%2030.6401%2076.2905%2028.9601%2076.2905%2026.4401C76.2905%2023.8901%2077.7605%2022.2101%2080.0105%2022.2101C82.2005%2022.2101%2083.7005%2023.8901%2083.7005%2026.4401C83.7005%2028.9601%2082.2005%2030.6401%2080.0105%2030.6401Z'%20fill='%23535862'/%3e%3cpath%20d='M88.8195%2034.0001H92.9895V25.7201C92.9895%2023.7701%2094.2795%2022.3601%2096.1095%2022.3601C97.8495%2022.3601%2099.0495%2023.6801%2099.0495%2025.5101V34.0001H103.22V24.5801C103.22%2021.1001%20101%2018.6401%2097.6095%2018.6401C95.5095%2018.6401%2093.8595%2019.5101%2092.9895%2020.9801V12.3101H88.8195V34.0001Z'%20fill='%23535862'/%3e%3cpath%20d='M114.885%2028.8701C114.555%2030.1601%20113.445%2030.8201%20111.765%2030.8201C109.665%2030.8201%20108.315%2029.5001%20108.015%2027.3701H118.875C118.905%2027.0401%20118.935%2026.5901%20118.935%2026.0201C118.935%2022.5701%20116.805%2018.6401%20111.465%2018.6401C106.335%2018.6401%20103.995%2022.5701%20103.995%2026.4101C103.995%2030.2201%20106.635%2034.2401%20111.765%2034.2401C115.485%2034.2401%20118.365%2032.1401%20118.965%2028.8701H114.885ZM111.465%2021.7001C113.475%2021.7001%20114.645%2023.0501%20114.765%2024.7301H108.075C108.435%2022.6301%20109.575%2021.7001%20111.465%2021.7001Z'%20fill='%23535862'/%3e%3cpath%20d='M129.871%2022.3601V18.8801H127.72C125.89%2018.8801%20124.75%2019.5101%20123.94%2021.4001V18.8801H119.74V34.0001H123.94V26.6501C123.94%2024.0701%20124.87%2022.3601%20126.94%2022.3601H129.871Z'%20fill='%23535862'/%3e%3cpath%20d='M144.271%2018.8801H140.071V27.1601C140.071%2029.0801%20138.781%2030.5201%20136.951%2030.5201C135.241%2030.5201%20134.041%2029.2001%20134.041%2027.3701V18.8801H129.871V28.3001C129.871%2031.7501%20132.091%2034.2401%20135.481%2034.2401C137.551%2034.2401%20139.231%2033.3401%20140.071%2031.9001V34.0001H144.271V18.8801Z'%20fill='%23535862'/%3e%3cpath%20d='M146.071%2034.0001H150.241V12.3101H146.071V34.0001Z'%20fill='%23535862'/%3e%3cpath%20d='M162.147%2028.8701C161.817%2030.1601%20160.707%2030.8201%20159.027%2030.8201C156.927%2030.8201%20155.577%2029.5001%20155.277%2027.3701H166.137C166.167%2027.0401%20166.197%2026.5901%20166.197%2026.0201C166.197%2022.5701%20164.067%2018.6401%20158.727%2018.6401C153.597%2018.6401%20151.257%2022.5701%20151.257%2026.4101C151.257%2030.2201%20153.897%2034.2401%20159.027%2034.2401C162.747%2034.2401%20165.627%2032.1401%20166.227%2028.8701H162.147ZM158.727%2021.7001C160.737%2021.7001%20161.907%2023.0501%20162.027%2024.7301H155.337C155.697%2022.6301%20156.837%2021.7001%20158.727%2021.7001Z'%20fill='%23535862'/%3e%3c/svg%3e"
              className="w-[127.5px]"
              alt="logo 4"
            />
            <img
              src="/assets/gblobank_logo-7w-wJ2b7.svg"
              className="w-[127.5px]"
              alt="logo 5"
            />
            <img
              src="/assets/nietz_logo-Cm8pTbf-.svg"
              className="w-[127.5px]"
              alt="logo 6"
            />
          </div>
        </div>
      </div>

      <section className="flex justify-center mb-20 overflow-hidden">
        <div className="w-full md:max-w-[80%] px-[14px]">
          <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">
            AMPLIFY YOUR BRAND'S SUCCESS
          </h2>
          <div className="grid grid-cols-1  lg:grid-cols-7 gap-[24px]">
            <div className="h-[453px]  text-start flex flex-col items-start justify-between  bg-[#F5EBFF] rounded-[24px] p-[32px] w-full lg:col-span-3">
              <h2 className="text-[32px] font-manrope font-bold">
                Engage an active community of tech savvy users
              </h2>
              <img
                src="/assets/tech_savy_users-CyVPbV-1.svg"
                alt="tech savy users"
              />
              <p className="text-[20px] text-[#535862] ">
                Thousands of engaged users explore and use tools on our platform
                everyday
              </p>
            </div>
            <div className="h-[453px]  bg-[#F5EBFF] flex flex-col items-start justify-between rounded-[24px]  lg:col-span-4 p-[32px]">
              <h2 className="text-[32px] font-manrope font-bold">
                Offer Exclusive Value
              </h2>
              <img
                src="/assets/exclusive_offer-DIkQR0Gj.svg"
                alt="tech savy users"
              />
              <p className="text-[20px] text-[#535862]">
                Stand out with special discounts, cashback, or unique perks for
                our users
              </p>
            </div>
            <div className="h-[453px] bg-[#F5EBFF] flex flex-col items-start justify-between rounded-[24px]  lg:col-span-4 p-[32px]">
              <h2 className="text-[32px] font-manrope font-bold">
                Boost Your Visibility
              </h2>
              <img
                src="/assets/top_tool_spotlight-BISlDxDf.svg"
                alt="tech savy users"
              />
              <p className="text-[20px] text-[#535862]">
                Get featured across our Homepage, Discover section, Rewards Hub,
                Library, Newsletter, and Blog
              </p>
            </div>
            <div className="h-[453px] bg-[#111111] relative text-white flex flex-col items-start overflow-hidden  rounded-[24px] lg:col-span-3 p-[32px]">
              <h2 className="text-[32px] font-manrope font-bold">
                Measure Your Impact
              </h2>
              <p className="text-[20px] mt-5 text-[#FFFFFFCC]">
                Track how many users unlock, engage with, and activate your
                offer.
              </p>
              <div className="flex items-center mt-auto">
                <div className="flex flex-col  self-end">
                  <h3 className="text-[impact] p-0 m-0 -ml-2 -mb-3 text-white text-[56px]">
                    30,000+
                  </h3>
                  <p className="text-[20px] mt-2 text-[#FFFFFF]">
                    Tools Added to Libraries
                  </p>
                </div>
                <div className="flex w-[200px]">
                  <img
                    src="/assets/reviews_icon-CrecVBPZ.svg"
                    className="w-full h-full"
                    alt="icon"
                  />
                  <img
                    src="/assets/progress_icon-BsbFTYok.svg"
                    className="w-full h-full -ml-24 -mt-14"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center my-20 px-[14px]">
        <div className="w-full  md:max-w-[80%]">
          <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">
            WHY SUBSCRIBE TO FLOWVA?
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
              <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 xl:block hidden col-span-1  undefined p-[undefined] min-h-fit xl:min-h-[301px] rounded-[16px]">
                <p className=" font-manrope font-bold text-center xl:text-start">
                  VALUE PROPOSITION
                </p>
                <h2 className="text-[56px] font-[impact] text-center xl:text-start">
                  {" "}
                  TRUSTED BY LEADING PRODUCTS WITH ORGANIC MARKETING SUCCESS
                </h2>
                <h2 className="text-[24px] mt-5 font-manrope font-bold text-[black] "></h2>
                <p className="mt-2 text-[#FFFFFF] font-manrope"></p>
              </div>
              <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-1 bg-[#D966FF] p-[16px] min-h-fit xl:min-h-[301px] rounded-[16px]">
                <p className=" font-manrope font-bold text-center xl:text-start"></p>
                <h2 className="text-[56px] font-[impact] text-center xl:text-start"></h2>
                <img
                  src="/assets/verified_3d-CCrDsVYL.svg"
                  alt=" image Verified engagement"
                />
                <h2 className="text-[24px] mt-5 font-manrope font-bold text-[white] ">
                  Verified engagement
                </h2>
                <p className="mt-2 text-[#FFFFFF] font-manrope">
                  Reach active tech-savvy professionals who manage their tool
                  libraries and actually try new tools, all included with your
                  subscription.
                </p>
              </div>
              <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-1 bg-[#FF66AB] p-[16px] min-h-fit xl:min-h-[301px] rounded-[16px]">
                <p className=" font-manrope font-bold text-center xl:text-start"></p>
                <h2 className="text-[56px] font-[impact] text-center xl:text-start"></h2>
                <img
                  src="/assets/growth_3d-4kWv8fe5.svg"
                  alt=" image Reward-Driven Growth"
                />
                <h2 className="text-[24px] mt-5 font-manrope font-bold text-[white] ">
                  Reward-Driven Growth
                </h2>
                <p className="mt-2 text-[#FFFFFF] font-manrope">
                  Incentivize users automatically with Flowva’s built-in rewards
                  system — no extra fees, fully handled by the platform.
                </p>
              </div>
              <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-1 bg-[#FF752C] p-[16px] min-h-fit xl:min-h-[301px] rounded-[16px]">
                <p className=" font-manrope font-bold text-center xl:text-start"></p>
                <h2 className="text-[56px] font-[impact] text-center xl:text-start"></h2>
                <img
                  src="/assets/service_3d-jhLrw6-a.svg"
                  alt=" image Full Self-Serve Freedom"
                />
                <h2 className="text-[24px] mt-5 font-manrope font-bold text-[white] ">
                  Full Self-Serve Freedom
                </h2>
                <p className="mt-2 text-[#FFFFFF] font-manrope">
                  Launch and manage campaigns anytime with an intuitive
                  dashboard. Target your campaigns, schedule actions, and track
                  engagement with complete control.
                </p>
              </div>
              <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-1 bg-[#2C95FF] p-[16px] min-h-fit xl:min-h-[301px] rounded-[16px]">
                <p className=" font-manrope font-bold text-center xl:text-start"></p>
                <h2 className="text-[56px] font-[impact] text-center xl:text-start"></h2>
                <img
                  src="/assets/premium_3d-CBRQqQod.svg"
                  alt=" image Optional Premium Support"
                />
                <h2 className="text-[24px] mt-5 font-manrope font-bold text-[white] ">
                  Optional Premium Support
                </h2>
                <p className="mt-2 text-[#FFFFFF] font-manrope">
                  For top-tier brands or high-impact campaigns, our team can
                  manage your campaigns, optimize engagement, and provide
                  advanced analytics.
                </p>
              </div>
              <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-1 bg-[#FC2367] p-[16px] min-h-fit xl:min-h-[301px] rounded-[16px]">
                <p className=" font-manrope font-bold text-center xl:text-start"></p>
                <h2 className="text-[56px] font-[impact] text-center xl:text-start"></h2>
                <img
                  src="/assets/access_3d-DZ4hiFUz.svg"
                  alt=" image Exclusive Access"
                />
                <h2 className="text-[24px] mt-5 font-manrope font-bold text-[white] ">
                  Exclusive Access
                </h2>
                <p className="mt-2 text-[#FFFFFF] font-manrope">
                  Your subscription unlocks Flowva’s curated audience. Our users
                  are verified, engaged, and relevant. Limited campaign slots
                  maintain visibility and exclusivity.
                </p>
              </div>
              <div className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-1 bg-[#5BBB6A] p-[16px] min-h-fit xl:min-h-[301px] rounded-[16px]">
                <p className=" font-manrope font-bold text-center xl:text-start"></p>
                <h2 className="text-[56px] font-[impact] text-center xl:text-start"></h2>
                <img
                  src="/assets/analytic-Ci8bQ1TF.svg"
                  alt=" image Actionable Analytics"
                />
                <h2 className="text-[24px] mt-5 font-manrope font-bold text-[white] ">
                  Actionable Analytics
                </h2>
                <p className="mt-2 text-[#FFFFFF] font-manrope">
                  Track real results; tool trials, user interactions, engagement
                  trends not just impressions. Make data-driven decisions for
                  every campaign.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center mt-16">
            <div className="grid justify-center md:justify-start grid-col-1 md:grid-cols-3 gap-10 w-full">
              <div className="w-full">
                <h2 className="font-[impact] text-[56px]">1200+</h2>
                <hr className="my-4 text-[#E5E7EB]" />
                <p className="font-manrope font-bold text-sm">
                  ACTIVE USER/MONTH
                </p>
              </div>
              <div className="w-full">
                <h2 className="font-[impact] text-[56px]">35M+</h2>
                <hr className="my-4 text-[#E5E7EB]" />
                <p className="font-manrope font-bold text-sm">IMPRESSIONS</p>
              </div>
              <div className="w-full">
                <h2 className="font-[impact] text-[56px]">4200+</h2>
                <hr className="my-4 text-[#E5E7EB]" />
                <p className="font-manrope font-bold text-sm">
                  PERSONALIZED ADS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[14px] select-none ">
        <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">
          GROWTH PLANS
        </h2>
        <div className="w-full md:max-w-6xl mx-auto  md:px-6 grid md:grid-cols-3 gap-8 font-manrope">
          <div className="w-full md:max-w-[410px] relative h-auto rounded-[24px] shadow-lg p-6 flex flex-col justify-between border background-color: rgb(249, 249, 249); color: black; bg-[rgba(0, 0, 0, 0.16)]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-sm font-bold">Launch</h3>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[36px] font-[impact] font-bold">$50/Month</p>
              </div>
              <p className="text-sm font-semibold">Save 20% - $480/year </p>
              <button className="mt-10 w-full relative h-[74px] text-sm font-bold rounded-[100px] border p-[6px] b-[#000000]">
                <div className="h-full w-full whitespace-nowrap flex items-center justify-center rounded-[100px] relative transition-all ease-linear duration-200 shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset] bg-black text-white">
                  Start Your 3-Day Free Trial
                </div>
              </button>
              <hr className="my-8 bg-[rgba(0, 0, 0, 0.16)]" />
              <h4 className="font-bold italic">
                Perfect for brands testing Flowva or running focused campaigns.
              </h4>
              <ul className="space-y-2 text-sm mt-2">
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Self-serve campaign dashboard – manage everything yourself
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Run 1-2 featured campaigns per month
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Featured placement in Discovery and Newsletter
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Basic analytics &amp; performance reporting
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Offer perks and discounts directly to users
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:max-w-[410px] relative h-auto rounded-[24px] shadow-lg p-6 flex flex-col justify-between border bg-[#6b16ca] text-white b-[#ffffff]">
            <div>
              <div className="absolute p-[8px_16px] rounded-bl-[24px] text-[#9013FE] rounded-tr-[24px] bg-white top-[2px] right-[2px]">
                Most Popular
              </div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-sm font-bold">Accelerate</h3>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[36px] font-[impact] font-bold">
                  $250/Month
                </p>
              </div>
              <p className="text-sm font-semibold">Save 20% - $2,400/year </p>
              <button className="mt-10 w-full relative h-[74px] text-sm font-bold rounded-[100px] border p-[6px] bg-[rgba(255, 255, 255, 0.16)] transform: none;">
                <div className="h-full w-full whitespace-nowrap flex items-center justify-center rounded-[100px] relative transition-all ease-linear duration-200 shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset] background-color: white; color: black;">
                  Get Started Now
                </div>
              </button>
              <hr className="my-8 bg-[rgba(255, 255, 255, 0.16)]" />
              <h4 className="font-bold italic">
                For brands ready to scale visibility and drive meaningful
                engagement
              </h4>
              <ul className="space-y-2 text-sm mt-2">
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="white"
                    ></path>
                  </svg>
                  Self-serve campaign dashboard – manage everything yourself
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="white"
                    ></path>
                  </svg>
                  Run 3-5 featured campaigns per month
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="white"
                    ></path>
                  </svg>{" "}
                  Featured placement in Discovery, Rewards, and Newsletter
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="white"
                    ></path>
                  </svg>
                  Priority visibility in listings and recommendations
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="white"
                    ></path>
                  </svg>
                  Advanced analytics with deeper user insights
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="white"
                    ></path>
                  </svg>
                  Offer perks, discounts, and rewards on the highly-engaged
                  Rewards page for maximum visibility
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:max-w-[410px] relative h-auto rounded-[24px] shadow-lg p-6 flex flex-col justify-between b-1  border bg-[#f9f9f9] text-black b-[#000000]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-sm font-bold">Dominate</h3>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[36px] font-[impact] font-bold">
                  $450/Month
                </p>
              </div>
              <p className="text-sm font-semibold">Save 20% - $4,320/year </p>
              <button className="mt-10 w-full relative h-[74px] text-sm font-bold rounded-[100px] border p-[6px] b[#000000]">
                <div className="h-full w-full whitespace-nowrap flex items-center justify-center rounded-[100px] relative transition-all ease-linear duration-200 shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset] bg-black text-white">
                  Get Started Now
                </div>
              </button>
              <hr className="my-8 bg-[rgba(0, 0, 0, 0.16)]" />
              <h4 className="font-bold italic">
                For brands seeking premium positioning and consistent exposure
                across Flowva.
              </h4>
              <ul className="space-y-2 text-sm mt-2">
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Self-serve campaign dashboard – manage everything yourself
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Unlimited features per month
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Premium placement across Homepage, Discovery, Rewards, Blog,
                  and Newsletter
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Premium analytics with trend tracking and performance reports
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Early access to new users and emerging tools
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Optional managed campaigns by the Flowva team
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    className="shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83358 8.24967L13.7502 0.333008L16.6669 3.24967L5.88261 13.6663L0.000244141 8.12716L2.50024 5.33301L5.83358 8.24967Z"
                      fill="black"
                    ></path>
                  </svg>
                  Offer perks, discounts, and rewards on the highly-engaged
                  Rewards page for maximum visibility and participation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center my-20 px-[14px]">
        <div className="w-full md:max-w-[80%]">
          <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">
            HOW IT WORKS
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
              <div className="h-fit md:h-[628px] col-span-1 p-[20px] md:p-[40px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#F77A38] w-full ">
                <div className="w-[93px] h-[40px] rounded-[100px] p-[10px_24px] font-semibold whitespace-nowrap bg-[#FFFFFF] font-manrope">
                  Step 1
                </div>
                <div className="">
                  <h2 className="text-[32px] md:text-[40px] my-8 font-manrope font-bold text-[#FFFFFF]">
                    Subscribe.
                  </h2>
                  <p className="text-[#FFFFFFCC] text-[24px]">
                    Choose the plan that fits your feature goals.
                  </p>
                </div>
                <img
                  src="/assets/subscribe_3d-R8dIRMQQ.svg"
                  className="mt-10"
                  alt="subscribe icon"
                />
              </div>
              <div className="h-fit md:h-[628px] col-span-1 p-[20px] md:p-[40px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#BC71FE] w-full ">
                <div className="w-[93px] h-[40px] rounded-[100px] p-[10px_24px] font-semibold whitespace-nowrap bg-[#FFFFFF] font-manrope">
                  Step 2
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] my-8 font-manrope font-bold text-[#FFFFFF]">
                    Launch Features
                  </h2>
                  <p className="text-[#FFFFFFCC] text-[24px]">
                    Set up actions, schedule them, and reach techies,
                    freelancers, and remote workers where they work.
                  </p>
                </div>
                <img
                  src="/assets/launch_3d-BmToqH82.svg"
                  className="mt-8"
                  alt="subscribe icon"
                />
              </div>
              <div className="h-fit md:h-[628px] col-span-1 p-[20px] md:p-[40px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#F76593] w-full ">
                <div className="w-[93px] h-[40px] rounded-[100px] p-[10px_24px] font-semibold whitespace-nowrap bg-[#FFFFFF] font-manrope">
                  Step 3
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] my-8 font-manrope font-bold text-[#FFFFFF]">
                    Engage Users
                  </h2>
                  <p className="text-[#FFFFFFCC] text-[24px]">
                    Offer perks and rewards that drive deeper participation.
                  </p>
                </div>
                <img
                  src="/assets/speaker_3d-CbQ0SCwT.svg"
                  className="mt-10"
                  alt="subscribe icon"
                />
              </div>
              <div className="h-fit md:h-[628px]  col-span-1 p-[20px] md:p-[40px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#008753] w-full ">
                <div className="w-[93px] h-[40px] rounded-[100px] p-[10px_24px] font-semibold whitespace-nowrap bg-[#FFFFFF] font-manrope">
                  Step 4
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] my-8 font-manrope font-bold text-[#FFFFFF]">
                    Track Results
                  </h2>
                  <p className="text-[#FFFFFFCC] text-[24px]">
                    Monitor feature performance in real time with actionable
                    analytics.
                  </p>
                </div>
                <img
                  src="/assets/Track_3d-Bn5Gb7h0.svg"
                  className="mt-10"
                  alt="attract logo"
                />
              </div>
              <div className="h-fit  md:min-h-[378px] col-span-1 lg:col-span-2 p-[20px] md:p-[40px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#159481] w-full ">
                <div className="w-[93px] h-[40px] rounded-[100px] p-[10px_24px] font-semibold whitespace-nowrap bg-[#FFFFFF] font-manrope">
                  Step 5
                </div>
                <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center">
                  <div className="w-full lg:w-1/2 lg:self-start ">
                    <h2 className="text-[32px] md:text-[40px] my-5 font-manrope font-bold text-[#FFFFFF]">
                      Optional Premium Support
                    </h2>
                    <p className="text-[#FFFFFFCC] text-[24px]">
                      Optional Premium Support – Let the Flowva team run your
                      features for maximum impact.
                    </p>
                  </div>
                  <img
                    src="/assets/Crown_3d-DJgaLQ5v.svg"
                    className="lg:-mt-10"
                    alt="crown logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 px-[14px]">
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
        <h2 className="text-[56px] md:text-[64px] font-[impact]  text-center">
          Success Stories
        </h2>
        <p className="text-[20px] manrope text-center text-[#0000009e] mb-10">
          Tools That Found Their Audience with Flowva
        </p>
        <div className="flex justify-center">
          <div className="w-full md:max-w-[80%] mb-10 px-4">
            <div className="overflow-hidden md:overflow-visible">
              <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="
              flex gap-6
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            no-scrollbar
            md:overflow-visible
            md:snap-none
            "
              >
                <div className="flex-shrink-0 w-full md:w-1/3 snap-center">
                  <div className="p-6 h-full rounded-xl shadow-md flex flex-col justify-between bg-blue-400">
                    <p className="text-2xl font-semibold mb-4 font-manrope">
                      Flowva gave us a new channel of discovery. Users were
                      genuinely interested and engagement was higher than on
                      ads.
                    </p>

                    <div className="flex gap-2 items-center">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84975 34.1503 0 22 0C9.84971 0 0 9.84975 0 22C0 34.1503 9.84971 44 22 44ZM28.8632 10.2485C29.1973 9.06186 28.0457 8.36015 26.994 9.10944L12.3124 19.5685C11.1718 20.3811 11.3512 22 12.5819 22H16.448V21.9701H23.9828L17.8433 24.1363L15.1368 33.7515C14.8027 34.9382 15.9542 35.6399 17.006 34.8906L31.6876 24.4315C32.8282 23.619 32.6487 22 31.4181 22H25.5553L28.8632 10.2485Z"
                            fill="#535862"
                          ></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-[20px]">
                        @ProductivityApp
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-1/3 snap-center">
                  <div className="p-6 h-full rounded-xl shadow-md flex flex-col justify-between bg-[#b7ff28]">
                    <p className="text-2xl font-semibold mb-4 font-manrope">
                      Seamless and simple — our sign-ups grew with no extra work
                      on our end.
                    </p>

                    <div className="flex gap-2 items-center">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
                        <svg
                          width="39"
                          height="44"
                          viewBox="0 0 39 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.9657 1.44802C19.4606 1.34415 18.9398 1.34415 18.4347 1.44802C17.8509 1.56809 17.3291 1.86035 16.9143 2.0927L16.8012 2.15587L2.74173 9.96669C2.70286 9.98829 2.6628 10.0103 2.62176 10.033C2.18263 10.2748 1.63048 10.5789 1.20646 11.0391C0.83987 11.4369 0.562441 11.9084 0.392731 12.422C0.196435 13.0161 0.198732 13.6465 0.200558 14.1478C0.200729 14.1947 0.200896 14.2404 0.200896 14.2849V29.7068C0.200896 29.7513 0.200729 29.797 0.200558 29.8438C0.198732 30.3452 0.196435 30.9755 0.392731 31.5697C0.562443 32.0833 0.839872 32.5548 1.20646 32.9526C1.63048 33.4127 2.18263 33.7168 2.62176 33.9587C2.66281 33.9813 2.70286 34.0034 2.74173 34.025L16.8012 41.8358L16.9143 41.899C17.3291 42.1313 17.8509 42.4236 18.4347 42.5436C18.9398 42.6475 19.4606 42.6475 19.9657 42.5436C20.5495 42.4236 21.0713 42.1313 21.4861 41.899L21.5992 41.8358L35.6587 34.025C35.6758 34.0154 35.6933 34.0058 35.7109 33.9961C35.7331 33.9838 35.7557 33.9713 35.7786 33.9587C36.2178 33.7169 36.7699 33.4127 37.1939 32.9526C37.5605 32.5548 37.838 32.0833 38.0077 31.5697C38.204 30.9755 38.2017 30.3452 38.1998 29.8438C38.1997 29.797 38.1995 29.7513 38.1995 29.7068V14.2849C38.1995 14.2404 38.1997 14.1947 38.1998 14.1478C38.2017 13.6465 38.204 13.0161 38.0077 12.422C37.838 11.9084 37.5605 11.4369 37.1939 11.0391C36.7699 10.5789 36.2178 10.2748 35.7786 10.0329L35.7771 10.0321C35.7366 10.0098 35.697 9.98801 35.6587 9.96669L21.5992 2.15586L21.4861 2.09269C21.0713 1.86035 20.5495 1.56809 19.9657 1.44802ZM18.6466 5.47754C18.9345 5.31759 19.0815 5.23676 19.1911 5.18388L19.2002 5.17953L19.2093 5.18388C19.3189 5.23676 19.4659 5.31758 19.7538 5.47754L32.3873 12.4961L19.2001 19.8223L6.01304 12.4962L18.6466 5.47754ZM4.00076 15.7251L17.3002 23.1137L17.3003 37.7662L4.5871 30.7033C4.2832 30.5345 4.12804 30.4474 4.01919 30.378L4.00999 30.3721L4.00931 30.3612C4.00155 30.2324 4.00076 30.0545 4.00076 29.7068V15.7251Z"
                            fill="#535862"
                          ></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-[20px]">@Devtoolkit</h4>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-1/3 snap-center">
                  <div className="p-6 h-full rounded-xl shadow-md flex flex-col justify-between bg-[#5dffe9]">
                    <p className="text-2xl font-semibold mb-4 font-manrope">
                      Users loved our cashback perk, and Flowva made the process
                      seamless.
                    </p>

                    <div className="flex gap-2 items-center">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
                        <svg
                          width="45"
                          height="45"
                          viewBox="0 0 45 45"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="22.6001"
                            cy="22.25"
                            r="20.5"
                            stroke="#535862"
                            stroke-width="3"
                          ></circle>
                          <path
                            d="M37.0956 7.75451C39.107 9.76592 39.7308 13.163 38.6472 17.3771C37.5732 21.5534 34.8709 26.2427 30.7316 30.3819C26.5924 34.5212 21.9031 37.2235 17.7268 38.2975C13.5127 39.3811 10.1156 38.7573 8.10422 36.7459C6.09281 34.7345 5.46896 31.3374 6.55259 27.1233C7.62658 22.947 10.3289 18.2577 14.4682 14.1185C18.6074 9.97922 23.2967 7.27688 27.473 6.20288C31.6871 5.11926 35.0842 5.74311 37.0956 7.75451Z"
                            stroke="#535862"
                            stroke-width="3"
                          ></path>
                          <path
                            d="M8.10412 7.7545C10.1155 5.7431 13.5126 5.11925 17.7267 6.20287C21.903 7.27687 26.5923 9.97921 30.7315 14.1185C34.8708 18.2577 37.5731 22.947 38.6471 27.1233C39.7308 31.3374 39.1069 34.7345 37.0955 36.7459C35.0841 38.7573 31.687 39.3811 27.4729 38.2975C23.2966 37.2235 18.6073 34.5212 14.4681 30.3819C10.3288 26.2427 7.62649 21.5534 6.55249 17.3771C5.46887 13.163 6.09271 9.76591 8.10412 7.7545Z"
                            stroke="#535862"
                            stroke-width="3"
                          ></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-[20px]">
                        @Teamtoolkit
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-[-12px] md:hidden mb-3">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-gray-900 w-5" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQs questions={questions} />

      <section className="w-full flex justify-center mt-20 px-[14px] mb-2">
        <div className="bg-[#1365FE] md:max-w-[80%] flex justify-center pt-[28px]  w-full rounded-[16px] md:rounded-[32px] min-h-[500px]">
          <div className="max-w-[750px] w-full">
            <h2 className="text-[40px] md:text-[48px] text-white font-[impact] text-center">
              START YOUR CAMPAIGN
            </h2>
            <div className="flex justify-center mt-1 md:mt-2">
              <img
                src="/assets/hand-shake-BMjlZIGL.png"
                className="w-[300px]"
                alt="welcome"
              />
            </div>
            <p className="text-center text-[20px] text-[#FFFFFF] px-12">
              Flowva works with brands to give our users exclusive discounts,
              cashback, and perks.
            </p>
            <button className="mt-6 left-1/2 font-manrope right-1/2 -translate-x-1/2 relative w-[232px]  text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-[6px]">
              <div className=" w-full text-sm whitespace-nowrap p-[24px] rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
                Claim Your Spot
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
