module.exports = [
"[project]/GitProjects/blog_template/apps/client/shared/auth/getCurrentUser.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3_sass@1.97.3/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
async function getCurrentUser() {
    const h = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
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
"[project]/GitProjects/blog_template/apps/client/shared/auth/requireRole.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requireRole",
    ()=>requireRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3_sass@1.97.3/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3_sass@1.97.3/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$shared$2f$auth$2f$getCurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/apps/client/shared/auth/getCurrentUser.ts [app-rsc] (ecmascript)");
;
;
function requireRole(role) {
    return async function() {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$shared$2f$auth$2f$getCurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!user) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
        }
        if (user.role !== role) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login?error=forbidden");
        }
        return user;
    };
}
}),
"[project]/GitProjects/blog_template/apps/client/shared/auth/requireAdmin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requireAdmin",
    ()=>requireAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$shared$2f$auth$2f$requireRole$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/apps/client/shared/auth/requireRole.ts [app-rsc] (ecmascript)");
;
const requireAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$shared$2f$auth$2f$requireRole$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireRole"])("admin");
}),
"[project]/GitProjects/blog_template/apps/client/app/admin/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3_sass@1.97.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$shared$2f$auth$2f$requireAdmin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/apps/client/shared/auth/requireAdmin.ts [app-rsc] (ecmascript)"); // why not "@/shared/auth/getCurrentUser"?
;
;
async function AdminLayout({ children }) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$shared$2f$auth$2f$requireAdmin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=GitProjects_blog_template_apps_client_ea159ab1._.js.map