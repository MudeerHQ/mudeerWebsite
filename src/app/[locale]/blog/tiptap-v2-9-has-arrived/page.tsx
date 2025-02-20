"use client";
import React from "react";
import user from "../../../assets/user.png";
import banner from "../../../assets/banner-release.png";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import blog14 from "../../../assets/blog14.png";
import blog8 from "../../../assets/blog8.png";
import blog9 from "../../../assets/blog9.png";

export default function Tiptap() {
  return (
    <div
      className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 grid justify-center mb-20"
      dir="rtl"
    >
      <div>
        <div className="flex flex-col justify-center items-center gap-6 pt-[100px] sm:pt-[140px] md:pt-[180px] pb-[60px] sm:pb-[80px] md:pb-[100px] px-4">
          {/* Badge */}
          <span className="bg-[#0037FF] text-white font-semibold text-sm py-1 px-4 rounded-full">
            التحديثات
          </span>

          {/* Title */}
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl text-[#010101] text-center">
            اطلاق التعليقات على المهام
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#3F3F46] text-center max-w-[90%] sm:max-w-[80%] md:max-w-[55%]">
            في مدير، نحن ملتزمون بحماية خصوصية عملائنا ومستخدمينا. نحن نولي أمان
            بيانات العملاء والمستخدمين أهمية بالغة، ونستخدم تقنيات التشفير
            المتقدمة وSSL لضمان بقاء بياناتك آمنة.
          </p>

          {/* User Info */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
              <Image
                src={user}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#010101]">
                فاطمة الغامدي
              </span>
              <span className="text-sm text-[#71717A]">29 ديسمبر، 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className="flex justify-center">
        <Image src={banner} alt="banner" className="w-full " />
      </div>

      <div>
        <div className="flex flex-col gap-4 max-w-[80%] mt-10">
          {/* Title & Date */}
          <div className="flex flex-col gap-4">
            <span className="text-3xl sm:text-4xl md:text-3xl font-semibold text-[#010101]">
              1- سياسة الخصوصية
            </span>
          </div>

          {/* Privacy Policy Description */}
          <div className="text-base sm:text-lg text-[#3F3F46] leading-relaxed">
            في مدير، نحن ملتزمون بحماية خصوصية عملائنا ومستخدمينا. نحن نولي أمان
            بيانات العملاء والمستخدمين أهمية بالغة، ونستخدم تقنيات التشفير
            المتقدمة وSSL لضمان بقاء بياناتك آمنة.
          </div>
        </div>

        <div className="mt-8">
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">
            جمع البيانات ومعالجتها:
          </div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نقوم بجمع ومعالجة البيانات الشخصية بغرض تقديم خدماتنا للعملاء
              والمستخدمين.
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نستخدم البيانات التي نجمعها لتوفير الخدمات، وصيانتها، وحمايتها،
              وتحسينها، ولتطوير ميزات جديدة.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">مشاركة البيانات:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              لا نقوم ببيع أو تأجير البيانات الشخصية لطرف ثالث لأغراض التسويق أو
              غيرها.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              قد نشارك البيانات الشخصية مع مزودي خدمات خارجيين (مثل معالجي
              الدفع) فقط لتقديم خدماتنا.{" "}
            </li>
          </ul>
        </div>
        <div className="mt-8">
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">خصوصية الأطفال:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نحن ملتزمون بحماية خصوصية الأطفال. خدماتنا غير موجهة للأطفال دون
              سن 13 عامًا.{" "}
            </li>
          </ul>
        </div>
        <div className="mt-8">
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">تحديثات السياسة:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات
              نجريها على هذه الصفحة.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex flex-col gap-4 max-w-[80%] mt-10">
          {/* Title & Date */}
          <div className="flex flex-col gap-4">
            <span className="text-3xl sm:text-4xl md:text-3xl font-semibold text-[#010101]">
              2- سياسة الخصوصية
            </span>
          </div>

          {/* Privacy Policy Description */}
          <div className="text-base sm:text-lg text-[#3F3F46] leading-relaxed">
            في مدير، نحن ملتزمون بحماية خصوصية عملائنا ومستخدمينا. نحن نولي أمان
            بيانات العملاء والمستخدمين أهمية بالغة، ونستخدم تقنيات التشفير
            المتقدمة وSSL لضمان بقاء بياناتك آمنة.
          </div>
        </div>

        <div className="mt-8">
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">
            جمع البيانات ومعالجتها:
          </div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نقوم بجمع ومعالجة البيانات الشخصية بغرض تقديم خدماتنا للعملاء
              والمستخدمين.
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نستخدم البيانات التي نجمعها لتوفير الخدمات، وصيانتها، وحمايتها،
              وتحسينها، ولتطوير ميزات جديدة.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">مشاركة البيانات:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              لا نقوم ببيع أو تأجير البيانات الشخصية لطرف ثالث لأغراض التسويق أو
              غيرها.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              قد نشارك البيانات الشخصية مع مزودي خدمات خارجيين (مثل معالجي
              الدفع) فقط لتقديم خدماتنا.{" "}
            </li>
          </ul>
        </div>
        <div className="mt-8">
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">خصوصية الأطفال:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نحن ملتزمون بحماية خصوصية الأطفال. خدماتنا غير موجهة للأطفال دون
              سن 13 عامًا.{" "}
            </li>
          </ul>
        </div>
        <div className="mt-8">
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">تحديثات السياسة:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات
              نجريها على هذه الصفحة.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6 my-20">
        <div className="text-[#0D0D0D] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          مواضيع ذات صلة
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <BlogCard
            img={blog14}
            title="تقديم أكثر شمولاً تجارب مدير"
            description="29 ديسمبر، 2024"
          />
          <BlogCard
            img={blog8}
            title="مدير يجمع 2.6 مليون دولار..."
            description="29 ديسمبر، 2024"
          />
          <BlogCard
            img={blog9}
            title="تقديم أكثر شمولاً تجارب مدير"
            description="29 ديسمبر، 2024"
          />
        </div>
      </div>
    </div>
  );
}
