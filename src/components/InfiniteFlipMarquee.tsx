import { useState } from "react";

const cards = [
  {
    id: 1,
    img: "/assets/brevo_banner-QsGdU9dm.svg",
    title: "Brevo",
    desc: "Email & Marketing Automation",
    link: "https://get.brevo.com/9vml1qjuxigb",
    bg: "rgb(249, 255, 246)",
    text: "black",
  },
  {
    id: 2,
    img: "/assets/jotform_banner-66bbJqxw.svg",
    title: "Jotform",
    desc: "Form Builder Platform",
    link: "https://www.jotform.com/ai/agents/?partner=flowvahub-WOAEEuoEob",
    bg: "rgb(245, 215, 197)",
    text: "black",
  },
  {
    id: 3,
    img: "/assets/monday_banner-Dkyncs7F.svg",
    title: "Monday",
    desc: "Project Management",
    link: "https://try.monday.com/b7pem672ddxh",
    bg: "rgb(184, 184, 250)",
    text: "white",
  },
  {
    id: 4,
    img: "/assets/reclaim_banner-WN7Bpwy1.svg",
    title: "Reclaim",
    desc: "Smart Scheduling",
    link: "https://go.reclaim.ai/ur9i6g5eznps",
    bg: "white",
    text: "black",
  },
];

export default function InfiniteFlipMarquee() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="overflow-hidden mt-12 relative w-screen">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .marquee {
          animation: marquee 40s linear infinite;
        }

        .flip {
          perspective: 1200px;
        }

        .flip-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip.active .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-front,
        .flip-back {
          backface-visibility: hidden;
          position: absolute;
          inset: 0;
        }

        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="flex w-max marquee py-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {cards.map((card) => (
              <div
                key={`${i}-${card.id}`}
                className="mx-4"
                onMouseEnter={() => setActiveId(card.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div
                  className={`flip w-[168px] h-[148px] md:w-[421px] md:h-[369px] rounded-[16px] md:rounded-[32px] relative ${
                    activeId === card.id ? "active" : ""
                  }`}
                >
                  <div className="flip-inner w-full h-full relative">
                    <div className="flip-front border rounded-[16px] md:rounded-[32px] overflow-hidden bg-white">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-contain"
                        draggable="false"
                      />
                    </div>

                    <div
                      className="flip-back border rounded-[16px] md:rounded-[32px] flex flex-col items-center justify-center text-center p-4"
                      style={{
                        backgroundColor: card.bg,
                        color: card.text,
                      }}
                    >
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold mb-2 px-4 py-2 rounded-full bg-black/20 flex items-center gap-2"
                      >
                        {card.title}
                        <span>↗</span>
                      </a>
                      <p className="text-xs md:text-sm">{card.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
