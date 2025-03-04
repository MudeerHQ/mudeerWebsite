"use client";
import React from "react";
import { PageHeaderProps } from "../app/lib/Types";

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div
      dir="rtl"
      className="flex flex-col justify-center items-center gap-6 pt-[180px] pb-[100px] max-md:pb-[20px] px-4 sm:px-8 md:px-16"
    >
      <h1 className="font-bold text-[40px] sm:text-[60px] md:text-[80px] text-[#010101] text-center">
        {title}
      </h1>
      <p className="font-normal text-lg sm:text-xl md:text-2xl text-[#3F3F46] text-center w-full sm:w-[80%] md:w-[55%]">
        {description}
      </p>
    </div>
  );
}
