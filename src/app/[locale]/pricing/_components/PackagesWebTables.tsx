"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "@/i18n/routing";
import { Check, Info } from "lucide-react";

export default function PackagesWebTables() {
  return (
    <div className="py-20 mb-10">
      <div className="flex flex-col justify-center items-center mb-8">
        <div>
          <h3 className="text-[64px] font-semibold max-sm:text-3xl">
            مقارنة الباقات
          </h3>
        </div>
        <div>
          <Table>
            <TableHeader className="sticky top-0  z-20">
              <TableRow className="flex justify-end w-[1200px] border-b-[1px] border-black">
                <TableHead className="w-[500px]"></TableHead>
                <TableHead className="w-[213px] flex flex-col gap-1 items-center mb-20">
                  <span className="font-semibold text-lg text-[#0D0D0D]">
                    الأساسية
                  </span>
                  <span className="text-[#0D0D0D] font-normal text-sm">
                    9 <span>دولار</span>
                  </span>
                  <Link href="/create-account" className="mt-1">
                    <span className="bg-black hover:bg-[#4D367F] cursor-pointer text-white rounded-[8px] text-xs font-semibold px-3 py-2">
                      جرّب مجانًا
                    </span>
                  </Link>
                </TableHead>
                <TableHead className="w-[213px] flex flex-col gap-1 items-center mb-20">
                  <span className="font-semibold text-lg text-[#0D0D0D]">
                    الفريق
                  </span>
                  <span className="text-[#0D0D0D] font-normal text-sm">
                    19 <span>دولار</span>
                  </span>
                  <Link href="/create-account" className="mt-1">
                    <span className="bg-black hover:bg-[#4D367F] cursor-pointer text-white rounded-[8px] text-xs font-semibold px-3 py-2">
                      جرّب مجانًا
                    </span>
                  </Link>
                </TableHead>
                <TableHead className="w-[213px] flex flex-col gap-1 items-center mb-20">
                  <span className="font-semibold text-lg text-[#0D0D0D]">
                    الاحترافية
                  </span>
                  <span className="text-[#0D0D0D] font-normal text-sm">
                    29 <span>دولار</span>
                  </span>
                  <Link href="/create-account" className="mt-1">
                    <span className="bg-black hover:bg-[#4D367F] cursor-pointer text-white rounded-[8px] text-xs font-semibold px-3 py-2">
                      جرّب مجانًا
                    </span>
                  </Link>
                </TableHead>
                <TableHead className="w-[213px] flex flex-col gap-1 items-center mb-20">
                  <span className="font-semibold text-lg text-[#0D0D0D]">
                    الأعمال
                  </span>
                  <span className="text-[#0D0D0D] font-normal text-sm">
                    مخصص
                  </span>
                  <Link href="/create-account" className="mt-1">
                    <span className="bg-black hover:bg-[#4D367F] cursor-pointer text-white rounded-[8px] text-xs font-semibold px-3 py-2">
                      جرّب مجانًا
                    </span>
                  </Link>
                </TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto max-h-[500px] w-full">
          <Table className="table-fixed w-[1200px] m-auto border-separate border-spacing-y-3">
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
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
                  {" "}
                  <div className="my-auto text-sm flex items-center space-x-2 gap-2">
                    دعم فني مخصّص لحساب العميل
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
    </div>
  );
}
