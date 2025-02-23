/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useLocale } from "next-intl";
import React from "react";
import FeaturesHeader from "../_components/FeaturesHeader";
import Questions from "@/components/Questions";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import blog7 from "../../../assets/blog7.png";
import blog8 from "../../../assets/blog8.png";
import blog9 from "../../../assets/blog9.png";
// import SectionsSlider from "../_components/SectionsSlider";

export default function Projects() {
  const locale = useLocale();

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="bg-[#1A1919]">
      <FeaturesHeader />
      <div className="bg-[#F5F5F4] pt-10">
        {/* <SectionsSlider /> */}
        <Questions />
        <div className="my-20 px-[100px]">
          <div className="flex sm:flex-row justify-between mb-4 px-4">
            <span className="text-xl sm:text-[26px] font-semibold">
              آخر التحديثات
            </span>
            <Link href="/blog/release-notes">
              <span className="text-sm font-semibold text-[#0037FF] flex items-center gap-1 cursor-pointer">
                عرض الجميع <ArrowLeft />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <BlogCard
              img={blog7}
              title="تقديم أكثر شمولاً تجارب مدير"
              description="29 ديسمبر، 2024"
            />
            <BlogCard
              img={blog8}
              title="تقديم أكثر شمولاً تجارب مدير"
              description="29 ديسمبر، 2024"
            />
            <BlogCard
              img={blog9}
              title="تقديم أكثر شمولاً تجارب مدير"
              description="29 ديسمبر، 2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
