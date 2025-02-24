import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import idea1 from "../../../assets/idea1.png";
import idea2 from "../../../assets/idea2.png";
import idea3 from "../../../assets/idea3.png";
import idea4 from "../../../assets/idea4.png";
import { ArrowLeft } from "lucide-react";

export default function FeaturesIdeas() {
  const locale = useLocale();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="h-auto  -mt-32 bg-[#F5F5F4] pt-10 rounded-t-[100px] overflow-hidden pb-56 max-sm:rounded-t-[50px]"
    >
      <div className="flex flex-col gap-10 justify-center items-center px-4 text-center pt-24 max-sm:pt-6 pb-10 pl-3">
        <div className="text-[#0D0D0D] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight">
          لأنّ الأفكار العظيمة لا تُخلق في عزلة.{" "}
        </div>
        <div className="text-[#0D0D0D] font-light  text-2xl">
          مع مدير، تقدر تبني مكان عمل تعاوني أكثر إنتاجية وشفافية.{" "}
        </div>
      </div>
      <div className="flex flex-col gap-[200px] max-md:gap-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 px-6 md:px-[50px] lg:px-[100px]">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-start gap-4 text-center md:text-start">
              <span className="px-4 py-1 bg-[#00B252] rounded-[40px] font-semibold text-lg text-[#FFFFFF] w-fit mx-auto md:mx-0">
                تحكّم 🧠
              </span>
              <span className="text-4xl md:text-5xl font-semibold text-[#0D0D0D]">
                وضوح وتحكّم كامل{" "}
              </span>
              <span className="font-light text-3xl md:text-4xl text-[#0D0D0D]">
                في مشاريعك
              </span>
              <span className="text-lg font-normal text-[#363636] leading-[30px]">
                ودّع المهام المبعثرة، والمواعيد النهائية الفائتة، والاجتماعات
                الطويلة. مديـر يساعدك على تخطيط المشاريع، وتتبعها، وإنجازها بكل
                سهولة—كل ذلك في مكان واحد.
              </span>
            </div>
            <div className="cursor-pointer flex items-center justify-center md:justify-start gap-2 text-[#0D0D0D] font-semibold text-base">
              جرّب مدير مجانًا
              <ArrowLeft />
            </div>
          </div>
          <div className="flex justify-center rounded-[19px] overflow-hidden">
            <Image src={idea1} alt="idea-1" className="w-full md:w-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 px-6 md:px-[50px] lg:px-[100px] max-md:flex max-md:flex-col-reverse ">
          <div className="flex justify-center rounded-[19px] overflow-hidden">
            <Image src={idea2} alt="idea-2" className="w-full md:w-auto" />
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-start gap-4 text-center md:text-start">
              <span className="px-4 py-1 bg-[#00B252] rounded-[40px] font-semibold text-lg text-[#FFFFFF] w-fit mx-auto md:mx-0">
                تعاون 💬️
              </span>
              <span className="text-4xl md:text-5xl font-semibold text-[#0D0D0D]">
                أنجز المزيد مع فريقك{" "}
              </span>

              <span className="text-lg font-normal text-[#363636] leading-[30px]">
                مكان واحد لكل المعلومات، والتحديثات، والملفات، والمناقشات ليبقى
                الجميع على نفس الصفحة خلال جميع مراحل المشروع.{" "}
              </span>
            </div>
            <div className="cursor-pointer flex items-center justify-center md:justify-start gap-2 text-[#0D0D0D] font-semibold text-base">
              جرّب مدير مجانًا
              <ArrowLeft />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 px-6 md:px-[50px] lg:px-[100px]">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-start gap-4 text-center md:text-start">
              <span className="px-4 py-1 bg-[#00B252] rounded-[40px] font-semibold text-lg text-[#FFFFFF] w-fit mx-auto md:mx-0">
                تتبع ⚡️
              </span>
              <span className="text-4xl md:text-5xl font-semibold text-[#0D0D0D]">
                قياس الأداء واتخاذ{" "}
              </span>
              <span className="font-light text-3xl md:text-4xl text-[#0D0D0D]">
                قرارات أسرع
              </span>
              <span className="text-lg font-normal text-[#363636] leading-[30px]">
                تحليلات وتقارير تلقائية تمنحك رؤية واضحة لمعدل الإنتاجية، ومستوى
                تقدُّم المشاريع، واستخدام الموارد — حتى تتمكن من اتخاذ قرارات
                صحيحة وفق بيانات دقيقة، لا على الحدس.{" "}
              </span>
            </div>
            <div className="cursor-pointer flex items-center justify-center md:justify-start gap-2 text-[#0D0D0D] font-semibold text-base">
              جرّب مدير مجانًا
              <ArrowLeft />
            </div>
          </div>
          <div className="flex justify-center rounded-[19px] overflow-hidden">
            <Image src={idea3} alt="idea-3" className="w-full md:w-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 px-6 md:px-[50px] lg:px-[100px] max-md:flex max-md:flex-col-reverse">
          <div className="flex justify-center rounded-[19px] overflow-hidden">
            <Image src={idea4} alt="idea-4" className="w-full md:w-auto" />
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-start gap-4 text-center md:text-start">
              <span className="px-4 py-1 bg-[#00B252] rounded-[40px] font-semibold text-lg text-[#FFFFFF] w-fit mx-auto md:mx-0">
                وضوح 🎯
              </span>
              <span className="text-4xl md:text-5xl font-semibold text-[#0D0D0D]">
                إدارة عملية، سهلة، وذكية.{" "}
              </span>

              <span className="text-lg font-normal text-[#363636] leading-[30px]">
                لا مزيد من الفوضى والتنقل بين التطبيقات والأدوات المعقدة، مع
                مدير تجعل إدارة العمل أكثر وضوحًا، والتعاون أكثر سهولة،
                والعمليات أكثر ذكاءً وتوفيرًا للوقت للتركيز على ما يهم في العمل.{" "}
              </span>
            </div>
            <div className="cursor-pointer flex items-center justify-center md:justify-start gap-2 text-[#0D0D0D] font-semibold text-base">
              جرّب مدير مجانًا
              <ArrowLeft />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
