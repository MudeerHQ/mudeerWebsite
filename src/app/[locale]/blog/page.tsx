/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Link } from "@/i18n/routing";
import { formatDate, getApiUrl, getImageSrc } from "@/helpers";
import { useQuery } from "@tanstack/react-query";

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
    <div className="px-[100px] grid justify-center max-sm:px-[20px] bg-[#F5F5F4]" dir="rtl" >
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
        <div className="flex justify-center items-center h-screen">
          <p className="text-lg font-semibold">جارٍ تحميل البيانات...</p>
        </div>
      ) : (
        <>
          {data &&
            data.map((blog: any, index: any) => {
              return (
                <div key={index}>
                  <div className="my-20">
                    <div className="">
                      <div className="flex sm:flex-row justify-between mb-4 px-4">
                        <span className="text-xl sm:text-[26px] font-semibold">
                          {blog.title}
                        </span>

                        <Link href={`blog/${blog.slug_url}`}>
                          <span className="text-sm font-semibold text-[#0037FF] flex items-center gap-1 cursor-pointer">
                            عرض الجميع <ArrowLeft />
                          </span>
                        </Link>
                      </div>
                      {blog.posts?.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {blog.posts.map((post: any, index: any) => (
                            <div key={index}>
                              <Link href={`blog/${blog.slug_url}/${post.slug_url}`}>
                                <BlogCard
                                  key={index}
                                  img={getImageSrc(post.cover)}
                                  title={post.title}
                                  description={formatDate(post.updatedAt)}
                                />
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
}
