import Image from "next/image"
import logosMobile from "@/assets/logos_mobile.svg";
import logosDesktop from "@/assets/logos_desktop.svg";


export default function LogosSection() {
    return(
        <section className="bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 py-6 lg:py-10 flex items-center justify-center">
          <Image src={logosMobile} alt="Logos of platforms" width={331} height={16} className="w-full h-auto md:hidden" />
          <Image src={logosDesktop} alt="Logos of platforms" width={1111} height={54} className="hidden h-auto md:block" />
        </div>
      </section>
    )
}