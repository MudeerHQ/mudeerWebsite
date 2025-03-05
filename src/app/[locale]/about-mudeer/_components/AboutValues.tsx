/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useLocale } from "next-intl";
import { ArrowLeft } from "lucide-react";
import {
  CooperationIcon,
  CuriosityIcon,
  EmpathyIcon,
  EmpowermentIcon,
  MasteryIcon,
  OriginalityIcon,
  SimplicityIcon,
  TransparencyIcon,
} from "@/components/Icons";
const values = [
  {
    icon: <TransparencyIcon />,
    title: "الشفافية",
    desc: "الوضوح جوهر كل ما نقوم به، من خلال ضمان معرفة كل فرد «من يقوم بماذا، ومتى، ولماذا»، نخلق بيئة عمل إيجابية.",
  },
  {
    icon: <CooperationIcon />,
    title: "التعاون",
    desc: "نؤمن أن العمل الجماعي مفتاح النجاح، «نحن» قبل «الأنا»، نضع الفريق في المقام الأول، ونركّز على الأهداف المشتركة.",
  },
  {
    icon: <EmpathyIcon />,
    title: "التعاطف",
    desc: "نقضي الوقت في الاستماع وفهم وتقدير وجهات النظر المختلفة، من العملاء والزملاء والشركاء؛ نبني ثقافة عمل إنسانية.",
  },
  {
    icon: <MasteryIcon />,
    title: "الإتقان",
    desc: "نوازن بين السرعة والإتقان، لنثبت أن العمل العاجل لا يعني التنازل عن الجودة دون التهاون أو إهمال التفاصيل.",
  },
  {
    icon: <OriginalityIcon />,
    title: "الأصالة",
    desc: "نفخر بمن نحن وما نمثّله. الأصالة هي ما يميزنا عن غيرنا من خلال التزامنا بمبادئنا وبناء علاقات حقيقية وبيئات عمل صحيّة.",
  },
  {
    icon: <SimplicityIcon />,
    title: "البساطة",
    desc: "أساس كل ما نصنعه، من تصميم منتجاتنا إلى طريقة العمل، تقديم تجارب تُشعِر الجميع بالرضا والتحكّم والتركيز على ما يهم فعلاً.",
  },
  {
    icon: <EmpowermentIcon />,
    title: "التمكين",
    desc: "نؤمن بالأشخاص، ونتحمّل المسؤولية، ونعطي الناس حرية القيام بعملهم وتوفير كل الأدوات اللازمة لتحقيق أقصى إمكاناتهم.",
  },
  {
    icon: <CuriosityIcon />,
    title: "الفضول",
    desc: "نحبّ التحديات والتجارب، نبحث ونستكشف ونتعلّم دائمًا، لا نخشي المغامرات، بيئة عملنا مصمّمة لذلك، والفرص العظيمة تأتي من هنا.",
  },
];

export default function AboutValues() {
  const locale = useLocale();
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="pb-56 -mt-16 bg-[linear-gradient(to_bottom,#F8DCCC_0%,theme(colors.stone.100)_0%)] rounded-t-[60px] max-sm:rounded-t-[30px] overflow-hidden max-md:pb-24 max-sm:pb-20"
    >
      <div className="h-auto bg-[linear-gradient(to_bottom,#F8DCCC_0%,theme(colors.stone.100)_35%)]">
        <div className=" py-16 md:py-36 text-center relative">
          <div className="w-1/2 mx-auto flex flex-col items-center gap-8 relative max-md:w-[80%]">
            <h2 className="text-3xl md:text-[40px] font-semibold text-[#0D0D0D] leading-tight z-20">
              نُعيد تعريف مفهوم العمل والتعاون بين الفرق
            </h2>
            <p className="text-lg md:text-xl font-normal text-[#3F3F46]  w-[90%]">
              أشخاص مبدعين، وشغوفين، ومؤمنين بقوة العمل الجماعي والتعاون يعملوا
              ليلًا نهارًا على بناء حلول لمشاكل حقيقية تصنع فرق مستدام لتساعد
              وتغيّر الأعمال. انضم إلينا وكن جزءًا من بناء مستقبل إدارة العمل
              التعاوني.{" "}
            </p>
            <button className="text-[15.5px] font-semibold text-white rounded-[10px] bg-[#141414F5] px-3 py-2 flex items-center gap-3 cursor-pointer w-[129px]">
              <span>انضم لفريقنا</span>
              <ArrowLeft
                size={12}
                className="group-hover:hidden transition-opacity duration-200"
              />
            </button>

            {/* Yellow circle positioned at top-left under the text */}
            <span className="absolute -top-4 left-0 w-[100px] h-[100px] bg-yellow-400 rounded-full z-10"></span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 mb-10 text-center">
          <h3 className="font-bold text-[50px] text-[#0D0D0D]">
            قيمنا الأساسية
          </h3>
          <p className="font-semibold text-2xl text-[#3F3F46]">
            جوهر هويتنا وكل تحرّكاتنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-20  max-md:mb-40 max-sm:mb-24">
          {values.map((value: any, index) => (
            <div
              key={index}
              className="bg-[#E5EBFF] px-8 py-8 pb-16 rounded-[28px] min-h-[310px] max-w-[310px] max-sm:max-w-[360px] flex flex-col gap-4 m-auto"
            >
              <div>{value.icon}</div>
              <h4 className="text-[22px] font-semibold text-[#0D0D0D]">
                {value.title}
              </h4>
              <p className="text-base font-normal text-[#0D0D0D]">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
