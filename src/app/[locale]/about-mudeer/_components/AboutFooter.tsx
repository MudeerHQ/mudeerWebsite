import React from "react";
import { useLocale } from "next-intl";
import { ArrowLeft } from "lucide-react";

export default function AboutFooter() {
  const locale = useLocale();
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="h-auto min-h-[500px] -mt-32 bg-white rounded-t-[100px] overflow-hidden max-sm:pb-20"
    >
      <div className="h-auto bg-white">
        <div className="w-11/12 md:w-3/4 mx-auto flex flex-col items-center gap-8 py-16 md:py-36 text-center">
          <h2 className="text-3xl md:text-[40px] font-semibold text-[#0D0D0D] leading-tight">
            طريقة أفضل لإدارة العمل التعاوني
          </h2>
          <p className="text-xl md:text-[35px] font-light text-[#0D0D0D] leading-relaxed w-[50%] max-md:w-[90%]">
            تعاون أكثر، إنتاجية أعلى، إنجاز أكبر{" "}
          </p>
          <p className="text-2xl font-normal text-[#0D0D0D] leading-relaxed w-[50%] max-md:w-[90%]">
            أدر كل مشروعاتك وفرق عملك من مكان واحد بسهولة وسلاسة مع مدير.{" "}
          </p>
          <div className="group w-[150px] relative flex justify-center items-center gap-2 text-[#FFFFFF] bg-[#141414F5] rounded-[10px] py-2 px-3 text-base font-medium cursor-pointer hover:rounded-3xl transition-all duration-300">
          <ArrowLeft
            color="#FFFFFF"
            size={12}
            className="ml-2 absolute -right-4 group-hover:right-2 transition-all duration-200"
          />
          جرّب مدير مجانًا
          <ArrowLeft
            color="#FFFFFF"
            size={12}
            className="group-hover:hidden transition-opacity duration-200"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
