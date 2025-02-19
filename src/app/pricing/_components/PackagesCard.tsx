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
      className={`max-w-[315px] relative bg-white py-6 px-5 sm:px-7 md:px-8 lg:px-10 flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden transition-transform duration-300 group w-full mx-auto 
        ${isSecond ? "scale-y-105 origin-bottom" : ""}
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
          className={`text-sm sm:text-base text-[#0D0D0D] w-full md:w-3/4 
          ${isSecond ? "text-white" : "text-[#0D0D0D]"}
        `}
        >
          {description}
        </p>
      </div>

      {/* Features List */}
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
                  ${isSecond ? "text-black" : "text-white"}
                `}
                  strokeWidth={3}
                  size={14}
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

      {/* CTA Button */}
      <div
        className={`w-full sm:w-[160px] relative flex justify-center items-center gap-2rounded-lg sm:rounded-xl py-2 px-4 text-sm sm:text-base font-medium cursor-pointer transition-all duration-300 
        ${isSecond ? "bg-white text-[#141414F5]" : "bg-[#141414F5] text-white"}
      `}
      >
        جرّب مدير مجانًا
        <ArrowLeft
          size={14}
          className={`transition-opacity duration-200 
          ${isSecond ? "text-black" : "text-white"}
        `}
        />
      </div>
    </div>
  );
}
