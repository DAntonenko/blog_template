// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { useLocale } from "next-intl";

// export function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const locale = useLocale();

//   function switchLocale(nextLocale: "en" | "ru") {
//     const segments = pathname.split("/");
//     segments[1] = nextLocale;

//     router.push(segments.join("/"));
//   }

//   return (
//     <div>
//       <button
//         onClick={() => switchLocale("en")}
//         disabled={locale === "en"}
//       >
//         EN
//       </button>

//       <button
//         onClick={() => switchLocale("ru")}
//         disabled={locale === "ru"}
//       >
//         RU
//       </button>
//     </div>
//   );
// }

"use client";

import {useLocale} from "next-intl";
import {useRouter} from "next/navigation";
import { AppLocale } from "@/i18n";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  function changeLocale(nextLocale: AppLocale) {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/`;
    router.refresh();
  }

  return (
    <div>
      <button
        disabled={locale === "en"}
        onClick={() => changeLocale("en")}
      >
        EN
      </button>

      <button
        disabled={locale === "ru"}
        onClick={() => changeLocale("ru")}
      >
        RU
      </button>
    </div>
  );
}
