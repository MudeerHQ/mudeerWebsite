"use client";
import React from "react";
import PackageCard from "./PackagesCard";
import bgPackage from "../../../assets/bg-package.jpg";
import { ArrowLeft } from "lucide-react";

export default function Packages() {
  const packages = [
    {
      title: "الأساسية",
      price: "$0",
      description: "ارفع إنتاجيتك وأدر مهامك ومشاريعك من مكان واحد.",
      headFeature: "تشمل الباقة الأساسية:",
      features: [
        "3 مشاريع",
        "5 مستخدمين",
        "مساحة تخزين 2 جيجا",
        "عدد مهام غير محدودة",
        "مساحة عمل واحدة",
        "نموذج عرض المشاريع List",
        "نموذج عرض المشاريع Kanban",
        "تطبيقات الموبايل IOS & Android",
      ],
      bgImage: bgPackage.src,
    },
    {
      title: "برو",
      price: "$9",
      description:
        "خطّط، ونفّذ، وحقّق أهدافك وتابع فريقك بشكل أفضل وأسرع مع مدير.",
      headFeature: "كل شيء في الأساسية بالإضافة إلى:",
      features: [
        "مشاريع غير محدودة",
        "500 مستخدم",
        "الحقول المخصصة",
        "نموذج عرض المشاريع Calendar",
        "مهام من نوع مراحل Milestone",
        "لوحة تحكم متقدمة",
        "فرق ومشاريع خاصة",
        "تقارير متقدمة على مستوى المشاريع",
      ],
      bgImage: bgPackage.src,
    },
    {
      title: "الفريق",
      price: "$19",
      description: "للشركات التي تحتاج إلى إدارة محفظة من العمل والأهداف.",
      headFeature: "كل شيء في برو بالإضافة إلى:",
      features: [
        "عدد غير محدود من المستخدمين",
        "أهداف غير محدودة",
        "20 حافظة مشاريع  ✦ ",
        "مهام من نوع موافقات Approvals ✦ ",
        "+100 تكامل مع تطبيقات مختلفة",
        " إدارة الفريق",
        " إدارة الفريق",
      ],
      bgImage: bgPackage.src,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-6 sm:px-10 md:px-20 lg:px-60 mb-10">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
      <div className="flex flex-col gap-4 justify-center items-center mb-10 text-center px-4">
        <span className="text-[#504f4f] text-xs sm:text-sm font-normal">
          ✦ سنطلقها قريبًا. تواصل معنا للوصول المبكر.
        </span>
        <span className="text-[#504f4f] text-xs sm:text-sm font-normal">
          *يحصل المستخدمون الأوائل على جميع ميزات باقة الفريق حتى طرح الأسعار في
          عام 2025.
        </span>
      </div>

      <div className="px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 md:px-[30px] md:py-[35px] bg-[#FFFFFF66] rounded-[20px] md:rounded-[30px] shadow-md">
          {/* Text Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto text-center md:text-right">
            <div className="border-l-[2px] md:border-l-2 border-[rgba(13, 13, 13, .15)] pl-4 font-semibold text-lg md:text-xl">
              الأعمال الكبيرة
            </div>
            <div className="font-normal text-sm sm:text-base text-[#504f4f] md:w-[60%]">
              ارفع نسب الإنتاجية والإنجاز وحقّق أهداف عملك، وفّر وقتك وجهدك مع
              إمكانات تحكُّم وأتمتة غير محدودة.
            </div>
          </div>

          {/* Button Section */}
          <div className="mt-6 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
            <div className="group w-full md:w-[170px] relative flex justify-center items-center gap-2 text-[#FFFFFF] bg-[#141414F5] rounded-[10px] py-2 px-3 text-sm sm:text-base font-medium cursor-pointer hover:rounded-3xl transition-all duration-300">
              <ArrowLeft
                color="#FFFFFF"
                size={12}
                className="ml-2 absolute -right-4 group-hover:right-2 transition-all duration-200"
              />
              تواصل مع المبيعات
              <ArrowLeft
                color="#FFFFFF"
                size={12}
                className="group-hover:hidden transition-opacity duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
