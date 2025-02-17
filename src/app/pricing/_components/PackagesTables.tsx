"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check } from "lucide-react";
export default function PackagesTables() {
  return (
    <div className="py-20 mb-10">
      <div className="flex justify-center items-center">
        <h3 className="text-[64px] font-semibold max-sm:text-3xl">مقارنة الباقات</h3>
      </div>
      <div>
        <Table className="px-20 border-separate border-spacing-y-3 overflow-x-scroll w-[1200px] m-auto">
          <TableHeader className="">
            <TableRow className="flex justify-end w-[1200px] border-b-[1px] border-black">
              <TableHead className="w-[500px]"></TableHead>
              <TableHead className="w-[213px] flex flex-col gap-1 items-center mb-20">
                <span className="font-semibold text-lg text-[#0D0D0D]">
                  الأساسية
                </span>
                <span className="text-[#0D0D0D] font-normal text-sm">
                  9دولار
                </span>
                <span className="bg-black text-white rounded-[8px] text-xs font-semibold px-3 py-2">
                  جرّب مجانًا
                </span>
              </TableHead>
              <TableHead className="w-[213px] flex flex-col gap-1 items-center mb-20">
                <span className="font-semibold text-lg text-[#0D0D0D]">
                  الفريق
                </span>
                <span className="text-[#0D0D0D] font-normal text-sm">
                  19دولار
                </span>
                <span className="bg-black text-white rounded-[8px] text-xs font-semibold px-3 py-2">
                  جرّب مجانًا
                </span>
              </TableHead>
              <TableHead className="w-[213px] flex flex-col gap-1 items-center mb-20">
                <span className="font-semibold text-lg text-[#0D0D0D]">
                  الاحترافية
                </span>
                <span className="text-[#0D0D0D] font-normal text-sm">
                  29دولار
                </span>
                <span className="bg-black text-white rounded-[8px] text-xs font-semibold px-3 py-2">
                  جرّب مجانًا
                </span>
              </TableHead>
              <TableHead className="w-[213px] flex flex-col gap-1 items-center mb-20">
                <span className="font-semibold text-lg text-[#0D0D0D]">
                  الأعمال
                </span>
                <span className="text-[#0D0D0D] font-normal text-sm">مخصص</span>
                <span className="bg-black text-white rounded-[8px] text-xs font-semibold px-3 py-2">
                  جرّب مجانًا
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-semibold text-xl flex flex-col gap-1 items-start">
                الأساسيات{" "}
              </TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                المشاريع{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                3 مشاريع
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                غير محدودة
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                غير محدودة
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                غير محدودة
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                المستخدمين{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                5 مستخدمين
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                500 مستخدم
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                غير محدود
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                غير محدود
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                الأهداف{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                2
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                {" "}
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                {" "}
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                مساحات العمل{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                1
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                2
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                5
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                غير محدود
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                مساحة التخزين{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                2 جيجا
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                100 جيجا
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                500 جيجا
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                1 تيرا
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                عدد غير محدود من المهام{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                لوحة تحكم متقدمة{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                تقارير متقدمة على مستوى المشاريع{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 border-none">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-semibold text-xl flex flex-col gap-1 items-start">
                نماذج عرض المشاريع{" "}
              </TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                نموذج القائمة List{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                نموذج اللوحة Kanban{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                نموذج التقويم Calendar{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                نموذج الخط الزمني Timeline{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                الحقول المخصصة{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 border-none">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-semibold text-xl flex flex-col gap-1 items-start">
                أدوات التعاون{" "}
              </TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                فرق ومشاريع خاصة{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                الإحصاءات والتقارير{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                التعليقات{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                مهام من نوع مراحل Milestone{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                إضافة المرفقات{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                الكانفاس Canvas{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 border-none">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-semibold text-xl flex flex-col gap-1 items-start">
                المنصة{" "}
              </TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                تطبيق الديسكتوب{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                تطبيقات الموبايل IOS & Android{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                قسم مهامي{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                تخصيص الرئيسية{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                مهام من نوع موافقات Approvals{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                قريبًا
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                قريبًا
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                قريبًا
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                قريبًا
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                الإشعارات{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 border-none">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-semibold text-xl flex flex-col gap-1 items-start">
                الأمن{" "}
              </TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                تدقيق أمني مخصص{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                تسجيل الدخول الموحّد SSO{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 border-none">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3">
              <TableCell className="w-[500px] font-semibold text-xl flex flex-col gap-1 items-start">
                الدعم{" "}
              </TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                مركز المعرفة والدعم الفني{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                الدعم الخاص{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                دعم الإعداد والتهيئة{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 ">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start">
                دعم فني مخصّص لحساب العميل{" "}
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                __
              </TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center">
                <div className="bg-[#000000] w-6 h-6 flex items-center justify-center rounded-full p-1 group-hover:bg-white">
                  <Check className="text-white" strokeWidth={3} size={14} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="flex justify-end w-[1200px] py-3 border-none">
              <TableCell className="w-[500px] font-normal text-base flex flex-col gap-1 items-start"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
              <TableCell className="w-[213px] font-normal text-sm flex flex-col gap-1 items-center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
