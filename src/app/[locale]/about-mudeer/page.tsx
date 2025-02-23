/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useLocale } from "next-intl";
import AboutHeader from "./_component/AboutHeader";
import MudeerStory from "./_component/AboutStory";
import AboutVision from "./_component/AboutVision";

export default function ContactSales() {
  const locale = useLocale();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="pt-[20px]  grid justify-center bg-[#010101]"
    >
      <AboutHeader />
      <MudeerStory />
      <AboutVision />
    </div>
  );
}
