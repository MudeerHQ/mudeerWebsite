"use client";
import React from "react";
import PageHeader from "../../components/PageHeader";
import backHeader from "../assets/bg-header.png";
import Packages from "./_components/Packages";
import Partners from "./_components/Partners";
import Questions from "./_components/Questions";
import PackagesTables from "./_components/PackagesTables";
export default function Pricing() {
  return (
    <div
      className="bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${backHeader.src})` }}
      dir="rtl"
    >
      <PageHeader
        title="الأسعار والباقات"
        description="خطط وباقات* مرنة تنمو معك وتساعدك تنجز المزيد بما هو أقل وتصل إلى أهدافك أسرع مع مدير."
      />
      <Packages />
      <PackagesTables />
      <Partners />
      <Questions />
    </div>
  );
}
