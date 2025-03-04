import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // Import SwiperType for typing
import { ArrowLeft } from "lucide-react";
import slider1 from "../../../assets/slider1.png";
import slider2 from "../../../assets/slider2.png";
import slider3 from "../../../assets/slider3.png";
import slider4 from "../../../assets/slider4.png";
import Image from "next/image";

const SectionsSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null); // Explicitly define the ref type

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update(); // Call update() properly
    }
  }, []);

  return (
    <div className=" pr-8 max-sm:pr-0 flex flex-col gap-8 mb-[100px] max-lg:mb-[30px] max-lg:-mt-[60px]">
      <div className="flex flex-col gap-6 justify-center items-center px-4 text-center pt-32  pl-3">
        <div className="text-[#0D0D0D] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight">
          غيّر الطريقة التي يعمل بها فريقك.
        </div>
        <div className="text-[#0D0D0D] font-light text-2xl sm:text-3xl md:text-4xl lg:text-[50px]">
          مع مدير
        </div>
        <div className="text-[#0D0D0D] font-light text-lg sm:text-xl md:text-2xl leading-relaxed">
          إدارة العمل كما يجب أن تكون— تجربة بسيطة، ذكية، ومتكاملة.
        </div>
      </div>

      <div className="relative pl-0">
        <Swiper
          ref={(el) => {
            if (el) swiperRef.current = el.swiper;
          }}
          loop={true}
          slidesPerView="auto" // Allow custom width per slide
          spaceBetween={20} // Set gap between slides
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1000}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {[
            {
              img: slider1,
              title: "الأهداف",
              subTitle: "خطط، نفّذ وحقق المزيد.",
              description:
                "حدّد المراحل الأساسية لمشاريعك، وتابع التقدم الحقيقي، وأبقِ الجميع على نفس المسار، ليصبح كل إنجاز نقطة تحفيز تقرّبك من الهدف النهائي.",
            },
            {
              img: slider2,
              title: "الملفات",
              subTitle: "منظّمة وفي متناول يدك دائمًا.",
              description:
                "لا مزيد من البحث في الإيميلات والمحادثات—احتفظ بكل مستنداتك في مكان واحد، وشاركها بأمان مع فريقك، حتى تصل إلى ما تحتاجه في أي لحظة.",
            },
            {
              img: slider3,
              title: "الكانفاس",
              subTitle: "مساحة لكل فكرة، ولكل نقاش.",
              description:
                "المحادثات وحدها لا تكفي. الفرق تحتاج إلى مساحة مرنة ومفتوحة للنقاش، وتوليد الأفكار، والتخطيط، والتعاون، والقرارات لتحويل الأفكار إلى واقع.",
            },
            {
              img: slider4,
              title: "الإشعارات",
              subTitle: "مصمّمة للأفراد. لتركيز أعلى.",
              description:
                "ابقَ على اطلاع دون إزعاج—تحكَّم في الإشعارات التي تصلك، اختر ما هو مهم، وأوقف التنبيهات غير الضرورية، لا مزيد من التشتيت.",
            },
            {
              img: slider2,
              title: "الملفات",
              subTitle: "منظّمة وفي متناول يدك دائمًا.",
              description:
                "لا مزيد من البحث في الإيميلات والمحادثات—احتفظ بكل مستنداتك في مكان واحد، وشاركها بأمان مع فريقك، حتى تصل إلى ما تحتاجه في أي لحظة.",
            },
            {
              img: slider3,
              title: "الكانفاس",
              subTitle: "مساحة لكل فكرة، ولكل نقاش.",
              description:
                "المحادثات وحدها لا تكفي. الفرق تحتاج إلى مساحة مرنة ومفتوحة للنقاش، وتوليد الأفكار، والتخطيط، والتعاون، والقرارات لتحويل الأفكار إلى واقع.",
            },
          ].map((goal, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide-custom"
              style={{ width: "400px", height: "500px" }}
            >
              {" "}
              {/* Set width for each slide */}
              <div
                className="rounded-[30px] bg-[#FFFFFF] w-[350px] h-[420px] px-[30px] pt-12 pb-4 flex flex-col justify-start items-start gap-4 my-2"
                style={{
                  boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.24)",
                }}
              >
                <div className="flex flex-col gap-4 mb-10">
                  <div>
                    <Image src={goal.img} alt={goal.title} />
                  </div>
                  <div className="text-[25px] font-semibold text-[#0D0D0D]">
                    {goal.title}
                  </div>
                  <div className="text-[17px] font-semibold text-[#302e2e]">
                    {goal.subTitle}
                  </div>
                  <div className="text-[17px] font-normal text-[#383838] w-[90%] leading-[25px]">
                    {goal.description}
                  </div>
                </div>
                <div className="cursor-pointer flex items-center justify-start gap-2 text-[#0D0D0D] font-semibold text-base">
                  اعرف المزيد
                  <ArrowLeft />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionsSlider;
