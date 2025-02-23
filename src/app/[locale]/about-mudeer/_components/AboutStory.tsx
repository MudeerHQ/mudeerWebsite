import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";
import shape3 from "../../../assets/shape3.png";
import shape4 from "../../../assets/shape4.png";
import shape5 from "../../../assets/shape5.png";

export default function AboutStory() {
  const locale = useLocale();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="h-auto min-h-[1450px] -mt-16 bg-[linear-gradient(to_bottom,#ffef99_0%,theme(colors.stone.100)_0%)] rounded-t-[100px] overflow-hidden max-sm:pb-20"
    >
      <div className="h-auto bg-[linear-gradient(to_bottom,#ffef99_0%,theme(colors.stone.100)_25%)]">
        <div className="w-11/12 md:w-3/4 mx-auto flex flex-col justify-center items-center gap-8 py-16 md:py-36 text-center">
          <div className="text-sm font-semibold text-[#FFFFFF] rounded-[40px] bg-[#332B00] px-6 py-1">
            قصّتنا
          </div>
          <div className="text-3xl md:text-[50px] font-semibold text-[#0D0D0D] leading-tight">
            تمكين فرق العمل لتكون أكثر إنتاجية
          </div>
          <div className="text-lg md:text-2xl font-normal text-[#3F3F46] leading-relaxed w-[80%]">
            هل تذكر آخر مرّة كنت فيها في حالة تركيز عميق  أثناء العمل؟ حيث يمرّ
            الوقت سريعًا، تتدفق أفكارك بانسيابية، تركيز كامل، بلا إزعاج أو قلق
            من أن شيء ما قد يفوتك. كيف يصبح عملك حينها؟ سترتفع إنتاجيتك كثيرًا،
            أليس كذلك؟
          </div>
          <div className="text-lg md:text-2xl font-normal text-[#3F3F46] leading-relaxed">
            ماذا لو مكَّنت كل فريق عملك ليعمل بنفس هذا التركيز على أي مشروع،
            مهما كان؟
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 md:px-14 md:mb-48 max-md:mb-40 max-sm:mb-24">
          {[
            {
              img: shape1,
              title: "النمو",
              text: "في مراحل النمو والتوسّع، تزداد تعقيدات العمل الجماعي والمتابعة، ما بين تشتت المعلومات بين الأقسام وفرق العمل المختلفة، وعدم وضوح المسؤوليات، وربط الرؤية بالأشخاص ومحاولة تحفيزهم",
            },
            {
              img: shape2,
              title: "الوعي",
              text: "نحن نعي ذلك جيدًا، ونعرف أهمية التركيز للأعمال، وندرك أثر الإنتاجية على حياة الأفراد والفرق على حدّ سواء؛ لهذا كلّه نبني مدير كمنصة تجمع الفرق والعمل والمشاريع في مكان واحد يوحّد جهود الأعمال وتوجيه الموارد والرؤية نحو الأهداف المشتركة.",
            },
            {
              img: shape3,
              title: "التفاصيل",
              text: "من أدق التفاصيل إلى الصورة الكبيرة، كل شيء منظّم ومتوفر بين يديك، وفي مكان واحد. في كل لحظة، يعرف كل عضو في الفريق ما يجب أن يفعله ولماذا يقوم به. ليصبح العمل والتعاون ممتعًا.",
            },
            {
              img: shape4,
              title: "تفضيلات",
              text: "الناس يحبون ما يفعلونه ويشعرون بالتقدير لما ينجزونه. ذلك الشعور الغريزي بكونك في حالة تدفق يومية يمنح الفرق القدرة على العمل بشكل أفضل وأسرع وأكثر ذكاءً، ويصبح التنظيم بين فرق العمل سهلًا تمامًا كما هو الحال بين عقولنا وأجسادنا.",
            },
            {
              img: shape5,
              title: "الإنتاجية",
              text: "الإنتاجية هذا ما نعنيه ونعمل عليه في مدير، لا مكان للتعقيدات، فقط وضوح تام، نساعد الأفراد على تحقيق أهدافهم وإمكاناتهم من خلال تمكين كل فريق ليكون أكثر إنتاجية.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-start gap-8 border-t border-[#E4E4E7] px-3 pt-10 pb-20 ${
                index === 0
                  ? "border-r border-l"
                  : index === 4
                  ? "border-l"
                  : "border-l"
              }`}
            >
              <div>
                <Image src={item.img} alt={`shape-${index + 1}`} />
              </div>
              <div className="text-2xl font-semibold text-[#0D0D0D]">
                {item.title}
              </div>
              <div className="text-base font-normal text-[#0D0D0D] w-4/5 leading-[33.72px]">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
