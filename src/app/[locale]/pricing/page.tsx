/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PageHeader from "../../../components/PageHeader";
import backHeader from "../../assets/bg-header.png";
import Packages from "./_components/Packages";
import Partners from "./_components/Partners";
import Questions from "./_components/Questions";
import PackagesWebTables from "./_components/PackagesWebTables";
import PackagesMobileTables from "./_components/PackagesMobileTables";
import { useTranslations } from "next-intl";


export default function Pricing() {
  const t = useTranslations("PricingPage");
  return (
    <div
      className="bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${backHeader.src})` }}
      dir="rtl"
    >
      <PageHeader
        title={t("title")}
        description={t("content")}
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
