import React from "react";
import { useLocale } from "next-intl";
import { ArrowLeft } from "lucide-react";
import Questions from "@/components/Questions";
import { Link } from "@/i18n/routing";
import BlogCard from "@/components/BlogCard";
import blog7 from "../../../assets/blog7.png";
import blog8 from "../../../assets/blog8.png";
import blog9 from "../../../assets/blog9.png";
import SectionsSlider from "./SectionsSlider";

export default function FeaturesFooter() {
  const locale = useLocale();
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="h-auto min-h-[500px] -mt-32 bg-[#F5F5F4] pt-10 rounded-t-[100px] overflow-hidden max-sm:pb-20"
    >
        <SectionsSlider />
        <Questions />
        <div className="my-20 px-[100px] max-sm:px-10">
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
  );
}
