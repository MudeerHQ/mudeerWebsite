"use client";
import React from "react";
import PackageCard from "../_components/PackagesCard";
import bgPackage from "../../assets/bg-package.jpg";


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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-6 sm:px-10 md:px-20 lg:px-40 mb-32">
      {packages.map((pkg, index) => (
        <PackageCard key={index} {...pkg} />
      ))}
    </div>
  );
}
