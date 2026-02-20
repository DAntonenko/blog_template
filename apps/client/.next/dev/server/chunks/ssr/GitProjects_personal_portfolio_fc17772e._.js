module.exports = [
"[project]/GitProjects/blog_template/apps/client/app/admin/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"405fc93a3432715a47009f99d8ca9ea6b05c76603e":"createPost"},"",""] */ __turbopack_context__.s([
    "createPost",
    ()=>createPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3_sass@1.97.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3_sass@1.97.3/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$apps$2f$client$2f$shared$2f$auth$2f$getCurrentUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/apps/client/shared/auth/getCurrentUser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3_sass@1.97.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
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
    const h = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createPost
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$GitProjects$2f$blog_template$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3_sass$40$1$2e$97$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPost, "405fc93a3432715a47009f99d8ca9ea6b05c76603e", null);
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
"[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3_sass@1.97.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3_sass@1.97.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/GitProjects/blog_template/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3_sass@1.97.3/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=GitProjects_blog_template_fc17772e._.js.map