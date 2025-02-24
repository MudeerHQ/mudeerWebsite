/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useLocale } from "next-intl";
import React from "react";
import FeaturesHeader from "../_components/FeaturesHeader";
import FeaturesEffect from "../_components/FeatureEffect";
import FeaturesFooter from "../_components/FeaturesFooter";
import FeaturesIdeas from "../_components/FeaturesIdeas";

export default function Projects() {
  const locale = useLocale();

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="bg-[#1A1919]">
      <FeaturesHeader />
      <FeaturesIdeas />
      <FeaturesEffect />
      <FeaturesFooter />
    </div>
  );
}
