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


import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherButton from "./LocaleSwitcherButton";

type Locale = "en" | "ar"; // Ensure correct type

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale() as Locale; // ✅ Fix: Cast `locale` to `Locale`

  return <LocaleSwitcherButton currentLocale={locale} label={t("label")} />;
}

