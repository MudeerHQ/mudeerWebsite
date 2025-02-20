"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 grid justify-start pt-[130px] sm:pt-[140px] md:pt-[160px] mb-36 "
      dir="rtl"
    >
      <div className="flex flex-col gap-8 max-w-[90%] ">
        {/* Title & Date */}
        <div className="flex flex-col gap-4">
          <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#010101]">
            سياسة الخصوصية
          </span>
          <span className="text-lg sm:text-xl font-medium text-[#3F3F46]">
            آخر تحديث: 29 ديسمبر، 2024
          </span>
        </div>

        {/* Privacy Policy Description */}
        <div className="text-base sm:text-lg text-[#3F3F46] leading-relaxed">
          في مدير، نحن ملتزمون بحماية خصوصية عملائنا ومستخدمينا. نحن نولي أمان
          بيانات العملاء والمستخدمين أهمية بالغة، ونستخدم تقنيات التشفير
          المتقدمة وSSL لضمان بقاء بياناتك آمنة.
        </div>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 grid gap-6 ">
        <div>
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

        <div>
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

        <div>
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

        <div>
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

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">أمان البيانات:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نتخذ تدابير أمنية صارمة لحماية بيانات المستخدمين من الوصول غير
              المصرح به، الاستخدام غير القانوني، أو التعديل غير المصرح به.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              يتم تخزين البيانات في مراكز بيانات آمنة، ونطبق بروتوكولات الأمان
              الحديثة لحماية معلوماتك.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">حقوق المستخدمين:</div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              يمكنك طلب الوصول إلى بياناتك الشخصية أو تعديلها أو حذفها في أي وقت
              من خلال إعدادات الحساب أو عبر التواصل معنا.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              لديك الحق في سحب موافقتك على معالجة بياناتك في أي وقت، مع العلم أن
              هذا قد يؤثر على قدرتك على استخدام بعض ميزات الخدمة.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">
            ملفات تعريف الارتباط (Cookies) والتتبع:
          </div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نستخدم ملفات تعريف الارتباط والتقنيات المشابهة لتحسين تجربة
              المستخدم وتحليل كيفية استخدامك لخدماتنا.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              يمكنك التحكم في إعدادات ملفات تعريف الارتباط أو تعطيلها من خلال
              إعدادات المتصفح الخاص بك.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">
            الاحتفاظ بالبيانات:
          </div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              نحتفظ ببيانات المستخدمين فقط للمدة اللازمة لتقديم الخدمات، أو
              حسبما يقتضي القانون.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              عند إغلاق الحساب، نقوم بحذف أو إخفاء هوية البيانات وفقًا للمعايير
              الأمنية.{" "}
            </li>
          </ul>
        </div>

        <div>
          {/* Title */}
          <div className="font-bold text-xl md:text-2xl">
            التواصل مع المستخدمين:
          </div>

          {/* List */}
          <ul className="list-disc pr-4 sm:pr-6 md:pr-6 mt-2">
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              قد نرسل إليك إشعارات مهمة بخصوص حسابك، مثل تحديثات الأمان أو
              التغييرات في شروط الخدمة.{" "}
            </li>
            <li className="font-normal text-lg sm:text-xl marker:text-sm sm:marker:text-base text-[#3F3F46]">
              يمكنك اختيار الاشتراك أو إلغاء الاشتراك في الرسائل التسويقية في أي
              وقت.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
