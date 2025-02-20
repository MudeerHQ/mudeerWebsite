"use client";
import React from "react";

export default function TermsOfUse() {
  return (
    <div
      className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 grid justify-start pt-[130px] sm:pt-[140px] md:pt-[160px] mb-36 "
      dir="rtl"
    >
      <div className="flex flex-col gap-8 max-w-[90%] ">
        {/* Title & Date */}
        <div className="flex flex-col gap-4">
          <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#010101]">
            شروط الاستخدام
          </span>
          <span className="text-lg sm:text-xl font-medium text-[#3F3F46]">
            آخر تحديث: 29 ديسمبر، 2024
          </span>
        </div>

        {/* Privacy Policy Description */}
        <div className="text-base sm:text-lg text-[#3F3F46] leading-relaxed">
          باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط.{" "}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 grid gap-6 ">
        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">حقوقنا:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نحتفظ بحق تعديل خدماتنا أو إنهائها، كليًا أو جزئيًا، حسب تقديرنا
              ودون إشعار مسبق.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نحتفظ أيضًا بحق رفض تقديم الخدمة لأي مستخدم ولأي سبب.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">إخلاء المسؤولية:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              يتم تقديم خدماتنا &quot;كما هي&quot; دون أي ضمانات من أي نوع.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              لا نضمن دقة أو موثوقية أو توفر أي بيانات أو معلومات يتم الوصول
              إليها عبر خدماتنا.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              لسنا مسؤولين عن أي أضرار أو خسائر قد تنتج عن استخدامك لخدماتنا.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">التعويض:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              توافق على تعويضنا وحمايتنا من أي مطالبات أو أضرار أو خسائر أو
              التزامات تنشأ عن استخدامك لخدماتنا.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">التعديلات:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              هذه الشروط عرضة للتغيير في أي وقت ودون إشعار.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">استخدام الخدمة:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              يُحظر استخدام خدماتنا لأي أغراض غير قانونية أو مخالفة للأنظمة
              المعمول بها.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              يجب عليك الامتثال لجميع القوانين واللوائح عند استخدامك لخدماتنا،
              وعدم إساءة استخدامها بأي شكل.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              لا يُسمح بمحاولة اختراق أو التلاعب بأنظمة الأمان الخاصة بنا أو
              التأثير سلبًا على أداء الخدمات.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">الملكية الفكرية:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              جميع المحتويات والتصاميم والعلامات التجارية والبرمجيات المتعلقة
              بـ&quot;مدير&quot; محمية بموجب قوانين الملكية الفكرية، ولا يجوز
              إعادة إنتاجها أو استخدامها دون إذن كتابي مسبق.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              لا يمنحك استخدامك لخدماتنا أي حقوق ملكية فكرية عليها أو على أي
              محتوى متاح داخلها.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">إنهاء الحساب:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              يحق لنا تعليق أو إنهاء حسابك في حال انتهاكك لهذه الشروط أو إذا
              رأينا أن استخدامك للخدمة قد يضر بنا أو بالمستخدمين الآخرين.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              يمكنك طلب حذف حسابك في أي وقت عبر الإعدادات أو التواصل معنا.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">
            الخصوصية وحماية البيانات:
          </div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              يخضع استخدام خدماتنا لسياسة الخصوصية الخاصة بنا، والتي توضح كيفية
              جمع بياناتك ومعالجتها.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              باستخدامك للخدمة، فإنك توافق على ممارسات معالجة البيانات التي
              نوضحها في سياسة الخصوصية.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">حدود المسؤولية:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نحن لسنا مسؤولين عن أي أعطال تقنية أو خسائر في البيانات أو أضرار
              غير مباشرة قد تحدث نتيجة لاستخدام خدماتنا.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              لن نكون مسؤولين عن أي تصرفات يقوم بها المستخدمون داخل الخدمة، وتقع
              مسؤولية المحتوى المستخدم داخل &quot;مدير&quot; على عاتق من قام
              بإنشائه.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">
            القانون المعمول به:
          </div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              تخضع هذه الشروط لقوانين المملكة العربية السعودية، وأي نزاعات تنشأ
              عنها يتم تسويتها عبر الجهات القضائية المختصة.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
