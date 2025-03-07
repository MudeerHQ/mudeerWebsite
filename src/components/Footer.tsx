"use client";
import backFooter from "./../app/assets/bg-footer.png";
import Image from "next/image";
import logoFooter from "./../app/assets/logo-footer.png";
import { Link } from "@/i18n/routing";

export default function Footer() {
  return (
    <div
      className=" overflow-hidden h-auto pt-[100px] md:pt-[150px] pb-[80px] rounded-t-[60px] max-sm:rounded-t-[30px] bg-[#09090B] bg-top bg-no-repeat flex flex-col justify-center items-center gap-20 max-sm:gap-0"
      style={{ backgroundImage: `url(${backFooter.src})` }}
      dir="rtl"
    >
      <div className="flex flex-col gap-2 text-center px-8">
        <div className="flex flex-col justify-center items-center gap-8">
          <span className="text-white text-[30px] md:text-[70px] font-semibold">
            ابدأ اليوم مع مدير
          </span>
          <span className="text-white text-[25px] md:text-[64px] font-light">
            كل مشاريعك وأهدافك في مكان واحد.
          </span>
        </div>
        <div className="w-fit overflow-hidden m-auto relative group hover:-translate-x-1  transition-all duration-300  ">
          <Link
            href="/create-account"
            className="peer px-5  py-[16px] flex items-center overflow-hidden duration-300 transition-all  font-bold text-md bg-white text-[#000] rounded-2xl relative group-hover:hover:rounded-3xl "
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
                fill="#000"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid gap-[30px] md:gap-[60px] ">
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
                    className="text-[#FFFFFF99] hover:text-white font-normal text-[15.5px] cursor-pointer"
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
              <span className="font-normal text-sm text-[#FFFFFF99] hover:text-white cursor-pointer">
                سياسة الخصوصية
              </span>
              <span className="font-normal text-sm text-[#FFFFFF99] hover:text-white cursor-pointer">
                شروط الاستخدام
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
