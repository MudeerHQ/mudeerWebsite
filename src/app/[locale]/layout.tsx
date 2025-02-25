/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../app/globals.css";
import Footer from "../../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";

const DINNextUltraLight = localFont({
  src: "../font/GraphikArabic-Extralight.ttf",
  variable: "--font-ultraLight",
});
const DINNextLight = localFont({
  src: "../font/GraphikArabic-Extralight.ttf",
  variable: "--font-light",
});
const DINNextRegular = localFont({
  src: "../font/GraphikArabic-Regular.ttf",
  variable: "--font-regular",
});
const DINNextMedium = localFont({
  src: "../font/GraphikArabic-Medium.ttf",
  variable: "--font-medium",
});
const DINNextBold = localFont({
  src: "../font/GraphikArabic-Bold.ttf",
  variable: "--font-bold",
});

const DINNextHeavy = localFont({
  src: "../font/GraphikArabic-Super.ttf",
  variable: "--font-ultraBold",
});
const DINNextThin = localFont({
  src: "../font/GraphikArabic-Thin.ttf",
  variable: "--font-ultraBold",
});

export const metadata: Metadata = {
  title: "mudeer",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}



export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: any };
}) {
  if (!params?.locale || !routing.locales.includes(params.locale)) {
    notFound();
  }

  // Await necessary async operations
  await setRequestLocale(params.locale);
  const messages = await getMessages();

  return (
    <html dir="ltr" lang={params.locale}>
      <NextIntlClientProvider messages={messages}>
        <body
          className={` 
          ${DINNextUltraLight.variable}
          ${DINNextLight.variable}
          ${DINNextRegular.variable}
          ${DINNextMedium.variable}
          ${DINNextBold.variable}
          ${DINNextThin.variable}
          ${DINNextHeavy.variable}
          bg-[#F5F5F4]`}
        >
          {/* <Navbar /> */}
          <NavigationMenuDemo />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}





