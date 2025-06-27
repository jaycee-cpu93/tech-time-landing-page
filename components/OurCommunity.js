import { clashDisplayFont, satoshiFont, satoshiFontRegular } from "@/lib/fonts";
import worldMapConnectingPeople from "@/assets/world-map-connecting-people.png";
import Image from "next/image";

export default function OurCommunity() {
  return (
    <section className="bg-primary py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col space-y-2">
        <h4 className={`${satoshiFont.className} text-tiny font-medium text-center uppercase text-white md:text-base`}>Join Our Community</h4>
        <p className={`${clashDisplayFont.className} text-center text-2xl font-bold text-white md:text-secondHeader`}>
            Are you  ready to connect with the future talent of the tech world
        </p>
        <h4 className={`${satoshiFontRegular.className} text-center text-tiny font-medium text-white capitalize md:text-base`}>
            meet up with other techstars and grow together
        </h4>
        <div className="mt-4 flex justify-center">
            <Image
              src={worldMapConnectingPeople}
              alt="World Map Connecting People"
              width={983}
              height={454}
              className="w-full h-auto"
            />
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className={`${satoshiFont.className} bg-white text-primary px-4  py-1 md:px-6 md:py-3 rounded-sm text-tiny font-bold md:text-base`}
          >
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
}