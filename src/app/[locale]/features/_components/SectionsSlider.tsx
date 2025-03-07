import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // Import SwiperType for typing
import slider1 from "../../../assets/slider1.png";
import slider2 from "../../../assets/slider2.png";
import slider3 from "../../../assets/slider3.png";
import slider4 from "../../../assets/slider4.png";
import Image from "next/image";
import { Link } from "@/i18n/routing";

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
                {/* <div className="cursor-pointer flex items-center justify-start gap-2 text-[#0D0D0D] font-semibold text-base">
                  اعرف المزيد
                  <ArrowLeft />
                </div> */}
                <div className="overflow-hidden relative group hover:-translate-x-1  transition-all duration-300  ">
                  <Link
                    href="/create-account"
                    className="peer px-5  py-[16px] flex items-center overflow-hidden duration-300 transition-all  font-bold text-md bg-white text-[#000] rounded-2xl relative group-hover:hover:rounded-3xl "
                  >
                    <div className="pl-3 transform transition-all duration-300 group-hover:translate-x-[-1.7em]">
                      اعرف المزيد
                    </div>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-300 group-hover:translate-x-[-3em] rotate-180"
                    >
                      <path
                        d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                        fill="#1A1919"
                      />
                    </svg>
                  </Link>
                  <div className="absolute text-[#1A1919] right-[-1em] top-1/2 -translate-y-1/2 w-4 h-4  transition-all duration-300">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:translate-x-[-2em] rotate-180"
                    >
                      <path
                        d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                        fill="currentColor"
                      />
                    </svg>
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

export default SectionsSlider;
