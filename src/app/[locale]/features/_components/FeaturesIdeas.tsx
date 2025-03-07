import React from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import idea1 from "../../../assets/idea1.png";
import idea2 from "../../../assets/idea2.png";
import idea3 from "../../../assets/idea3.png";
import idea4 from "../../../assets/idea4.png";
import { Link } from "@/i18n/routing";

export default function FeaturesIdeas() {
  const locale = useLocale();

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="h-auto  -mt-32 bg-[#F5F5F4] pt-10 rounded-t-[60px] overflow-hidden pb-56 max-sm:rounded-t-[30px]"
    >
      <div className="flex flex-col gap-10 justify-center items-center px-4 text-center pt-24 max-sm:pt-6 pb-28 pl-3">
        <div className="text-[#0D0D0D] font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight">
          لأنّ الأفكار العظيمة لا تُخلق في عزلة.{" "}
        </div>
        <div className="text-[#0D0D0D] font-light  text-2xl">
          مع مدير، تقدر تبني مكان عمل تعاوني أكثر إنتاجية وشفافية.{" "}
        </div>
      </div>
      <div className="flex flex-col gap-[200px] max-md:gap-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 px-6 md:px-[50px] lg:px-[100px]">
          <div className="flex flex-col gap-12 h-full justify-around">
            <div className="flex flex-col justify-start gap-6 text-center md:text-start">
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
            <div className="overflow-hidden relative group hover:-translate-x-1  transition-all duration-300  ">
              <Link
                href="/create-account"
                className="peer px-5  py-[16px] flex items-center overflow-hidden duration-300 transition-all  font-bold text-md text-[#000] rounded-2xl relative group-hover:hover:rounded-3xl hover:bg-white w-fit"
              >
                <div className="pl-3 transform transition-all duration-300 group-hover:translate-x-[-1.7em]">
                  جرّب مدير مجانًا
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
                    className="fill-[#000] group-hover:fill-transparent overflow-hidden"
                  />
                </svg>
              </Link>
              <div className="absolute text-white right-[-1em] top-1/2 -translate-y-1/2 w-4 h-4  transition-all duration-300">
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
                    className="fill-transparent group-hover:fill-[#000] overflow-hidden"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" justify-center rounded-[19px] overflow-hidden">
            <Image src={idea1} alt="idea-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 px-6 md:px-[50px] lg:px-[100px] max-md:flex max-md:flex-col-reverse ">
          <div className="flex justify-center rounded-[19px] overflow-hidden">
            <Image src={idea2} alt="idea-2" />
          </div>
          <div className="flex flex-col gap-12 h-full justify-around">
            <div className="flex flex-col justify-start gap-6 text-center md:text-start">
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
            <div className="overflow-hidden relative group hover:-translate-x-1  transition-all duration-300  ">
              <Link
                href="/create-account"
                className="peer px-5  py-[16px] flex items-center overflow-hidden duration-300 transition-all  font-bold text-md text-[#000] rounded-2xl relative group-hover:hover:rounded-3xl hover:bg-white w-fit"
              >
                <div className="pl-3 transform transition-all duration-300 group-hover:translate-x-[-1.7em]">
                  جرّب مدير مجانًا
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
                    className="fill-[#000] group-hover:fill-transparent overflow-hidden"
                  />
                </svg>
              </Link>
              <div className="absolute text-white right-[-1em] top-1/2 -translate-y-1/2 w-4 h-4  transition-all duration-300">
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
                    className="fill-transparent group-hover:fill-[#000] overflow-hidden"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 px-6 md:px-[50px] lg:px-[100px]">
          <div className="flex flex-col gap-12 h-full justify-around">
            <div className="flex flex-col justify-start gap-6 text-center md:text-start">
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
            <div className="overflow-hidden relative group hover:-translate-x-1  transition-all duration-300  ">
              <Link
                href="/create-account"
                className="peer px-5  py-[16px] flex items-center overflow-hidden duration-300 transition-all  font-bold text-md text-[#000] rounded-2xl relative group-hover:hover:rounded-3xl hover:bg-white w-fit"
              >
                <div className="pl-3 transform transition-all duration-300 group-hover:translate-x-[-1.7em]">
                  جرّب مدير مجانًا
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
                    className="fill-[#000] group-hover:fill-transparent overflow-hidden"
                  />
                </svg>
              </Link>
              <div className="absolute text-white right-[-1em] top-1/2 -translate-y-1/2 w-4 h-4  transition-all duration-300">
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
                    className="fill-transparent group-hover:fill-[#000] overflow-hidden"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center rounded-[19px] overflow-hidden">
            <Image src={idea3} alt="idea-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 px-6 md:px-[50px] lg:px-[100px] max-md:flex max-md:flex-col-reverse">
          <div className="flex justify-center rounded-[19px] overflow-hidden">
            <Image src={idea4} alt="idea-4" />
          </div>
          <div className="flex flex-col gap-12 h-full justify-around">
            <div className="flex flex-col justify-start gap-6 text-center md:text-start">
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
            <div className="overflow-hidden relative group hover:-translate-x-1  transition-all duration-300  ">
              <Link
                href="/create-account"
                className="peer px-5  py-[16px] flex items-center overflow-hidden duration-300 transition-all  font-bold text-md text-[#000] rounded-2xl relative group-hover:hover:rounded-3xl hover:bg-white w-fit"
              >
                <div className="pl-3 transform transition-all duration-300 group-hover:translate-x-[-1.7em]">
                  جرّب مدير مجانًا
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
                    className="fill-[#000] group-hover:fill-transparent overflow-hidden"
                  />
                </svg>
              </Link>
              <div className="absolute text-white right-[-1em] top-1/2 -translate-y-1/2 w-4 h-4  transition-all duration-300">
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
                    className="fill-transparent group-hover:fill-[#000] overflow-hidden"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
