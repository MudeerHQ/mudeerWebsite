"use client";
import { ArrowLeft } from "lucide-react";
import backFooter from "./../app/assets/bg-footer.png";
import Image from "next/image";
import logoFooter from "./../app/assets/logo-footer.png";

export default function Footer() {
  return (
    <div
      className=" overflow-hidden h-auto pt-[100px] md:pt-[240px] pb-[80px] rounded-t-[60px] max-sm:rounded-t-[30px] bg-[#09090B] bg-top bg-no-repeat flex flex-col justify-center items-center gap-20 max-sm:gap-0"
      style={{ backgroundImage: `url(${backFooter.src})` }}
      dir="rtl"
    >
      <div className="flex flex-col gap-2 text-center px-4">
        <div className="flex flex-col justify-center items-center gap-8">
          <span className="text-white text-[30px] md:text-[82px] font-semibold">
            ابدأ اليوم مع مدير
          </span>
          <span className="text-white text-[25px] md:text-[79px] font-light">
            .كل مشاريعك وأهدافك في مكان واحد
          </span>
        </div>
        <div
          className="z-10 overflow-hidden group w-[200px] m-auto relative flex justify-center items-center gap-2 text-[#141414F5] bg-[#FFFFFF] rounded-[13px] py-4
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
      <div className="grid gap-[30px] md:gap-[60px]  ">
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[40px] md:gap-[100px]">
          {[
            {
              title: "الميزات",
              items: ["المشاريع", "الأهداف", "مهامي", "الإشعارات", "التقارير"],
            },
            {
              title: "الحلول",
              items: ["العمليات", "التسويق", "المبيعات", "الموارد البشرية"],
            },
            {
              title: "المعرفة",
              items: ["المدونة", "التحديثات", "مركز المساعدة"],
            },
            {
              title: "الشركة",
              items: ["الأسعار", "عن مدير", "تواصل معنا", "الوظائف"],
            },
            {
              title: "تابعنا على",
              items: ["لنكدإن", "تويتر"],
            },
          ].map((section, index) => (
            <div key={index}>
              <ul className="flex flex-col gap-3">
                <li className="text-white font-semibold text-base">
                  {section.title}
                </li>
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[#FFFFFF99] font-normal text-[15.5px] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[50px] text-center md:text-start">
            <div className="flex justify-center items-center gap-4">
              <Image
                src={logoFooter}
                alt="logo-footer"
                width="17"
                height="17"
              />
              <div>
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
