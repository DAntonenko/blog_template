module.exports = [
"[project]/GitProjects/blog_template/apps/client/shared/auth/getCurrentUser.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3_sass@1.97.3/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
async function getCurrentUser() {
    const h = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const host = h.get("host");
    const protocol = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "http";
    const res = await fetch(`${protocol}://${host}/api/auth/me`, {
        headers: {
            cookie: h.get("cookie") ?? ""
        },
        cache: "no-store"
    });
    if (!res.ok) {
        return null;
    }
    const data = await res.json();
    return data.user ?? null;
}
}),
"[project]/GitProjects/blog_template/apps/client/app/admin/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"405fc93a3432715a47009f99d8ca9ea6b05c76603e":"createPost"},"",""] */ __turbopack_context__.s([
    "createPost",
    ()=>createPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3_sass@1.97.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
// export async function createPost(formData: FormData) {
//   const title = formData.get("title");
//   const content = formData.get("content");
//   if (typeof title !== "string" || typeof content !== "string") {
//     throw new Error("Invalid form data");
//   }
//   const res = await fetch(`${process.env.API_BASE_URL}/api/posts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title, content }),
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to create post");
//   }
// }
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3_sass@1.97.3/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$shared$2f$auth$2f$getCurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/apps/client/shared/auth/getCurrentUser.ts [app-rsc] (ecmascript)"); // why not "@/shared/auth/getCurrentUser"?
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3_sass@1.97.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function createPost(formData) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$shared$2f$auth$2f$getCurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!user) {
        throw new Error("Unauthenticated");
    }
    if (user.role !== "admin") {
        throw new Error("Forbidden");
    }
    const title = formData.get("title");
    const content = formData.get("content");
    const h = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const host = h.get("host");
    const protocol = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "http";
    await fetch(`${protocol}://${host}/api/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            cookie: h.get("cookie") ?? ""
        },
        body: JSON.stringify({
            title,
            content
        })
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createPost
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPost, "405fc93a3432715a47009f99d8ca9ea6b05c76603e", null);
}),
"[project]/GitProjects/blog_template/apps/client/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/GitProjects/blog_template/apps/client/app/admin/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/apps/client/app/admin/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/GitProjects/blog_template/apps/client/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/GitProjects/blog_template/apps/client/app/admin/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "405fc93a3432715a47009f99d8ca9ea6b05c76603e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPost"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/GitProjects/blog_template/apps/client/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => "[project]/GitProjects/blog_template/apps/client/app/admin/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$app$2f$admin$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/apps/client/app/admin/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=GitProjects_blog_template_apps_client_86d5b21d._.js.map