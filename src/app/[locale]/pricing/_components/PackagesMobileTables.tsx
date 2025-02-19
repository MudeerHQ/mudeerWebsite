"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Check, ChevronDown, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PackagesMobileTables() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const handleToggle = (item: string) => {
    setOpenItem(openItem === item ? undefined : item);
  };

  return (
    <div className="py-20 mb-10">
      <div className="flex justify-center items-center">
        <h3 className="text-[64px] font-semibold max-sm:text-3xl">
          مقارنة الباقات
        </h3>
      </div>

      {/* Pricing Table */}
      <div className="mt-10">
        <div className="px-4 grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] border-b border-gray-300">
          <div className="max-sm:w-[75px]"></div>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 items-center mb-6"
              >
                <span className="font-semibold text-lg text-[#0D0D0D] max-sm:text-sm">
                  الأساسية
                </span>
                <span className="text-[#0D0D0D] font-normal text-sm">
                  9 دولار
                </span>
                <button className="bg-black text-white rounded-[8px] text-xs font-semibold px-3 py-2 max-sm:px-1 max-sm:text-[10px]">
                  جرّب مجانًا
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Accordion Section */}
      <Accordion
        type="single"
        collapsible
        className="w-full h-[300px] overflow-y-scroll"
        value={openItem}
        onValueChange={setOpenItem}
      >
        <AccordionItem
          value="item-1"
          className="border border-gray-300 rounded-lg relative"
        >
          <AccordionTrigger
            className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-base bg-gray-200 ${
              openItem === "item-1" ? "sticky top-0 z-20" : ""
            }`}
            onClick={() => handleToggle("item-1")}
          >
            <span>الأساسيات</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-500 ${
                openItem === "item-1" ? "rotate-180" : ""
              }`}
            />
          </AccordionTrigger>

          <AccordionContent className="px-4 py-3 transition-all duration-400 ease-in-out h-[250px] overflow-y-scroll">
            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">المشاريع</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">3 مشاريع</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">غير محدودة</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center mmy-auto">
                <span className="text-sm text-gray-700">غير محدودة</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">غير محدودة</span>
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">المستخدمين</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">5 مستخدمين</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">500 مستخدم</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">غير محدود</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">غير محدود</span>
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">الأهداف</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">__</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">2</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">مساحات العمل</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">1</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">2</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">5</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">غير محدود</span>
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">مساحة التخزين</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">2 جيجا</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">100 جيجا</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">500 جيجا</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">1 تيرا</span>
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">عدد غير محدود من المهام</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">لوحة تحكم متقدمة</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                  <span className="text-sm text-gray-700">__</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">تقارير متقدمة على مستوى المشاريع</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                  <span className="text-sm text-gray-700">__</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border border-gray-300 rounded-lg relative"
        >
          <AccordionTrigger
            className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-base bg-gray-200 ${
              openItem === "item-2" ? "sticky top-0 z-20" : ""
            }`}
            onClick={() => handleToggle("item-2")}
          >
            <span>مخططات عرض المشاريع</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-500 ${
                openItem === "item-2" ? "rotate-180" : ""
              }`}
            />
          </AccordionTrigger>

          <AccordionContent className="px-4 py-3 transition-all duration-400 ease-in-out h-[250px] overflow-y-scroll">
            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm">نموذج القائمة List</div>

              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">مخطط اللوحة Kanban</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">مخطط التقويم Calendar</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                  <span className="text-sm text-gray-700">__</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">مخطط الخط الزمني Timeline</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                  <span className="text-sm text-gray-700">__</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                  <span className="text-sm text-gray-700">__</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">الحقول المخصصة</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                  <span className="text-sm text-gray-700">__</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border border-gray-300 rounded-lg relative"
        >
          <AccordionTrigger
            className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-base bg-gray-200 ${
              openItem === "item-3" ? "sticky top-0 z-20" : ""
            }`}
            onClick={() => handleToggle("item-3")}
          >
            <span>أدوات التعاون</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-500 ${
                openItem === "item-3" ? "rotate-180" : ""
              }`}
            />
          </AccordionTrigger>

          <AccordionContent className="px-4 py-3 transition-all duration-400 ease-in-out h-[250px] overflow-y-scroll">
            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm">فرق ومشاريع خاصة</div>

              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">__</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                الإحصاءات والتقارير
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} color="#2f2f30" className="" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      إدارة مساحة العمل وتعديل الهوية المخصصة لها مثل الشعار
                      والنصوص وغيرها...
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                التعليقات
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} color="#2f2f30" className="" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      إدارة مساحة العمل وتعديل الهوية المخصصة لها مثل الشعار
                      والنصوص وغيرها...
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                مهام من نوع مراحل Milestone
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} color="#2f2f30" className="" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      إدارة مساحة العمل وتعديل الهوية المخصصة لها مثل الشعار
                      والنصوص وغيرها...
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                  <span className="text-sm text-gray-700">__</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                إضافة المرفقات
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} color="#2f2f30" className="" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      إدارة مساحة العمل وتعديل الهوية المخصصة لها مثل الشعار
                      والنصوص وغيرها...
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                الكانفاس Canvas
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} color="#2f2f30" className="" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      إدارة مساحة العمل وتعديل الهوية المخصصة لها مثل الشعار
                      والنصوص وغيرها...
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border border-gray-300 rounded-lg relative"
        >
          <AccordionTrigger
            className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-base bg-gray-200 ${
              openItem === "item-4" ? "sticky top-0 z-20" : ""
            }`}
            onClick={() => handleToggle("item-4")}
          >
            <span>المنصة</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-500 ${
                openItem === "item-4" ? "rotate-180" : ""
              }`}
            />
          </AccordionTrigger>

          <AccordionContent className="px-4 py-3 transition-all duration-400 ease-in-out h-[250px] overflow-y-scroll">
            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm">تطبيق الديسكتوب</div>

              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto">تطبيقات الموبايل IOS & Android</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                قسم مهامي
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} color="#2f2f30" className="" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      إدارة مساحة العمل وتعديل الهوية المخصصة لها مثل الشعار
                      والنصوص وغيرها...
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                تخصيص الرئيسية
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} color="#2f2f30" className="" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      إدارة مساحة العمل وتعديل الهوية المخصصة لها مثل الشعار
                      والنصوص وغيرها...
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>{" "}
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                مهام من نوع موافقات Approvals
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} color="#2f2f30" className="" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      إدارة مساحة العمل وتعديل الهوية المخصصة لها مثل الشعار
                      والنصوص وغيرها...
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">قريبًا</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">قريبًا</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">قريبًا</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">قريبًا</span>
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                الإشعارات
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} color="#2f2f30" className="" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      إدارة مساحة العمل وتعديل الهوية المخصصة لها مثل الشعار
                      والنصوص وغيرها...
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="border border-gray-300 rounded-lg relative"
        >
          <AccordionTrigger
            className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-base bg-gray-200 ${
              openItem === "item-5" ? "sticky top-0 z-20" : ""
            }`}
            onClick={() => handleToggle("item-5")}
          >
            <span>الأمن</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-500 ${
                openItem === "item-5" ? "rotate-180" : ""
              }`}
            />
          </AccordionTrigger>

          <AccordionContent className="px-4 py-3 transition-all duration-400 ease-in-out h-[150px] overflow-y-scroll">
            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm">تدقيق أمني مخصص</div>

              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">__</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <span className="text-sm text-gray-700">__</span>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <span className="text-sm text-gray-700">__</span>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                تسجيل الدخول الموحّد SSO
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} color="#2f2f30" className="" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      إدارة مساحة العمل وتعديل الهوية المخصصة لها مثل الشعار
                      والنصوص وغيرها...
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">__</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <span className="text-sm text-gray-700">__</span>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <span className="text-sm text-gray-700">__</span>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="border border-gray-300 rounded-lg relative"
        >
          <AccordionTrigger
            className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-base bg-gray-200 ${
              openItem === "item-6" ? "sticky top-0 z-20" : ""
            }`}
            onClick={() => handleToggle("item-6")}
          >
            <span> الدعم</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-500 ${
                openItem === "item-6" ? "rotate-180" : ""
              }`}
            />
          </AccordionTrigger>

          <AccordionContent className="px-4 py-3 transition-all duration-400 ease-in-out h-[250px] overflow-y-scroll">
            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm">مركز المعرفة والدعم الفني</div>

              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>{" "}
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>{" "}
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm">الدعم الخاص</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">__</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <span className="text-sm text-gray-700">__</span>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm">دعم الإعداد والتهيئة</div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">__</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <span className="text-sm text-gray-700">__</span>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
            </div>
            <hr />

            <div className="grid grid-cols-[40%_15%_15%_15%_15%] gap-[2px] py-3">
              <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                دعم فني مخصّص لحساب العميل
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info
                        size={15}
                        color="#09090B"
                        className="cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white p-2 rounded-md text-xs max-w-[230px] text-right">
                      هذا شرح إضافي عن الدعم الفني
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">__</span>
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <span className="text-sm text-gray-700">__</span>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <span className="text-sm text-gray-700">__</span>
                </span>{" "}
              </div>
              <div className="flex flex-col gap-1 items-center py-2 text-center my-auto">
                <span className="text-sm text-gray-700">
                  <div className="bg-[#000000] w-5 h-5 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                    <Check className="text-white" strokeWidth={3} size={14} />
                  </div>
                </span>{" "}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
