import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper"; // Import SwiperType for typing

const SectionsSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null); // Explicitly define the ref type

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update(); // Call update() properly
    }
  }, []);

  return (
    <div className="container m-auto px-3 flex flex-col gap-8 mb-[100px] max-lg:mb-[30px] max-lg:-mt-[60px]">
      <h2 className="text-2xl font-semibold text-[var(--color-primary)] max-sm:text-xl">
        الأقسام
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <div className="custom-prev-arrow absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 p-2 rounded-full">
          <ArrowLeft size={24} />
        </div>

        {/* Right Arrow */}
        <div className="custom-next-arrow absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 p-2 rounded-full">
          <ArrowRight size={24} />
        </div>

        <Swiper
          ref={(el) => {
            if (el) swiperRef.current = el.swiper; // Assign Swiper instance properly
          }}
          loop={true}
          slidesPerView={2}
          spaceBetween={20}
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1000}
          navigation={{
            nextEl: ".custom-next-arrow",
            prevEl: ".custom-prev-arrow",
          }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 10 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          className="mySwiper"
        >
          {[...Array(20)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-full flex flex-col justify-center items-center gap-4">
                <div className="image bg-white p-2 w-3/5">Image {index + 1}</div>
                <span className="truncate w-full text-center text-xl font-semibold max-md:text-lg max-sm:text-base">
                  Section {index + 1}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionsSlider;
