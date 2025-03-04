"use client";
import React from "react";
import { useLocale } from "next-intl";
import { motion, Variants } from "motion/react";
import Image, { StaticImageData } from "next/image";
import mission1 from "../../assets/mission1.png";
import mission2 from "../../assets/mission2.png";
import mission3 from "../../assets/mission3.png";
import mission4 from "../../assets/mission4.png";
import { ArrowLeft } from "lucide-react";

export function ScrollTriggered() {
  return (
    <div style={container} className="max-md:!p-0">
      {food.map(([image, hueA, hueB, title, subTitle, description, arr], i) => (
        <Card
          key={i}
          i={i}
          emoji={image}
          hueA={hueA}
          hueB={hueB}
          title={title}
          subTitle={subTitle}
          description={description}
          features={arr}
        />
      ))}
    </div>
  );
}

interface CardProps {
  i: number;
  emoji: StaticImageData;
  hueA: number;
  hueB: number;
  title: string;
  subTitle: string;
  description: string;
  features: string[];
}

function Card({
  emoji,
  hueA,
  hueB,
  i,
  title,
  subTitle,
  description,
  features,
}: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-center mt-16 max-sm:mt-4 gap-8 max-sm:gap-1">
      {/* Left Section */}
      <div className="flex flex-col gap-4 max-md:p-12">
        <div className="grid gap-4">
          <h2 className="font-medium text-base text-[#0D0D0D] flex items-center gap-2">
            {title === "عقل مدير AI" && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.63752 0.360856C8.51717 -0.0532281 7.88464 -0.0532281 7.76429 0.360856L7.59462 0.947785C7.22773 2.21284 6.72722 3.2006 5.3662 3.54098L4.73421 3.69898C4.64038 3.71765 4.55592 3.76828 4.49523 3.84224C4.43454 3.9162 4.40137 4.00891 4.40137 4.10458C4.40137 4.20025 4.43454 4.29297 4.49523 4.36692C4.55592 4.44088 4.64038 4.49151 4.73421 4.51018L5.3662 4.66818C6.72722 5.0091 7.22773 5.99686 7.59462 7.26138L7.76429 7.84831C7.88464 8.26292 8.51717 8.26292 8.63752 7.84831L8.80719 7.26138C9.17408 5.99686 9.67512 5.0091 11.0361 4.66871L11.6671 4.51018C11.7609 4.49151 11.8454 4.44088 11.9061 4.36692C11.9667 4.29297 11.9999 4.20025 11.9999 4.10458C11.9999 4.00891 11.9667 3.9162 11.9061 3.84224C11.8454 3.76828 11.7609 3.71765 11.6671 3.69898L11.0361 3.54098C9.67512 3.2006 9.17408 2.21284 8.80719 0.948315L8.63752 0.360856Z"
                  fill="url(#paint0_linear_6688_369)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.39569 6.32491C3.32358 6.06618 2.94396 6.06618 2.87238 6.32491L2.77006 6.69181C2.55002 7.4818 2.24993 8.09948 1.4329 8.31262L1.05434 8.41124C0.997192 8.42466 0.946261 8.45699 0.909806 8.503C0.873352 8.549 0.853516 8.60598 0.853516 8.66467C0.853516 8.72337 0.873352 8.78035 0.909806 8.82635C0.946261 8.87236 0.997192 8.90469 1.05434 8.91811L1.4329 9.01726C2.2494 9.22986 2.55002 9.84754 2.77006 10.6375L2.87238 11.0044C2.94396 11.2637 3.32358 11.2637 3.39569 11.0044L3.49802 10.6375C3.71752 9.84754 4.01867 9.22986 4.83518 9.01726L5.21374 8.91811C5.27088 8.90469 5.32181 8.87236 5.35827 8.82635C5.39472 8.78035 5.41456 8.72337 5.41456 8.66467C5.41456 8.60598 5.39472 8.549 5.35827 8.503C5.32181 8.45699 5.27088 8.42466 5.21374 8.41124L4.83518 8.31262C4.01867 8.10001 3.71752 7.48233 3.49802 6.69181L3.39569 6.32491Z"
                  fill="url(#paint1_linear_6688_369)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_6688_369"
                    x1="8.13012"
                    y1="8.05774"
                    x2="12.0223"
                    y2="0.273374"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF802B" />
                    <stop offset="1" stopColor="#335FFF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_6688_369"
                    x1="3.02243"
                    y1="11.2192"
                    x2="5.45551"
                    y2="6.35354"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2CC171" />
                    <stop offset="1" stopColor="#0037FF" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            {title}
            {title === "عقل مدير AI" && (
              <div className="text-[#09090B] px-4 py-1 bg-[#FFD800] font-medium text-xs rounded-full">
                *نسخة تجريبية
              </div>
            )}
          </h2>
          <h4 className="text-xl  sm:text-2xl md:text-4xl font-semibold text-[#0D0D0D]">
            {subTitle}
          </h4>
        </div>

        <p className="text-base md:text-lg font-normal text-[#0D0D0D] leading-7 md:leading-[30px]">
          {description}
        </p>

        <ul className="flex flex-wrap justify-start items-center gap-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="border border-[#D4D4D8] px-2 py-1 text-xs md:text-sm font-medium text-[#3F3F46] rounded-lg"
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 mt-4 md:mt-8 p-3 hover:bg-[#FAFAFA] hover: hover:rounded-[16px] w-fit cursor-pointer">
          <span className="font-semibold text-sm text-[#0D0D0D]">
            جرّب مدير مجانًا
          </span>
          <span>
            <ArrowLeft
              color="#141414F5"
              size={15}
              className="group-hover:hidden transition-opacity duration-200"
            />
          </span>
        </div>
      </div>
      <motion.div
        className={`card-container-${i} max-md:w-[80%] max-sm:w-[98%]`}
        style={cardContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is in view
        exit="exit" // Ensure it disappears when out of view
      >
        <div style={{ ...splash, background }} />
        <motion.div style={card} variants={cardVariants} className="card">
          <Image src={emoji} alt="Mission image" />
        </motion.div>
      </motion.div>
    </div>
  );
}

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 50, x: -50 },
  onscreen: {
    opacity: 1,
    y: -20,
    x: 50,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
  exit: { opacity: 0, y: 50, x: -50, transition: { duration: 0.5 } }, // Make it disappear when out of view
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/** Styles */
const container: React.CSSProperties = {
  padding: "4rem 5rem",
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  position: "relative",
  height: "365px",
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M183.197 0.385254C284.162 0.385245 366.01 82.2331 366.01 183.198C366.01 284.162 284.162 366.01 183.197 366.01H0.384766V183.198C0.384766 82.2331 82.2326 0.385263 183.197 0.385254Z")`,
};

const card: React.CSSProperties = {
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
};

const food: [
  StaticImageData,
  number,
  number,
  string,
  string,
  string,
  string[]
][] = [
  [
    mission1,
    227,
    227,
    "التعاون",
    "حسّن التعاون بين فريقك؛ لتنجز أكثر. ",
    "اجمع أعضاء فريقك للعمل معًا بشكل أفضل، ووحّد كل ما هو متعلق بمشاريعك في مكان واحد؛ لتنظيم المهام، والتفكير والتعاون بشكل أفضل، وتتبع أداء فريقك.",
    ["التقارير", "التعليقات", "الملفات", "الكانفاس"],
  ],
  [
    mission2,
    22,
    22,
    "إدارة المشاريع",
    "إدارة عملية، سهلة، وذكية.",
    "مع مديـر، يمكنك التنسيق بين الفرق المختلفة، وتحديد الأولويات بوضوح، ومتابعة المهام بطرق عرض مرنة (قوائم مرنة، لوحات كانبان، تقويم تفاعلي)، والحفاظ على الفريق متوافقًا من البداية إلى النهاية.",
    ["المهام", "الحقول المخصصة", "الإشعارات", "مراحل المشروع"],
  ],
  [
    mission3,
    51,
    51,
    "الأهداف",
    "خطط، نفّذ وحقق المزيد.",
    "اربط عملك ومشاريعك بأهداف شركتك، وتتبّع التقدّم في الوقت الفعلي، وحوّل المهام اليومية إلى إنجازات حقيقية، تأكّد أن الجميع يعمل لنفس النتيجة وكل جهد له تأثير.",
    ["الأهداف الفرعية", "حالات التقدم", "الأهداف والنتائج الرئيسية OKRs"],
  ],
  [
    mission4,
    148,
    148,
    "عقل مدير AI",
    "اعمل بذكاء وأنجز المزيد.",
    "عقلٌ جديد يفكّر معك ويعمل من أجلك، يسرّع عملك، ويرفع من إنتاجية فريقك ويؤتمت مهامك الروتينية، ما بين المتابعة التفصيلية والبحث عن المعلومات وتنظيم العمل؛ لتركّز على ما يهم فعلاً.",
    ["تخصيص النموذج", "توليد الأفكار", "الأتمتة"],
  ],
];

export default function HomeMissions() {
  const locale = useLocale();
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="h-auto min-h-[1750px] max-md:min-h-[1850px] -mt-16 bg-[linear-gradient(to_bottom,#99AFFF_0%,theme(colors.stone.100)_0%)] rounded-t-[60px] max-md:rounded-t-[30px] overflow-hidden pb-32 max-md:pb-56"
    >
      <div className="h-auto bg-[linear-gradient(to_bottom,#99AFFF_0%,theme(colors.stone.100)_100%)]">
        <div className=" pt-16 md:pt-28 text-center relative">
          <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[50%] mx-auto flex flex-col items-center gap-6 md:gap-8 text-center relative">
            <h2 className="text-xl sm:text-2xl md:text-[36px] lg:text-[40px] font-semibold text-[#0D0D0D] !leading-[60.63px] max-sm:!leading-[30px] z-20">
              مشاريعك، وأهدافك، وعملك، وفريقك. في مكان واحد مع مدير.
            </h2>
            <div className="flex flex-wrap sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="flex items-center gap-3">
                <div>
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6688_417)">
                      <path
                        d="M20.501 6.48926C20.501 9.2507 18.2624 11.4893 15.501 11.4893C12.7395 11.4893 10.501 9.2507 10.501 6.48926C10.501 3.72783 12.7395 1.48926 15.501 1.48926C18.2624 1.48926 20.501 3.72783 20.501 6.48926Z"
                        fill="#0037FF"
                      />
                      <path
                        d="M11.7505 10.8643C11.7505 13.6257 9.51193 15.8643 6.75049 15.8643C3.98906 15.8643 1.75049 13.6257 1.75049 10.8643C1.75049 8.10282 3.98906 5.86426 6.75049 5.86426C9.51193 5.86426 11.7505 8.10282 11.7505 10.8643Z"
                        fill="#0037FF"
                      />
                      <path
                        d="M11.7505 20.8643C11.7505 23.6257 9.51193 25.8643 6.75049 25.8643C3.98906 25.8643 1.75049 23.6257 1.75049 20.8643C1.75049 18.1028 3.98906 15.8643 6.75049 15.8643C9.51193 15.8643 11.7505 18.1028 11.7505 20.8643Z"
                        fill="#0037FF"
                      />
                      <path
                        d="M20.501 25.2397C20.501 28.0012 18.2624 30.2397 15.501 30.2397C12.7395 30.2397 10.501 28.0012 10.501 25.2397C10.501 22.4783 12.7395 20.2397 15.501 20.2397C18.2624 20.2397 20.501 22.4783 20.501 25.2397Z"
                        fill="#0037FF"
                      />
                      <path
                        d="M29.251 20.8643C29.251 23.6257 27.0124 25.8643 24.251 25.8643C21.4895 25.8643 19.251 23.6257 19.251 20.8643C19.251 18.1028 21.4895 15.8643 24.251 15.8643C27.0124 15.8643 29.251 18.1028 29.251 20.8643Z"
                        fill="#0037FF"
                      />
                      <path
                        d="M29.251 10.8643C29.251 13.6257 27.0124 15.8643 24.251 15.8643C21.4895 15.8643 19.251 13.6257 19.251 10.8643C19.251 8.10282 21.4895 5.86426 24.251 5.86426C27.0124 5.86426 29.251 8.10282 29.251 10.8643Z"
                        fill="#0037FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6688_417">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(0.5 0.864746)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="font-medium text-xl">التعاون</div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7492 4.80225C12.8742 3.67725 13.4367 3.11475 14.1242 2.80225C14.8117 2.48975 15.5617 2.48975 17.1242 2.48975C19.0617 2.48975 20.9992 2.55225 22.9992 2.55225C25.5617 2.61475 26.8742 2.67725 27.2492 3.42725C27.6242 4.23975 26.8117 5.05225 24.9992 6.92725C22.0617 9.86475 18.8742 12.9272 15.8742 15.9897C12.8742 15.9897 9.87423 15.9897 6.93674 15.9272C4.37424 15.8647 3.06174 15.8022 2.68674 15.0522C2.31174 14.2397 3.12424 13.4272 4.93674 11.5522C7.12424 9.42725 9.43674 7.11475 11.7492 4.80225Z"
                      fill="#CCAD00"
                    />
                    <path
                      d="M15.8757 15.6768C18.8757 15.6768 21.8757 15.6767 24.8132 15.7392C27.3757 15.8017 28.6882 15.8643 29.0632 16.6143C29.4382 17.4268 28.6257 18.2392 26.8132 20.1142C24.6257 22.3642 22.2507 24.6143 19.9382 26.9268C18.8132 28.0518 18.2507 28.6143 17.5632 28.9268C16.8757 29.2393 16.1257 29.2393 14.5632 29.2393C12.6257 29.2393 10.6882 29.1767 8.68817 29.1767C6.1257 29.1142 4.8132 29.0518 4.4382 28.3018C4.0632 27.4893 4.8757 26.6767 6.6882 24.8017C9.68823 21.8017 12.8757 18.7393 15.8757 15.6768Z"
                      fill="#CCAD00"
                    />
                  </svg>
                </div>
                <div className="font-medium text-xl">إدارة المشاريع</div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.25 17.1147V3.36475L25.25 8.36475L15.25 13.3647"
                      fill="#DB4F00"
                    />
                    <path
                      d="M15.25 17.1147V3.36475L25.25 8.36475L15.25 13.3647"
                      stroke="#DB4F00"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.9513 13.6423C26.6165 15.6925 26.6788 17.8906 26.1306 19.9751C25.5825 22.0596 24.4471 23.9428 22.8595 25.4006C21.2719 26.8585 19.299 27.8295 17.1754 28.1983C15.0518 28.5671 12.8669 28.3181 10.8808 27.4809C8.89463 26.6437 7.19078 25.2536 5.97195 23.4759C4.75311 21.6982 4.0706 19.6078 4.00561 17.4534C3.94061 15.299 4.49588 13.1713 5.60534 11.3234C6.71481 9.47548 8.33176 7.98518 10.2638 7.02979"
                      stroke="#DB4F00"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.2525 13.3613C9.62612 14.1951 9.21834 15.1724 9.0663 16.2041C8.91425 17.2358 9.02278 18.2891 9.38199 19.2681C9.74121 20.2472 10.3397 21.1207 11.1229 21.8093C11.9061 22.4978 12.8492 22.9795 13.8662 23.2103C14.8831 23.4411 15.9417 23.4138 16.9454 23.1308C17.9491 22.8478 18.8661 22.3182 19.6128 21.5902C20.3594 20.8621 20.912 19.9589 21.2203 18.9626C21.5285 17.9664 21.5826 16.9088 21.3775 15.8863"
                      stroke="#DB4F00"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="font-medium text-xl">الأهداف</div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6688_398)">
                      <mask
                        id="mask0_6688_398"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="31"
                        height="31"
                      >
                        <path
                          d="M30.624 0.864258H0.624023V30.8643H30.624V0.864258Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_6688_398)">
                        <path
                          d="M14.4375 1.86426C14.8125 0.739258 16.375 0.739258 16.8125 1.86426C16.9375 2.23926 17.0625 2.61426 17.1875 2.92676C19.0625 8.17676 23.25 12.4268 28.5 14.2393C28.875 14.3643 29.25 14.4893 29.5625 14.6143C30.6875 14.9893 30.6875 16.5518 29.5625 16.9893C29.1875 17.1143 28.8125 17.2393 28.5 17.3643C23.25 19.2393 19 23.4268 17.1875 28.6768C17.0625 29.0518 16.9375 29.4268 16.8125 29.7393C16.4375 30.8643 14.875 30.8643 14.4375 29.7393C14.3125 29.3643 14.1875 28.9893 14.0625 28.6768C12.1875 23.4268 8 19.1768 2.75 17.3643C2.375 17.2393 2 17.1143 1.6875 16.9893C0.5625 16.6143 0.5625 15.0518 1.6875 14.6143C2.0625 14.4893 2.4375 14.3643 2.75 14.2393C8 12.3643 12.25 8.17676 14.0625 2.92676C14.1875 2.61426 14.3125 2.23926 14.4375 1.86426Z"
                          fill="url(#paint0_linear_6688_398)"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_6688_398"
                        x1="14.9016"
                        y1="30.7013"
                        x2="28.1791"
                        y2="1.19773"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2CC171" />
                        <stop offset="1" stopColor="#0037FF" />
                      </linearGradient>
                      <clipPath id="clip0_6688_398">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(0.625 0.864746)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="font-medium text-xl">عقل مدير AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTriggered />
    </div>
  );
}
