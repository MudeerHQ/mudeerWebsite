/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import PageHeader from "../../../../components/PageHeader";
import BlogCard from "@/components/BlogCard";
import { useParams } from "next/navigation";
import { formatDate, getApiUrl, getImageSrc } from "@/helpers";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@/i18n/routing";

const fetchCategoryById = async (categoryId: string) => {
  const res = await fetch(getApiUrl(`/category/${categoryId}`));
  if (!res.ok) throw new Error("Failed to fetch Category");
  return res.json();
};

export default function CategoryId() {
  const params = useParams();
  const categoryId = Array.isArray(params.categoryId)
    ? params.categoryId[0]
    : params.categoryId;

  const { data, error, isLoading } = useQuery({
    queryKey: ["categoryId", categoryId],
    queryFn: () => fetchCategoryById(categoryId!),
    enabled: !!categoryId,
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
    <div className="px-[100px] -mb-12 grid justify-center pb-32 bg-[#F5F5F4] max-sm:px-[30px]" dir="rtl">
      <PageHeader title={data?.title} description={data?.description} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.posts?.map((blog: any, index: any) => (
          <div key={index}>
            <Link href={`/blog/${data.slug_url}/${blog.slug_url}`}>
              <BlogCard
                key={blog.id}
                img={getImageSrc(blog.cover)}
                title={blog.title}
                description={formatDate(blog.updatedAt)}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
