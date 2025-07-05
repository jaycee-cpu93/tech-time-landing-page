import { clashDisplayFont, satoshiFont, satoshiFontRegular } from "@/lib/fonts";
import { modeOfLearning } from "@/data/ modeOfLearning";
import aBoyOnHisLaptop from "@/assets/a_boy_on_his_laptop.jpg";
import greenInvertedTriangle from "@/assets/green_inverted_triangle.svg";
import yellowZigzag from "@/assets/yellow_zigzag.svg";

import Image from "next/image";

export default function SecondSection() {
  return (
    <section>
      <div className="relative p-6 bg-tertiary pb-10">
        <div className="hidden md:block absolute left-[23%] top-0">
          <div className="rounded-full w-2.5 h-2.5 bg-smallCircle"></div>
        </div>
        <div className="hidden md:block absolute right-[25%] -top-[3%]">
          <Image
            src={yellowZigzag}
            alt="yellow zigzag"
            width={70}
            height={50}
            className="w-auto h-auto max-w-[70px] max-h-[50px]"
          />
        </div>
        <div className="absolute left-0 bottom-[5%] md:bottom-[10%] md:left-0 lg:left-[2%]">
          <Image
            src={greenInvertedTriangle}
            alt="green inverted triangle"
            width={10}
            height={10}
            className="w-auto h-auto max-w-[10px] max-h-[10px] md:hidden"
          />
          <Image
            src={greenInvertedTriangle}
            alt="green inverted triangle"
            width={30}
            height={30}
            className="w-auto h-auto max-w-[25px] max-h-[25px] hidden md:block"
          />
        </div>
        <div className="absolute right-[1%] bottom-[30%] md:bottom-1">
          <div className="rounded-full w-2 h-2 ring-3 ring-[#9143FD] md:w-6 md:h-6 md:ring-5"></div>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6 h-full">
          {/* (left side) */}
          <div className="lg:col-span-2 space-y-3 lg:space-y-5">
            <h2
              className={`${clashDisplayFont.className} font-bold text-2xl text-center capitalize text-textPrimary md:font-semibold md:text-secondHeader md:text-left md:normal-case`}
            >
              This is why we are best from others
            </h2>
            <div className="px-6 text-center md:text-left md:px-0">
              <p
                className={`${satoshiFontRegular.className} font-medium text-tiny text-center capitalize text-textSecondary md:text-base md:text-left`}
              >
                high-defination video is video of higher resolution and quality
                than standard definition. while there’s no standard meaning for
                high definition, generally any standard video image
              </p>
            </div>
            <div className="">
              <Image
                src={aBoyOnHisLaptop}
                alt="a boy on his laptop"
                width={390}
                height={260}
                className="md:hidden w-full h-auto rounded-lg"
              />
              <Image
                src={aBoyOnHisLaptop}
                alt="a boy on his laptop"
                width={713}
                height={475}
                className="hidden md:block w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Sidebar / Side Item */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-10 lg:ml-10">
            <div className="grid grid-cols-2 gap-4">
              {modeOfLearning.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 md:p-10 rounded-lg shadow capitalize space-y-2"
                >
                  {/* small icon on mobile */}
                  <Image
                    src={item.icon}
                    alt={item.heading}
                    width={32}
                    height={32}
                    className="md:hidden"
                  />

                  {/* larger icon on md+ screens */}
                  <Image
                    src={item.icon}
                    alt={item.heading}
                    width={48}
                    height={48}
                    className="hidden md:block"
                  />

                  <h3
                    className={`font-bold text-xs md:text-base ${satoshiFont}`}
                  >
                    {item.heading}
                  </h3>

                  <p
                    className={`text-tiny text-textSecondary md:text-xs md:leading-7 ${satoshiFontRegular.className}`}
                  >
                    {item.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
