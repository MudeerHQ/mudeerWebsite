/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useLocale } from "next-intl";
import AboutHeader from "./_components/AboutHeader";
import MudeerStory from "./_components/AboutStory";
import AboutVision from "./_components/AboutVision";
import AboutValues from "./_components/AboutValues";
import AboutFooter from "./_components/AboutFooter";

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
      <AboutValues />
      <AboutFooter />
    </div>
  );
}
