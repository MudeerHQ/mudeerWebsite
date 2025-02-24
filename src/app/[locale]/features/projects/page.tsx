/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useLocale } from "next-intl";
import React from "react";
import FeaturesHeader from "../_components/FeaturesHeader";

import FeaturesFooter from "../_components/FeaturesFooter";
// import SectionsSlider from "../_components/SectionsSlider";

export default function Projects() {
  const locale = useLocale();

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="bg-[#1A1919]">
      <FeaturesHeader />
      <FeaturesFooter />
    </div>
  );
}
