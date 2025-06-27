import Image from "next/image";
import Link from "next/link";
import menuLogo from "../assets/menu-logo.svg";
import { clashDisplayFont, clashDisplayRegularFont, satoshiFontRegular } from "@/lib/fonts";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaDiscord} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-textPrimary py-9 px-6 md:py-10 md:px-18">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div>
                <Link href="/">
                     <Image src={menuLogo} alt="menu logo"  width={130} height={47}/>
                  </Link>
                  <p className={`${satoshiFontRegular.className} text-white my-4`}>Reach out to us on any of our social media networks</p>
                  <div className="flex gap-6 text-gray-700 text-4xl cursor-pointer mt-4">
                    <FaFacebook className="hover:text-blue-500" />
                    <FaTwitter className="hover:text-blue-400" /> 
                    <FaYoutube className="hover:text-red-600" />
                    <FaInstagram className="hover:text-pink-500" />
                    <FaDiscord className="hover:text-indigo-600" />                   
                  </div>
            </div>
            <div className="text-white">
                <h3 className={`${clashDisplayFont.className} text-white text-2xl md:text-header-mobile font-semibold mb-4 tracking-wider`}>Useful Links</h3>
                <ul className={`${satoshiFontRegular.className} text-gray-300 md:text-2xl`}>
                    <li className="mb-3"><Link href="/">Home</Link></li>
                    <li className="mb-3"><Link href="/about">About Us</Link></li>
                    <li className="mb-3"><Link href="/courses">Our Courses</Link></li>
                    <li className="mb-3"><Link href="/contact">Testimonials</Link></li>
                    <li className="mb-3"><Link href="/contact">Our Community</Link></li>
                </ul>
            </div>
            <div className="text-white capitalize">
                <h3 className={`${clashDisplayFont.className} text-white text-2xl md:text-header-mobile font-semibold mb-4 tracking-wider`}>community</h3>
                <ul className={`${satoshiFontRegular.className} text-gray-300 md:text-2xl`}>
                    <li className="mb-3"><Link href="/">help centers</Link></li>
                    <li className="mb-3"><Link href="/about">partners</Link></li>
                    <li className="mb-3"><Link href="/courses">suggestion</Link></li>
                    <li className="mb-3"><Link href="/contact">blog</Link></li>
                    <li className="mb-3"><Link href="/contact">newsletter</Link></li>
                </ul>
            </div>
            <div>
                <h3 className={`${clashDisplayFont.className} text-white text-2xl md:text-header-mobile font-semibold mb-4 tracking-wider capitalize`}>subscribe us</h3>
                <form
                    className="flex w-full max-w-lg border border-[#054FB3] rounded-md"
                >
                    <input
                    type="email"
                    placeholder="Nft123@gmail.com"
                    className="flex-grow px-3 py-3 bg-[#2a2a2b] text-white placeholder-gray-400 outline-none"
                    required
                    />
                    <button
                    type="submit"
                    className="bg-[#054FB3] px-4 py-3 text-sm text-white font-medium hover:bg-blue-700 transition"
                    >
                    Send Message
                    </button>
                </form>

            </div>
        </div>
      </div>
    </footer>
  );
}