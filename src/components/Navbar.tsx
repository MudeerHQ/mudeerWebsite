"use client";

import Image from "next/image";
import logoArabic from "./../app/assets/logo-ar.png";
import { ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import LocaleSwitcherWrapper from "./LocaleSwitcherWrapper";
import { useParams } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  const params = useParams();
  const currentLocale = (params.locale as "en" | "ar") || "ar";
  return (
    <div
      className="fixed top-4 right-0 z-50 flex justify-between items-center mt-4 mx-24 rounded-xl bg-[#FFFFFF] px-6 py-2 border border-[#F4F4F5] w-[85%]"
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
          <Link href="/blog">
            <li
              className={`text-base font-semibold cursor-pointer ${
                pathname.startsWith("/blog") ? "text-[#CCAD00]" : ""
              }`}
            >
              الأعمال
            </li>
          </Link>
          <Link href="/pricing">
            <li
              className={`text-base font-semibold cursor-pointer ${
                pathname.startsWith("/pricing") ? "text-[#CCAD00]" : ""
              }`}
            >
              الأسعار
            </li>
          </Link>
          <Link href="/about-mudeer">
            <li
              className={`text-base font-semibold cursor-pointer ${
                pathname.startsWith("/about-mudeer") ? "text-[#CCAD00]" : ""
              }`}
            >
              عن مدير
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex ">
        <LocaleSwitcherWrapper
          currentLocale={currentLocale}
          label="Switch Language"
        />
        <div className="text-[#0D0D0D] py-2 px-3 font-semibold text-base cursor-pointer">
          تسجيل الدخول
        </div>
        <div className="relative group hover:-translate-x-1  transition-all duration-300  ">
          <Link
            href="/create-account"
            className="peer px-5  py-[16px] flex items-center overflow-hidden duration-300 transition-all  font-bold text-md bg-[#000] text-white rounded-2xl relative group-hover:hover:rounded-3xl "
          >
            <div className="pl-3 transform transition-all duration-300 group-hover:translate-x-[-1.7em]">
              جرّب مدير مجانًا
            </div>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300 group-hover:translate-x-[-3em] rotate-180"
            >
              <path
                d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <div className="absolute text-white right-[-1em] top-1/2 -translate-y-1/2 w-4 h-4  transition-all duration-300">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-[-2em] rotate-180"
            >
              <path
                d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
