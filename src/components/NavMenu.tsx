import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "react-use";

const menuContent = {
  Hub: [
    { img: "/assets/discover_3d-Cn-gflHt.svg", label: "DISCOVER" },
    { img: "/assets/library_3d-DJsKB8Bt.svg", label: "LIBRARY" },
    { img: "/assets/flowva_coin_3d-njHx05Wr.svg", label: "REWARD" },
  ],
  Company: [
    { img: "/assets/about_us_3d-CEqfrf2g.svg", label: "ABOUT US" },
    { img: "/assets/blog-BBGHudp6.svg", label: "BLOG" },
  ],
  Support: [
    { img: "/assets/faq_3d-wTGpvg4U.svg", label: "FAQs" },
    { img: "/assets/contact_3d-BS_WZkr-.svg", label: "CONTACT US" },
  ],
  Community: [
    { img: "/assets/affiliate_3d-CpeSvQCc.svg", label: "Affiliate" },
    { img: "/assets/influencer_3d-Wghj8koF.svg", label: "Influencer" },
    { img: "/assets/refer_3d-CElcrl4H.svg", label: "Refer to Earn" },
  ],
};

export default function NavMenu() {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const ref = useRef(null);

  // Close menu when clicking outside
  useClickAway(ref, () => {
    setMenuOpen(null);
  });

  const handleSetMenuOpen = (item: string) => {
    if (item === menuOpen) {
      setMenuOpen(null);
      return;
    }
    setMenuOpen(item);
  };

  return (
    <div ref={ref} className="relative">
      <ul className="flex items-center gap-6">
        {["Hub", "Company", "Support", "Community"].map((item) => (
          <li
            key={item}
            className="cursor-pointer relative"
            onClick={() => handleSetMenuOpen(item)}
          >
            <span className="flex items-center gap-1 text-[#A5A5A5] hover:text-[#9013fe] transition-colors">
              {item}
              <motion.svg
                viewBox="64 64 896 896"
                width="12"
                height="12"
                fill="currentColor"
                animate={{ rotate: menuOpen === item ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
              </motion.svg>
            </span>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-x-0 top-[130px] z-[9999] flex justify-center pointer-events-none"
          >
            <div
              className="fixed inset-0 bg-black/50 top-[130px] -z-10 pointer-events-auto"
              onClick={() => setMenuOpen(null)}
            />

            <div className="pointer-events-auto w-full max-w-[80%]">
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                exit={{ y: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-b-[32px] shadow-2xl pt-8 pb-12"
              >
                <div className="flex  gap-8 px-8">
                  {menuContent[menuOpen as keyof typeof menuContent].map(
                    (item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="w-[273px] h-[345px] flex flex-col items-center justify-center gap-10 bg-navBg bg-cover bg-top border border-[rgba(0,0,0,0.04)] rounded-[16px] shadow-[inset_0px_9px_6.3px_rgba(255,255,255,0.32)] shadow-2xl bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8"
                      >
                        <img
                          src={item.img}
                          alt={item.label}
                          className="w-32 h-32"
                        />
                        <a className="font-impact text-[32px] text-black">
                          {item.label}
                        </a>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
