import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const NavComponent = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);

  const handleSetCurrentMenu = (curr: string) => {
    if (currentMenu !== curr) {
      setCurrentMenu(curr);
    } else {
      setCurrentMenu(null);
    }
  };
  return (
    <nav className="flex items-center justify-between w-full h-full">
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="md:flex items-center gap-8">
          <div className="md:flex items-center gap-1.5">
            <img
              src="/assets/flowva_icon-DYe7ga1V.png"
              className="w-8 -mt-1"
              alt="Flowva logo"
            />
          </div>

          <div className="border-l border-[#0000000D] h-[28px]" />

          <NavMenu />
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/signin"
            className="relative w-[84px] h-[40px] text-sm font-bold border border-[#9013FE1A] rounded-[100px] overflow-hidden group"
          >
            <div className="h-full w-full flex items-center justify-center transition-all duration-200 text-sm whitespace-nowrap group-hover:text-white rounded-[100px] relative  hover:bg-[#111111] group-hover:text-white transition-all ease-linear duration-200 shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
              Login
            </div>
          </Link>
          <Link
            to="/signup"
            className="relative w-[84px] h-[40px] text-sm font-bold border border-[#9013FE1A] rounded-[100px] overflow-hidden group"
          >
            <div className="h-full w-full flex items-center justify-center text-sm whitespace-nowrap rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
              Sign up
            </div>
          </Link>
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center w-full px-3">
        <img
          src="/assets/flowva_icon-DYe7ga1V.png"
          className="w-12 h-12 -mt-[3px]"
          alt="Flowva logo"
        />

        <button
          aria-label="Toggle menu"
          onClick={() => setOpenDropDown(!openDropDown)}
          className="relative w-10 h-10 flex items-center justify-center"
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7H19"
              stroke="#141B34"
              strokeWidth="2"
              strokeLinecap="round"
              className={`transition-transform duration-300 origin-center ${
                openDropDown
                  ? "translate-y-[5px] rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />

            <path
              d="M5 12H19"
              stroke="#141B34"
              strokeWidth="2"
              strokeLinecap="round"
              className={`transition-opacity duration-300 ${
                openDropDown ? "opacity-0" : "opacity-100"
              }`}
            />

            <path
              d="M5 17H19"
              stroke="#141B34"
              strokeWidth="2"
              strokeLinecap="round"
              className={`transition-transform duration-300 origin-center ${
                openDropDown
                  ? "-translate-y-[5px] -rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
          </svg>
        </button>
      </div>

      {openDropDown && (
        <div className="md:hidden left-0 z-[99999999] top-[-50px] absolute w-full bg-white mt-[120px] px-4 overflow-y-auto translate-y-0 opacity-100 h-[calc(100vh-128px)] p-4">
          <aside>
            <div className="ant-collapse ant-collapse-icon-position-end ant-collapse-borderless custom-accordion css-1d4w9r2 no-scrollbar">
              <div className="">
                <div
                  className="flex justify-between"
                  aria-expanded="false"
                  aria-disabled="false"
                >
                  <span className="ant-collapse-header-text">
                    <span className="text-[32px] font-semibold font-[impact]">
                      HUB
                    </span>
                  </span>

                  <div
                    className="ant-collapse-expand-icon cursor-pointer"
                    onClick={() => handleSetCurrentMenu("HUB")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-down ant-collapse-arrow
      transition-transform duration-300
      ${currentMenu === "HUB" ? "rotate-180" : "rotate-0"}
    `}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
                {currentMenu === "HUB" && (
                  <div className="flex justify-center w-[95%] transition-all duration-300 ease-in-out opacity-100 translate-y-0">
                    <div className="flex flex-col items-center w-full pt-2 justify-center pb-9 transition-all duration-300 ease-in-out gap-1">
                      <div className="w-full flex items-center gap-1">
                        <div className="w-[50%] h-20 flex flex-col items-center justify-center p-[16px] rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
                          <img
                            src="/assets/discover_3d-Cn-gflHt.svg"
                            alt="icon 1"
                            className="w-10 h-10"
                          />
                          <a className="font-[impact] text-xs text-black font-semibold mt-2">
                            DISCOVER
                          </a>
                        </div>
                        <div className="w-[50%] h-20 flex flex-col items-center justify-center p-[16px]  rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
                          <img
                            src="/assets/library_3d-DJsKB8Bt.svg"
                            alt="icon 2"
                            className="w-10 h-10"
                          />
                          <a className="font-[impact] text-xs text-black font-semibold mt-2">
                            LIBRARY
                          </a>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="w-full h-20 flex flex-col items-center justify-center p-[16px]  rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
                          <img
                            src="/assets/flowva_coin_3d-njHx05Wr.svg"
                            alt="icon 3"
                            className="w-10 h-10"
                          />
                          <a className="font-[impact] text-xs text-black font-semibold mt-2">
                            REWARD
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="">
                <div
                  className="flex justify-between"
                  aria-expanded="false"
                  aria-disabled="false"
                >
                  <span className="text-[32px] font-semibold font-[impact]">
                    COMPANY
                  </span>
                  <span className="ant-collapse-header-text">
                    <div
                      className="ant-collapse-expand-icon cursor-pointer"
                      onClick={() => handleSetCurrentMenu("COMPANY")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down ant-collapse-arrow
      transition-transform duration-300
      ${currentMenu === "COMPANY" ? "rotate-180" : "rotate-0"}
    `}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </span>
                </div>
                {currentMenu === "COMPANY" && (
                  <div className="flex justify-center w-[95%] transition-all duration-300 ease-in-out opacity-100 translate-y-0">
                    <div className="flex flex-col items-center w-full pt-2 justify-center pb-9 transition-all duration-300 ease-in-out gap-1">
                      <div className="w-full flex items-center gap-1">
                        <div className="w-[50%] h-20 flex flex-col items-center justify-center p-[16px] rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
                          <img
                            src="/assets/about_us_3d-CEqfrf2g.svg"
                            alt="icon 1"
                            className="w-10 h-10"
                          />
                          <a className="font-[impact] text-xs text-black font-semibold mt-2">
                            ABOUT US
                          </a>
                        </div>
                        <div className="w-[50%] h-20 flex flex-col items-center justify-center p-[16px]  rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
                          <img
                            src="/assets/blog-BBGHudp6.svg"
                            alt="icon 2"
                            className="w-10 h-10"
                          />
                          <a className="font-[impact] text-xs text-black font-semibold mt-2">
                            Blog
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="">
                <div
                  className="flex justify-between"
                  aria-expanded="false"
                  aria-disabled="false"
                >
                  <span className="ant-collapse-header-text">
                    <span className="text-[32px] font-semibold font-[impact]">
                      SUPPORT
                    </span>
                  </span>

                  <div
                    className="ant-collapse-expand-icon cursor-pointer"
                    onClick={() => handleSetCurrentMenu("SUPPORT")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-down ant-collapse-arrow
      transition-transform duration-300
      ${currentMenu === "SUPPORT" ? "rotate-180" : "rotate-0"}
    `}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  {currentMenu === "SUPPORT" && (
                    <div className="flex justify-center w-[95%] transition-all duration-300 ease-in-out opacity-100 translate-y-0">
                      <div className="flex flex-col items-center w-full pt-2 justify-center pb-9 transition-all duration-300 ease-in-out gap-1">
                        <div className="w-full flex items-center gap-1">
                          <div className="w-[50%] h-20 flex flex-col items-center justify-center p-[16px] rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
                            <img
                              src="/assets/faq_3d-wTGpvg4U.svg"
                              alt="icon 1"
                              className="w-10 h-10"
                            />
                            <a className="font-[impact] text-xs text-black font-semibold mt-2">
                              FAQs
                            </a>
                          </div>
                          <div className="w-[50%] h-20 flex flex-col items-center justify-center p-[16px]  rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
                            <img
                              src="/assets/contact_3d-BS_WZkr-.svg"
                              alt="icon 2"
                              className="w-10 h-10"
                            />
                            <a className="font-[impact] text-xs text-black font-semibold mt-2">
                              CONTACT US
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="">
                  <div
                    className="flex justify-between"
                    aria-expanded="false"
                    aria-disabled="false"
                  >
                    <span className="ant-collapse-header-text">
                      <span className="text-[32px] font-semibold font-[impact]">
                        COMMUNITY
                      </span>
                    </span>

                    <div
                      className="ant-collapse-expand-icon cursor-pointer"
                      onClick={() => handleSetCurrentMenu("COMMUNITY")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down ant-collapse-arrow
      transition-transform duration-300
      ${currentMenu === "COMMUNITY" ? "rotate-180" : "rotate-0"}
    `}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                  {currentMenu === "COMMUNITY" && (
                    <div className="flex justify-center w-[95%] transition-all duration-300 ease-in-out opacity-100 translate-y-0">
                      <div className="flex flex-col items-center w-full pt-2 justify-center pb-9 transition-all duration-300 ease-in-out gap-1">
                        <div className="w-full flex items-center gap-1">
                          <div className="w-[50%] h-20 flex flex-col items-center justify-center p-[16px] rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
                            <img
                              src="/assets/affiliate_3d-CpeSvQCc.svg"
                              alt="icon 1"
                              className="w-10 h-10"
                            />
                            <a className="font-[impact] text-xs text-black font-semibold mt-2">
                              Affiliate
                            </a>
                          </div>
                          <div className="w-[50%] h-20 flex flex-col items-center justify-center p-[16px]  rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
                            <img
                              src="/assets/influencer_3d-Wghj8koF.svg"
                              alt="icon 2"
                              className="w-10 h-10"
                            />
                            <a className="font-[impact] text-xs text-black font-semibold mt-2">
                              Influencer
                            </a>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="w-full h-20 flex flex-col items-center justify-center p-[16px]  rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
                            <img
                              src="/assets/refer_3d-CElcrl4H.svg"
                              alt="icon 3"
                              className="w-10 h-10"
                            />
                            <a className="font-[impact] text-xs text-black font-semibold mt-2">
                              Refer to Earn
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className=" flex mt-5 items-center gap-[12px] flex-col">
              <Link
                to="/signin"
                className="w-full h-[57px] text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-[4px]"
              >
                <span className="h-full flex justify-center items-center w-full p-[6px_16px] hover:bg-[#111111] hover:shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset] hover:text-white rounded-[100px] relative shadow-[0px_2px_4px_0px_#0000001A]">
                  Login
                </span>
              </Link>
              <Link
                to="/signup"
                className="w-full h-[57px] text-sm font-bold border-[#9013FE1A] rounded-[100px] border p-[4px]"
              >
                <span className="h-full flex justify-center items-center w-full whitespace-nowrap p-[6px_16px] rounded-[100px] relative bg-[#111111] hover:bg-[#b362fae3] transition-all ease-linear duration-200 text-white shadow-[0px_2px_4px_0px_#0000001A,0px_6px_6px_0px_#00000017,0px_14px_9px_0px_#0000000D,0px_26px_10px_0px_#00000003,0px_40px_11px_0px_#00000000,-4px_13px_19px_0px_#ECD6FF80_inset]">
                  Sign up
                </span>
              </Link>
            </div>
          </aside>
        </div>
      )}
    </nav>
  );
};

export default NavComponent;
