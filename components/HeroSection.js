import {
    clashDisplayFont,
    satoshiFontRegular,
    satoshiFont,
  } from "@/lib/fonts";
  import Image from "next/image";
  import zigzagArrow from "@/assets/left-zigzag-arrow.svg";
  import zigzagArrowMobile from "@/assets/left-zigzag-arrow-mobile.svg";
  import pointedZigzagArrow from "@/assets/pointed-zigzag-arrow.svg";
  import pointedZigzagArrowMobile from "@/assets/pointed-zigzag-arrow-mobile.svg";
  import arrowIcon from "@/assets/arrow_outward_mobile.svg";
  import arrowIconDesktop from "@/assets/arrow_outward.svg";
  import avatarsMobile from "@/assets/avatars_mobile.png";
  import avatarsDesktop from "@/assets/avatars_desktop.png";
  import heroImageMobile from "@/assets/hero_image_mobile.png";
  import heroImageDesktop from "@/assets/hero_image_desktop.png";
  import bulbMobile from "@/assets/bulb_mobile.png";
  import bulbDesktop from "@/assets/bulb_desktop.png";
  import figmaLogoMobile from "@/assets/figma_logo_mobile.svg";
  import figmaLogoDesktop from "@/assets/figma_logo_desktop.svg";
  import vscodeLogoMobile from "@/assets/vscode_logo_mobile.svg";
  import vscodeLogoDesktop from "@/assets/vscode_logo_desktop.svg";
  import invertedTriangleMobile from "@/assets/inverted_triangle_mobile.svg";
  import invertedTriangleDesktop from "@/assets/inverted_triangle_desktop.svg";
  import wordPressLogoMobile from '@/assets/word_press_logo_mobile.svg'
  import wordPressLogoDesktop from '@/assets/word_press_logo_desktop.svg'
  import Link from "next/link";
  
  export default function HeroSection() {
    return (
      <section className="relative bg-primary px-2 pt-6">
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2">
          <Image
            src={zigzagArrow}
            alt="zig zag arrow"
            width={64}
            height={19}
            className="w-auto h-auto max-w-[64px] max-h-[19px] lg:max-w-[80px] lg:max-h-[24px]"
          />
        </div>
        <div className="absolute left-0 top-[45%] -translate-y-1/2 md:hidden">
          <Image
            src={zigzagArrowMobile}
            alt="zig zag arrow mobile"
            width={33}
            height={10}
            className="w-auto h-auto max-w-[10px] max-h-[33px]"
          />
        </div>
        <div className="md:hidden absolute right-6 top-1/3">
          <Image
            src={pointedZigzagArrowMobile}
            alt="pointed zig zag arrow for mobile"
            width={54}
            height={109}
            className="w-auto h-auto max-w-[54px] max-h-[109px]"
          />
        </div>
        <div className="hidden md:block absolute bottom-22 left-[46%]">
            <Image src={pointedZigzagArrow}
              alt="pointed zig zag arrow" 
              width={111} 
              height={223}
  
            />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:px-6">
          {/* Main 4 Rows (left side) */}
          <div className="space-y-6">
            <div className="hidden md:flex justify-between px-10 pb-10">
              <div className="rounded-full w-2.5 h-2.5 ring-3 ring-smallRing"></div>
              <div className="rounded-full w-2.5 h-2.5 bg-smallCircle"></div>
            </div>
            {/* Row 1 */}
            <div className="px-2 md:p-1 text-center  md:text-left">
              <h1
                className={`font-bold text-header-mobile text-white md:text-header-desktop ${clashDisplayFont.className}`}
              >
                Grow your skills to advance your career path{" "}
              </h1>
            </div>
            {/* Row 2 */}
            <div className="px-8 md:p-1 text-center md:text-left">
              <h2
                className={`text-tiny text-white font-medium capitalize md:text-base ${satoshiFontRegular.className}`}
              >
                build your future with our quality education. the best and largest
                all-in-one online tutoring platform in the world
              </h2>
            </div>
  
            {/* Row 3 - Two Items in Two Columns */}
            <div
              className={`flex justify-center md:justify-start items-center gap-4  ${satoshiFont.className}`}
            >
              <div>
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-2 border border-white text-white px-6 py-2.5 md:py-3 rounded-sm text-tiny md:text-base hover:bg-white hover:text-primary transition duration-300"
                >
                  <span>Get Started Now</span>
                  <Image
                    src={arrowIcon}
                    alt="arrow icon"
                    width={12}
                    height={12}
                    className="md:hidden"
                  />
                  <Image
                    src={arrowIconDesktop}
                    alt="arrow icon"
                    width={20}
                    height={20}
                    className="hidden md:block"
                  />
                </Link>
              </div>
              <div>
                <Link href="/enrollnow">
                  <button className="bg-white text-primary text-tiny md:text-base py-2.5 px-4 md:py-3 rounded-sm shadow hover:bg-gray-400 transition duration-300">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
  
            {/* Row 4 */}
            <div className="flex justify-center md:justify-start items-center gap-2">
              <Image
                src={avatarsMobile}
                alt="avatars for mobile"
                width={121}
                height={32}
                className="h-auto w-auto md:hidden"
              />
              <Image
                src={avatarsDesktop}
                alt="avatars for desktop"
                width={224}
                height={64}
                className="hidden md:block"
              />
              <div className={`text-white text-center`}>
                <h3
                  className={`text-lg md:text-2xl font-bold ${clashDisplayFont.className}`}
                >
                  255k+
                </h3>
                <p
                  className={`text-xs md:text-base -mt-1 ${satoshiFontRegular.className}`}
                >
                  Previews
                </p>
              </div>
            </div>
          </div>
  
          {/* Item beside the four rows */}
          <div className="relative flex items-center justify-center px-4 pt-6 overflow-hidden">
            <Image
              src={bulbMobile}
              alt="bulb for mobile"
              width={120}
              height={95}
              className="absolute top-16 -left-2 md:hidden"
            />
            <Image
              src={bulbDesktop}
              alt="bulb for mobile"
              width={204}
              height={187}
              className="hidden md:block absolute top-8 left-4"
            />
            <div className="absolute rounded-full w-3 h-3 ring-3 ring-smallRing top-44 left-16 md:w-5 md:h-5 md:ring-4 md:top-60 md:left-30"></div>
            <Image
              src={figmaLogoMobile}
              width={48}
              height={48}
              alt="figma logo for mobile"
              className="absolute bottom-36 left-4 md:hidden"
            />
            <Image
              src={figmaLogoDesktop}
              width={94}
              height={94}
              alt="figma logo for desktop"
              className="hidden md:block absolute bottom-24 left-10 -translate-y-1/2"
            />
            <div className="absolute rounded-full w-1 h-1 bg-smallCircle bottom-10 left-14 md:w-2.5 md:h-2.5"></div>
           
            <Image 
              src={vscodeLogoMobile} 
              alt="vscode logo" 
              width={48} 
              height={48} 
              className="absolute top-20 right-4 md:hidden" 
            />
          
            <Image
              src={vscodeLogoDesktop}
              alt="vscode logo"
              width={94}
              height={94}
              className="hidden md:block absolute top-20 right-16"
            />
            <Image 
              src={invertedTriangleMobile} alt="inverted triangle for mobile"
              width={18}
              height={16}
              className="md:hidden absolute top-2/5 right-4"
            />
            <Image 
              src={invertedTriangleDesktop} alt="inverted triangle for desktop"
              width={35}
              height={30}
              className="hidden md:block absolute top-2/5 right-20"
            />
            <Image
              src={wordPressLogoMobile} 
              alt="word press logo mobile" 
              width={48} 
              height={48}
              className="md:hidden absolute bottom-6 right-0" 
            />
            <Image src={wordPressLogoDesktop} 
              alt="wordPressLogoDesktop" 
              width={94} 
              height={94}
              className="hidden md:block absolute bottom-6 right-6"
            />
            <Image
              src={heroImageMobile}
              alt="a student hero image for mobile"
              width={363}
              height={500}
              className="max-w-sm object-contain md:hidden"
              priority
            />
            <Image
              src={heroImageDesktop}
              alt="a student hero image for desktop"
              width={500}
              height={886}
              className="hidden md:block object-contain"
              priority
            />
          </div>
        </div>
      </section>
    );
  }
  