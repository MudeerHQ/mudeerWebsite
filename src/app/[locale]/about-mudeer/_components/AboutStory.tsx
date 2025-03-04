import React from "react";
import { useLocale } from "next-intl";

export default function AboutStory() {
  const locale = useLocale();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="pb-48 -mt-16 bg-[linear-gradient(to_bottom,#ffef99_0%,theme(colors.stone.100)_0%)] rounded-t-[60px] max-sm:rounded-t-[30px] overflow-hidden max-sm:pb-20"
    >
      <div className="h-auto bg-[linear-gradient(to_bottom,#ffef99_0%,theme(colors.stone.100)_40%)]">
        <div className="w-11/12 md:w-3/4 mx-auto flex flex-col justify-center items-center gap-8 py-16 md:py-20 text-center">
          <div className="text-sm font-semibold text-[#FFFFFF] rounded-[40px] bg-[#332B00] px-6 py-1 w-[85px]">
            قصّتنا
          </div>
          <div className="text-3xl md:text-[50px] font-semibold text-[#0D0D0D] leading-tight">
            تمكين فرق العمل لتكون أكثر إنتاجية
          </div>
          <div className="text-lg md:text-2xl font-normal text-[#3F3F46] leading-relaxed w-[75%]">
            هل تذكر آخر مرّة كنت فيها في حالة تركيز عميق  أثناء العمل؟ حيث يمرّ
            الوقت سريعًا، تتدفق أفكارك بانسيابية، تركيز كامل، بلا إزعاج أو قلق
            من أن شيء ما قد يفوتك. كيف يصبح عملك حينها؟ سترتفع إنتاجيتك كثيرًا،
            أليس كذلك؟
          </div>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 md:px-14 md:mb-48 max-md:mb-40 max-sm:mb-24">
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
        </div> */}

        <div className="grid grid-cols-[1fr_0fr_1fr] px-[250px] max-xl:px-[200px] max-lg:px-[150px] max-md:grid-cols-1 max-md:px-[100px] max-sm:px-[30px] max-sm:pb-12">
          <div className="relative flex flex-col gap-40 max-md:gap-20 max-md:border-r-2 max-md:border-black">
            <div className="flex flex-col gap-6">
              <div className="relative pb-4 border-b border-dashed border-[#010101] flex max-md:justify-center">
                <span className="text-[#010101] font-semibold text-xl ">
                  التحدي
                </span>
                <span className="absolute right-0 -bottom-1 w-2 h-2 rounded-full border border-black bg-[#F5F5F4] max-md:hidden"></span>
                <span className="hidden absolute left-0 -bottom-1 w-2 h-2 rounded-full border border-black bg-[#F5F5F4] max-md:block"></span>
              </div>
              <span className="text-[#71717A] font-normal text-base px-3">
                ماذا لو مكَّنت كل فريق عملك ليعمل بنفس هذا التركيز على أي مشروع،
                مهما كان؟ هذا ما ينبغي أن تكون عليه حالة العمل الجماعي، لكنه
                للأسف نادر الحدوث في بيئة العمل الحقيقية. هذا ما لمسناه خلال
                عملنا كأفراد أو كمؤسسين ومديرين عمل.
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative pt-8 pb-4  border-b border-dashed border-[#010101] flex max-md:justify-center">
                <span className="text-[#010101] font-semibold text-xl ">
                  الوعي
                </span>
                <span className="absolute right-0 -bottom-1 w-2 h-2 rounded-full border border-black bg-[#F5F5F4] max-md:hidden"></span>
                <span className="hidden absolute left-0 -bottom-1 w-2 h-2 rounded-full border border-black bg-[#F5F5F4] max-md:block"></span>
              </div>
              <span className="text-[#71717A] font-normal text-base px-3">
                نحن نعي ذلك جيدًا، ونعرف أهمية التركيز للأعمال، وندرك أثر
                الإنتاجية على حياة الأفراد والفرق على حدّ سواء؛ لهذا كلّه نبني
                مدير كمنصة تجمع الفرق والعمل والمشاريع في مكان واحد يوحّد جهود
                الأعمال وتوجيه الموارد والرؤية نحو الأهداف المشتركة.{" "}
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative pt-8 pb-4 border-b border-dashed border-[#010101] flex max-md:justify-center">
                <span className="text-[#010101] font-semibold text-xl ">
                  حالة التدفق
                </span>
                <span className="absolute right-0 -bottom-1 w-2 h-2 rounded-full border border-black bg-[#F5F5F4] max-md:hidden"></span>
                <span className="hidden absolute left-0 -bottom-1 w-2 h-2 rounded-full border border-black bg-[#F5F5F4] max-md:block"></span>
              </div>
              <span className="text-[#71717A] font-normal text-base px-3">
                الناس يحبون ما يفعلونه ويشعرون بالتقدير لما ينجزونه. ذلك الشعور
                الغريزي بكونك في حالة تدفق يومية يمنح الفرق القدرة على العمل
                بشكل أفضل وأسرع وأكثر ذكاءً، ويصبح التنظيم بين فرق العمل سهلًا
                تمامًا كما هو الحال بين عقولنا وأجسادنا.{" "}
              </span>
            </div>
            <span className="absolute -right-[7px] top-0 w-3 h-3 rounded-full border border-black bg-black hidden max-md:block"></span>
          </div>
          <div className="border-r-2 border-[#010101] relative">
            <span className="absolute -right-[7px] top-0 w-3 h-3 rounded-full border border-black bg-black max-md:hidden"></span>
            <span className="absolute -right-[10px] -bottom-2 w-1 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-black max-md:hidden"></span>
          </div>
          <div className="relative py-28 flex flex-col gap-56 max-md:gap-20 max-md:border-r-2 max-md:border-black max-md:pt-20">
            <div className="flex flex-col gap-6">
              <div className="relative pt-8 pb-4 border-b border-dashed border-[#010101] flex justify-end max-md:justify-center">
                <span className="text-[#010101] font-semibold text-xl ">
                  النمو
                </span>
                <span className="absolute left-0 -bottom-1 w-2 h-2 rounded-full border border-black bg-[#F5F5F4]"></span>
              </div>
              <span className="text-[#71717A] font-normal text-base px-3">
                في مراحل النمو والتوسّع، تزداد تعقيدات العمل الجماعي والمتابعة،
                ما بين تشتت المعلومات بين الأقسام وفرق العمل المختلفة، وعدم وضوح
                المسؤوليات، وربط الرؤية بالأشخاص ومحاولة تحفيزهم{" "}
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative pt-8 pb-4 border-b border-dashed border-[#010101] flex justify-end max-md:justify-center">
                <span className="text-[#010101] font-semibold text-xl ">
                  التفاصيل
                </span>
                <span className="absolute left-0 -bottom-1 w-2 h-2 rounded-full border border-black bg-[#F5F5F4]"></span>
              </div>
              <span className="text-[#71717A] font-normal text-base px-3">
                من أدق التفاصيل إلى الصورة الكبيرة، كل شيء منظّم ومتوفر بين
                يديك، وفي مكان واحد. في كل لحظة، يعرف كل عضو في الفريق ما يجب أن
                يفعله ولماذا يقوم به. ليصبح العمل والتعاون ممتعًا.{" "}
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative pt-8 pb-4 border-b border-dashed border-[#010101] flex justify-end max-md:justify-center">
                <span className="text-[#010101] font-semibold text-xl ">
                  الإنتاجية
                </span>
                <span className="absolute left-0 -bottom-1 w-2 h-2 rounded-full border border-black bg-[#F5F5F4]"></span>
              </div>
              <span className="text-[#71717A] font-normal text-base px-3">
                الإنتاجية هذا ما نعنيه ونعمل عليه في مدير، لا مكان للتعقيدات،
                فقط وضوح تام، نساعد الأفراد على تحقيق أهدافهم وإمكاناتهم من خلال
                تمكين كل فريق ليكون أكثر إنتاجية.{" "}
              </span>
            </div>
            <span className="absolute -right-[11px] -bottom-1 w-1 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-black hidden max-md:block"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
