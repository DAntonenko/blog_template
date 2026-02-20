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
