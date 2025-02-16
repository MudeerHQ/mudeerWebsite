import { PackageCardProps } from "@/app/lib/Types";
import { Check, ArrowLeft } from "lucide-react";

export default function PackageCard({
  title,
  price,
  description,
  headFeature,
  features,
  bgImage,
}: PackageCardProps) {
  return (
    <div
      className="relative bg-white py-6 px-6 sm:px-8 md:px-10 lg:px-[30px] flex flex-col gap-4 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] hover:scale-105 sm:hover:scale-110 overflow-hidden transition-transform duration-300 group"
      style={{
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.24)",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-left bg-no-repeat opacity-0 group-hover:opacity-100 group-hover:bg-black transition-opacity duration-500"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Header */}
      <div className="relative">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#010101] transition-colors duration-500 group-hover:text-white">
          {title}
        </h2>
        <div className="flex gap-2 sm:gap-3 items-center">
          <span className="font-normal text-2xl sm:text-3xl text-[#0D0D0D] group-hover:text-white">
            {price}
          </span>
          <span className="font-normal text-xs sm:text-sm text-[#000000B2] group-hover:text-white">
            لكل مقعد/ شهريًا
          </span>
        </div>
        <p className="font-normal text-sm sm:text-base text-[#0D0D0D] w-full md:w-2/3 group-hover:text-white">
          {description}
        </p>
      </div>

      {/* Features List */}
      <div className="relative">
        <h2 className="font-semibold text-xs sm:text-sm text-[#000000B2] group-hover:text-white">
          {headFeature}
        </h2>
        <ul className="flex flex-col gap-2 mt-2 sm:mt-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex gap-[8px] sm:gap-[10px] items-center"
            >
              <div className="bg-[#333333] w-fit rounded-full p-[6px] sm:p-1 group-hover:bg-white">
                <Check
                  className="text-white group-hover:text-black transition-colors duration-300"
                  strokeWidth={3}
                  size={14}
                />
              </div>
              <span className="font-normal text-xs sm:text-sm text-[#000000D9] group-hover:text-white">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="groupBtn w-full sm:w-[150px] relative flex justify-center items-center gap-2 text-white bg-[#141414F5] group-hover:bg-white group-hover:text-[#141414F5] rounded-[8px] sm:rounded-[10px] py-2 px-3 text-sm sm:text-base font-medium cursor-pointer hover:rounded-xl sm:hover:rounded-3xl transition-all duration-300">
        جرّب مدير مجانًا
        <ArrowLeft
          size={12}
          className="transition-opacity duration-200 group-hover:text-black"
        />
      </div>
    </div>
  );
}
