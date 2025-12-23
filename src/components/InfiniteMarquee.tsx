const InfiniteMarquee = ({ rewardOrder }: any) => {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <style>
        {`
          @keyframes marqueeLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @keyframes marqueeRight {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }

          .marquee-left {
            animation: marqueeLeft 30s linear infinite;
          }

          .marquee-right {
            animation: marqueeRight 30s linear infinite;
          }
        `}
      </style>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max marquee-left">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {rewardOrder.map((icon: any) => (
                <div key={icon} className="mx-4 md:mx-8 shrink-0">
                  <img
                    src={`/assets/${icon}.svg`}
                    alt={icon}
                    className="w-[77px] h-[77px] md:w-[127px] md:h-[127px] object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden mt-10">
        <div className="flex w-max marquee-right">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {rewardOrder.map((icon: any) => (
                <div key={icon} className="mx-4 md:mx-8 shrink-0">
                  <img
                    src={`/assets/${icon}.svg`}
                    alt={icon}
                    className="w-[77px] h-[77px] md:w-[127px] md:h-[127px] object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
