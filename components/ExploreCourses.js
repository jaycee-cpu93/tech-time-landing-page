"use client";
import Image from "next/image";
import { useState } from "react";
import blueCross from "@/assets/blue_cross.svg";
import uxResearch from "@/assets/courses/ux-research.jpg";
import marketingAudience from "@/assets/courses/marketing-audience.jpg";
import htmlCss from "@/assets/courses/html-css.jpg";
import jsGit from "@/assets/courses/js-git.jpg";
import outroomMarketing from "@/assets/courses/outroom.jpg";
import liveAnalysis from "@/assets/courses/live-analysis.jpg";
import leonard from "@/assets/instructors/leonard.jpg";
import jeffrey from "@/assets/instructors/jeffrey.jpg";
import claretta from "@/assets/instructors/claretta.jpg";
import jessica from "@/assets/instructors/jessica.jpg";
import samuel from "@/assets/instructors/samuel.jpg";
import adam from "@/assets/instructors/adam.jpg";
import { StarIcon } from "@heroicons/react/24/solid";
import { ClockIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { clashDisplayFont, satoshiFont, satoshiFontRegular } from "@/lib/fonts";

const categories = ["All Categories", "Design", "Development", "Marketing"];

const courses = [
  {
    id: 1,
    title: "Introduction to user research in UX Design",
    category: "Design",
    image: uxResearch,
    hours: "23hrs 50mins",
    lessons: 15,
    instructor: {
      name: "Leonard Victor",
      avatar: leonard,
    },
    price: 15,
    rating: 4.7,
    reviews: 32700,
  },
  {
    id: 2,
    title: "Introduction to new marketing audience",
    category: "Marketing",
    image: marketingAudience,
    hours: "22hrs 30mins",
    lessons: 22,
    instructor: {
      name: "Jeffrey Williams",
      avatar: jeffrey,
    },
    price: 32,
    rating: 4.7,
    reviews: 8700,
  },
  {
    id: 3,
    title: "Introduction to HTML, CSS & Bootstrap",
    category: "Development",
    image: htmlCss,
    hours: "45hrs 50mins",
    lessons: 55,
    instructor: {
      name: "Claretta Mason",
      avatar: claretta,
    },
    price: 55,
    rating: 4.7,
    reviews: 12700,
  },
  {
    id: 4,
    title: "Introduction to javascript, Git & Github",
    category: "Development",
    image: jsGit,
    hours: "30hrs 50mins",
    lessons: 22,
    instructor: {
      name: "Jessica Duke",
      avatar: jessica,
    },
    price: 45,
    rating: 4.7,
    reviews: 32700,
  },
  {
    id: 5,
    title: "Introduction to outroom marketing analysis",
    category: "Marketing",
    image: outroomMarketing,
    hours: "33hrs 50mins",
    lessons: 26,
    instructor: {
      name: "Samuel Jacobs",
      avatar: samuel,
    },
    price: 25,
    rating: 4.7,
    reviews: 4700,
  },
  {
    id: 6,
    title: "Introduction to live marketing analysis",
    category: "Marketing",
    image: liveAnalysis,
    hours: "10hrs 50mins",
    lessons: 32,
    instructor: {
      name: "Adam Smith",
      avatar: adam,
    },
    price: 25,
    rating: 4.7,
    reviews: 15700,
  },
];

export default function ExploreCourses() {
  const [selected, setSelected] = useState("All Categories");
  const filtered =
    selected === "All Categories"
      ? courses
      : courses.filter((c) => c.category === selected);
  return (
    <section className="relative bg-tertiary p-6">
      <div className="absolute top-0 left-2 md:left-20 md:top-40">
        <Image
          src={blueCross}
          alt="blue cross"
          width={16}
          height={16}
          className="md:hidden"
        />
        <Image
          src={blueCross}
          alt="blue cross"
          width={52}
          height={52}
          className="hidden md:block"
        />
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-rows-1 gap-6">
        <div className="space-y-2 lg:space-y-4">
          <h2
            className={`font-bold text-2xl text-center text-textPrimary capitalize md:font-semibold md:text-secondHeader ${clashDisplayFont.className}`}
          >
            browse our popular courses
          </h2>
          <div className="px-10 md:px-64">
            <p
              className={`${satoshiFontRegular.className} text-center font-medium text-tiny text-textSecondary md:text-base`}
            >
              High-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>
          <div className="mt-4 md:mt-10 flex justify-center space-x-1 md:space-x-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`
                        px-2 py-1 md:px-4 md:py-3 rounded-md text-tiny md:text-base font-bold ${
                          satoshiFont.className
                        }
                        ${
                          selected === cat
                            ? "bg-white text-primary"
                            : "text-textSecondary hover:text-blue-500"
                        }
                    `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        {/* the grid Items */}
        <div className="lg:row-span-2 space-y-2">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            { filtered.map((course) => (
                <div  key={course.id} className="bg-white px-1 py-3 md:px-3 md:py-5 rounded-md shadow overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-sm"
                />
                <div
                    className={`${satoshiFont.className} md:text-xs font-bold text-tiny flex justify-between items-center mt-2 `}
                >
                    <span className="text-[#1E5DCE] bg-blue-100 px-4 py-0.5 md:px-5 md:py-1.5 rounded-full">
                    {course.category}
                    </span>
                    <span className="flex items-center">
                    <span className="text-textSecondary">
                        {course.rating}
                    </span>
                    <StarIcon className="inline-block w-2.5 h-2.5 text-yellow-500 mr-1" />
                    <span className="text-textSecondary">
                        ({(course.reviews / 1000).toFixed(1)}k+)
                    </span>
                    </span>
                </div>
                <h3
                    className={`${clashDisplayFont.className} font-semibold text-tiny md:text-2xl text-textPrimary mt-1 md:mt-3`}
                >
                    {course.title}
                </h3>
                <div
                    className={`${satoshiFont.className} flex items-center justify-between text-tiny md:text-base font-medium text-textSecondary`}
                >
                    <div className="flex items-center space-x-1">
                    <ClockIcon className="h-2 w-2 md:w-6 md:h-6" />
                    <span>{course.hours}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                    <BookOpenIcon className="h-2 w-2 md:w-6 md:h-6" />
                    <span>{course.lessons} Lessons</span>
                    </div>
                </div>
                    <div className="flex items-center justify-between my-2">
                    <div className="flex items-center">
                        <Image
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        width={40}
                        height={40}
                        className="rounded-full h-4 w-4 md:h-10 md:w-10"
                        />
                        <span className={`${satoshiFont.className} ml-1 text-tiny font-bold text-black md:text-base`}>
                        {course.instructor.name}
                        </span>
                    </div>
                    <span className={`${clashDisplayFont.className} text-primary  text-tiny font-semibold md:text-xl`}>
                        ${course.price.toFixed(2)}
                    </span>
                    </div>
                </div>
            ))}
          </div>
            <div className="flex justify-center mt-4">
              <button className={`${satoshiFont.className} px-4  py-1 md:px-6 md:py-3 bg-primary text-tiny md:text-base rounded-sm font-bold text-white hover:bg-blue-600 transition-colors`}>
                <span className="md:hidden">View All Courses</span>
                <span className="hidden md:inline">Explore All Courses</span>
              </button>
            </div>
        </div>
      </div>
    </section>
  );
}
