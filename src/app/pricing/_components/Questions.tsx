"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Questions() {
  return (
    <div className="px-6 md:px-12 lg:px-20 grid gap-10 md:grid-cols-1 lg:grid-cols-[1fr_2fr] mt-40 mb-32">
      {/* Left Section */}
      <div className="flex flex-col gap-3 ">
        <span className="font-semibold text-3xl md:text-5xl lg:text-6xl text-[#0D0D0D]">
          الأسئلة المتكررة
        </span>
        <span className="font-light text-xl md:text-3xl lg:text-[50px] text-[#0D0D0D] !leading-[57px]">
          عندك أسئلة أكثر؟ دعنا نتحدث..
        </span>
      </div>

      {/* Right Section */}
      <div>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

// Data for FAQs
const faqData = [
  {
    id: "item-1",
    question: "هل أستطيع تغيير الباقة خلال فترة الاشتراك؟",
    answer:
      "نعم، يمكنك تغيير خصائص باقة اشتراكك في مدير في أي وقت وبسهولة من داخل لوحة التحكم.",
  },
  {
    id: "item-2",
    question: "هل نقدر نجرّب مدير مجانًا؟",
    answer:
      "نعم، يمكنك التسجيل مجانًا 14 يوم لتجربة جميع ميزات مدير قبل الاشتراك. ولا تحتاج إلى إدخال بيانات الدفع لبدء التجربة المجانية.",
  },
  {
    id: "item-3",
    question: "كيف أختار خطة الاشتراك المناسبة لعملي وفريقي؟",
    answer:
      "لدينا في مدير ثلاث خطط: الأساسية والفريق والاحترافية. تعتمد الخطة المناسبة لك على حجم عملك وعدد مستخدمين النظام واحتياجاتك وميزانيتك. يمكنك مقارنة المميزات والأسعار أو طلب عرض توضيحي للحصول على المساعدة في اختيار الخطة المناسبة.",
  },
  {
    id: "item-4",
    question: "كيف يتم حساب تسعير الاشتراك في خطط مدير؟",
    answer:
      "يعتمد التسعير على عدد الأعضاء النشطين في مساحة العمل الخاصة بشركتك والميزات المضمنة في الخطة التي اخترتها.",
  },
  {
    id: "item-5",
    question:
      "هل بياناتنا آمنة مع مدير؟ كيف نضمن أمن وخصوصية بيانات أعضاء الفريق؟",
    answer:
      "بياناتك؛ ملكك وحدك. نحن نستخدم معايير أمان وتشفير عالية جدًا في حفظ ومشاركة وإتلاف البيانات، ونحرص على عدم مشاركتها مع أي طرف خارجي، إضافة إلى أننا نستضيفها على خوادم موثوقة داخل الشرق الأوسط.",
  },
  {
    id: "item-6",
    question:
      "كيف سيتم احتساب فاتورة الاشتراك عند إضافة أعضاء جدد إلى فريقي في مساحة العمل بمدير؟",
    answer:
      "سنضيف رسوم تكلفة اشتراك العضو الجديد للفترة المتبقية من دورة الفوترة الحالية. مثال: لنفترض أن فريقك مشترك في باقة `الاحترافية` التي تكلف 19 ريال سعودي شهريًا لكل عضو نشط عند الدفع شهريًا...",
  },
  {
    id: "item-7",
    question: "ما هي سياسة استرداد في مدير؟",
    answer:
      "لا نقدم خدمة استرداد الأموال. إذا ألغيت خطتك قبل دورة التجديد التالية، فستحتفظ بإمكانية الوصول إلى الميزات المدفوعة حتى نهاية فترة اشتراكك...",
  },
];
