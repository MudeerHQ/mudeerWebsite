import { PackageCardProps } from "@/app/lib/Types";
import { Check, ArrowLeft } from "lucide-react";

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
          <div
            className={`group w-full sm:w-[160px] relative flex justify-center items-center gap-2 rounded-lg sm:rounded-xl py-2 px-4 text-sm sm:text-base font-medium cursor-pointer transition-all duration-300 
        ${isSecond ? "bg-white text-[#141414F5]" : "bg-[#141414F5] text-white"}
      `}
          >
            <ArrowLeft
              // color="#FFFFFF"
              size={14}
              className={`ml-2 absolute -right-4 group-hover:right-2 transition-all duration-200  ${
                isSecond
                  ? "text-white -right-[2px] group-hover:text-black"
                  : " text-white"
              }`}
            />
            جرّب مدير مجانًا
            <ArrowLeft
              size={14}
              className={`group-hover:hidden transition-opacity duration-200 ${
                isSecond ? "text-black" : "text-white"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
