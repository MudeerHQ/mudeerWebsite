// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import clsx from "clsx";
// import { useParams } from "next/navigation";
// import { ChangeEvent, ReactNode, useTransition } from "react";
// import { usePathname, useRouter } from "../i18n/routing";
// import { Globe } from "lucide-react";

// type Props = {
//   children: ReactNode;
//   defaultValue: string;
//   label: string;
// };

// export default function LocaleSwitcherSelect({
//   children,
//   defaultValue,
//   label,
// }: Props) {
//   const router = useRouter();
//   const [isPending, startTransition] = useTransition();
//   const pathname = usePathname();
//   const params = useParams();

//   function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
//     const nextLocale = event.target.value as any;
//     startTransition(() => {
//       router.replace(
//         // @ts-expect-error -- TypeScript will validate that only known `params`
//         // are used in combination with a given `pathname`. Since the two will
//         // always match for the current route, we can skip runtime checks.
//         { pathname, params },
//         { locale: nextLocale }
//       );
//     });
//   }

//   return (
//     <label
//       className={clsx(
//         "relative text-gray-400",
//         isPending && "transition-opacity [&:disabled]:opacity-30"
//       )}
//     >
//       <p className="sr-only">{label}</p>
//       <span className="pointer-events-none absolute right-1 top-[14px]">
//         <Globe size={20} strokeWidth={1.25} />
//       </span>
//       <select
//         className="inline-flex appearance-none bg-transparent py-3 cursor-pointer pr-8 focus:outline-none focus:ring-0 focus:border-transparent"
//         defaultValue={defaultValue}
//         disabled={isPending}
//         onChange={onSelectChange}
//       >
//         {children}
//       </select>
//       {/* <span className="pointer-events-none absolute left-0 top-[12px]">
//         <ChevronDown />
//       </span> */}
//     </label>
//   );
// }


"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "../i18n/routing";
import { Globe } from "lucide-react";
import { useSearchParams } from "next/navigation"; // ✅ Use search params instead of params
import { routing } from "../i18n/routing";

type Locale = "en" | "ar";

type Props = {
  currentLocale: Locale;
  label: string;
};

export default function LocaleSwitcherButton({ currentLocale, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams(); // ✅ Get current search parameters

  function toggleLanguage() {
    const locales: Locale[] = [...routing.locales] as Locale[]; 
    const currentIndex = locales.indexOf(currentLocale);
    const nextLocale = locales[(currentIndex + 1) % locales.length];

    startTransition(() => {
      router.replace(
        {
          pathname,
          query: Object.fromEntries(searchParams.entries()), // ✅ Preserve existing query params
        },
        { locale: nextLocale }
      );
    });
  }

  return (
    <button
      className={`relative text-gray-400 hover:text-gray-600 transition ${
        isPending ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={toggleLanguage}
      disabled={isPending}
      title={label}
    >
      <Globe size={20} strokeWidth={1.25} />
    </button>
  );
}
