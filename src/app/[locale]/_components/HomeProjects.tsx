import React from "react";
import Image from "next/image";
import projectsImg from "../../../app/assets/home-projects-img.png";
import iphone from "../../../app/assets/iphone.png";
import lighting from "../../../app/assets/lightning.png";
import odometer from "../../../app/assets/odometer.png";
import cloud from "../../../app/assets/cloud.png";
import BlogCard from "@/components/BlogCard";
import blog7 from "../../../app/assets/blog7.png";
import blog8 from "../../../app/assets/blog8.png";
import blog9 from "../../../app/assets/blog9.png";

import { useLocale } from "next-intl";
import {
  ArrowLeft,
  Calendar,
  ClipboardList,
  ListTodo,
  SquareKanban,
} from "lucide-react";
import { Link } from "@/i18n/routing";

export default function HomeProjects() {
  const locale = useLocale();

  return (
    <>
      {" "}
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="h-auto -mt-32 bg-[#1A1919] pt-10 rounded-t-[60px] overflow-hidden pb-12 max-sm:rounded-t-[30px]"
      >
        <div className="flex flex-col justify-center items-center gap-8 pt-[20px]  pb-[60px] sm:pb-[80px] md:pb-[100px] px-4 ">
          <div className="flex flex-col gap-12 max-sm:gap-8 justify-center items-center px-4 text-center pt-12 max-sm:pt-6 pb-10 pl-3">
            <div className="py-[6px] px-4 w-[150px] rounded-full bg-[#00B252] flex justify-center items-center gap-2">
              <span>
                <ClipboardList size={20} color="#ffffff" strokeWidth={1.5} />
              </span>
              <span className="text-base font-medium text-[#FFFFFF]">
                المشاريع
              </span>
            </div>
            <div className="text-[#FFFFFF] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight">
              انجز أكثر. مع فريقك في مكان واحد.{" "}
            </div>
            <div className="text-[#686767] font-normal text-2xl w-[55%] max-md:w-full m-auto leading-[30px]">
              لا مزيد من الفوضى والتنقل بين التطبيقات والأدوات المعقدة. نظّم
              مشاريعك وتابع مهام فريقك وتعاون بشكل أفضل وأكثر شفافية.{" "}
            </div>
          </div>
          <div>
            <Image src={projectsImg} alt="projects-img" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] max-md:gap-0 px-[100px] max-sm:px-0">
          <div className=" max-w-[380px] flex flex-col gap-6 px-6 py-8 rounded-[20px] m-auto">
            <div className="p-3  bg-[#FFFFFF1A] rounded-[10px] w-fit">
              <ListTodo size={20} color="#D4D4D8" strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-2xl text-[#FFFFFF]">
              قوائم المهام.
            </h3>
            <p className="font-normal text-lg text-[#FFFFFF80]">
              لا مزيد من المهام العشوائية. تتبع كل شيء بوضوح من خلال القوائم
              التي تساعدك على فرز الأولويات، وتوزيع المسؤوليات، وإدارة مشاريعك
              بكفاءة.{" "}
            </p>
          </div>
          <div className=" max-w-[380px] flex flex-col gap-6 px-6 py-8 rounded-[20px] m-auto">
            <div className="p-3  bg-[#FFFFFF1A] rounded-[10px] w-fit">
              <SquareKanban size={20} color="#D4D4D8" strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-2xl text-[#FFFFFF]">
              لوحة العمل كانبان.
            </h3>
            <p className="font-normal text-lg text-[#FFFFFF80]">
              راقب تقدم المشاريع لحظيًا، وانقل المهام بسهولة بين المراحل، واجعل
              فريقك يعمل بسلاسة دون الحاجة لاجتماعات أو رسائل مملة.{" "}
            </p>
          </div>
          <div className=" max-w-[380px] flex flex-col gap-6 px-6 py-8 rounded-[20px] m-auto">
            <div className="p-3  bg-[#FFFFFF1A] rounded-[10px] w-fit">
              <Calendar size={20} color="#D4D4D8" strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-2xl text-[#FFFFFF]">
              التقويم التفاعلي.
            </h3>
            <p className="font-normal text-lg text-[#FFFFFF80]">
              اجمع المهام، والتذكيرات، والمواعيد في تقويم تفاعلي يعزز إنتاجية
              فريقك ويضمن تنفيذ المشاريع في وقتها.{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-12">
          <div className="group w-[180px] relative flex justify-center items-center gap-2 text-[#141414F5] bg-[#FFFFFF] rounded-[10px] py-3 text-center text-base font-medium cursor-pointer hover:rounded-3xl transition-all duration-300">
            <ArrowLeft
              color="#141414F5"
              size={12}
              className="ml-2 absolute -right-4 group-hover:right-2 transition-all duration-200"
            />
            اعرف المزيد
            <ArrowLeft
              color="#141414F5"
              size={12}
              className="group-hover:hidden transition-opacity duration-200"
            />
          </div>
        </div>

        <div className="mt-32 max-md:mt-10">
          <div className="flex flex-col gap-12 justify-center items-center px-4 text-center pt-12 max-sm:pt-6 pb-10 pl-3">
            <div className="py-[6px] px-4 rounded-full bg-[#DB4F00] flex justify-center items-center gap-2">
              <span>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.52755 5.93782C7.76753 4.67394 6.05911 4.22036 4.71307 4.96649C3.38282 5.70387 2.95069 7.31082 3.69993 8.55675C3.99191 9.0423 4.4218 9.40819 4.92155 9.63298C5.27832 9.79346 5.43745 10.2128 5.27697 10.5695C5.11649 10.9263 4.69717 11.0855 4.3404 10.925C3.59255 10.5886 2.935 10.0337 2.48587 9.28682C1.30864 7.32916 2.01977 4.83967 4.02625 3.72745C6.01693 2.62399 8.57518 3.26804 9.74162 5.20776C10.1912 5.95533 10.3671 6.78795 10.2953 7.59321C10.2605 7.98286 9.91644 8.27055 9.52679 8.23578C9.13714 8.20101 8.84945 7.85695 8.88422 7.4673C8.92996 6.95462 8.81912 6.42268 8.52755 5.93782ZM5.52116 6.21348C6.32015 5.77058 7.35459 6.02262 7.833 6.8182L9.08699 8.9035L13.2681 8.32513C13.9414 8.23199 14.6219 8.53917 14.9774 9.1304L15.378 9.79645C16.8357 12.2206 15.9581 15.3065 13.4658 16.688C11.9275 17.5407 10.0458 17.5794 8.47172 16.7917L5.64643 15.3779C4.92196 15.0154 4.53249 14.1994 4.75446 13.404C5.04606 12.3591 6.21483 11.8708 7.17185 12.2952L4.89275 8.50512C4.40354 7.6916 4.70636 6.66513 5.52116 6.21348ZM6.61894 7.54827C6.54694 7.42853 6.36233 7.36696 6.20797 7.45252C6.06941 7.52933 6.04559 7.67326 6.10681 7.77505L9.59498 13.5757C9.75596 13.8434 9.72257 14.185 9.51279 14.4164C9.30301 14.6479 8.96637 14.7146 8.68418 14.5806L6.60634 13.5943C6.38795 13.4906 6.16464 13.6212 6.11898 13.7848C6.08727 13.8984 6.13571 14.0386 6.2804 14.111L9.10569 15.5248C10.2626 16.1038 11.6501 16.0747 12.779 15.449C14.595 14.4423 15.1936 12.2389 14.1639 10.5265L13.7634 9.86047C13.7114 9.77401 13.5956 9.70998 13.4622 9.72843L8.81796 10.3709C8.53704 10.4097 8.26002 10.2773 8.11387 10.0342L6.61894 7.54827Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-base font-medium text-[#FFFFFF]">
                تطبيق الجوّال. *قريبًا
              </span>
            </div>
            <div className="text-[#FFFFFF] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight">
              أنجز المزيد مع تركيز أعلى؛ أينما كنت.{" "}
            </div>
            <div className="flex justify-between items-center max-md:flex-col">
              <div>
                <Image src={iphone} alt="iphone-img" />
              </div>
              <div className="flex flex-col justify-start items-start gap-8 max-sm:items-center">
                <div className="flex justify-center items-center gap-4">
                  <span>
                    <Image src={lighting} alt="lighting-img" />
                  </span>
                  <span className="text-[#D4D4D8] font-medium text-[22px] max-sm:text-sm">
                    سريع يزوّد إنتاجيتك ويركّز على الإنجاز.
                  </span>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <span>
                    <Image src={odometer} alt="odometer-img" />
                  </span>
                  <span className="text-[#D4D4D8] font-medium text-[22px] max-sm:text-sm">
                    مرن يعمل بالطريقة التي تناسبك تمامًا.{" "}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <span>
                    <Image src={cloud} alt="cloud-img" />
                  </span>
                  <span className="text-[#D4D4D8] font-medium text-[22px] max-sm:text-sm">
                    متصل يجعل فريقك على اطّلاع دائم.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="my-28 px-[100px] max-sm:px-10"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="text-[#0D0D0D] font-semibold text-[64px] max-md:text-4xl text-center flex justify-center items-center mt-10 mb-6">
          تعرَّف على جديد مدير
        </div>
        <div className="flex sm:flex-row justify-between mb-4 px-4">
          <span className="text-xl sm:text-[26px] font-semibold">
            آخر التحديثات
          </span>
          <Link href="/blog/release-notes">
            <span className="text-sm font-semibold text-[#0037FF] flex items-center gap-1 cursor-pointer">
              عرض الجميع <ArrowLeft />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          <BlogCard
            img={blog7}
            title="تقديم أكثر شمولاً تجارب مدير"
            description="29 ديسمبر، 2024"
          />
          <BlogCard
            img={blog8}
            title="تقديم أكثر شمولاً تجارب مدير"
            description="29 ديسمبر، 2024"
          />
          <BlogCard
            img={blog9}
            title="تقديم أكثر شمولاً تجارب مدير"
            description="29 ديسمبر، 2024"
          />
        </div>
      </div>
    </>
  );
}
