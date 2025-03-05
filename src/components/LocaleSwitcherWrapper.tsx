// import {useLocale, useTranslations} from 'next-intl';

// import LocaleSwitcherSelect from './LocaleSwitcherSelect';
// import { routing } from '../i18n/routing';

// export default function LocaleSwitcher() {
//   const t = useTranslations('LocaleSwitcher');
//   const locale = useLocale();

//   return (
//     <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
//       {routing.locales.map((cur) => (
//         <option key={cur} value={cur} >
//           {t('locale', {locale: cur})}
//         </option>
//       ))}
//     </LocaleSwitcherSelect>
//   );
// }


"use client";

import { Suspense } from "react";
import LocaleSwitcherButton from "./LocaleSwitcherButton"; // Ensure the correct import path
import { Globe } from "lucide-react";

export default function LocaleSwitcherWrapper({
  currentLocale,
  label,
}: {
  currentLocale: "en" | "ar";
  label: string;
}) {
  return (
    <Suspense fallback={<div><Globe size={20} strokeWidth={1.25} className="text-gray-400" /></div>}>
      <LocaleSwitcherButton currentLocale={currentLocale} label={label} />
    </Suspense>
  );
}
