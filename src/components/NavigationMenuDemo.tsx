"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";
import LocaleSwitcherWrapper from "./LocaleSwitcherWrapper";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import backNavbar from "../app/assets/bg-navbar.png";

export function NavigationMenuDemo() {
  const pathname = usePathname();
  console.log(pathname);
  const params = useParams();
  const currentLocale = (params.locale as "en" | "ar") || "ar";
  const locale = useLocale(); // Get current locale from route
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-between items-center rounded-xl bg-[#FFFFFF] px-6 py-2 border border-[#F4F4F5] w-[85%] max-lg:w-[95%] max-md:w-[94%] max-md:px-4"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Link href="/">
        <div className="flex justify-center items-center gap-3">
          <span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.897949"
                y="0.449158"
                width="27.1017"
                height="27.1017"
                rx="6.99398"
                fill="#010101"
              />
              <path
                d="M10.0912 22.7425C12.5132 22.7425 14.4766 20.7791 14.4766 18.3571L14.4766 13.9718L10.0912 13.9718C7.66929 13.9718 5.70591 15.9352 5.70591 18.3571C5.70591 20.7791 7.66929 22.7425 10.0912 22.7425Z"
                fill="white"
              />
              <path
                d="M18.8061 5.25751C16.3841 5.25751 14.4208 7.22089 14.4208 9.64285V14.0282H18.8061C21.228 14.0282 23.1914 12.0648 23.1914 9.64285C23.1914 7.22089 21.228 5.25751 18.8061 5.25751Z"
                fill="white"
              />
              <path
                d="M10.0922 5.25751C12.5142 5.25751 14.4775 7.22089 14.4775 9.64285L14.4775 14.0282H10.0922C7.67027 14.0282 5.70689 12.0648 5.70689 9.64285C5.70689 7.22089 7.67027 5.25751 10.0922 5.25751Z"
                fill="white"
              />
              <path
                d="M18.8061 22.7425C16.3841 22.7425 14.4208 20.7791 14.4208 18.3571V13.9718L18.8061 13.9718C21.228 13.9718 23.1914 15.9352 23.1914 18.3571C23.1914 20.7791 21.228 22.7425 18.8061 22.7425Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="text-[#010101] text-[26px] font-extrabold max-[900px]:text-lg">
            {t("logo")}
          </span>
        </div>
      </Link>
      <div className="max-[900px]:hidden">
        <NavigationMenu>
          <NavigationMenuList dir={locale === "ar" ? "rtl" : "ltr"}>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" flex items-center gap-1 text-base font-semibold cursor-pointer">
                {t("title1")}
              </NavigationMenuTrigger>
              <NavigationMenuContent dir={locale === "ar" ? "ltr" : "rtl"}>
                <ul className="overflow-y-scroll grid gap-5 p-4 md:w-[600px] lg:w-[700px] xl:w-[1000px] lg:grid-cols-[.5fr_4fr] ">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild className=" bg-[#0D0D0D] px-5">
                      <div
                        className={`pb-8 w-[280px] rounded-2xl flex flex-col justify-end items-end max-lg:hidden`}
                      >
                        <div>
                          <Image src={backNavbar} alt="" className="w-full" />
                        </div>
                        <div>
                          <ul
                            className="flex flex-col gap-1 mb-6"
                            dir={locale === "ar" ? "rtl" : "ltr"}
                          >
                            <li className="font-semibold text-lg text-[#FFFFFF] flex items-center gap-1 mb-3">
                              {t("li20")}{" "}
                            </li>

                            <li className="font-light text-sm text-[#FFFFFF] flex items-center gap-1">
                              <svg
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_6632_1868"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="15"
                                  height="16"
                                >
                                  <g clipPath="url(#clip0_6632_1868)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M11.8897 4.18964C12.2682 4.54292 12.2887 5.13616 11.9353 5.51467L6.68536 11.1397C6.50806 11.3297 6.25986 11.4375 6 11.4375C5.74014 11.4375 5.49194 11.3297 5.31464 11.1397L3.06464 8.72896C2.71136 8.35045 2.73181 7.75721 3.11033 7.40392C3.48885 7.05064 4.08208 7.0711 4.43536 7.44961L6 9.126L10.5647 4.23533C10.9179 3.85681 11.5112 3.83636 11.8897 4.18964Z"
                                      fill="#0DF28F"
                                    />
                                  </g>
                                </mask>
                                <g mask="url(#mask0_6632_1868)">
                                  <rect
                                    y="0.5"
                                    width="15"
                                    height="15"
                                    fill="#0BDA81"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_1868">
                                    <rect
                                      width="15"
                                      height="15"
                                      fill="white"
                                      transform="translate(0 0.5)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              {t("li21")}
                            </li>
                            <li className="font-light text-[12px] text-[#FFFFFF] flex items-center gap-1">
                              <svg
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_6632_1868"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="15"
                                  height="16"
                                >
                                  <g clipPath="url(#clip0_6632_1868)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M11.8897 4.18964C12.2682 4.54292 12.2887 5.13616 11.9353 5.51467L6.68536 11.1397C6.50806 11.3297 6.25986 11.4375 6 11.4375C5.74014 11.4375 5.49194 11.3297 5.31464 11.1397L3.06464 8.72896C2.71136 8.35045 2.73181 7.75721 3.11033 7.40392C3.48885 7.05064 4.08208 7.0711 4.43536 7.44961L6 9.126L10.5647 4.23533C10.9179 3.85681 11.5112 3.83636 11.8897 4.18964Z"
                                      fill="#0DF28F"
                                    />
                                  </g>
                                </mask>
                                <g mask="url(#mask0_6632_1868)">
                                  <rect
                                    y="0.5"
                                    width="15"
                                    height="15"
                                    fill="#0BDA81"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_1868">
                                    <rect
                                      width="15"
                                      height="15"
                                      fill="white"
                                      transform="translate(0 0.5)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              {t("li22")}{" "}
                            </li>
                            <li className="font-light text-sm text-[#FFFFFF] flex items-center gap-1">
                              <svg
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_6632_1868"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="15"
                                  height="16"
                                >
                                  <g clipPath="url(#clip0_6632_1868)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M11.8897 4.18964C12.2682 4.54292 12.2887 5.13616 11.9353 5.51467L6.68536 11.1397C6.50806 11.3297 6.25986 11.4375 6 11.4375C5.74014 11.4375 5.49194 11.3297 5.31464 11.1397L3.06464 8.72896C2.71136 8.35045 2.73181 7.75721 3.11033 7.40392C3.48885 7.05064 4.08208 7.0711 4.43536 7.44961L6 9.126L10.5647 4.23533C10.9179 3.85681 11.5112 3.83636 11.8897 4.18964Z"
                                      fill="#0DF28F"
                                    />
                                  </g>
                                </mask>
                                <g mask="url(#mask0_6632_1868)">
                                  <rect
                                    y="0.5"
                                    width="15"
                                    height="15"
                                    fill="#0BDA81"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_1868">
                                    <rect
                                      width="15"
                                      height="15"
                                      fill="white"
                                      transform="translate(0 0.5)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              {t("li23")}{" "}
                            </li>
                            <li className="font-light text-sm text-[#FFFFFF] flex items-center gap-1">
                              <svg
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_6632_1868"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="15"
                                  height="16"
                                >
                                  <g clipPath="url(#clip0_6632_1868)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M11.8897 4.18964C12.2682 4.54292 12.2887 5.13616 11.9353 5.51467L6.68536 11.1397C6.50806 11.3297 6.25986 11.4375 6 11.4375C5.74014 11.4375 5.49194 11.3297 5.31464 11.1397L3.06464 8.72896C2.71136 8.35045 2.73181 7.75721 3.11033 7.40392C3.48885 7.05064 4.08208 7.0711 4.43536 7.44961L6 9.126L10.5647 4.23533C10.9179 3.85681 11.5112 3.83636 11.8897 4.18964Z"
                                      fill="#0DF28F"
                                    />
                                  </g>
                                </mask>
                                <g mask="url(#mask0_6632_1868)">
                                  <rect
                                    y="0.5"
                                    width="15"
                                    height="15"
                                    fill="#0BDA81"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_1868">
                                    <rect
                                      width="15"
                                      height="15"
                                      fill="white"
                                      transform="translate(0 0.5)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              {t("li24")}{" "}
                            </li>
                            <li className="font-light text-sm text-[#FFFFFF] flex items-center gap-1">
                              <svg
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_6632_1868"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="15"
                                  height="16"
                                >
                                  <g clipPath="url(#clip0_6632_1868)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M11.8897 4.18964C12.2682 4.54292 12.2887 5.13616 11.9353 5.51467L6.68536 11.1397C6.50806 11.3297 6.25986 11.4375 6 11.4375C5.74014 11.4375 5.49194 11.3297 5.31464 11.1397L3.06464 8.72896C2.71136 8.35045 2.73181 7.75721 3.11033 7.40392C3.48885 7.05064 4.08208 7.0711 4.43536 7.44961L6 9.126L10.5647 4.23533C10.9179 3.85681 11.5112 3.83636 11.8897 4.18964Z"
                                      fill="#0DF28F"
                                    />
                                  </g>
                                </mask>
                                <g mask="url(#mask0_6632_1868)">
                                  <rect
                                    y="0.5"
                                    width="15"
                                    height="15"
                                    fill="#0BDA81"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_1868">
                                    <rect
                                      width="15"
                                      height="15"
                                      fill="white"
                                      transform="translate(0 0.5)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              {t("li25")}{" "}
                            </li>
                            <li className="font-light text-sm text-[#FFFFFF] flex items-center gap-1">
                              <svg
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_6632_1868"
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="15"
                                  height="16"
                                >
                                  <g clipPath="url(#clip0_6632_1868)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M11.8897 4.18964C12.2682 4.54292 12.2887 5.13616 11.9353 5.51467L6.68536 11.1397C6.50806 11.3297 6.25986 11.4375 6 11.4375C5.74014 11.4375 5.49194 11.3297 5.31464 11.1397L3.06464 8.72896C2.71136 8.35045 2.73181 7.75721 3.11033 7.40392C3.48885 7.05064 4.08208 7.0711 4.43536 7.44961L6 9.126L10.5647 4.23533C10.9179 3.85681 11.5112 3.83636 11.8897 4.18964Z"
                                      fill="#0DF28F"
                                    />
                                  </g>
                                </mask>
                                <g mask="url(#mask0_6632_1868)">
                                  <rect
                                    y="0.5"
                                    width="15"
                                    height="15"
                                    fill="#0BDA81"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_1868">
                                    <rect
                                      width="15"
                                      height="15"
                                      fill="white"
                                      transform="translate(0 0.5)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              {t("li26")}{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="bg-[#FFFFFF] rounded-[10px] py-[10px] border-2 border-[#FFFFFF] font-normal text-base cursor-pointer  text-[#0D0D0D] w-[170px] text-center ">
                          {t("li27")}
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <div
                    className="p-4 max-lg:overflow-y-scroll h-[450px]"
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <div className="flex flex-col gap-[20px]">
                      <div className="text-base text-[#010101] font-medium">
                        {t("li19")}
                      </div>
                      <div className="grid grid-cols-[2fr_1.5fr] gap-6">
                        <div className="flex flex-col gap-3">
                          <Link
                            href="/features/projects"
                            className="flex justify-start items-start gap-4"
                          >
                            <div>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_6632_1944)">
                                  <g clipPath="url(#clip1_6632_1944)">
                                    <g clipPath="url(#clip2_6632_1944)">
                                      <mask
                                        id="mask0_6632_1944"
                                        maskUnits="userSpaceOnUse"
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      >
                                        <path
                                          d="M24 0H0V24H24V0Z"
                                          fill="white"
                                        />
                                      </mask>
                                      <g mask="url(#mask0_6632_1944)">
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M22.7501 9.8C20.0001 6.85 17.2001 4 14.2501 1.3C13.0001 0.15 11.0001 0.15 9.75012 1.3C6.85012 4 4.0001 6.85 1.3001 9.8C0.200098 11 0.200098 13.05 1.3001 14.25C4.0001 17.15 6.85012 20 9.80012 22.75C11.0001 23.85 13.0501 23.85 14.2501 22.75C17.2001 20 20.0501 17.2 22.7501 14.25C23.8501 13.05 23.8501 11 22.7501 9.8ZM13.5001 8.95C12.5001 8.9 11.5001 8.9 10.5001 8.95C9.70012 8.95 8.95012 9.7 8.95012 10.5C8.90012 11.5 8.90012 12.5 8.95012 13.5C8.95012 14.3 9.70012 15 10.5001 15.05C11.5001 15.1 12.5001 15.1 13.5001 15.05C14.3001 15.05 15.0001 14.3 15.0501 13.5C15.1001 12.5 15.1001 11.5 15.0501 10.5C15.0501 9.7 14.3001 9 13.5001 8.95Z"
                                          fill="#010101"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_1944">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                  <clipPath id="clip1_6632_1944">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                  <clipPath id="clip2_6632_1944">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-base text-[#010101] font-semibold">
                                {t("li1")}
                              </span>
                              <span className="text-base text-[#010101] font-light">
                                {t("li28")}
                              </span>
                            </div>
                          </Link>
                          <Link
                            href="/features/reporting"
                            className="flex justify-start items-start gap-4"
                          >
                            <div>
                              <svg
                                width="23"
                                height="22"
                                viewBox="0 0 23 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.031 0.187322C11.5723 0.0575139 12.1367 0.0575139 12.678 0.187322C13.6787 0.426389 15.6775 0.995841 18.1654 2.18018C20.1024 3.10299 21.4445 3.90353 22.272 4.44753C23.2426 5.08587 23.2426 6.44938 22.272 7.08771C21.4445 7.63172 20.1029 8.43224 18.1654 9.35454C15.6775 10.5394 13.6787 11.1089 12.678 11.3479C12.1367 11.4777 11.5723 11.4777 11.031 11.3479C10.0303 11.1084 8.03147 10.5394 5.54352 9.35454C3.60606 8.43224 2.26452 7.63122 1.43703 7.08771C0.466303 6.44938 0.466303 5.08587 1.43703 4.44753C2.26402 3.90353 3.60606 3.10299 5.54352 2.18018C8.03097 0.995841 10.0303 0.426389 11.031 0.187322ZM1.90766 9.13647C2.88295 9.7007 3.88114 10.2244 4.89969 10.7061C7.49894 11.9439 9.60013 12.5447 10.6826 12.8038C11.4542 12.9884 12.2543 12.9884 13.0264 12.8038C14.1084 12.5447 16.21 11.9439 18.8093 10.7061C19.8276 10.2244 20.8257 9.7007 21.8008 9.13647C21.973 9.24377 22.1302 9.34454 22.272 9.43791C23.2426 10.0763 23.2426 11.4397 22.272 12.0781C21.4445 12.622 20.1029 13.4226 18.1654 14.3449C15.6775 15.5297 13.6787 16.0993 12.678 16.3383C12.1367 16.4681 11.5723 16.4681 11.031 16.3383C10.0303 16.0988 8.03147 15.5297 5.54352 14.3449C3.60606 13.4226 2.26452 12.6216 1.43703 12.0781C0.466303 11.4397 0.466303 10.0763 1.43703 9.43791C1.57877 9.34454 1.73498 9.24377 1.90766 9.13647ZM1.90766 14.1273C2.88295 14.6916 3.88114 15.2152 4.89969 15.6969C7.49894 16.9347 9.60013 17.5356 10.6826 17.7946C11.4542 17.9793 12.2543 17.9793 13.0264 17.7946C14.1084 17.5356 16.21 16.9347 18.8093 15.6969C19.8276 15.2152 20.8257 14.6916 21.8008 14.1273C21.973 14.2346 22.1302 14.3355 22.272 14.4288C23.2426 15.0667 23.2426 16.4306 22.272 17.069C21.4445 17.613 20.1029 18.4135 18.1654 19.3358C15.6775 20.5207 13.6787 21.0901 12.678 21.3292C12.1367 21.4591 11.5723 21.4591 11.031 21.3292C10.0303 21.0896 8.03147 20.5207 5.54352 19.3358C3.60606 18.4135 2.26452 17.6124 1.43703 17.069C0.466303 16.4306 0.466303 15.0667 1.43703 14.4288C1.57877 14.3355 1.73498 14.2346 1.90766 14.1273Z"
                                  fill="#010101"
                                />
                              </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-base text-[#010101] font-semibold">
                                {t("li2")}
                              </span>
                              <span className="text-base text-[#010101] font-light">
                                {t("li29")}
                              </span>
                            </div>
                          </Link>
                          <Link
                            href="/features/my-tasks"
                            className="flex justify-start items-start gap-4"
                          >
                            <div>
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_6632_2081)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.0013 0.900533C10.6616 0.904853 9.44377 1.6132 7.00812 3.0299L6.61657 3.25766C4.18096 4.67435 2.96315 5.38272 2.29702 6.54512C1.6309 7.70752 1.63544 9.11632 1.64453 11.934L1.64599 12.387C1.65507 15.2046 1.65962 16.6135 2.33323 17.7716C3.00684 18.9296 4.22919 19.6301 6.67387 21.0311L7.06692 21.2563C9.51162 22.6573 10.734 23.3577 12.0737 23.3534C13.4134 23.3491 14.6313 22.6408 17.0669 21.2241L17.4584 20.9963C19.8941 19.5796 21.1119 18.8713 21.778 17.7088C22.4441 16.5464 22.4396 15.1376 22.4305 12.32L22.429 11.867C22.4199 9.04932 22.4154 7.64047 21.7418 6.48242C21.0682 5.32432 19.8458 4.62384 17.4011 3.22288L17.0081 2.99765C14.5634 1.59669 13.341 0.896213 12.0013 0.900533ZM14.4731 10.3076C14.0712 10.3089 13.7058 10.5214 12.9752 10.9464L12.0797 11.4673C11.349 11.8923 10.9837 12.1048 10.7839 12.4535C10.584 12.8022 10.5854 13.2249 10.5881 14.0702L10.5915 15.1061C10.5942 15.9514 10.5955 16.374 10.7976 16.7214C10.9997 17.0689 11.3664 17.279 12.0998 17.6993L12.9986 18.2144C13.732 18.6346 14.0987 18.8448 14.5006 18.8435C14.9026 18.8422 15.2679 18.6297 15.9986 18.2047L16.894 17.6838C17.6247 17.2588 17.9901 17.0463 18.1899 16.6976C18.3897 16.3489 18.3884 15.9262 18.3856 15.0809L18.3823 14.045C18.3796 13.1998 18.3782 12.7771 18.1761 12.4297C17.974 12.0823 17.6073 11.8721 16.8739 11.4518L15.9751 10.9368C15.2417 10.5165 14.875 10.3063 14.4731 10.3076Z"
                                    fill="#010101"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_2081">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.0899658)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-base text-[#010101] font-semibold">
                                {t("li3")}
                              </span>
                              <span className="text-base text-[#010101] font-light">
                                {t("li30")}{" "}
                              </span>
                            </div>
                          </Link>
                        </div>
                        <div className="flex flex-col gap-3">
                          <Link
                            href="/features/goals"
                            className="flex justify-start items-start gap-4"
                          >
                            <div>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 13V2L20 6L12 10" fill="#010101" />
                                <path
                                  d="M12 13V2L20 6L12 10"
                                  stroke="#010101"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M20.5612 10.222C21.0933 11.8621 21.1431 13.6206 20.7046 15.2883C20.2661 16.9559 19.3578 18.4624 18.0877 19.6287C16.8177 20.7949 15.2393 21.5718 13.5404 21.8668C11.8415 22.1619 10.0936 21.9627 8.50473 21.2929C6.91581 20.6232 5.55272 19.5111 4.57766 18.0889C3.60259 16.6668 3.05658 14.9945 3.00458 13.2709C2.95259 11.5474 3.3968 9.84522 4.28437 8.36689C5.17194 6.88856 6.46551 5.69632 8.01117 4.93201"
                                  stroke="#010101"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.0019 9.99701C7.5008 10.664 7.17458 11.4458 7.05294 12.2712C6.93131 13.0966 7.01813 13.9392 7.3055 14.7225C7.59287 15.5057 8.07165 16.2045 8.69822 16.7554C9.3248 17.3062 10.0792 17.6915 10.8928 17.8762C11.7064 18.0608 12.5533 18.039 13.3562 17.8126C14.1592 17.5862 14.8928 17.1625 15.4901 16.5801C16.0874 15.9977 16.5295 15.275 16.7761 14.478C17.0227 13.681 17.0659 12.835 16.9019 12.017"
                                  stroke="#010101"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-base text-[#010101] font-semibold">
                                {t("li4")}
                              </span>
                              <span className="text-base text-[#010101] font-light">
                                {t("li31")}{" "}
                              </span>
                            </div>
                          </Link>
                          <Link
                            href="/"
                            className="flex justify-start items-start gap-4"
                          >
                            <div>
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_6632_1963)">
                                  <g clipPath="url(#clip1_6632_1963)">
                                    <g clipPath="url(#clip2_6632_1963)">
                                      <mask
                                        id="mask0_6632_1963"
                                        maskUnits="userSpaceOnUse"
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="25"
                                      >
                                        <path
                                          d="M24 0.0899658H0V24.09H24V0.0899658Z"
                                          fill="white"
                                        />
                                      </mask>
                                      <g mask="url(#mask0_6632_1963)">
                                        <path
                                          d="M11.0503 0.889966C11.3503 -0.0100342 12.6003 -0.0100342 12.9503 0.889966C13.0503 1.18997 13.1503 1.48997 13.2503 1.73997C14.7503 5.93997 18.1003 9.33997 22.3003 10.79C22.6003 10.89 22.9003 10.99 23.1503 11.09C24.0503 11.39 24.0503 12.64 23.1503 12.99C22.8503 13.09 22.5503 13.19 22.3003 13.29C18.1003 14.79 14.7003 18.14 13.2503 22.34C13.1503 22.64 13.0503 22.94 12.9503 23.19C12.6503 24.09 11.4003 24.09 11.0503 23.19C10.9503 22.89 10.8503 22.59 10.7503 22.34C9.25029 18.14 5.90029 14.74 1.70029 13.29C1.40029 13.19 1.10029 13.09 0.850294 12.99C-0.0497074 12.69 -0.0497074 11.44 0.850294 11.09C1.15029 10.99 1.45029 10.89 1.70029 10.79C5.90029 9.28997 9.30029 5.93997 10.7503 1.73997C10.8503 1.48997 10.9503 1.18997 11.0503 0.889966Z"
                                          fill="#010101"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_1963">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.0899658)"
                                    />
                                  </clipPath>
                                  <clipPath id="clip1_6632_1963">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.0899658)"
                                    />
                                  </clipPath>
                                  <clipPath id="clip2_6632_1963">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.0899658)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-base text-[#010101] font-semibold">
                                {t("li5")}
                              </span>
                              <span className="text-base text-[#010101] font-light">
                                {t("li32")}{" "}
                              </span>
                            </div>
                          </Link>
                          <Link
                            href="/"
                            className="flex justify-start items-start gap-4"
                          >
                            <div>
                              <svg
                                width="24"
                                height="26"
                                viewBox="0 0 24 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.1133 1.08796C17.861 1.08796 15.7069 1.512 13.7277 2.28535C13.6968 2.29743 13.6687 2.31555 13.6449 2.33865C13.6211 2.36176 13.6022 2.38938 13.5892 2.4199L13.5882 2.42138L13.5862 2.42637L13.5788 2.44381L13.5508 2.51108C13.4048 2.86231 13.2643 3.21581 13.1293 3.57143C12.9545 4.02488 12.7968 4.48481 12.6569 4.95021L11.896 3.89134C11.7878 3.73931 11.626 3.63395 11.4431 3.5965C11.2604 3.55905 11.0702 3.5923 10.9109 3.68953C5.95442 6.74554 2.63033 12.1978 2.55558 18.4319C1.75434 19.7175 1.09211 21.0569 0.615745 22.4382C0.57184 22.5621 0.552917 22.6936 0.560067 22.825C0.567217 22.9563 0.600299 23.0849 0.657404 23.2034C0.71451 23.322 0.79451 23.4279 0.89279 23.5154C0.991073 23.6028 1.10569 23.6699 1.23003 23.7129C1.35437 23.7558 1.48598 23.7736 1.61726 23.7654C1.74855 23.7572 1.87691 23.7232 1.99495 23.6651C2.11299 23.607 2.21837 23.5262 2.30501 23.4272C2.39165 23.3282 2.45785 23.2131 2.49978 23.0884C3.67225 19.6886 6.1622 16.4572 9.21272 13.621C11.5397 11.4564 14.2305 9.65754 17.0239 8.15321C17.1103 8.10665 17.2052 8.07757 17.3028 8.06763C17.4004 8.05771 17.4991 8.06711 17.5932 8.09531C17.6873 8.12351 17.7748 8.16996 17.8509 8.232C17.927 8.29405 17.9901 8.37048 18.0367 8.45691C18.0833 8.54335 18.1124 8.63812 18.1222 8.73579C18.1321 8.83347 18.1228 8.93215 18.0946 9.02619C18.0664 9.12024 18.0199 9.20782 17.9579 9.28391C17.8959 9.35999 17.8194 9.42313 17.733 9.46969C15.1115 10.8813 12.1905 12.8461 9.6801 15.1806C7.61172 17.104 5.85176 19.2511 4.75105 21.5178H5.42474C8.67856 21.5178 11.7266 20.6323 14.3401 19.0896C14.8504 18.7882 14.794 18.0616 14.2833 17.808L13.207 17.2729C13.9569 17.2081 14.8115 17.0875 15.556 16.9679C16.2187 16.8618 16.8799 16.7467 17.5382 16.6162C17.5851 16.6067 17.6284 16.5838 17.6627 16.5504C20.9454 13.3603 22.9845 8.89765 22.9845 3.95811C22.9845 3.37511 22.9556 2.7971 22.8997 2.22805C22.8733 1.95685 22.7535 1.70325 22.5608 1.51056C22.3681 1.31789 22.1146 1.1981 21.8434 1.17167C21.2684 1.1155 20.691 1.08789 20.1133 1.08796Z"
                                  fill="#010101"
                                />
                              </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-base text-[#010101] font-semibold">
                                {t("li6")}
                              </span>
                              <span className="text-base text-[#010101] font-light">
                                {t("li33")}{" "}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-[2fr_1.5fr] gap-6">
                      <div className="flex flex-col gap-4">
                        <div>{t("li34")}</div>
                        <div>
                          {" "}
                          <Link
                            href="/"
                            className="flex justify-start items-start gap-4"
                          >
                            <div>
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_6632_2050)">
                                  <g clipPath="url(#clip1_6632_2050)">
                                    <g clipPath="url(#clip2_6632_2050)">
                                      <path
                                        d="M16 4.69C16 6.89915 14.2092 8.69 12 8.69C9.79085 8.69 8 6.89915 8 4.69C8 2.48086 9.79085 0.690002 12 0.690002C14.2092 0.690002 16 2.48086 16 4.69Z"
                                        fill="#010101"
                                      />
                                      <path
                                        d="M9 8.19C9 10.3992 7.20915 12.19 5 12.19C2.79086 12.19 1 10.3992 1 8.19C1 5.98085 2.79086 4.19 5 4.19C7.20915 4.19 9 5.98085 9 8.19Z"
                                        fill="#010101"
                                      />
                                      <path
                                        d="M9 16.19C9 18.3992 7.20915 20.19 5 20.19C2.79086 20.19 1 18.3992 1 16.19C1 13.9809 2.79086 12.19 5 12.19C7.20915 12.19 9 13.9809 9 16.19Z"
                                        fill="#010101"
                                      />
                                      <path
                                        d="M16 19.69C16 21.8992 14.2092 23.69 12 23.69C9.79085 23.69 8 21.8992 8 19.69C8 17.4809 9.79085 15.69 12 15.69C14.2092 15.69 16 17.4809 16 19.69Z"
                                        fill="#010101"
                                      />
                                      <path
                                        d="M23 16.19C23 18.3992 21.2092 20.19 19 20.19C16.7908 20.19 15 18.3992 15 16.19C15 13.9809 16.7908 12.19 19 12.19C21.2092 12.19 23 13.9809 23 16.19Z"
                                        fill="#010101"
                                      />
                                      <path
                                        d="M23 8.19C23 10.3992 21.2092 12.19 19 12.19C16.7908 12.19 15 10.3992 15 8.19C15 5.98085 16.7908 4.19 19 4.19C21.2092 4.19 23 5.98085 23 8.19Z"
                                        fill="#010101"
                                      />
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_2050">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.190002)"
                                    />
                                  </clipPath>
                                  <clipPath id="clip1_6632_2050">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.190002)"
                                    />
                                  </clipPath>
                                  <clipPath id="clip2_6632_2050">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.190002)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-base text-[#010101] font-semibold">
                                {t("li7")}
                              </span>
                              <span className="text-base text-[#010101] font-light">
                                {t("li35")}{" "}
                              </span>
                            </div>
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="/features/inbox"
                            className="flex justify-start items-start gap-4"
                          >
                            <div>
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_6632_2069)">
                                  <g clipPath="url(#clip1_6632_2069)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M21.15 3.04003C22.1 3.94003 22.2 5.34 22.25 8.19C22.275 9.115 22.2875 10.0276 22.3 10.9401C22.3125 11.8526 22.325 12.765 22.35 13.69C22.35 16.5401 22.25 17.94 21.35 18.84C20.4 19.7901 18.95 19.8401 16.1 19.8901H9.49995C8.39995 19.8901 7.84995 19.8901 7.34995 20.0401C6.84995 20.2401 6.39995 20.54 5.59995 21.24C5.34995 21.44 5.09995 21.6525 4.84995 21.865C4.59995 22.0775 4.34995 22.2901 4.09995 22.49C3.89995 22.64 3.59995 22.74 3.29995 22.74C2.59995 22.69 1.99995 22.0901 1.94995 21.3901C1.69995 16.9901 1.64995 12.59 1.74995 8.19C1.84995 5.39 1.94995 3.99003 2.84995 3.04003C3.74995 2.09003 5.14995 1.99003 7.99995 1.94003C10.65 1.89003 13.35 1.89003 16 1.94003C18.8 2.04003 20.2 2.09003 21.15 3.04003ZM8 9.64C7.45 9.69 6.95 10.14 6.9 10.69C6.75 13.44 9.3 15.74 12 15.79C14.7 15.74 17.25 13.44 17.1 10.69C17.05 10.14 16.55 9.64 16 9.64C13.35 9.54 10.65 9.54 8 9.64Z"
                                      fill="#010101"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_2069">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.190002)"
                                    />
                                  </clipPath>
                                  <clipPath id="clip1_6632_2069">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.190002)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-base text-[#010101] font-semibold">
                                {t("li8")}
                              </span>
                              <span className="text-base text-[#010101] font-light">
                                {t("li36")}{" "}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div>{t("li37")}</div>
                        <div>
                          {" "}
                          <Link
                            href="/"
                            className="flex justify-start items-start gap-4"
                          >
                            <div>
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_6632_2013)">
                                  <g clipPath="url(#clip1_6632_2013)">
                                    <path
                                      d="M8.70007 3.34005C9.60007 2.44005 10.0501 1.99005 10.6001 1.74005C11.1501 1.49005 11.7501 1.49005 13.0001 1.49005C14.5501 1.49005 16.1001 1.54005 17.7001 1.54005C19.7501 1.59005 20.8001 1.64005 21.1001 2.24005C21.4001 2.89005 20.7501 3.54005 19.3001 5.04005C16.9501 7.39005 14.4001 9.84005 12.0001 12.2901C9.60007 12.2901 7.20007 12.2901 4.85007 12.2401C2.80007 12.1901 1.75007 12.1401 1.45007 11.5401C1.15007 10.8901 1.80007 10.2401 3.25007 8.74005C5.00007 7.04005 6.85007 5.19005 8.70007 3.34005Z"
                                      fill="#010101"
                                    />
                                    <path
                                      d="M12 12.04C14.4 12.04 16.7999 12.0399 19.15 12.0899C21.1999 12.1399 22.25 12.19 22.5499 12.79C22.8499 13.44 22.2 14.0899 20.75 15.5899C19 17.3899 17.1 19.19 15.25 21.04C14.35 21.94 13.9 22.39 13.35 22.64C12.8 22.89 12.2 22.89 10.95 22.89C9.4 22.89 7.84995 22.8399 6.24995 22.8399C4.19997 22.7899 3.14997 22.74 2.84997 22.14C2.54997 21.49 3.19997 20.8399 4.64997 19.3399C7.05 16.9399 9.6 14.49 12 12.04Z"
                                      fill="#010101"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_6632_2013">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.190002)"
                                    />
                                  </clipPath>
                                  <clipPath id="clip1_6632_2013">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0 0.190002)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-base text-[#010101] font-semibold">
                                {t("li9")}
                              </span>
                              <span className="text-base text-[#010101] font-light">
                                {t("li38")}{" "}
                              </span>
                            </div>
                          </Link>
                        </div>
                        <div>
                          <Link
                            href="/"
                            className="flex justify-start items-start gap-4"
                          >
                            <div>
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21 12.29C21.552 12.29 22.005 11.841 21.95 11.292C21.7195 8.99613 20.7021 6.85066 19.0703 5.21928C17.4386 3.5879 15.2929 2.57099 12.997 2.34096C12.447 2.28596 11.999 2.73896 11.999 3.29096V11.291C11.999 11.5562 12.1044 11.8105 12.2919 11.9981C12.4795 12.1856 12.7338 12.291 12.999 12.291L21 12.29Z"
                                  fill="#010101"
                                  stroke="#010101"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M21.2099 16.18C20.5737 17.6845 19.5787 19.0102 18.3118 20.0413C17.0449 21.0724 15.5447 21.7774 13.9424 22.0948C12.34 22.4121 10.6843 22.3321 9.12006 21.8618C7.55578 21.3914 6.13054 20.5451 4.96893 19.3967C3.80733 18.2482 2.94473 16.8327 2.45655 15.2739C1.96837 13.7151 1.86948 12.0605 2.16851 10.4546C2.46755 8.84878 3.15541 7.34062 4.17196 6.06202C5.18851 4.78343 6.5028 3.77331 7.99992 3.12"
                                  stroke="#010101"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-base text-[#010101] font-semibold">
                                {t("li10")}
                              </span>
                              <span className="text-base text-[#010101] font-light">
                                {t("li39")}{" "}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <div>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                    </div> */}
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`hover:bg-accent  hover:py-1 rounded-sm px-2 py-2 text-base font-semibold cursor-pointer`}
                >
                  {t("title2")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-1 text-base font-semibold cursor-pointer">
                {t("title3")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className="flex flex-col gap-5 w-[350px] p-[30px]"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <Link
                    href="/blog"
                    className="flex justify-start items-start gap-4"
                  >
                    <div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 11.6666C12.6667 10.8333 13.0833 10.25 13.75 9.58329C14.5833 8.83329 15 7.74996 15 6.66663C15 5.34054 14.4732 4.06877 13.5355 3.13109C12.5979 2.19341 11.3261 1.66663 10 1.66663C8.67392 1.66663 7.40215 2.19341 6.46447 3.13109C5.52678 4.06877 5 5.34054 5 6.66663C5 7.49996 5.16667 8.49996 6.25 9.58329C6.83333 10.1666 7.33333 10.8333 7.5 11.6666M7.5 15H12.5M8.33333 18.3333H11.6667"
                          stroke="#09090B"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-base text-[#010101] font-semibold">
                        {t("li16")}
                      </span>
                      <span className="text-base text-[#010101] font-light">
                        {t("li41")}{" "}
                      </span>
                    </div>
                  </Link>
                  <Link
                    href="/blog/release-notes"
                    className="flex justify-start items-start gap-4"
                  >
                    <div>
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9998 2.34003V5.34003M16.4998 3.84003H13.4998M2.99983 12.84V14.34M3.74983 13.59H2.24983M7.45258 11.715C7.38562 11.4555 7.25034 11.2186 7.0608 11.0291C6.87125 10.8395 6.63439 10.7042 6.37483 10.6373L1.77358 9.45078C1.69508 9.4285 1.62599 9.38122 1.57679 9.31611C1.52759 9.25101 1.50098 9.17163 1.50098 9.09003C1.50098 9.00843 1.52759 8.92905 1.57679 8.86395C1.62599 8.79884 1.69508 8.75156 1.77358 8.72928L6.37483 7.54203C6.63429 7.47514 6.8711 7.33996 7.06063 7.15056C7.25017 6.96116 7.38551 6.72445 7.45258 6.46503L8.63908 1.86378C8.66114 1.78497 8.70837 1.71554 8.77357 1.66608C8.83878 1.61662 8.91837 1.58984 9.00021 1.58984C9.08205 1.58984 9.16164 1.61662 9.22684 1.66608C9.29204 1.71554 9.33928 1.78497 9.36133 1.86378L10.5471 6.46503C10.614 6.72458 10.7493 6.96145 10.9389 7.15099C11.1284 7.34053 11.3653 7.47582 11.6248 7.54278L16.2261 8.72853C16.3052 8.75035 16.375 8.79754 16.4247 8.86284C16.4744 8.92814 16.5014 9.00795 16.5014 9.09003C16.5014 9.17211 16.4744 9.25192 16.4247 9.31722C16.375 9.38252 16.3052 9.42971 16.2261 9.45153L11.6248 10.6373C11.3653 10.7042 11.1284 10.8395 10.9389 11.0291C10.7493 11.2186 10.614 11.4555 10.5471 11.715L9.36058 16.3163C9.33853 16.3951 9.29129 16.4645 9.22609 16.514C9.16089 16.5634 9.0813 16.5902 8.99946 16.5902C8.91762 16.5902 8.83803 16.5634 8.77282 16.514C8.70762 16.4645 8.66039 16.3951 8.63833 16.3163L7.45258 11.715Z"
                          stroke="#09090B"
                          stroke-width="0.9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-base text-[#010101] font-semibold">
                        {t("li17")}
                      </span>
                      <span className="text-base text-[#010101] font-light">
                        {t("li42")}{" "}
                      </span>
                    </div>
                  </Link>
                  <Link
                    href="/help"
                    className="flex justify-start items-start gap-4"
                  >
                    <div>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.57484 7.68978C7.77076 7.13283 8.15746 6.6632 8.66647 6.36406C9.17547 6.06491 9.77392 5.95556 10.3558 6.05537C10.9377 6.15518 11.4655 6.45772 11.8457 6.90939C12.226 7.36105 12.4341 7.93271 12.4332 8.52311C12.4332 10.1898 9.93317 11.0231 9.93317 11.0231M9.99984 14.3564H10.0082M18.3332 10.1898C18.3332 14.7922 14.6022 18.5231 9.99984 18.5231C5.39746 18.5231 1.6665 14.7922 1.6665 10.1898C1.6665 5.58741 5.39746 1.85645 9.99984 1.85645C14.6022 1.85645 18.3332 5.58741 18.3332 10.1898Z"
                          stroke="#09090B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-base text-[#010101] font-semibold">
                        {t("li18")}{" "}
                      </span>
                      <span className="text-base text-[#010101] font-light">
                        {t("li43")}{" "}
                      </span>
                    </div>
                  </Link>
                  <Link
                    href="/"
                    className="flex justify-start items-start gap-4"
                  >
                    <div>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33325 11.9465C3.17555 11.947 3.02094 11.9028 2.88737 11.819C2.75381 11.7352 2.64677 11.6151 2.5787 11.4729C2.51063 11.3306 2.48432 11.172 2.50283 11.0154C2.52133 10.8588 2.5839 10.7106 2.68325 10.5882L10.9332 2.08817C10.9951 2.01674 11.0795 1.96847 11.1724 1.95128C11.2653 1.9341 11.3613 1.94902 11.4447 1.99359C11.528 2.03817 11.5937 2.10975 11.631 2.1966C11.6683 2.28344 11.675 2.38038 11.6499 2.47151L10.0499 7.48817C10.0027 7.61444 9.98689 7.75027 10.0037 7.88401C10.0206 8.01775 10.0696 8.14541 10.1467 8.25603C10.2237 8.36665 10.3264 8.45693 10.446 8.51914C10.5656 8.58134 10.6985 8.61361 10.8332 8.61317H16.6666C16.8243 8.61263 16.9789 8.65685 17.1125 8.74069C17.246 8.82453 17.3531 8.94454 17.4211 9.08679C17.4892 9.22904 17.5155 9.38768 17.497 9.54429C17.4785 9.7009 17.4159 9.84904 17.3166 9.97151L9.06658 18.4715C9.00469 18.5429 8.92036 18.5912 8.82743 18.6084C8.73449 18.6256 8.63848 18.6107 8.55514 18.5661C8.4718 18.5215 8.40609 18.4499 8.3688 18.3631C8.33151 18.2762 8.32485 18.1793 8.34991 18.0882L9.94991 13.0715C9.99709 12.9452 10.0129 12.8094 9.99609 12.6757C9.97924 12.5419 9.9302 12.4143 9.85317 12.3037C9.77615 12.193 9.67343 12.1027 9.55385 12.0405C9.43426 11.9783 9.30137 11.9461 9.16658 11.9465H3.33325Z"
                          stroke="#09090B"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-base text-[#010101] font-semibold">
                        {t("li40")}{" "}
                      </span>
                      <span className="text-base text-[#010101] font-light">
                        {t("li44")}{" "}
                      </span>
                    </div>
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/enterprise" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`hover:bg-accent  hover:py-1 rounded-sm px-2 py-2 text-base font-semibold cursor-pointer ${
                    pathname.startsWith("/enterprise") ? "text-[#CCAD00]" : ""
                  }`}
                >
                  {t("title4")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`hover:bg-accent  hover:py-1 rounded-sm px-2 py-2 flex items-center gap-1 text-base font-semibold cursor-pointer ${
                    pathname.startsWith("/pricing") ? "text-[#CCAD00]" : ""
                  }`}
                >
                  {t("title5")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-mudeer" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`hover:bg-accent  hover:py-1 rounded-sm px-2 py-2 flex items-center gap-1 text-base font-semibold cursor-pointer ${
                    pathname.startsWith("/about-mudeer") ? "text-[#CCAD00]" : ""
                  }`}
                >
                  {t("title6")}{" "}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex max-[900px]:hidden">
          <LocaleSwitcherWrapper
            currentLocale={currentLocale}
            label="Switch Language"
          />
        </div>

        <Link href="/login" className="max-[900px]:hidden">
          <div className="text-[#0D0D0D] py-2 px-3 font-semibold text-base cursor-pointer">
            {t("title7")}
          </div>
        </Link>
        <div
          className={`overflow-hidden relative group hover:${
            currentLocale === "ar" ? "-translate-x-1" : "translate-x-1"
          } transition-all duration-300`}
        >
          <Link
            href="/create-account"
            className="peer py-2 px-3 flex items-center overflow-hidden duration-300 transition-all font-bold text-md bg-[#141414F5] text-white rounded-[10px] relative group-hover:hover:rounded-3xl"
          >
            <div
              className={` transform transition-all duration-300 ${
                currentLocale === "ar"
                  ? "group-hover:-translate-x-[1.7em] pl-3"
                  : "group-hover:translate-x-[1.7em] pr-3"
              }`}
            >
              {t("li45")}
            </div>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-300 ${
                currentLocale === "ar"
                  ? "group-hover:-translate-x-[3em] rotate-180"
                  : "group-hover:translate-x-[3em]"
              }`}
            >
              <path
                d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <div
            className={`absolute text-white ${
              currentLocale === "ar" ? "right-[-1em]" : "left-[-1em]"
            } top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-300`}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${
                currentLocale === "ar"
                  ? "group-hover:-translate-x-[2em] rotate-180"
                  : "group-hover:translate-x-[2em]"
              }`}
            >
              <path
                d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div
          className={`${
            locale == "ar" ? "mr-[6px]" : "ml-[6px]"
          } max-[900px]:block hidden cursor-pointer relative w-8 h-8`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Menu Icon */}
          <Menu
            className={`absolute top-1 left-0 transition-all duration-300 ${
              isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          />

          {/* X (Close) Icon */}
          <X
            className={`absolute top-1 left-0 transition-all duration-300 ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`rounded-2xl absolute top-[3.4rem] left-0 w-full bg-white transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible min-[900px]:invisible"
            : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col py-8 px-3 gap-4 ">
          <li className="relative group">
            <div className="flex justify-between items-center">
              <span className="block py-2 text-base font-semibold cursor-pointer">
                {t("title1")}
              </span>
              <span
                className={`transition-transform duration-300 ease-in-out transform ${
                  locale == "ar"
                    ? "group-hover:-rotate-90"
                    : "group-hover:rotate-90"
                }`}
              >
                {locale == "ar" ? <ChevronLeft /> : <ChevronRight />}
              </span>
            </div>

            <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-96 group-hover:opacity-100 overflow-y-scroll">
              <div
                className="p-4 max-lg:overflow-y-scroll "
                dir={locale === "ar" ? "rtl" : "ltr"}
              >
                <div className="flex flex-col gap-[20px]">
                  <div className="grid grid-cols-1 gap-6 ">
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/features/projects"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_6632_1944)">
                              <g clipPath="url(#clip1_6632_1944)">
                                <g clipPath="url(#clip2_6632_1944)">
                                  <mask
                                    id="mask0_6632_1944"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="24"
                                    height="24"
                                  >
                                    <path d="M24 0H0V24H24V0Z" fill="white" />
                                  </mask>
                                  <g mask="url(#mask0_6632_1944)">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M22.7501 9.8C20.0001 6.85 17.2001 4 14.2501 1.3C13.0001 0.15 11.0001 0.15 9.75012 1.3C6.85012 4 4.0001 6.85 1.3001 9.8C0.200098 11 0.200098 13.05 1.3001 14.25C4.0001 17.15 6.85012 20 9.80012 22.75C11.0001 23.85 13.0501 23.85 14.2501 22.75C17.2001 20 20.0501 17.2 22.7501 14.25C23.8501 13.05 23.8501 11 22.7501 9.8ZM13.5001 8.95C12.5001 8.9 11.5001 8.9 10.5001 8.95C9.70012 8.95 8.95012 9.7 8.95012 10.5C8.90012 11.5 8.90012 12.5 8.95012 13.5C8.95012 14.3 9.70012 15 10.5001 15.05C11.5001 15.1 12.5001 15.1 13.5001 15.05C14.3001 15.05 15.0001 14.3 15.0501 13.5C15.1001 12.5 15.1001 11.5 15.0501 10.5C15.0501 9.7 14.3001 9 13.5001 8.95Z"
                                      fill="#010101"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_6632_1944">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                              <clipPath id="clip1_6632_1944">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                              <clipPath id="clip2_6632_1944">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li1")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li28")}
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="/features/reporting"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="23"
                            height="22"
                            viewBox="0 0 23 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.031 0.187322C11.5723 0.0575139 12.1367 0.0575139 12.678 0.187322C13.6787 0.426389 15.6775 0.995841 18.1654 2.18018C20.1024 3.10299 21.4445 3.90353 22.272 4.44753C23.2426 5.08587 23.2426 6.44938 22.272 7.08771C21.4445 7.63172 20.1029 8.43224 18.1654 9.35454C15.6775 10.5394 13.6787 11.1089 12.678 11.3479C12.1367 11.4777 11.5723 11.4777 11.031 11.3479C10.0303 11.1084 8.03147 10.5394 5.54352 9.35454C3.60606 8.43224 2.26452 7.63122 1.43703 7.08771C0.466303 6.44938 0.466303 5.08587 1.43703 4.44753C2.26402 3.90353 3.60606 3.10299 5.54352 2.18018C8.03097 0.995841 10.0303 0.426389 11.031 0.187322ZM1.90766 9.13647C2.88295 9.7007 3.88114 10.2244 4.89969 10.7061C7.49894 11.9439 9.60013 12.5447 10.6826 12.8038C11.4542 12.9884 12.2543 12.9884 13.0264 12.8038C14.1084 12.5447 16.21 11.9439 18.8093 10.7061C19.8276 10.2244 20.8257 9.7007 21.8008 9.13647C21.973 9.24377 22.1302 9.34454 22.272 9.43791C23.2426 10.0763 23.2426 11.4397 22.272 12.0781C21.4445 12.622 20.1029 13.4226 18.1654 14.3449C15.6775 15.5297 13.6787 16.0993 12.678 16.3383C12.1367 16.4681 11.5723 16.4681 11.031 16.3383C10.0303 16.0988 8.03147 15.5297 5.54352 14.3449C3.60606 13.4226 2.26452 12.6216 1.43703 12.0781C0.466303 11.4397 0.466303 10.0763 1.43703 9.43791C1.57877 9.34454 1.73498 9.24377 1.90766 9.13647ZM1.90766 14.1273C2.88295 14.6916 3.88114 15.2152 4.89969 15.6969C7.49894 16.9347 9.60013 17.5356 10.6826 17.7946C11.4542 17.9793 12.2543 17.9793 13.0264 17.7946C14.1084 17.5356 16.21 16.9347 18.8093 15.6969C19.8276 15.2152 20.8257 14.6916 21.8008 14.1273C21.973 14.2346 22.1302 14.3355 22.272 14.4288C23.2426 15.0667 23.2426 16.4306 22.272 17.069C21.4445 17.613 20.1029 18.4135 18.1654 19.3358C15.6775 20.5207 13.6787 21.0901 12.678 21.3292C12.1367 21.4591 11.5723 21.4591 11.031 21.3292C10.0303 21.0896 8.03147 20.5207 5.54352 19.3358C3.60606 18.4135 2.26452 17.6124 1.43703 17.069C0.466303 16.4306 0.466303 15.0667 1.43703 14.4288C1.57877 14.3355 1.73498 14.2346 1.90766 14.1273Z"
                              fill="#010101"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li2")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li29")}
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="/features/my-tasks"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_6632_2081)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.0013 0.900533C10.6616 0.904853 9.44377 1.6132 7.00812 3.0299L6.61657 3.25766C4.18096 4.67435 2.96315 5.38272 2.29702 6.54512C1.6309 7.70752 1.63544 9.11632 1.64453 11.934L1.64599 12.387C1.65507 15.2046 1.65962 16.6135 2.33323 17.7716C3.00684 18.9296 4.22919 19.6301 6.67387 21.0311L7.06692 21.2563C9.51162 22.6573 10.734 23.3577 12.0737 23.3534C13.4134 23.3491 14.6313 22.6408 17.0669 21.2241L17.4584 20.9963C19.8941 19.5796 21.1119 18.8713 21.778 17.7088C22.4441 16.5464 22.4396 15.1376 22.4305 12.32L22.429 11.867C22.4199 9.04932 22.4154 7.64047 21.7418 6.48242C21.0682 5.32432 19.8458 4.62384 17.4011 3.22288L17.0081 2.99765C14.5634 1.59669 13.341 0.896213 12.0013 0.900533ZM14.4731 10.3076C14.0712 10.3089 13.7058 10.5214 12.9752 10.9464L12.0797 11.4673C11.349 11.8923 10.9837 12.1048 10.7839 12.4535C10.584 12.8022 10.5854 13.2249 10.5881 14.0702L10.5915 15.1061C10.5942 15.9514 10.5955 16.374 10.7976 16.7214C10.9997 17.0689 11.3664 17.279 12.0998 17.6993L12.9986 18.2144C13.732 18.6346 14.0987 18.8448 14.5006 18.8435C14.9026 18.8422 15.2679 18.6297 15.9986 18.2047L16.894 17.6838C17.6247 17.2588 17.9901 17.0463 18.1899 16.6976C18.3897 16.3489 18.3884 15.9262 18.3856 15.0809L18.3823 14.045C18.3796 13.1998 18.3782 12.7771 18.1761 12.4297C17.974 12.0823 17.6073 11.8721 16.8739 11.4518L15.9751 10.9368C15.2417 10.5165 14.875 10.3063 14.4731 10.3076Z"
                                fill="#010101"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_6632_2081">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.0899658)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li3")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li30")}{" "}
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/features/goals"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 13V2L20 6L12 10" fill="#010101" />
                            <path
                              d="M12 13V2L20 6L12 10"
                              stroke="#010101"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.5612 10.222C21.0933 11.8621 21.1431 13.6206 20.7046 15.2883C20.2661 16.9559 19.3578 18.4624 18.0877 19.6287C16.8177 20.7949 15.2393 21.5718 13.5404 21.8668C11.8415 22.1619 10.0936 21.9627 8.50473 21.2929C6.91581 20.6232 5.55272 19.5111 4.57766 18.0889C3.60259 16.6668 3.05658 14.9945 3.00458 13.2709C2.95259 11.5474 3.3968 9.84522 4.28437 8.36689C5.17194 6.88856 6.46551 5.69632 8.01117 4.93201"
                              stroke="#010101"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.0019 9.99701C7.5008 10.664 7.17458 11.4458 7.05294 12.2712C6.93131 13.0966 7.01813 13.9392 7.3055 14.7225C7.59287 15.5057 8.07165 16.2045 8.69822 16.7554C9.3248 17.3062 10.0792 17.6915 10.8928 17.8762C11.7064 18.0608 12.5533 18.039 13.3562 17.8126C14.1592 17.5862 14.8928 17.1625 15.4901 16.5801C16.0874 15.9977 16.5295 15.275 16.7761 14.478C17.0227 13.681 17.0659 12.835 16.9019 12.017"
                              stroke="#010101"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li4")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li31")}{" "}
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="/"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_6632_1963)">
                              <g clipPath="url(#clip1_6632_1963)">
                                <g clipPath="url(#clip2_6632_1963)">
                                  <mask
                                    id="mask0_6632_1963"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="24"
                                    height="25"
                                  >
                                    <path
                                      d="M24 0.0899658H0V24.09H24V0.0899658Z"
                                      fill="white"
                                    />
                                  </mask>
                                  <g mask="url(#mask0_6632_1963)">
                                    <path
                                      d="M11.0503 0.889966C11.3503 -0.0100342 12.6003 -0.0100342 12.9503 0.889966C13.0503 1.18997 13.1503 1.48997 13.2503 1.73997C14.7503 5.93997 18.1003 9.33997 22.3003 10.79C22.6003 10.89 22.9003 10.99 23.1503 11.09C24.0503 11.39 24.0503 12.64 23.1503 12.99C22.8503 13.09 22.5503 13.19 22.3003 13.29C18.1003 14.79 14.7003 18.14 13.2503 22.34C13.1503 22.64 13.0503 22.94 12.9503 23.19C12.6503 24.09 11.4003 24.09 11.0503 23.19C10.9503 22.89 10.8503 22.59 10.7503 22.34C9.25029 18.14 5.90029 14.74 1.70029 13.29C1.40029 13.19 1.10029 13.09 0.850294 12.99C-0.0497074 12.69 -0.0497074 11.44 0.850294 11.09C1.15029 10.99 1.45029 10.89 1.70029 10.79C5.90029 9.28997 9.30029 5.93997 10.7503 1.73997C10.8503 1.48997 10.9503 1.18997 11.0503 0.889966Z"
                                      fill="#010101"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_6632_1963">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.0899658)"
                                />
                              </clipPath>
                              <clipPath id="clip1_6632_1963">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.0899658)"
                                />
                              </clipPath>
                              <clipPath id="clip2_6632_1963">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.0899658)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li5")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li32")}{" "}
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="/"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="24"
                            height="26"
                            viewBox="0 0 24 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.1133 1.08796C17.861 1.08796 15.7069 1.512 13.7277 2.28535C13.6968 2.29743 13.6687 2.31555 13.6449 2.33865C13.6211 2.36176 13.6022 2.38938 13.5892 2.4199L13.5882 2.42138L13.5862 2.42637L13.5788 2.44381L13.5508 2.51108C13.4048 2.86231 13.2643 3.21581 13.1293 3.57143C12.9545 4.02488 12.7968 4.48481 12.6569 4.95021L11.896 3.89134C11.7878 3.73931 11.626 3.63395 11.4431 3.5965C11.2604 3.55905 11.0702 3.5923 10.9109 3.68953C5.95442 6.74554 2.63033 12.1978 2.55558 18.4319C1.75434 19.7175 1.09211 21.0569 0.615745 22.4382C0.57184 22.5621 0.552917 22.6936 0.560067 22.825C0.567217 22.9563 0.600299 23.0849 0.657404 23.2034C0.71451 23.322 0.79451 23.4279 0.89279 23.5154C0.991073 23.6028 1.10569 23.6699 1.23003 23.7129C1.35437 23.7558 1.48598 23.7736 1.61726 23.7654C1.74855 23.7572 1.87691 23.7232 1.99495 23.6651C2.11299 23.607 2.21837 23.5262 2.30501 23.4272C2.39165 23.3282 2.45785 23.2131 2.49978 23.0884C3.67225 19.6886 6.1622 16.4572 9.21272 13.621C11.5397 11.4564 14.2305 9.65754 17.0239 8.15321C17.1103 8.10665 17.2052 8.07757 17.3028 8.06763C17.4004 8.05771 17.4991 8.06711 17.5932 8.09531C17.6873 8.12351 17.7748 8.16996 17.8509 8.232C17.927 8.29405 17.9901 8.37048 18.0367 8.45691C18.0833 8.54335 18.1124 8.63812 18.1222 8.73579C18.1321 8.83347 18.1228 8.93215 18.0946 9.02619C18.0664 9.12024 18.0199 9.20782 17.9579 9.28391C17.8959 9.35999 17.8194 9.42313 17.733 9.46969C15.1115 10.8813 12.1905 12.8461 9.6801 15.1806C7.61172 17.104 5.85176 19.2511 4.75105 21.5178H5.42474C8.67856 21.5178 11.7266 20.6323 14.3401 19.0896C14.8504 18.7882 14.794 18.0616 14.2833 17.808L13.207 17.2729C13.9569 17.2081 14.8115 17.0875 15.556 16.9679C16.2187 16.8618 16.8799 16.7467 17.5382 16.6162C17.5851 16.6067 17.6284 16.5838 17.6627 16.5504C20.9454 13.3603 22.9845 8.89765 22.9845 3.95811C22.9845 3.37511 22.9556 2.7971 22.8997 2.22805C22.8733 1.95685 22.7535 1.70325 22.5608 1.51056C22.3681 1.31789 22.1146 1.1981 21.8434 1.17167C21.2684 1.1155 20.691 1.08789 20.1133 1.08796Z"
                              fill="#010101"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li6")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li33")}{" "}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-4">
                    <div>{t("li34")}</div>
                    <div>
                      {" "}
                      <Link
                        href="/"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_6632_2050)">
                              <g clipPath="url(#clip1_6632_2050)">
                                <g clipPath="url(#clip2_6632_2050)">
                                  <path
                                    d="M16 4.69C16 6.89915 14.2092 8.69 12 8.69C9.79085 8.69 8 6.89915 8 4.69C8 2.48086 9.79085 0.690002 12 0.690002C14.2092 0.690002 16 2.48086 16 4.69Z"
                                    fill="#010101"
                                  />
                                  <path
                                    d="M9 8.19C9 10.3992 7.20915 12.19 5 12.19C2.79086 12.19 1 10.3992 1 8.19C1 5.98085 2.79086 4.19 5 4.19C7.20915 4.19 9 5.98085 9 8.19Z"
                                    fill="#010101"
                                  />
                                  <path
                                    d="M9 16.19C9 18.3992 7.20915 20.19 5 20.19C2.79086 20.19 1 18.3992 1 16.19C1 13.9809 2.79086 12.19 5 12.19C7.20915 12.19 9 13.9809 9 16.19Z"
                                    fill="#010101"
                                  />
                                  <path
                                    d="M16 19.69C16 21.8992 14.2092 23.69 12 23.69C9.79085 23.69 8 21.8992 8 19.69C8 17.4809 9.79085 15.69 12 15.69C14.2092 15.69 16 17.4809 16 19.69Z"
                                    fill="#010101"
                                  />
                                  <path
                                    d="M23 16.19C23 18.3992 21.2092 20.19 19 20.19C16.7908 20.19 15 18.3992 15 16.19C15 13.9809 16.7908 12.19 19 12.19C21.2092 12.19 23 13.9809 23 16.19Z"
                                    fill="#010101"
                                  />
                                  <path
                                    d="M23 8.19C23 10.3992 21.2092 12.19 19 12.19C16.7908 12.19 15 10.3992 15 8.19C15 5.98085 16.7908 4.19 19 4.19C21.2092 4.19 23 5.98085 23 8.19Z"
                                    fill="#010101"
                                  />
                                </g>
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_6632_2050">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.190002)"
                                />
                              </clipPath>
                              <clipPath id="clip1_6632_2050">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.190002)"
                                />
                              </clipPath>
                              <clipPath id="clip2_6632_2050">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.190002)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li7")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li35")}{" "}
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/features/inbox"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_6632_2069)">
                              <g clipPath="url(#clip1_6632_2069)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M21.15 3.04003C22.1 3.94003 22.2 5.34 22.25 8.19C22.275 9.115 22.2875 10.0276 22.3 10.9401C22.3125 11.8526 22.325 12.765 22.35 13.69C22.35 16.5401 22.25 17.94 21.35 18.84C20.4 19.7901 18.95 19.8401 16.1 19.8901H9.49995C8.39995 19.8901 7.84995 19.8901 7.34995 20.0401C6.84995 20.2401 6.39995 20.54 5.59995 21.24C5.34995 21.44 5.09995 21.6525 4.84995 21.865C4.59995 22.0775 4.34995 22.2901 4.09995 22.49C3.89995 22.64 3.59995 22.74 3.29995 22.74C2.59995 22.69 1.99995 22.0901 1.94995 21.3901C1.69995 16.9901 1.64995 12.59 1.74995 8.19C1.84995 5.39 1.94995 3.99003 2.84995 3.04003C3.74995 2.09003 5.14995 1.99003 7.99995 1.94003C10.65 1.89003 13.35 1.89003 16 1.94003C18.8 2.04003 20.2 2.09003 21.15 3.04003ZM8 9.64C7.45 9.69 6.95 10.14 6.9 10.69C6.75 13.44 9.3 15.74 12 15.79C14.7 15.74 17.25 13.44 17.1 10.69C17.05 10.14 16.55 9.64 16 9.64C13.35 9.54 10.65 9.54 8 9.64Z"
                                  fill="#010101"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_6632_2069">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.190002)"
                                />
                              </clipPath>
                              <clipPath id="clip1_6632_2069">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.190002)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li8")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li36")}{" "}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>{t("li37")}</div>
                    <div>
                      {" "}
                      <Link
                        href="/"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_6632_2013)">
                              <g clipPath="url(#clip1_6632_2013)">
                                <path
                                  d="M8.70007 3.34005C9.60007 2.44005 10.0501 1.99005 10.6001 1.74005C11.1501 1.49005 11.7501 1.49005 13.0001 1.49005C14.5501 1.49005 16.1001 1.54005 17.7001 1.54005C19.7501 1.59005 20.8001 1.64005 21.1001 2.24005C21.4001 2.89005 20.7501 3.54005 19.3001 5.04005C16.9501 7.39005 14.4001 9.84005 12.0001 12.2901C9.60007 12.2901 7.20007 12.2901 4.85007 12.2401C2.80007 12.1901 1.75007 12.1401 1.45007 11.5401C1.15007 10.8901 1.80007 10.2401 3.25007 8.74005C5.00007 7.04005 6.85007 5.19005 8.70007 3.34005Z"
                                  fill="#010101"
                                />
                                <path
                                  d="M12 12.04C14.4 12.04 16.7999 12.0399 19.15 12.0899C21.1999 12.1399 22.25 12.19 22.5499 12.79C22.8499 13.44 22.2 14.0899 20.75 15.5899C19 17.3899 17.1 19.19 15.25 21.04C14.35 21.94 13.9 22.39 13.35 22.64C12.8 22.89 12.2 22.89 10.95 22.89C9.4 22.89 7.84995 22.8399 6.24995 22.8399C4.19997 22.7899 3.14997 22.74 2.84997 22.14C2.54997 21.49 3.19997 20.8399 4.64997 19.3399C7.05 16.9399 9.6 14.49 12 12.04Z"
                                  fill="#010101"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_6632_2013">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.190002)"
                                />
                              </clipPath>
                              <clipPath id="clip1_6632_2013">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(0 0.190002)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li9")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li38")}{" "}
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 12.29C21.552 12.29 22.005 11.841 21.95 11.292C21.7195 8.99613 20.7021 6.85066 19.0703 5.21928C17.4386 3.5879 15.2929 2.57099 12.997 2.34096C12.447 2.28596 11.999 2.73896 11.999 3.29096V11.291C11.999 11.5562 12.1044 11.8105 12.2919 11.9981C12.4795 12.1856 12.7338 12.291 12.999 12.291L21 12.29Z"
                              fill="#010101"
                              stroke="#010101"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21.2099 16.18C20.5737 17.6845 19.5787 19.0102 18.3118 20.0413C17.0449 21.0724 15.5447 21.7774 13.9424 22.0948C12.34 22.4121 10.6843 22.3321 9.12006 21.8618C7.55578 21.3914 6.13054 20.5451 4.96893 19.3967C3.80733 18.2482 2.94473 16.8327 2.45655 15.2739C1.96837 13.7151 1.86948 12.0605 2.16851 10.4546C2.46755 8.84878 3.15541 7.34062 4.17196 6.06202C5.18851 4.78343 6.5028 3.77331 7.99992 3.12"
                              stroke="#010101"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li10")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li39")}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                    </div> */}
              </div>
            </div>
          </li>
          <li>
            <span
              className="block py-2  text-base font-semibold cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t("title2")}
            </span>
          </li>
          <li className="relative group">
            <div className="flex justify-between items-center">
              <span className="block py-2 text-base font-semibold cursor-pointer">
                {t("title3")}
              </span>
              <span
                className={`transition-transform duration-300 ease-in-out transform ${
                  locale == "ar"
                    ? "group-hover:-rotate-90"
                    : "group-hover:rotate-90"
                }`}
              >
                {locale == "ar" ? <ChevronLeft /> : <ChevronRight />}
              </span>
            </div>
            <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-96 group-hover:opacity-100 ">
              <div className="p-4 " dir={locale === "ar" ? "rtl" : "ltr"}>
                <div className="flex flex-col gap-[20px]">
                  <div className="grid grid-cols-1 gap-6 ">
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/blog"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5 11.6666C12.6667 10.8333 13.0833 10.25 13.75 9.58329C14.5833 8.83329 15 7.74996 15 6.66663C15 5.34054 14.4732 4.06877 13.5355 3.13109C12.5979 2.19341 11.3261 1.66663 10 1.66663C8.67392 1.66663 7.40215 2.19341 6.46447 3.13109C5.52678 4.06877 5 5.34054 5 6.66663C5 7.49996 5.16667 8.49996 6.25 9.58329C6.83333 10.1666 7.33333 10.8333 7.5 11.6666M7.5 15H12.5M8.33333 18.3333H11.6667"
                              stroke="#09090B"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li16")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li41")}{" "}
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="/blog/release-notes"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.55648 17.59C8.70276 17.8433 8.91316 18.0537 9.16651 18.2C9.41987 18.3462 9.70726 18.4232 9.99981 18.4232C10.2924 18.4232 10.5798 18.3462 10.8331 18.2C11.0865 18.0537 11.2969 17.8433 11.4431 17.59M12.4998 6.75663H17.4998M14.9998 4.25663V9.25663M16.6681 12.1433C16.8578 12.3957 17.0632 12.6359 17.2831 12.8625C17.3918 12.9819 17.4635 13.1304 17.4893 13.2898C17.5152 13.4492 17.4942 13.6127 17.4289 13.7604C17.3636 13.9081 17.2567 14.0336 17.1214 14.1217C16.986 14.2098 16.828 14.2567 16.6665 14.2566H3.33314C3.17164 14.2567 3.01361 14.2098 2.87826 14.1217C2.7429 14.0336 2.63606 13.9081 2.57074 13.7604C2.50541 13.6127 2.4844 13.4492 2.51028 13.2898C2.53615 13.1304 2.60779 12.9819 2.71648 12.8625C3.82481 11.72 4.99981 10.5058 4.99981 6.75663C4.99991 5.89912 5.22055 5.05604 5.64052 4.3084C6.0605 3.56077 6.6657 2.93372 7.39797 2.48749C8.13024 2.04127 8.96497 1.79087 9.82194 1.76037C10.6789 1.72986 11.5293 1.92027 12.2915 2.3133"
                              stroke="#09090B"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li17")}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li42")}{" "}
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="/help"
                        className="flex justify-start items-start gap-4"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <div>
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6668 1.85657V5.1899C11.6668 5.63193 11.8424 6.05585 12.155 6.36841C12.4675 6.68097 12.8915 6.85657 13.3335 6.85657H16.6668M8.3335 7.6899H6.66683M13.3335 11.0232H6.66683M13.3335 14.3566H6.66683M12.5002 1.85657H5.00016C4.55814 1.85657 4.13421 2.03216 3.82165 2.34472C3.50909 2.65728 3.3335 3.08121 3.3335 3.52323V16.8566C3.3335 17.2986 3.50909 17.7225 3.82165 18.0351C4.13421 18.3476 4.55814 18.5232 5.00016 18.5232H15.0002C15.4422 18.5232 15.8661 18.3476 16.1787 18.0351C16.4912 17.7225 16.6668 17.2986 16.6668 16.8566V6.02323L12.5002 1.85657Z"
                              stroke="#09090B"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span
                            className="text-base text-[#010101] font-semibold"
                            onClick={() => {
                              setIsOpen(false);
                            }}
                          >
                            {t("li18")}{" "}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li43")}{" "}
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="/"
                        className="flex justify-start items-start gap-4"
                      >
                        <div>
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.33325 11.9465C3.17555 11.947 3.02094 11.9028 2.88737 11.819C2.75381 11.7352 2.64677 11.6151 2.5787 11.4729C2.51063 11.3306 2.48432 11.172 2.50283 11.0154C2.52133 10.8588 2.5839 10.7106 2.68325 10.5882L10.9332 2.08817C10.9951 2.01674 11.0795 1.96847 11.1724 1.95128C11.2653 1.9341 11.3613 1.94902 11.4447 1.99359C11.528 2.03817 11.5937 2.10975 11.631 2.1966C11.6683 2.28344 11.675 2.38038 11.6499 2.47151L10.0499 7.48817C10.0027 7.61444 9.98689 7.75027 10.0037 7.88401C10.0206 8.01775 10.0696 8.14541 10.1467 8.25603C10.2237 8.36665 10.3264 8.45693 10.446 8.51914C10.5656 8.58134 10.6985 8.61361 10.8332 8.61317H16.6666C16.8243 8.61263 16.9789 8.65685 17.1125 8.74069C17.246 8.82453 17.3531 8.94454 17.4211 9.08679C17.4892 9.22904 17.5155 9.38768 17.497 9.54429C17.4785 9.7009 17.4159 9.84904 17.3166 9.97151L9.06658 18.4715C9.00469 18.5429 8.92036 18.5912 8.82743 18.6084C8.73449 18.6256 8.63848 18.6107 8.55514 18.5661C8.4718 18.5215 8.40609 18.4499 8.3688 18.3631C8.33151 18.2762 8.32485 18.1793 8.34991 18.0882L9.94991 13.0715C9.99709 12.9452 10.0129 12.8094 9.99609 12.6757C9.97924 12.5419 9.9302 12.4143 9.85317 12.3037C9.77615 12.193 9.67343 12.1027 9.55385 12.0405C9.43426 11.9783 9.30137 11.9461 9.16658 11.9465H3.33325Z"
                              stroke="#09090B"
                              stroke-width="1.33333"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-base text-[#010101] font-semibold">
                            {t("li40")}{" "}
                          </span>
                          <span className="text-base text-[#010101] font-light">
                            {t("li44")}{" "}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link
              href="/enterprise"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <span className="block py-2  text-base font-semibold cursor-pointer">
                {t("title4")}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/pricing"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <span className="block py-2  text-base font-semibold cursor-pointer">
                {t("title5")}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={"/about-mudeer"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <span
                className="block py-2  text-base font-semibold cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {t("title6")}
              </span>
            </Link>
          </li>
        </ul>
        <div className="py-4 px-3 flex flex-col gap-4">
          <div
            className={`flex items-center gap-2 ${
              locale == "en" ? "" : ""
            } px-3 `}
            dir={locale === "en" ? "rtl" : "ltr"}
          >
            <LocaleSwitcherWrapper
              currentLocale={currentLocale}
              label="Switch Language"
            />
            <span className="font-semibold text-sm text-[#010101]">
              {currentLocale === "ar" ? "English" : "العربية"}
            </span>
          </div>
          <Link href="/login">
            <div className="px-3 flex justify-center items-center w-full p-1 bg-transparent border border-[#71717A] text-[#0D0D0D] font-semibold text-base rounded-[6px] cursor-pointer">
              {t("title7")}{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent  focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
