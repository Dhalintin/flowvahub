import { useState } from "react";

interface Question {
  q: string;
  a: string;
}

interface FAQsProps {
  questions: Question[];
}

const FAQs = ({ questions }: FAQsProps) => {
  const [openQuestions, setOpenQuestions] = useState<Number[]>([]);

  const updateOpenQuestion = (item: number) => {
    if (openQuestions.includes(item)) {
      setOpenQuestions(openQuestions.filter((questions) => questions !== item));
    } else {
      setOpenQuestions([...openQuestions, item]);
    }
  };
  return (
    <section className="flex justify-center px-[14px]">
      <div className="w-full md:max-w-[80%]">
        <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">
          NEED ANSWERS?
        </h2>
        <div className="grid md:grid-cols-2 gap-4 font-manrope px-3">
          {questions.map((data, index) => (
            <div
              className="ant-collapse ant-collapse-icon-position-start ant-collapse-borderless css-1d4w9r2"
              key={index}
            >
              <div className="ant-collapse-item ant-collapse-item-active mb-2 bg-[rgb(249,249,249)] rounded-[12px] border-none p-[4px_8px]">
                <div
                  className="ant-collapse-header flex items-center"
                  role="button"
                  aria-expanded="true"
                  aria-disabled="false"
                  // tabIndex="0"
                >
                  <div onClick={() => updateOpenQuestion(index)}>
                    <div className="ant-collapse-expand-icon">
                      <span
                        role="img"
                        aria-label="caret-right"
                        className="anticon anticon-caret-right ant-collapse-arrow"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          focusable="false"
                          //   dataIcon="caret-right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          //   ariaHidden="true transform: rotate(90deg);"
                        >
                          <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <span className="ant-collapse-header-text">
                    <span className="font-semibold text-[20px] md:text-[24px]">
                      {data.q}
                    </span>
                  </span>
                </div>
                <div
                  className={`ant-collapse-content ant-collapse-content-active mt-3 px-4 mb-2 ${
                    !openQuestions.includes(index) && "hidden"
                  }`}
                >
                  <div className="ant-collapse-content-box">
                    <p className="text-black text-[16px] md:text-[20px]">
                      {data.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
