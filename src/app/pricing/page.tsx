"use client";
import React from "react";
import PageHeader from "../../components/PageHeader";
import backHeader from "../assets/bg-header.png";
import Packages from "./_components/Packages";
import Partners from "./_components/Partners";
import Questions from "./_components/Questions";
import PackagesWebTables from "./_components/PackagesWebTables";
import PackagesMobileTables from "./_components/PackagesMobileTables";
export default function Pricing() {
  return (
    <div
      className="bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${backHeader.src})` }}
      dir="rtl"
    >
      <PageHeader
        title="الأسعار والباقات"
        description="خطط وباقات* مرنة تنمو معك وتساعدك تنجز المزيد وتصل إلى أهدافك أسرع مع مدير."
      />
      <Packages />
      <div>
        <div className="block md:hidden">
          <PackagesMobileTables />
        </div>
        <div className="hidden md:block">
          <PackagesWebTables />
        </div>
      </div>
      <Partners />
      <Questions />
    </div>
  );
}
