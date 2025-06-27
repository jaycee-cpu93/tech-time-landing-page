"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import bellaAvatar from '@/assets/bella-avatar.jpg';
import samuelAvatar from '@/assets/samuel-avatar.jpg';
import bryceAvatar from '@/assets/bryce-avatar.jpg';
import { clashDisplayFont, satoshiFont, satoshiFontRegular } from '@/lib/fonts';


const testimonials = [
  {
    name: 'Bella Moon',
    role: 'Product Designer',
    avatar: bellaAvatar ,
    quote:
        'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world'
  },
  {
    name: 'Samuel Fortune',
    role: 'Product Designer',
    avatar: samuelAvatar,
    quote:
     'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world'
  },
  {
    name: 'Bryce Jason',
    role: 'Product Designer',
    avatar: bryceAvatar,
    quote:
     'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world'
  },
  {
    name: 'Alice Cooper',
    role: 'Product Designer',
    avatar: bellaAvatar,
    quote:
     'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world'
  },
]

export default function Testmonies() {
    
    const [current, setCurrent] = useState(0)
    const length = testimonials.length
    const slidesToShow = 3

  const next = () =>
    setCurrent((prev) =>
      prev === length - slidesToShow ? 0 : prev + 1
    )
  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? length - slidesToShow : prev - 1
    )
  return (
   <section className="bg-tertiary p-6">
       <div className="max-w-7xl mx-auto text-center">
         <h2 className={`${clashDisplayFont.className} text-2xl font-bold text-textPrimary md:text-secondHeader`}>
          What our clients are saying
        </h2>
        <div className="px-10 md:px-64 text-center">
            <p className={`${satoshiFontRegular.className } text-tiny mt-2 text-textSecondary md:text-base`}>
                High-Definition Video is video of higher resolution and quality than
                standard definition. While there’s no standard meaning for high
                definition, generally any standard video image.
            </p>
        </div>
        </div>
      <div className="">
        {/* slider container */}
        <div className="relative mt-8 overflow-x-scroll">
          {/* slides */}
          <div
            className="flex mb-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / slidesToShow) * current}%)`,
              width: `${(100 / slidesToShow) * length}%`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full px-2 md:px-4"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div className="bg-white  px-4 py-2 md:p-6 rounded-2xl shadow-lg h-full flex flex-col justify-between">
                  <p className={`${satoshiFontRegular.className} text-textSecondary text-tiny md:text-sm leading-snug text-left`}> {t.quote}</p>
                  <div className={`${satoshiFont.className} mt-6 flex items-center`}>
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="ml-4 text-left">
                      <p className="font-bold text-textPrimary text-[10px] md:text-sm">
                        {t.name}
                      </p>
                      <p className="text-tiny md:text-xs text-textSecondary">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* prev/next buttons (md+ only) */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            ›
          </button>
        </div>

        {/* dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: length - slidesToShow + 1 }).map(
            (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  idx === current
                    ? 'bg-blue-600'
                    : 'bg-gray-300'
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}