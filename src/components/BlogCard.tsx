"use client";
import React from "react";
import { BlogCardProps } from "../app/lib/Types";
import Image from "next/image";

export default function BlogCard({ img, title, description }: BlogCardProps) {
  return (
    <div
      dir="rtl"
      className="flex flex-col justify-start gap-4 bg-white overflow-hidden rounded-[30px] max-sm:w-[90%] max-md:m-auto"
    >
      <div>
        {" "}
        <Image src={img} alt={title} className="w-full" />{" "}
      </div>
      <div className="flex flex-col gap-3 justify-start px-4 pb-4">
        <span className="font-semibold text-lg text-[#0D0D0D]">{title}</span>
        <span className="font-normal text-base text-[#71717A]">
          {description}
        </span>
      </div>
    </div>
  );
}
