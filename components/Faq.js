"use client";
import { clashDisplayFont, satoshiFont, satoshiFontRegular } from "@/lib/fonts";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/24/outline";
const faqData = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    id: 2,
    question: "Can i change my plan later?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    id: 3,
    question: "Are the courses lifetime?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    id: 4,
    question: "Do i get certified after taking courses?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    id: 5,
    question: "How do i reach out to mentors?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
  {
    id: 6,
    question: "Do we get job ready after taking courses?",
    answer:
      "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. ",
  },
];

export default function Faqs(){
    
    const [showModal, setShowModal] = useState(null);

    const clickHandler = (currentIndex) => {
        setShowModal((prevState) => {
        //if the prevstate is 1 and the currentIndex = 1, do nothing and reset state,
        //else if the previous state i.e prevState 1 is not equal to the currentIndex(2) then currentIndex
        if (prevState === currentIndex) {
            return null;
        } else {
            return currentIndex;
        }
        });
    };
    return(
        <section className="bg-tertiary py-10">
            <div className="md:max-w-5xl mx-auto p-3 md:p-6">
                <h3 className={`${clashDisplayFont.className} text-center text-2xl font-bold text-textPrimary md:text-secondHeader`}>Frequently Asked Questions</h3>
                 <div className="px-16 md:px-20 text-center mb-6 md:mb-10">
                    <p className={`${satoshiFontRegular.className } text-tiny mt-2 text-textSecondary capitalize md:text-base`}>
                      high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image
                    </p>
                </div>
                <div>
                    {faqData.map((faq, index) => (
                        <div key={faq.id} className="border-b md:border-b border-[#EAEAEA] py-4 md:py-6">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => clickHandler(index)}
                            >
                                <h4 className={`${satoshiFont.className} text-sm font-black md:text-2xl ${showModal === index ? "text-primary" : "text-textPrimary"}`}>
                                    {faq.question}
                                </h4>
                                {showModal === index ? (
                                    <MinusIcon className={`w-2.5 h-2.5 md:w-6 md:h-6 ${showModal === index ? "text-primary" : "text-textPrimary"}`} />
                                ) : (
                                    <PlusIcon className="w-2.5 h-2.5 md:w-6 md:h-6 text-textPrimary" />
                                )}
                            </div>
                            {showModal === index && (
                                <p className={`${satoshiFontRegular.className} mt-2 text-tiny text-textSecondary md:text-base`}>
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}