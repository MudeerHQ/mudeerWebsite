"use client";
import React from "react";
import { BlogCardProps } from "../app/lib/Types";
import Image from "next/image";

export default function BlogCard({ img, title, description }: BlogCardProps) {
  return (
    <div
      dir="rtl"
      className="h-[445px] max-lg:h-[400px] w-full  flex flex-col justify-between gap-4 bg-white overflow-hidden rounded-[30px] "
    >
      <div className="flex flex-col gap-3 justify-start px-4 pt-6">
        <span className="font-normal text-base text-[#71717A]">
          {description}
        </span>
        <span className="font-semibold text-lg text-[#0D0D0D]">{title}</span>
      </div>
      <div>
        {" "}
        <Image
          src={img}
          alt={title}
          className="w-full h-[239px]"
          width="100"
          height="100"
        />{" "}
      </div>
    </div>
  );
}
