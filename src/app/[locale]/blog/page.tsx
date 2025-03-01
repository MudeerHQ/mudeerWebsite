"use client";
import React from "react";
import PageHeader from "../../../components/PageHeader";
import Image from "next/image";
import blogHeader from "../../assets/blog-header.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.png";
import blog6 from "../../assets/blog6.png";
import blog7 from "../../assets/blog7.png";
import blog8 from "../../assets/blog8.png";
import blog9 from "../../assets/blog9.png";
import blog10 from "../../assets/blog10.png";
import blog11 from "../../assets/blog11.png";
import blog12 from "../../assets/blog12.png";
import { Link } from "@/i18n/routing";
import { useQuery } from "@tanstack/react-query";
import { getApiUrl } from "@/helpers";

// Fetch function
const fetchBlogs = async () => {
  const res = await fetch(getApiUrl("/category/bloger"));

  if (!res.ok) throw new Error("Failed to fetch blogs");

  const data = await res.json(); // ✅ Parse JSON properly
  console.log(data); // ✅ Logs actual data

  return data;
};

export default function Blog() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 6 * 60 * 60 * 1000, // 6 hours
    refetchInterval: 6 * 60 * 60 * 1000, // Refetch every 6 hours
  });

  if (error)
    return <p className="text-center text-red-500">Error loading blogs</p>;

  return (
    <div className="px-[100px] grid justify-center" dir="rtl">
      <PageHeader title="المدونة" description="" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        <div>
          <Image src={blogHeader} alt="blog-header" />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-right">
          <span className="font-normal text-base text-[#71717A]">
            29 ديسمبر، 2024 • 4 دقائق قراءة
          </span>
          <span className="font-semibold text-2xl md:text-3xl text-[#0D0D0D]">
            تقديم أكثر شمولاً تجارب مدير
          </span>
          <span className="font-normal text-lg md:text-xl text-[#0D0D0D] w-full md:w-[80%] mx-auto md:mx-0">
            لوريم إيبسوم (Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
            الشكل وليس المحتوى)...
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-20">
        {[blog1, blog2, blog3].map((blog, index) => (
          <div key={index} className="flex items-center gap-3">
            <div>
              <Image src={blog} alt={`blog${index + 1}`} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-lg md:text-xl text-[#0D0D0D]">
                تقديم أكثر شمولاً تجارب مدير
              </span>
              <span className="text-sm md:text-base font-normal text-[#71717A]">
                29 ديسمبر، 2024
              </span>
            </div>
          </div>
        ))}
      </div>
      <hr />

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div>
          <div className="my-20">
            <div className="">
              <div className="flex sm:flex-row justify-between mb-4 px-4">
                <span className="text-xl sm:text-[26px] font-semibold">
                  أفضل الممارسات
                </span>
                <span className="text-sm font-semibold text-[#0037FF] flex items-center gap-1 cursor-pointer">
                  عرض الجميع <ArrowLeft />
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
          </div>

          <div className="my-20">
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

          <div className="my-20">
            <div className="flex sm:flex-row justify-between mb-4 px-4">
              <span className="text-xl sm:text-[26px] font-semibold">
                خلف الكواليس
              </span>
              <span className="text-sm font-semibold text-[#0037FF] flex items-center gap-1 cursor-pointer">
                عرض الجميع <ArrowLeft />
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
