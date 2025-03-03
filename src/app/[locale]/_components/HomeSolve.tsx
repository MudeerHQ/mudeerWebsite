"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // Import SwiperType for typing
import slider1 from "../../../app/assets/solve1.png";
import slider2 from "../../../app/assets/solve2.png";
import slider3 from "../../../app/assets/solve3.png";
import Image from "next/image";
import { useLocale } from "next-intl";

const HomeSolve = () => {
  const swiperRef = useRef<SwiperType | null>(null); // Explicitly define the ref type
  const locale = useLocale();
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update(); // Call update() properly
    }
  }, []);

  const [activeTab, setActiveTab] = useState("teams"); // Default tab

  const teamsSlides = [
    {
      img: slider1,
      title: "الموارد البشرية",
      subTitle: "إدارة الفرق والمواهب",
      description:
        "إدارة التوظيف من خلال تتبع المتقدمين، وجدولة المقابلات، ومتابعة قرارات التعيين، مع تحليلات الأداء وأتمتة عمليات التقييم الدورية وتنظيم الملفات.",
    },
    {
      img: slider1,
      title: "إدارة المشاريع",
      subTitle: "مواردك في مكان واحد",
      description:
        "تخطيط المشاريع، وإدارة الأولويات، وتوزيع المهام، وتتبع التقدّم، مع تقارير ذكية، مما يسهّل اتخاذ القرارات وتحقيق الأهداف بسرعة.",
    },
    {
      img: slider2,
      title: "التسويق",
      subTitle: "خطّط، نفّذ، وانشر",
      description:
        "إدارة الحملات من البداية إلى النهاية، وتتبع الأداء والفريق والموارد، مع مركزية الملفات والمناقشات في مكان واحد، والتكامل مع أدواتك المفضّلة.",
    },
    {
      img: slider3,
      title: "العمليات والأعمال",
      subTitle: "تشغيل أكثر كفاءة ووضوح",
      description:
        "تشغيل أكثر كفاءة ووضوح. تخطيط شامل، مع أتمتة العمليات المتكررة لتقليل الأخطاء وتسريع الإنجاز، وضمان تحرك الفرق نحو الأهداف المحددة.",
    },
    {
      img: slider1,
      title: "المبيعات",
      subTitle: "تابع، حلّل، وأغلق الصفقات بسرعة.",
      description:
        "أدوات المتابعة، وإدارة بيانات العملاء، وتحليلات ذكية تساعدك على اتخاذ قرارات أسرع، وتوزيع المهام بين فريق المبيعات والتكامل مع CRM.",
    },
    {
      img: slider1,
      title: "المنتجات",
      subTitle: "فكّر، ابنِ، وأطلق",
      description:
        "دعم المنهجيات الشائعة مثل Agile، وتخصيص لوحات كانبان، وأتمتة سير العمل بين الفرق المختلفة لتسريع الابتكار والتطوير.",
    },
  ];

  const industriesSlides = [
    {
      img: slider2,
      title: "التجزئة",
      subTitle: "إدارة المخزون، والفروع، والمبيعات",
      description:
        "تنسيق عمليات البيع والمخزون بين الفروع المختلفة، وتحليل أداء المبيعات في الوقت الفعلي، مع أدوات تساعدك على تحسين تجربة العملاء واتخاذ قرارات مدروسة بناءً على بيانات صحيحة.",
    },
    {
      img: slider3,
      title: "التعليم",
      subTitle: "إدارة الفرق والبرامج بمرونة",
      description:
        "تنظيم المحتوى التعليمي، ومتابعة الخطط الدراسية، والتنسيق بين الفرق الأكاديمية بسهولة، مع أدوات جدولة، وتتبع الأداء، وأتمتة العمليات الإدارية لضمان تجربة تعليمية أكثر كفاءة.",
    },
    {
      img: slider1,
      title: "الإعلام",
      subTitle: "تنظيم، وتعاون، وتسليم المشاريع",
      description:
        "تخطيط وجدولة وإدارة الإنتاج الإعلامي، والتنسيق بين الفرق الإبداعية، مع أدوات تتبع المواعيد النهائية، وضبط العمليات لضمان جودة وسرعة تسليم المشاريع الإعلامية.",
    },
    {
      img: slider1,
      title: "الإنتاج",
      subTitle: "تحسين الكفاءة التشغيلية وتقليل الأخطاء",
      description:
        "تتبع عمليات الإنتاج في الوقت الفعلي، وتوزيع المهام بين الفرق، وضبط العمليات التشغيلية بشكل أكثر كفاءة، مع تحليلات ذكية تساعدك على تحسين الإنتاجية وتقليل الهدر وضبط الجودة.",
    },
  ];

  const slidesToShow = activeTab === "teams" ? teamsSlides : industriesSlides;

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="h-auto -mt-32 bg-[#F5F5F4] pt-10 rounded-t-[60px] overflow-hidden pb-64 max-sm:pb-40 max-sm:pt-0 max-sm:rounded-t-[30px]"
    >
      {" "}
      <div className="flex flex-col gap-6 justify-center items-center px-4 text-center pt-12 pb-14 pl-3">
        <div className="text-[#0D0D0D] font-light text-lg sm:text-xl md:text-2xl leading-relaxed">
          الحلول{" "}
        </div>
        <div className="text-[#0D0D0D] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight">
          كيف تستخدم مدير؟{" "}
        </div>

        <div className="text-[#0D0D0D] font-light text-lg sm:text-xl md:text-2xl leading-relaxed">
          حلول لكل فريق، في أي مجال{" "}
        </div>
      </div>
      <div className="m-auto flex items-center justify-center rounded-[14px] gap-1 border-2 border-[#FFFFFF99] p-[6px] w-fit">
        <span
          className={`cursor-pointer text-sm font-semibold transition-all duration-300 px-[10px] py-[6px] ${
            activeTab === "teams"
              ? "text-black bg-[#0D0D0D0F] rounded-[10px] transform scale-105"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("teams")}
        >
          فرق العمل
        </span>
        <span
          className={`cursor-pointer text-sm font-semibold transition-all duration-300 px-[10px] py-[6px] ${
            activeTab === "industries"
              ? "text-black bg-[#0D0D0D0F] rounded-[10px] transform scale-105"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("industries")}
        >
          الصناعات
        </span>
      </div>
      <div className="relative mt-10 pl-0">
        <Swiper
          ref={(el) => {
            if (el) swiperRef.current = el.swiper;
          }}
          loop={true}
          slidesPerView="auto"
          spaceBetween={20}
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1000}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {slidesToShow.map((goal, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "300px", margin: "0 15px" }}
            >
              <div className="flex flex-col gap-6 max-sm:w-[350px] m-auto">
                <div className="rounded-[30px] overflow-hidden">
                  <Image src={goal.img} alt={goal.title} className="w-full" />
                </div>
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col gap-2">
                    <span className="text-xl font-semibold tex-[#0D0D0D]">
                      {goal.title}
                    </span>
                    <span className="text-base font-semibold text-[#0D0D0D]">
                      {goal.subTitle}
                    </span>
                  </div>
                  <div className="text-base font-light text-[#3f3e3e] leading-[25.2px] w-[85%]">
                    {goal.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSolve;
