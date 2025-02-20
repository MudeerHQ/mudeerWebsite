"use client";

import Image from "next/image";
import logoArabic from "./../app/assets/logo-ar.png";
import { ArrowLeft, ChevronDown } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import { Link } from "@/i18n/routing";

export default function Navbar() {
  return (
    <div
      className="fixed top-4 right-0 z-50 flex justify-between items-center mt-4 mx-24 rounded-xl bg-[#FFFFFFD9] px-6 py-2 border border-[#F4F4F5] w-[85%]"
      dir="rtl"
    >
      <div>
        <Image src={logoArabic} alt="mudeer-logo" width={100} height={42} />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-[18px]">
          <li className="flex items-center gap-1 text-base font-semibold cursor-pointer">
            الميزات
            <ChevronDown size={18} />
          </li>
          <li className="flex items-center gap-1 text-base font-semibold cursor-pointer">
            الحلول
            <ChevronDown size={18} />
          </li>
          <li className="flex items-center gap-1 text-base font-semibold cursor-pointer">
            المعرفة
            <ChevronDown size={18} />
          </li>
          <li className="text-base font-semibold cursor-pointer"> الأعمال </li>
          <Link href ="/pricing">

          <li className="text-base font-semibold cursor-pointer">الأسعار</li>
          </Link>
        </ul>
      </div>
      <div className="flex ">
        <LocaleSwitcher />
        <div className="text-[#0D0D0D] py-2 px-3 font-semibold text-base cursor-pointer">
          تسجيل الدخول
        </div>
        <div className="group w-[150px] relative flex justify-center items-center gap-2 text-[#FFFFFF] bg-[#141414F5] rounded-[10px] py-2 px-3 text-base font-medium cursor-pointer hover:rounded-3xl transition-all duration-300">
          <ArrowLeft
            color="#FFFFFF"
            size={12}
            className="ml-2 absolute -right-4 group-hover:right-2 transition-all duration-200"
          />
          جرّب مدير مجانًا
          <ArrowLeft
            color="#FFFFFF"
            size={12}
            className="group-hover:hidden transition-opacity duration-200"
          />
        </div>
      </div>
    </div>
  );
}
