"use client";
import React from "react";
import { PageHeaderProps } from "../lib/Types";

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div dir="rtl" className="flex flex-col justify-center items-center gap-6 pt-[180px] pb-[100px]  ">
      <h1 className="font-bold text-[80px] text-[#010101]">{title}</h1>
      <p className="font-normal text-2xl text-[#3F3F46] text-center w-[55%]">{description}</p>
    </div>
  );
}
