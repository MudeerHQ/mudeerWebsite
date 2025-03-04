/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import user from "../../../../assets/user.png";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import blog14 from "../../../../assets/blog14.png";
import blog8 from "../../../../assets/blog8.png";
import blog9 from "../../../../assets/blog9.png";
import { useParams } from "next/navigation";
import { formatDate, getApiUrl, getImageSrc } from "@/helpers";
import { useQuery } from "@tanstack/react-query";
import { EditorProvider, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit"; // Required extension

const fetchBlogsById = async (blogId: string) => {
  const res = await fetch(getApiUrl(`/bloger/${blogId}`));
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export default function BlogId() {
  const params = useParams();
  const blogId = Array.isArray(params.blogId)
    ? params.blogId[0]
    : params.blogId;

  const { data, error, isLoading } = useQuery({
    queryKey: ["blogId", blogId],
    queryFn: () => fetchBlogsById(blogId!),
    enabled: !!blogId,
    staleTime: 6 * 60 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">جارٍ تحميل البيانات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500">حدث خطأ أثناء تحميل البيانات</p>
    );
  }

  return (
    <div
      className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 grid justify-center mb-20"
      dir="rtl"
    >
      <div>
        <div className="flex flex-col justify-center items-center gap-6 pt-[100px] sm:pt-[140px] md:pt-[180px] pb-[60px] sm:pb-[80px] md:pb-[100px] px-4">
          {/* Badge */}
          <span className="bg-[#0037FF] text-white font-semibold text-sm py-1 px-4 rounded-full">
            {data?.category.title}
          </span>

          {/* Title */}
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl text-[#010101] text-center">
            {data?.title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#3F3F46] text-center max-w-[90%] sm:max-w-[80%] md:max-w-[55%]">
            {data?.description}
          </p>

          {/* User Info */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
              <Image
                src={user}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#010101]">
                {data?.author?.name}
              </span>
              <span className="text-sm text-[#71717A]">
                {formatDate(data?.author?.created_at)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className="flex justify-center mb-8">
        <Image
          src={getImageSrc(data?.cover)}
          alt="banner"
          className="w-full "
          width={100}
          height={100}
        />
      </div>

      <EditorProvider
      
        extensions={[StarterKit]} // Ensure schema is provided
        content={data?.canvas?.content || "<p>لا يوجد محتوى</p>"} // Avoid empty content
      >
        <EditorContent editor={null} />
      </EditorProvider>

      {/* <div className="flex flex-col gap-6 my-20">
        <div className="text-[#0D0D0D] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          مواضيع ذات صلة
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <BlogCard
            img={blog14}
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
        </div>
      </div> */}
    </div>
  );
}
