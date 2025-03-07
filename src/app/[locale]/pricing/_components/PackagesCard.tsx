import { PackageCardProps } from "@/app/lib/Types";
import { Link } from "@/i18n/routing";
import { Check } from "lucide-react";

export default function PackageCard({
  title,
  price,
  description,
  headFeature,
  features,
  bgImage,
  isSecond,
}: PackageCardProps) {
  return (
    <div
      className={` min-w-[315px]  relative bg-white py-6 px-5 sm:px-7 md:px-8 lg:px-[30px] flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden transition-transform duration-300 w-full mx-auto 
        ${isSecond ? "max-lg:scale-y-100 scale-y-105 origin-bottom" : ""}
      `}
      style={{
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.24)",
      }}
    >
      {/* Background Hover Effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-500 
          ${isSecond ? "opacity-100" : ""}
        `}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="flex flex-col justify-between ">
        {/* Header */}
        <div className="relative flex flex-col gap-4 mb-5">
          <h2
            className={`text-lg sm:text-xl font-semibold text-[#010101] transition-colors duration-500 
          ${isSecond ? "text-white" : "text-[#010101]"}
        `}
          >
            {title}
          </h2>
          <div className="flex gap-2 sm:gap-3 items-center">
            <span
              className={`font-medium text-xl sm:text-2xl text-[#0D0D0D] 
            ${isSecond ? "text-white" : "text-[#0D0D0D]"}
          `}
            >
              {price}
            </span>
            <span
              className={`text-xs sm:text-sm text-[#000000B2] 
            ${isSecond ? "text-white" : "text-[#000000B2]"}
          `}
            >
              لكل مقعد/ شهريًا
            </span>
          </div>
          <p
            className={`text-sm sm:text-base text-[#0D0D0D] w-full
          ${isSecond ? "text-white" : "text-[#0D0D0D]"}
        `}
          >
            {description}
          </p>
        </div>

        {/* Features List */}
        <div className="flex flex-col justify-between min-h-[345px]">
          <div className="relative mb-6">
            <h3
              className={`font-semibold text-xs sm:text-sm text-[#000000B2] 
          ${isSecond ? "text-white" : "text-[#000000B2]"}
        `}
            >
              {headFeature}
            </h3>
            <ul className="flex flex-col gap-2 mt-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div
                    className={`bg-[#333] w-6 h-6 flex items-center justify-center rounded-full p-1 
                ${isSecond ? "bg-white" : "bg-[#333]"}
              `}
                  >
                    <Check
                      className={`text-white transition-colors duration-300 
                  }
                `}
                      strokeWidth={3}
                      size={12}
                      color={isSecond ? "black" : "white"}
                    />
                  </div>
                  <span
                    className={`text-xs sm:text-sm text-[#000000D9] 
                ${isSecond ? "text-white" : "text-[#000000D9]"}
              `}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden relative group hover:-translate-x-1  transition-all duration-300  ">
            <Link
              href="/create-account"
              className={`w-fit peer py-2 px-4 flex items-center overflow-hidden duration-300 transition-all  font-bold text-md  rounded-xl relative group-hover:hover:rounded-3xl ${
                isSecond
                  ? "bg-white text-[#141414F5]"
                  : "bg-[#141414F5] text-white"
              }`}
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
                className="transition-transform duration-300 group-hover:translate-x-[-2em] rotate-180"
              >
                <path
                  d="M16 7.38197L15.4495 7.10674L15.4484 7.10617L15.4455 7.10464L15.4188 7.09062C15.393 7.07688 15.3516 7.05438 15.2965 7.02295C15.1862 6.96006 15.0213 6.86173 14.8166 6.72686C14.4066 6.45661 13.8417 6.0427 13.2383 5.47699C12.029 4.34323 10.6931 2.62752 10.1006 0.257465L8.16032 0.742531C8.87215 3.58987 10.4711 5.62416 11.8704 6.93606C11.8933 6.95756 11.9162 6.97887 11.9391 7H0V9H11.9391C11.9162 9.02112 11.8933 9.04244 11.8704 9.06394C10.4711 10.3758 8.87215 12.4101 8.16032 15.2575L10.1006 15.7425C10.6931 13.3725 12.029 11.6568 13.2383 10.523Z"
                  className="fill-current group-hover:fill-transparent overflow-hidden"
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
                  className={`${
                    isSecond ? "fill-[#141414F5]" : "fill-current"
                  }  overflow-hidden`}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
