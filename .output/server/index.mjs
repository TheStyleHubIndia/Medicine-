globalThis.__nitro_main__ = import.meta.url;
import { n as defineLazyEventHandler, r as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-25T19:18:53.310Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/manifest.webmanifest": {
		"type": "application/manifest+json",
		"etag": "\"15b-bMtWAcj0sTz902/kCQTebCkhfaw\"",
		"mtime": "2026-09-25T19:18:53.310Z",
		"size": 347,
		"path": "../public/manifest.webmanifest"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-25T19:18:53.310Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/ClientOnly-CavwJaAo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37f5-qe/ZaOSP46gMBw8zRKr1u2tavrk\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 14325,
		"path": "../public/assets/ClientOnly-CavwJaAo.js"
	},
	"/assets/QueryClientProvider-BDiLaMMy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-cQCc0WPzvvFVQDXaAp/tG221yrI\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 423,
		"path": "../public/assets/QueryClientProvider-BDiLaMMy.js"
	},
	"/assets/about-DT2LwNCA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26a9-NYIbaZojpArtXiWm7e2cZP+hqPQ\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 9897,
		"path": "../public/assets/about-DT2LwNCA.js"
	},
	"/assets/adme-nYYJ_BwU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d1-RyKflbBtXhxu9cPMyLnflLlKiak\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 5073,
		"path": "../public/assets/adme-nYYJ_BwU.js"
	},
	"/assets/admin._id-DNvkK6IC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57ca-iU0qFGUp3IcfG1/E4n7AX2unBzY\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 22474,
		"path": "../public/assets/admin._id-DNvkK6IC.js"
	},
	"/assets/admin.functions-BSCv9JZy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"722-HVXf0Of8lFYHod5m0ggxCrJ4pgo\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 1826,
		"path": "../public/assets/admin.functions-BSCv9JZy.js"
	},
	"/assets/admin.import-DXLHMUSA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29a5-EWoqfZJ/rezOpGxn+jQZ//yDzH0\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 10661,
		"path": "../public/assets/admin.import-DXLHMUSA.js"
	},
	"/assets/admin.index-DNHuEK8X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e10-juq78nnPv5w+ig9tBiSwwhbIWL8\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 7696,
		"path": "../public/assets/admin.index-DNHuEK8X.js"
	},
	"/assets/admin.manufacturers-0cCTI1tU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135b-GuwR80GSxUmjEOUKeGxb6MW4deQ\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 4955,
		"path": "../public/assets/admin.manufacturers-0cCTI1tU.js"
	},
	"/assets/ai.functions-Dv26I6dz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c-HyD3u6B+WMUewHZVdHASD/Lgquo\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 316,
		"path": "../public/assets/ai.functions-Dv26I6dz.js"
	},
	"/assets/arrow-left-BT8JkKga.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-/sjJ17DZ0QxEI4OLMNcQJ/pcGKQ\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 165,
		"path": "../public/assets/arrow-left-BT8JkKga.js"
	},
	"/assets/arrow-right-BZoY1g7J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-IxwyEt5wkXtM3WoT/HTm/dv437s\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 165,
		"path": "../public/assets/arrow-right-BZoY1g7J.js"
	},
	"/assets/auth-CdoaQgA-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e1c-EJrzT3sCpBNNOkCc7z2Xecegu6s\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 7708,
		"path": "../public/assets/auth-CdoaQgA-.js"
	},
	"/assets/brands._id-CLOZCMtE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12a-f4or7DtFKMCOyGURkGbqg3tTkWU\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 298,
		"path": "../public/assets/brands._id-CLOZCMtE.js"
	},
	"/assets/brands._id-DFZx8GoF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13f6-wQoNtf9u8AmJGXlt0tO3RmxxgJg\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 5110,
		"path": "../public/assets/brands._id-DFZx8GoF.js"
	},
	"/assets/brands._id-QUS2x3wI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"141-oByuydwm9AuV76WjT0UCy69KGDc\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 321,
		"path": "../public/assets/brands._id-QUS2x3wI.js"
	},
	"/assets/button-l98Nd2r_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1068-5aYRz04BNVug1L+Mlgwyp7HmBBI\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 4200,
		"path": "../public/assets/button-l98Nd2r_.js"
	},
	"/assets/check-CVp4kAR7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-qW0U0/cukHlSCLKiQ/WkSYQyPSw\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 124,
		"path": "../public/assets/check-CVp4kAR7.js"
	},
	"/assets/circle-check-4y6AORQD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-bM/dMfT/bIEzlDjTxrhTTRXoJ5I\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 178,
		"path": "../public/assets/circle-check-4y6AORQD.js"
	},
	"/assets/classes._slug-DfxL0DNJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fa9-vjANRJb29RPLvuzak4LxwPtt+vg\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 8105,
		"path": "../public/assets/classes._slug-DfxL0DNJ.js"
	},
	"/assets/classes.index-REKoDNq6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba3-2QqWaOK7otBDxkadlk/mfPzmJIM\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 2979,
		"path": "../public/assets/classes.index-REKoDNq6.js"
	},
	"/assets/client-De60DCFv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35cab-c7w7FQ7X82EOuBSt1vLNbU1Wybw\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 220331,
		"path": "../public/assets/client-De60DCFv.js"
	},
	"/assets/compare-BQY7n1YJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1199-7f6gfwoVXGeUbaSKLYPeDPmkh78\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 4505,
		"path": "../public/assets/compare-BQY7n1YJ.js"
	},
	"/assets/conditions-KMDtU4jh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec9b-3TYgy5EQu1gJlv8GGQR5AFGdJOA\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 60571,
		"path": "../public/assets/conditions-KMDtU4jh.js"
	},
	"/assets/createLucideIcon-CU_wXpUW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4af-43XC5RfsBHdYLotISt5z4zCPSZA\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 1199,
		"path": "../public/assets/createLucideIcon-CU_wXpUW.js"
	},
	"/assets/createServerFn-xnTcRlEZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12ad-18YJeZKV8psjgi+700yt51WGRRo\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 4781,
		"path": "../public/assets/createServerFn-xnTcRlEZ.js"
	},
	"/assets/disclaimer-Dpxgmwdz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ea-t3UZNyDacMUm8Byhq/oPDyfgN1Y\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 1002,
		"path": "../public/assets/disclaimer-Dpxgmwdz.js"
	},
	"/assets/dist-BM0mCp6v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"234-cn7fGSrZNR6dIDPmMEovDtCkcCM\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 564,
		"path": "../public/assets/dist-BM0mCp6v.js"
	},
	"/assets/dist-BaR1Gu1F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f0-HlKrUEwS19P7REHnXWmrkW/0yxM\"",
		"mtime": "2026-09-25T19:18:51.190Z",
		"size": 752,
		"path": "../public/assets/dist-BaR1Gu1F.js"
	},
	"/assets/dist-CZYpo0NC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1790-A6YB9y3xPRDHhZKRPXPd4AYZMhk\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 6032,
		"path": "../public/assets/dist-CZYpo0NC.js"
	},
	"/assets/dist-CZmGeHGs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"70c-k3kAI4W1K1imDr/JNqvcTlAJD1o\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 1804,
		"path": "../public/assets/dist-CZmGeHGs.js"
	},
	"/assets/dist-CdAulslk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cca-C3F83DbDl8sfGvmy9o3VpKgJiI0\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 7370,
		"path": "../public/assets/dist-CdAulslk.js"
	},
	"/assets/dist-De7oux1e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"283-UFdXUUdq9u0Q/5lvR5tihgWueVc\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 643,
		"path": "../public/assets/dist-De7oux1e.js"
	},
	"/assets/explain-button-C7SkKVow.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b4a-CHvPlK4WyD9ozym4mcGvzrD9CTY\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 2890,
		"path": "../public/assets/explain-button-C7SkKVow.js"
	},
	"/assets/favorites-C26xItY-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a86-+yk20hdgBknQZHcBhVENCf5YPOM\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 2694,
		"path": "../public/assets/favorites-C26xItY-.js"
	},
	"/assets/flashcards-9uQN94Z4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e67-Eh4frjQBVgtlc8pZFoQprcLBVh4\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 3687,
		"path": "../public/assets/flashcards-9uQN94Z4.js"
	},
	"/assets/hinglish-terms-CybfrRvu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b8c-puUHWGLVymOp7woEO19svPZSdFg\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 15244,
		"path": "../public/assets/hinglish-terms-CybfrRvu.js"
	},
	"/assets/jsx-dev-runtime-C0A2Pi2Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"687d-cJf9E+7w5seuInCp+P41VbevU4w\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 26749,
		"path": "../public/assets/jsx-dev-runtime-C0A2Pi2Y.js"
	},
	"/assets/jsx-runtime-C1TUCgur.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15fd-HpwFR/GhtXDMqYCv+7H+kIq1RWU\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 5629,
		"path": "../public/assets/jsx-runtime-C1TUCgur.js"
	},
	"/assets/label-DaHy0NGP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34f-zfLenQ+3r3u7Ergia7d4tHtBMKs\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 847,
		"path": "../public/assets/label-DaHy0NGP.js"
	},
	"/assets/learn-jEF2gqea.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1528-m4klCIRl0ZgSyoLaEgI6yjgGay0\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 5416,
		"path": "../public/assets/learn-jEF2gqea.js"
	},
	"/assets/learning-BGisQBnX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1338-K1QvyYFOxqWGRd8+G2m90bZKo5Q\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 4920,
		"path": "../public/assets/learning-BGisQBnX.js"
	},
	"/assets/lightbulb-DqF2KtWk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e-r2NfShfQHvq6h5c5ceiLoWCssHI\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 286,
		"path": "../public/assets/lightbulb-DqF2KtWk.js"
	},
	"/assets/link-CjLN8Ybh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19e1-VCbyI9JGSUPZ9jFPMvI8OAdZEsY\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 6625,
		"path": "../public/assets/link-CjLN8Ybh.js"
	},
	"/assets/manufacturers._id-BLEhYy4I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"148-HweBhycnALRjO4JkHCgVgRly1p8\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 328,
		"path": "../public/assets/manufacturers._id-BLEhYy4I.js"
	},
	"/assets/manufacturers._id-CF33dcKB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cbb-VzR3ZM2LkIqLNgmkxd/EaBS2E88\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 7355,
		"path": "../public/assets/manufacturers._id-CF33dcKB.js"
	},
	"/assets/index-B2SQJ1jx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b05fb-2Nhfwddt5MOT6lKm0JEoyIDKiZs\"",
		"mtime": "2026-09-25T19:18:51.189Z",
		"size": 722427,
		"path": "../public/assets/index-B2SQJ1jx.js"
	},
	"/assets/manufacturers._id-DVW3m-ku.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"133-QM8udR7k7GlnLboAhuX/qZdXrgg\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 307,
		"path": "../public/assets/manufacturers._id-DVW3m-ku.js"
	},
	"/assets/manufacturers.index-CrV8nJ7W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-tgGHZalABUd320HeTm4LuhMTdVU\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 310,
		"path": "../public/assets/manufacturers.index-CrV8nJ7W.js"
	},
	"/assets/manufacturers.index-D_JCietK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"129b-bkmsI+PNrqUWzDHWiFKpeCebLGg\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 4763,
		"path": "../public/assets/manufacturers.index-D_JCietK.js"
	},
	"/assets/manufacturers.index-Gm82RqPl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a-IUqINMNccGILGGLV6Dvgs4B2ews\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 330,
		"path": "../public/assets/manufacturers.index-Gm82RqPl.js"
	},
	"/assets/matchContext-uXlmcmfI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92-uU+rdB0EGZt7ArYCEcqX9F4/Xgw\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 146,
		"path": "../public/assets/matchContext-uXlmcmfI.js"
	},
	"/assets/medicine-card-DlUXT37V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e25-BpASlaWHExkMt4AYDuyaxZPvrkA\"",
		"mtime": "2026-09-25T19:18:51.191Z",
		"size": 3621,
		"path": "../public/assets/medicine-card-DlUXT37V.js"
	},
	"/assets/medicines._slug-BHIn0b-r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fdbe-g+MPrbNiQZSm5xMULuooY3FxzRg\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 130494,
		"path": "../public/assets/medicines._slug-BHIn0b-r.js"
	},
	"/assets/medicines.index-BH34Chcz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cee-TFi6o3vF6jkVbGj+lDAHmlGyeJc\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 3310,
		"path": "../public/assets/medicines.index-BH34Chcz.js"
	},
	"/assets/memory-KHy625g7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1111-y9/hX6CCKUJoLk3AyX+xQBNgIPI\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 4369,
		"path": "../public/assets/memory-KHy625g7.js"
	},
	"/assets/password-field-DvGTL5yq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d3e-NvjmnYSkukZEeoL4m/ZGV3GiQ8s\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 3390,
		"path": "../public/assets/password-field-DvGTL5yq.js"
	},
	"/assets/progress-chrbTp6w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d3-Feyo6By04zE5rNhA0FEWfy+AFOQ\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 2515,
		"path": "../public/assets/progress-chrbTp6w.js"
	},
	"/assets/pronounce-B8N7l2Am.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"913-Xlu1RDNssqj53hOR6FpVE+EGP+0\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 2323,
		"path": "../public/assets/pronounce-B8N7l2Am.js"
	},
	"/assets/pronunciation-CarhGaFy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"81e-MFC5tXxp2pjUYTjY/6FjR7sJhM0\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 2078,
		"path": "../public/assets/pronunciation-CarhGaFy.js"
	},
	"/assets/qss-Bqk2G4CH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc-2N+JPG3965eWSB0QcbrDwgkqrgU\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 444,
		"path": "../public/assets/qss-Bqk2G4CH.js"
	},
	"/assets/quiz-BMWCBEn_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13ff-INj/p+307bVo0Wb+BzS1rPHKFok\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 5119,
		"path": "../public/assets/quiz-BMWCBEn_.js"
	},
	"/assets/react-dom-BnIAyYoA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"257a-P/qXefEyGULQbM/5caORyBNh+ls\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 9594,
		"path": "../public/assets/react-dom-BnIAyYoA.js"
	},
	"/assets/redirect-Dhm19zUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-ePZWCXP5uehkmkGMkMl5xDch+/Y\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 500,
		"path": "../public/assets/redirect-Dhm19zUi.js"
	},
	"/assets/reset-password-hSKgYUmu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aeb-P7R7P9dOryMbQnMiqJqHB7gU8hQ\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 2795,
		"path": "../public/assets/reset-password-hSKgYUmu.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/route-B2g5tGHH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"118-qQp8jNycETGtOSeEPCCUN5loBOk\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 280,
		"path": "../public/assets/route-B2g5tGHH.js"
	},
	"/assets/routes-Dwqj7U0K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2394-LLo/I5Q1a13yrBtbhDTXShCUeSg\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 9108,
		"path": "../public/assets/routes-Dwqj7U0K.js"
	},
	"/assets/settings-A4II9Xox.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6932-VswPtncExX5Zzlp4lOqhxew1wD0\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 26930,
		"path": "../public/assets/settings-A4II9Xox.js"
	},
	"/assets/skeleton-B1sJPBIK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e-+cRqGfzzvI/wzdZXPZmut8OK3wQ\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 334,
		"path": "../public/assets/skeleton-B1sJPBIK.js"
	},
	"/assets/study-BZG4Xrrq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"113f-D3E3knbpo7XcgTTng6VggdGNXQk\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 4415,
		"path": "../public/assets/study-BZG4Xrrq.js"
	},
	"/assets/styles-DR4sZls7.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"172db-K4a5XRv6YtWAd+REZktdr5RUi4Y\"",
		"mtime": "2026-09-25T19:18:51.193Z",
		"size": 94939,
		"path": "../public/assets/styles-DR4sZls7.css"
	},
	"/assets/terms-CDJvwRsy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb6-w3N9QYU51BW9qcVRKnGKyz3oXFs\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 3254,
		"path": "../public/assets/terms-CDJvwRsy.js"
	},
	"/assets/textarea-Cf31gN7f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"277-/Q0PevN9IBVF1xgtvXv945LB7zE\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 631,
		"path": "../public/assets/textarea-Cf31gN7f.js"
	},
	"/assets/triangle-alert-BkiEIm4K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"109-8HR2RxzZtJFwRQx3Qsiymve8LEY\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 265,
		"path": "../public/assets/triangle-alert-BkiEIm4K.js"
	},
	"/assets/useMatch-DQiVuzsU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c7-5FCbuG/ityURC+KElXSz2pX8Yg0\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 967,
		"path": "../public/assets/useMatch-DQiVuzsU.js"
	},
	"/assets/useRouter-DYM2Ur9T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10a-Xvppl+42ltQWtWPQZHyFBCEm+P4\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 266,
		"path": "../public/assets/useRouter-DYM2Ur9T.js"
	},
	"/assets/useStore--TSqITKc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a05-rgLnFrJ8NZR5E/zRwR5dscF3uNM\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 6661,
		"path": "../public/assets/useStore--TSqITKc.js"
	},
	"/assets/utils-D6P2453W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e44-9xfkyvrLmslI7mRP06LoMSltFww\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 28228,
		"path": "../public/assets/utils-D6P2453W.js"
	},
	"/assets/verification-badge-NJrRe1LF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"204-gGYlM88oRvm4zn5WFy8GUCeO6Lc\"",
		"mtime": "2026-09-25T19:18:51.193Z",
		"size": 516,
		"path": "../public/assets/verification-badge-NJrRe1LF.js"
	},
	"/assets/x-DTw5cglQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-DzlpXJWCp1ALZt2zvexNfQ22mxc\"",
		"mtime": "2026-09-25T19:18:51.193Z",
		"size": 154,
		"path": "../public/assets/x-DTw5cglQ.js"
	},
	"/assets/aistudio/.gitignore": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2-tGKu4cbEAbPHCadG6UAGd8L/vrI\"",
		"mtime": "2026-09-25T19:18:53.310Z",
		"size": 2,
		"path": "../public/assets/aistudio/.gitignore"
	},
	"/assets/use-user-data-D3Y9K3YT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a4-TYtUQvpQ9JOZORgnnQU2U3I0gaQ\"",
		"mtime": "2026-09-25T19:18:51.192Z",
		"size": 5284,
		"path": "../public/assets/use-user-data-D3Y9K3YT.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_6qWkqV = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_6qWkqV
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
