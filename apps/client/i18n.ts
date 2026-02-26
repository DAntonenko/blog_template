// import { getRequestConfig } from "next-intl/server";

// const defaultLocale = "en";

// export default getRequestConfig(async ({ locale }) => {
//   const resolvedLocale = locale ?? defaultLocale;

//   return {
//     locale: resolvedLocale,
//     messages: (await import(`./messages/${resolvedLocale}.json`)).default
//   };
// });

import {cookies} from "next/headers";
import {getRequestConfig} from "next-intl/server";

export const locales = ["en", "ru"] as const;
export type AppLocale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();

  const locale =
    cookieStore.get("NEXT_LOCALE")?.value ?? "en";

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
