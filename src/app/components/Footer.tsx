"use client";
import { ArrowLeft } from "lucide-react";
import backFooter from "../assets/bg-footer.png";
import Image from "next/image";
import logoFooter from "../assets/logo-footer.png";

export default function Footer() {
  return (
    <div
      className=" h-[1074px] pt-[240px] pb-[80px] rounded-t-[60px] bg-[#09090B] bg-top bg-no-repeat flex flex-col justify-center items-center gap-20"
      style={{ backgroundImage: `url(${backFooter.src})` }}
      dir="rtl"
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center items-center gap-8">
          <span className="text-white text-[82px] font-semibold">
            ابدأ اليوم مع مدير
          </span>
          <span className="text-white text-[79px] font-light">
            .كل مشاريعك وأهدافك في مكان واحد
          </span>
        </div>
        <div
          className="z-10 overflow-hidden group w-[260px] m-auto relative flex justify-center items-center gap-2 text-[#141414F5] bg-[#FFFFFF] rounded-[13px] py-4
         px-[13px] text-base font-semibold cursor-pointer hover:rounded-3xl transition-all duration-300"
        >
          <ArrowLeft
            color="#141414F5"
            size={15}
            className="ml-2 absolute -right-4 group-hover:right-4 transition-all duration-200"
          />
          جرّب مدير مجانًا
          <ArrowLeft
            color="#141414F5"
            size={15}
            className="group-hover:hidden transition-opacity duration-200"
          />
        </div>
      </div>
      <div className="grid gap-[60px]">
        <div className="mt-12 grid grid-cols-5 justify-around gap-[100px] px-5">
          <div>
            <ul className="flex flex-col gap-3">
              <li className="text-white font-semibold text-base">الميزات</li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                المشاريع
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                الأهداف
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                مهامي
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                الإشعارات
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer ">
                التقارير
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="text-white font-semibold text-base">الحلول</li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                العمليات
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                التسويق
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                المبيعات
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                الموارد البشرية
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="text-white font-semibold text-base">المعرفة</li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                المدونة
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                التحديثات
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                مركز المساعدة
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <ul className="flex flex-col gap-3">
              <li className="text-white font-semibold text-base">الشركة</li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                الأسعار
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                عن مدير
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                تواصل معنا
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                الوظائف
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="text-white font-semibold text-base">تابعنا على</li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                لنكدإن
              </li>
              <li className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer">
                تويتر
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-[50px]">
            <div className="flex justify-center items-center gap-4">
              <Image
                src={logoFooter}
                alt="logo-footer"
                width="17"
                height="17"
              ></Image>
              <div>
                {" "}
                <span className="font-bold text-sm text-[#FFFFFF]">مدير.</span>
                <span className="font-normal text-sm text-[#FFFFFF]">
                  {" "}
                  صُنع بحب من الرياض © 2025
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5">
              <span className="font-normal text-sm text-[#FFFFFF99]">
                سياسة الخصوصية
              </span>
              <span className="font-normal text-sm text-[#FFFFFF99]">
                شروط الاستخدام
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
