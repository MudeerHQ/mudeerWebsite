/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import PageHeader from "../../../../components/PageHeader";
import BlogCard from "@/components/BlogCard";
import { useParams } from "next/navigation";
import { formatDate, getApiUrl, getImageSrc } from "@/helpers";
import { useQuery } from "@tanstack/react-query";

const fetchBlogsById = async (id: string) => {
  const res = await fetch(getApiUrl(`/category/${id}`));
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export default function ReleaseNote() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id; 

  const { data, error, isLoading } = useQuery({
    queryKey: ["blogsId", id],
    queryFn: () => fetchBlogsById(id!),
    enabled: !!id,
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
    <div className="px-[100px] grid justify-center mb-20" dir="rtl">
      <PageHeader title={data?.title} description={data?.description} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.posts?.map((blog: any) => (
          <BlogCard
            key={blog.id}
            img={getImageSrc(blog.cover)}
            title={blog.title}
            description={formatDate(blog.updatedAt)}
          />
        ))}
      </div>
    </div>
  );
}
