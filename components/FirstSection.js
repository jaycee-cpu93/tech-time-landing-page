import Image from "next/image";
import { clashDisplayFont, satoshiFont, satoshiFontRegular } from "@/lib/fonts";
import ruggedCrownMobile from "@/assets/rugged_crown_mobile.svg";
import ruggedCrownDesktop from "@/assets/rugged_crown_desktop.svg";
import audioIconMobile from "@/assets/audio_icon_mobile.svg";
import audioIconDesktop from "@/assets/audio_icon_desktop.svg";
import liveIconMobile from "@/assets/live_icon_mobile.svg";
import liveIconDesktop from "@/assets/live_icon_desktop.svg";
import recordedIconMobile from "@/assets/recorded_icon_mobile.svg";
import recordedIconDesktop from "@/assets/recorded_icon_desktop.svg";
import notesIconMobile from "@/assets/notes_icon_mobile.svg";
import notesIconDesktop from "@/assets/notes_icon_desktop.svg";
import manAndWomanOnLaptops from "@/assets/man_and_woman_on_laptops.png"
import manAndWomanOnLaptopsDesktop from "@/assets/man_and_woman_laptop_desktop.png";
import bigRingMobile from "@/assets/big_ring_for_mobile.svg";
import bigRingDesktop from "@/assets/big_ring_for_desktop.svg";
import avatarOverlay from "@/assets/avatar_overlay_for mobile.png";
import avatarOverlayDesktop from "@/assets/avatar_overlay_desktop.png";
import rightzigzag from "@/assets/right_zigzag_mobile.svg";
import rightzigzagDesktop from "@/assets/right_zigzag_desktop.svg";
import scatteredOval from "@/assets/scattered_oval.svg";

import Link from "next/link";
export default function FirstSection() {
    return (
        <section>
        <div className="py-6 md:py-15 bg-tertiary relative">
          <div className="absolute right-0 top-[10%]">
            <Image src={rightzigzagDesktop} alt="right zig zag" width={50} height={4} className="hidden md:block" />
          </div>
           <div className="hidden md:block md:bottom-[45%] lg:block absolute right-0 bottom-[15%]">
                <Image src={bigRingDesktop} alt="big ring" width={40} height={50} />
            </div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6 relative"> 
            <div className="absolute right-0 top-[28%]">
                <Image src={rightzigzag} alt="right zig zag" width={45} height={4} className="md:hidden" />
            </div>
           
                {/* Main 4 Rows (left side) */}
            <div className="lg:col-span-2 space-y-6">
                  <div className="py-2 px-6 relative">
                     <div className="md:hidden absolute left-[3%] -top-[2%]">
                      <Image src={ruggedCrownMobile} alt="crown for mobile" width={24} height={36} />
                  </div>
                  <div className="hidden md:block absolute -left-[0.5%] -top-[8%] lg:-left-[2%]">
                      <Image src={ruggedCrownDesktop} alt="crown for desktop" width={60} height={65} />
                  </div>
                      <div>
                        <h2 className={`${clashDisplayFont.className} font-bold text-2xl text-center text-textPrimary md:font-semibold md:text-secondHeader md:text-left`}>High quality video, audio & live classes</h2>
                      </div>
                      <div className="px-10 py-2 text-center md:text-left md:px-0">
                      <p className={`${satoshiFontRegular.className} font-medium text-tiny text-center capitalize text-textSecondary md:text-base md:text-left`}>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    </div>
                    <div className={`flex justify-center md:justify-start mt-4 ${satoshiFont.className}`}>
                      <Link href="/viewcourses">
                        <button className="bg-primary text-white text-tiny md:text-base py-2.5 px-6 md:py-3 rounded-sm shadow hover:bg-gray-400 transition duration-300">
                            View Courses
                        </button>
                      </Link>
                    </div>
                </div>
                  {/* Row 3 - Two Items in Two Columns */}
                  <div className={`grid grid-rows-2 gap-y-4 place-items-center md:place-items-start mb-0.5 ${satoshiFont.className}`}>
                        <div className="grid grid-cols-2 gap-x-3 md:gap-x-4">
                          <div className="bg-white shadow border inline-flex items-center gap-2 border-white pl-3 pr-13 py-3 md:py-3 rounded-sm text-tiny md:text-base hover:bg-white hover:text-primary">
                              <Image
                                src={audioIconMobile}
                                alt="audio icon"
                                width={18}
                                height={18}
                                className="md:hidden"
                              />
                              <Image
                                src={audioIconDesktop}
                                alt="audio icon"
                                width={32}
                                height={32}
                                className="hidden md:block"
                              />
                              <span>Audio classes</span> 
                          </div>
                           <div className="bg-white shadow inline-flex items-center gap-2 border border-white pl-3 pr-13 py-3 md:py-3 rounded-sm text-tiny md:text-base hover:bg-white hover:text-primary">
                              <Image
                                src={liveIconMobile}
                                alt="live icon"
                                width={18}
                                height={18}
                                className="md:hidden"
                              />
                              <Image
                                src={liveIconDesktop}
                                alt="live icon for desktop"
                                width={32}
                                height={32}
                                className="hidden md:block"
                              />
                              <span>Live Classes</span>     
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-3 md:gap-x-4">
                          <div className="bg-white shadow inline-flex items-center gap-2 border border-white pl-3 pr-9 py-3 md:py-3 rounded-sm text-tiny md:text-base hover:bg-white hover:text-primary">
                              <Image
                                src={recordedIconMobile}
                                alt="arrow icon"
                                width={18}
                                height={18}
                                className="md:hidden"
                              />
                              <Image
                                src={recordedIconDesktop}
                                alt="audio icon"
                                width={32}
                                height={32}
                                className="hidden md:block"
                              />
                              <span>Recorded Classes</span>     
                          </div>
                          <div className="bg-white shadow inline-flex items-center gap-2 border border-white pl-3 pr-9 py-3 md:py-3 rounded-sm text-tiny md:text-base hover:bg-white hover:text-primary">
                              <Image
                                src={notesIconMobile}
                                alt="note icon for mobile"
                                width={18}
                                height={18}
                                className="md:hidden"
                              />
                              <Image
                                src={notesIconDesktop}
                                alt="note icon for desktop"
                                width={32}
                                height={32}
                                className="hidden md:block"
                              />
                              <span>50+ Notes</span>     
                          </div>
                        </div>
                      </div>
            </div>

                {/* Sidebar / Side Item */}
                <div className="relative lg:col-span-2 mt-2 p-6 z-20 flex flex-col items-center justify-center">
                      <Image src={manAndWomanOnLaptops} alt="man and woman on laptops" width={353} height={273} className="md:hidden" />
                      <Image src={manAndWomanOnLaptopsDesktop} alt="man and woman on laptops" width={900} height={700} className="hidden md:block" />
                      <div className="hidden md:block md:right-0 lg:block absolute -right-[4%] bottom-[10%] -z-10">
                        <Image src={scatteredOval} alt="scattered oval" width={199} height={236} />
                      </div>
                      <div className="md:hidden absolute right-0 top-[10%]">
                          <Image src={bigRingMobile} alt="big ring for mobile" width={45} height={47} className="w-11 h-12" />
                      </div>
                      <div className="absolute left-[10%] top-[20%] md:left-[10%] lg:left-[5%]">
                            <div className="bg-white border-white border-2 shadow rounded-sm p-1.5 md:p-2 md:rounded-md" >
                              <h6 className={`${satoshiFont} font-bold text-[6px] text-center md:text-xs`}>255k+ Enrolled Students</h6>
                              <div className="flex justify-center">
                                 <Image src={avatarOverlay} alt="avatar"  width={62} height={16} className="md:hidden"/>
                                 <Image src={avatarOverlayDesktop} alt="avatar"  width={157} height={45} className="hidden md:block"/>
                              </div>
                            </div>
                      </div>
                      <div className="flex justify-center md:absolute md:bottom-0 md:right-[30%]">
                          <div className="rounded-full w-2 h-2 md:w-3 md:h-3 ring-3 ring-[#C8A1FD]"></div>
                      </div>
                </div>
              </div>
            </div>
      </section>
    )
}