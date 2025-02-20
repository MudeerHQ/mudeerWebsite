"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import PageHeader from "../../../components/PageHeader";
import backHeader from "../../assets/bg-header.png";
import Packages from "./_components/Packages";
import Partners from "./_components/Partners";
import Questions from "../../../components/Questions";
import PackagesWebTables from "./_components/PackagesWebTables";
import PackagesMobileTables from "./_components/PackagesMobileTables";

export default function Pricing() {
  const locale = useLocale(); // Get current locale from route
  const t = useTranslations("PricingPage");

  return (
    <div
      className="bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${backHeader.src})` }}
      dir={locale === "ar" ? "rtl" : "ltr"} // Set direction dynamically
    >
      <PageHeader title={t("title")} description={t("content")} />
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
