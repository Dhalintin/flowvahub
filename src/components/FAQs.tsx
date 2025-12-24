import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  q: string;
  a: string;
}

interface FAQsProps {
  questions: Question[];
}

const FAQs = ({ questions }: FAQsProps) => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const updateOpenQuestion = (index: number) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((i) => i !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  return (
    <section className="flex justify-center items-center px-[14px]">
      <div className="w-full md:max-w-[80%]">
        <h2 className="text-[56px] md:text-[64px] font-[impact] mb-10 text-center">
          NEED ANSWERS?
        </h2>
        <div className="grid md:grid-cols-2 gap-4  px-3">
          {questions.map((data, index) => {
            const isOpen = openQuestions.includes(index);

            return (
              <div className="flex flex-col justify-center" key={index}>
                <div className="mb-2 bg-[rgb(249,249,249)] rounded-[12px] border-none p-[10px_2px]">
                  <div
                    className="flex items-center"
                    role="button"
                    aria-expanded={isOpen}
                    aria-disabled="false"
                    onClick={() => updateOpenQuestion(index)}
                  >
                    <div>
                      <span
                        role="img"
                        aria-label="caret-right"
                        className="w-4 h-4 ml-5 flex"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          focusable="false"
                          width="12"
                          height="12"
                          fill="currentColor"
                          aria-hidden="true"
                          className="transition-transform duration-300 ease-in-out flex-shrink-0"
                          style={{
                            transform: isOpen
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                          }}
                        >
                          <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
                        </svg>
                      </span>
                    </div>
                    <span className="text ml-4">
                      <span className="font-semibold text-[20px] md:text-[20px]">
                        {data.q}
                      </span>
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 px-4 mb-2 pr-4 pl-5">
                          <p className="text-black text-[16px] md:text-[19px] pl-5">
                            {data.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
