import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import way1 from "../../../app/assets/way1.png";
import way2 from "../../../app/assets/way2.png";
import way3 from "../../../app/assets/way3.png";
import way4 from "../../../app/assets/way4.png";
import way5 from "../../../app/assets/way5.png";
import way6 from "../../../app/assets/way6.png";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function HomeWays() {
  const locale = useLocale();
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="h-auto -mt-32 bg-[#1A1919] pt-10 rounded-t-[100px] overflow-hidden pb-56 max-sm:rounded-t-[50px]"
    >
      <div className="flex flex-col gap-6 justify-center items-center px-4 text-center pt-12 max-sm:pt-6 pb-10 pl-3">
        <div className="py-[6px] px-4 rounded-full bg-[#335FFF] flex justify-center items-center gap-2">
          <span>
            <Sparkles size={20} color="white" strokeWidth={1.25} />
          </span>
          <span className="text-base font-medium text-[#FFFFFF]">
            ميزات مدير
          </span>
        </div>
        <div className="text-[#FFFFFF] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight">
          غيّر الطريقة التي يعمل بها فريقك.{" "}
        </div>
        <div className="text-[#686767] font-normal  text-2xl">
          إدارة العمل كما يجب أن تكون— بسيطة، وذكية، ومتكاملة.{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-6 md:px-6 lg:px-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 bg-[#3737371A] border border-[#71717A] rounded-3xl pt-6 pr-6 md:pr-8 max-w-full md:max-w-[400px] lg:max-w-[525px] overflow-hidden">
              <div className="pl-6 md:pl-8 text-center md:text-start">
                <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                  الأهداف. خطط، نفّذ وحقق المزيد. {" "}
                </span>
                <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                  حدّد المراحل الأساسية لمشاريعك، وتابع التقدم الحقيقي، وأبقِ
                  الجميع على نفس المسار، ليصبح كل إنجاز نقطة تحفيز تقرّبك من
                  الهدف النهائي.{" "}
                </span>
              </div>
              <div className="flex justify-center">
                <Image src={way1} alt="way-1" className="w-full md:w-auto" />
              </div>
            </div>

            <div
              className="flex flex-col gap-4 border border-[#71717A] rounded-3xl pt-6  max-w-full md:max-w-[400px] lg:max-w-[525px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(-50deg, rgba(88, 112, 176, 0.5) 0%, rgba(55, 55, 55, 0.5) 26%)",
              }}
            >
              <div className="text-center md:text-start px-6 md:px-8">
                <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                  الإشعارات. مصمّمة للأفراد. لتركيز أعلى.{" "}
                </span>
                <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                  ابقَ على اطلاع دون إزعاج—تحكَّم في الإشعارات التي تصلك، اختر
                  ما هو مهم، وأوقف التنبيهات غير الضرورية، لا مزيد من التشتيت.{" "}
                </span>
              </div>
              <div className="flex justify-center pr-8">
                <Image src={way2} alt="way-2" className="w-full md:w-auto" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-[#3737371A] border border-[#71717A] rounded-3xl pt-6 pr-6 md:pr-8 max-w-full md:max-w-[400px] lg:max-w-[525px] overflow-hidden">
            <div className="pl-6 md:pl-8 text-center md:text-start">
              <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                الكانفاس. مساحة لكل فكرة، ولكل نقاش.{" "}
              </span>
              <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                مساحة مرنة للنقاش، العصف الذهني، والتخطيط مع فريقك. دوّن
                الأفكار، نظّمها، وشاركها بسهولة لتحويلها إلى خطوات عملية بوضوح
                وسلاسة.{" "}
              </span>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image src={way3} alt="way-3" className="w-full md:w-auto" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-6 lg:px-10">
          <div
            className="flex flex-col gap-4 border border-[#71717A] rounded-3xl py-6 pt-8 max-w-full lg:max-w-[340px] min-h-[345px] overflow-hidden px-8"
            style={{
              background:
                "linear-gradient(242deg, rgba(88, 112, 176, 0.5) 0%, rgba(55, 55, 55, 0.5) 26%)",
            }}
          >
            <div className="flex flex-col text-center md:text-start">
              <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                التقارير. قرارات أفضل، أسرع.
              </span>
              <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                بيانات دقيقة، وتحليلات فورية، ورؤية واضحة للأداء. لا حاجة لتخمين
                ما يحدث.
              </span>
            </div>
            <div className="flex justify-center">
              <Image
                src={way4}
                alt="way-4"
                className="w-full md:w-auto h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col justify-end gap-4 border border-[#71717A] rounded-3xl max-w-full lg:max-w-[340px] min-h-[345px] overflow-hidden">
            <div className="flex flex-col text-center md:text-start px-6 md:px-8">
              <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                الملفات. منظّمة وفي متناول يدك دائمًا.
              </span>
              <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                لا مزيد من البحث في الإيميلات والمحادثات—احتفظ بكل مستنداتك في
                مكان واحد، حتى تصل إلى ما تحتاجه في أي لحظة.
              </span>
            </div>
            <div className="flex justify-center pr-8">
              <Image
                src={way5}
                alt="way-5"
                className="w-full md:w-auto h-auto"
              />
            </div>
          </div>

          <div
            className="flex flex-col justify-end gap-4 border border-[#71717A] rounded-3xl max-w-full lg:max-w-[340px] min-h-[345px] overflow-hidden"
            style={{
              background:
                "linear-gradient(166deg, #c339a16b 0%, rgba(55, 55, 55, 0.5) 26%)",
            }}
          >
            <div className="flex flex-col text-center md:text-start px-6 md:px-8">
              <span className="font-medium text-[17px] text-[#FFFFFF] leading-[24px]">
                لوحة المدير. رؤية شاملة، وإدارة سلسة.
              </span>
              <span className="font-medium text-[17px] text-[#FFFFFF80] leading-[24px]">
                إدارة الأذونات، والتحكم في الوصول، والحفاظ على أمان معلومات عملك
                بكل سهولة، لتعمل فرقك بثقة تامة.
              </span>
            </div>
            <div className="flex justify-center pr-8">
              <Image
                src={way6}
                alt="way-6"
                className="w-full md:w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-24">
        <div className="group w-[200px] relative flex justify-center items-center gap-2 text-[#141414F5] bg-[#FFFFFF] rounded-[10px] py-2 px-3 text-base font-medium cursor-pointer hover:rounded-3xl transition-all duration-300">
          <ArrowLeft
            color="#141414F5"
            size={12}
            className="ml-2 absolute -right-4 group-hover:right-2 transition-all duration-200"
          />
          جرّب مدير مجانًا
          <ArrowLeft
            color="#141414F5"
            size={12}
            className="group-hover:hidden transition-opacity duration-200"
          />
        </div>
      </div>
    </div>
  );
}
