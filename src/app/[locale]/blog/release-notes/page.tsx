"use client";
import React from "react";
import PageHeader from "../../../../components/PageHeader";
import BlogCard from "@/components/BlogCard";
import blog13 from "../../../assets/blog13.png";
import blog8 from "../../../assets/blog8.png";
import blog9 from "../../../assets/blog9.png";
import blog10 from "../../../assets/blog10.png";
import blog11 from "../../../assets/blog11.png";
import blog12 from "../../../assets/blog12.png";
import blog4 from "../../../assets/blog4.png";
import blog5 from "../../../assets/blog5.png";
import blog6 from "../../../assets/blog6.png";

export default function ReleaseNote() {
  return (
    <div className="px-[100px] grid justify-center mb-20" dir="rtl">
      <PageHeader title="آخر التحديثات" description="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <BlogCard
          img={blog13}
          title="تقديم أكثر شمولاً تجارب مدير"
          description="29 ديسمبر، 2024"
        />
        <BlogCard
          img={blog8}
          title="مدير يجمع 2.6 مليون دولار..."
          description="29 ديسمبر، 2024"
        />
        <BlogCard
          img={blog9}
          title="تقديم أكثر شمولاً تجارب مدير"
          description="29 ديسمبر، 2024"
        />
        <BlogCard
          img={blog10}
          title="تقديم أكثر شمولاً تجارب مدير"
          description="29 ديسمبر، 2024"
        />
        <BlogCard
          img={blog11}
          title="تقديم أكثر شمولاً تجارب مدير"
          description="29 ديسمبر، 2024"
        />
        <BlogCard
          img={blog12}
          title="تقديم أكثر شمولاً تجارب مدير"
          description="29 ديسمبر، 2024"
        />
        <BlogCard
          img={blog4}
          title="تقديم أكثر شمولاً تجارب مدير"
          description="29 ديسمبر، 2024"
        />
        <BlogCard
          img={blog5}
          title="تقديم أكثر شمولاً تجارب مدير"
          description="29 ديسمبر، 2024"
        />
        <BlogCard
          img={blog6}
          title="تقديم أكثر شمولاً تجارب مدير"
          description="29 ديسمبر، 2024"
        />
      </div>
    </div>
  );
}
