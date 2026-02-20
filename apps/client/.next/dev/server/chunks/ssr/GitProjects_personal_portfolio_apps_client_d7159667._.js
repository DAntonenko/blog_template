module.exports = [
"[project]/GitProjects/blog_template/apps/client/app/login/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use server";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// export async function login(formData: FormData) {
//   const email = formData.get("email");
//   const password = formData.get("password");
//   const res = await fetch(`${process.env.API_BASE_URL}/api/auth/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//     // For cookies
//     credentials: "include",
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Login failed");
//   }
//   redirect("/admin");
// }
/* __next_internal_action_entry_do_not_use__ [{"40f9a03532b4fdeb8e532fd410f56ea0bc54820d0e":"login"},"",""] */ __turbopack_context__.s([
    "login",
    ()=>login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3_sass@1.97.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3_sass@1.97.3/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3_sass@1.97.3/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3_sass@1.97.3/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3_sass@1.97.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function login(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    if (typeof email !== "string" || typeof password !== "string") {
        throw new Error("Invalid form data");
    }
    const h = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const host = h.get("host");
    const protocol = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "http";
    const res = await fetch(`${protocol}://${host}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        }),
        cache: "no-store"
    });
    if (!res.ok) {
        throw new Error("Login failed");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "40f9a03532b4fdeb8e532fd410f56ea0bc54820d0e", null);
}),
"[project]/GitProjects/blog_template/apps/client/.next-internal/server/app/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/GitProjects/blog_template/apps/client/app/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$app$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/apps/client/app/login/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/GitProjects/blog_template/apps/client/.next-internal/server/app/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/GitProjects/blog_template/apps/client/app/login/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40f9a03532b4fdeb8e532fd410f56ea0bc54820d0e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$app$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["login"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$app$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/GitProjects/blog_template/apps/client/.next-internal/server/app/login/page/actions.js { ACTIONS_MODULE0 => "[project]/GitProjects/blog_template/apps/client/app/login/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$app$2f$login$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/apps/client/app/login/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=GitProjects_blog_template_apps_client_d7159667._.js.map