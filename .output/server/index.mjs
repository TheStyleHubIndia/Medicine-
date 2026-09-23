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
	"/manifest.webmanifest": {
		"type": "application/manifest+json",
		"etag": "\"15b-bMtWAcj0sTz902/kCQTebCkhfaw\"",
		"mtime": "2026-09-23T00:29:16.331Z",
		"size": 347,
		"path": "../public/manifest.webmanifest"
	},
	"/assets/QueryClientProvider-CPftAXq3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"198-+unpKmU16oH+oTyQcHi+A2nvuco\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 408,
		"path": "../public/assets/QueryClientProvider-CPftAXq3.js"
	},
	"/assets/about-DTWtgJHO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa4-XKegm5EBd+gq+Z6sXoEs4tWer1M\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 6820,
		"path": "../public/assets/about-DTWtgJHO.js"
	},
	"/assets/adme-BtPBQQKj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da3-6dCnclgrh2pf3VgnazmY3Q7mr/I\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 3491,
		"path": "../public/assets/adme-BtPBQQKj.js"
	},
	"/assets/admin._id-DrQzw5VY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43ed-jRD/izF+I87SL4l8zfa7cO+xc2k\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 17389,
		"path": "../public/assets/admin._id-DrQzw5VY.js"
	},
	"/assets/admin.functions-C8N2TKX6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"722-+/o/LDf9z4cuvtxTaIESrM5jsnE\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 1826,
		"path": "../public/assets/admin.functions-C8N2TKX6.js"
	},
	"/assets/admin.import-CDNRv5fH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d65-NLMltW5FuGflsXOZtQ2wbddfcpQ\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 7525,
		"path": "../public/assets/admin.import-CDNRv5fH.js"
	},
	"/assets/admin.index-XVN4oT-s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14d9-MErjhhrf/ngm6VAHVl8CuSH67XI\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 5337,
		"path": "../public/assets/admin.index-XVN4oT-s.js"
	},
	"/assets/admin.manufacturers-QbfhwkYo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc2-beOCh+N+xkkTg1kzYCP3BvVN5Ts\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 3522,
		"path": "../public/assets/admin.manufacturers-QbfhwkYo.js"
	},
	"/assets/ai.functions-KI7USKPE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c-1DIQTR1P6stKHDOV7Jcyz4nS6g0\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 316,
		"path": "../public/assets/ai.functions-KI7USKPE.js"
	},
	"/assets/arrow-left-NI85iB6u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-RHse/KYdaArU3hxbUgXUvLagBcw\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 165,
		"path": "../public/assets/arrow-left-NI85iB6u.js"
	},
	"/assets/arrow-right-Dxv_oK_B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-0pv7IZ/f1lWvDXnZXB0a5j4HKhU\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 165,
		"path": "../public/assets/arrow-right-Dxv_oK_B.js"
	},
	"/assets/auth-B2eIWMQu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"157e-lOKWYNrKN8x6EHMHKVUiZ0GhKKQ\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 5502,
		"path": "../public/assets/auth-B2eIWMQu.js"
	},
	"/assets/brands._id-CwOAC6Wy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6b-pdU/1S/eyi4zysCHN+qkOtMXo2E\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 3179,
		"path": "../public/assets/brands._id-CwOAC6Wy.js"
	},
	"/assets/brands._id-ojd0A297.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-ZoY7Mp8qQpMfkZhSKts25wmVQI8\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 189,
		"path": "../public/assets/brands._id-ojd0A297.js"
	},
	"/assets/brands._id-rU7QYSTo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-a+nz3YOdilYoX0qbcHJm48b+VTM\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 162,
		"path": "../public/assets/brands._id-rU7QYSTo.js"
	},
	"/assets/button-Cx75pPGO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1015-mQUf7TUDLrVTIsTX63KuKO8KoW8\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 4117,
		"path": "../public/assets/button-Cx75pPGO.js"
	},
	"/assets/check-BprhDA8a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-rKfdpmRCmTFMEbYi9nYPZ6b2UzA\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 124,
		"path": "../public/assets/check-BprhDA8a.js"
	},
	"/assets/classes._slug-jYJQ-v6G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1218-cnwQ3AlbgMxxKgMYmMKQfbHie1c\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 4632,
		"path": "../public/assets/classes._slug-jYJQ-v6G.js"
	},
	"/assets/classes.index-0ykmed4T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"727-L+LHhJhJSv7oFx0kcv9ieN5qG9w\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 1831,
		"path": "../public/assets/classes.index-0ykmed4T.js"
	},
	"/assets/client-CTK3xwPo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35cab-1bPWLaXGoz36QDGdyWyV7b2SPKE\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 220331,
		"path": "../public/assets/client-CTK3xwPo.js"
	},
	"/assets/compare-CsJ3FfVe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b29-8Lu44L9+QlSHCYWC/3wo5JLudg8\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 2857,
		"path": "../public/assets/compare-CsJ3FfVe.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-23T00:29:16.332Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/ClientOnly-iCmp712B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35b8-fR9kjt/6iAT9FeMBWhtgCz2KwXg\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 13752,
		"path": "../public/assets/ClientOnly-iCmp712B.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-23T00:29:16.331Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/createServerFn-CSokhA-l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12c5-mECGO+uBSTk9PKLHGPuK9T0SZLU\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 4805,
		"path": "../public/assets/createServerFn-CSokhA-l.js"
	},
	"/assets/createLucideIcon-wlqc77si.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c7-VFhKnLm926S1BBXZYjEJHwe6v4M\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 1223,
		"path": "../public/assets/createLucideIcon-wlqc77si.js"
	},
	"/assets/disclaimer-Dp2ygh5e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"306-Va8+og5XFo1qnC/ukUKStZs+c4E\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 774,
		"path": "../public/assets/disclaimer-Dp2ygh5e.js"
	},
	"/assets/dist-C53_VIE6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c6-TnPlc9ceDcwfEmB51bV+rjsSdGE\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 5318,
		"path": "../public/assets/dist-C53_VIE6.js"
	},
	"/assets/dist-CLzDelPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29b-qvB7awxCmje2lyc+deqwwg7M7W0\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 667,
		"path": "../public/assets/dist-CLzDelPw.js"
	},
	"/assets/dist-DvKBdEXM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cbc-1nCfZxxCGlD1gU8OU3xv8tMLKsE\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 7356,
		"path": "../public/assets/dist-DvKBdEXM.js"
	},
	"/assets/explain-button-DlY0p1Q1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82a-C82LsFC9kB5DMuhkdoE7SjJEioQ\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 2090,
		"path": "../public/assets/explain-button-DlY0p1Q1.js"
	},
	"/assets/favorites-CPhUAg_W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"683-EzcS1TnkZ/ZRVTLgJD9ghdkK5Ow\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 1667,
		"path": "../public/assets/favorites-CPhUAg_W.js"
	},
	"/assets/invariant-DEEwAagU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c-eVh/3DMi1s3cxf4N/OJar+ew1jA\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 60,
		"path": "../public/assets/invariant-DEEwAagU.js"
	},
	"/assets/jsx-runtime-BkSabwWG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c1-VkW1xFbt56H2FC99QIi6PTzaFIo\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 961,
		"path": "../public/assets/jsx-runtime-BkSabwWG.js"
	},
	"/assets/label-C_CD3dMC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ca-6Svm8l4UHT9PX7gXtOXvYTsvMeQ\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 714,
		"path": "../public/assets/label-C_CD3dMC.js"
	},
	"/assets/learn-BJTm9tMG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1080-+AfdDpXp/N3JxQ9VH9Gr/miwc5U\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 4224,
		"path": "../public/assets/learn-BJTm9tMG.js"
	},
	"/assets/learning-BDfKfeAu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bbd-cKZR42srKMhQHeyjLIbpNiX8Wu0\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 3005,
		"path": "../public/assets/learning-BDfKfeAu.js"
	},
	"/assets/lightbulb-X9Q18DTi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e-LOeSQS6rgF3HoksiRWdfX4GG6fA\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 286,
		"path": "../public/assets/lightbulb-X9Q18DTi.js"
	},
	"/assets/link-DypkUY3Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117e-BENprj4+/nPe9WIKCct4dExIic4\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 4478,
		"path": "../public/assets/link-DypkUY3Q.js"
	},
	"/assets/manufacturers._id-BxAuiIJ8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-n+3v3FVPpuIVSn4S9ugWyFZkuto\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 164,
		"path": "../public/assets/manufacturers._id-BxAuiIJ8.js"
	},
	"/assets/manufacturers._id-Mf6DkfCp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12e7-byVnCIGgpuWBHj/hYPH6TzYyFXA\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 4839,
		"path": "../public/assets/manufacturers._id-Mf6DkfCp.js"
	},
	"/assets/manufacturers._id-ojd0A297.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-ZoY7Mp8qQpMfkZhSKts25wmVQI8\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 189,
		"path": "../public/assets/manufacturers._id-ojd0A297.js"
	},
	"/assets/flashcards-CF6CWpsO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"973-zNLB2DJ8vgFrY0XHSr0SIriTdok\"",
		"mtime": "2026-09-23T00:29:14.451Z",
		"size": 2419,
		"path": "../public/assets/flashcards-CF6CWpsO.js"
	},
	"/assets/manufacturers.index-BVwqXhxB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cdb-r8gU/19+vHnVglma29pR7QcNyIo\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 3291,
		"path": "../public/assets/manufacturers.index-BVwqXhxB.js"
	},
	"/assets/manufacturers.index-Quprxw91.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-qGx+Pwbm8Tw3p/wZE2tccKM/kcQ\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 165,
		"path": "../public/assets/manufacturers.index-Quprxw91.js"
	},
	"/assets/manufacturers.index-ojd0A297.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-ZoY7Mp8qQpMfkZhSKts25wmVQI8\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 189,
		"path": "../public/assets/manufacturers.index-ojd0A297.js"
	},
	"/assets/matchContext-wephjrwY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa-k3CgpPs0dU1jPEUcYu69V4gfKgo\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 170,
		"path": "../public/assets/matchContext-wephjrwY.js"
	},
	"/assets/medicine-card-9z7g1cYw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a31-mGr5XjHixNm7o8beGDhdw87o0KY\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 2609,
		"path": "../public/assets/medicine-card-9z7g1cYw.js"
	},
	"/assets/index-CDZ-whmQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f35e-ekTJ3izDyxn86skS47UOxYVrnpo\"",
		"mtime": "2026-09-23T00:29:14.450Z",
		"size": 521054,
		"path": "../public/assets/index-CDZ-whmQ.js"
	},
	"/assets/memory-Do2ComgI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a51-p0ZPiQMFVo1kv8DTn65exi6II74\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 2641,
		"path": "../public/assets/memory-Do2ComgI.js"
	},
	"/assets/password-field-DZmKo7QO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b80-qQV9RC2dcnxlFjC37DfxWpz/JmI\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 2944,
		"path": "../public/assets/password-field-DZmKo7QO.js"
	},
	"/assets/progress-smnyeXTX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ed-CZfVo0Jb5FGy5udB+mcuVvvv+uA\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 2285,
		"path": "../public/assets/progress-smnyeXTX.js"
	},
	"/assets/pronounce-OAru2FBC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6ca-JfApCfImFCj52KIMv2Q8Pcqhp5E\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 1738,
		"path": "../public/assets/pronounce-OAru2FBC.js"
	},
	"/assets/pronunciation-BJo4yZOH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"527-iml3B6OjAzpQWzPBy2CsMH1E4d8\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 1319,
		"path": "../public/assets/pronunciation-BJo4yZOH.js"
	},
	"/assets/qss-Bqk2G4CH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc-2N+JPG3965eWSB0QcbrDwgkqrgU\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 444,
		"path": "../public/assets/qss-Bqk2G4CH.js"
	},
	"/assets/quiz-DEx0uiyn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce4-xKdN7S73AtvKfBJU42GmPPpLL+c\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 3300,
		"path": "../public/assets/quiz-DEx0uiyn.js"
	},
	"/assets/react-Biqg-U6H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ebf-gH02D69rQx5/7qM2rnLqBJ6aQdg\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 7871,
		"path": "../public/assets/react-Biqg-U6H.js"
	},
	"/assets/react-dom-D15O1ec3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f34-CcIo+oZaFH6+kXirfJEIip/ojcc\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 3892,
		"path": "../public/assets/react-dom-D15O1ec3.js"
	},
	"/assets/redirect-Dhm19zUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-ePZWCXP5uehkmkGMkMl5xDch+/Y\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 500,
		"path": "../public/assets/redirect-Dhm19zUi.js"
	},
	"/assets/reset-password-WoyQjOcz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82e-++qLR7pb2FXCsslf/pfTAwEpWNQ\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 2094,
		"path": "../public/assets/reset-password-WoyQjOcz.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/route-BAxKpNfe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-VdqGMCD1VdTNRqEFJMnpvtTpJ1Q\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 142,
		"path": "../public/assets/route-BAxKpNfe.js"
	},
	"/assets/medicines._slug-B6HvjjuI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d834-aghfygQyaejLCz9S9jRLVO7kp0I\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 120884,
		"path": "../public/assets/medicines._slug-B6HvjjuI.js"
	},
	"/assets/routes-B81OVZPL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16fb-0750SI5igSGHALOhvhh/GHqAANE\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 5883,
		"path": "../public/assets/routes-B81OVZPL.js"
	},
	"/assets/settings-0kFqIOKE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"591e-u73CeJGvWJmJuayIe0MCNekWwc4\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 22814,
		"path": "../public/assets/settings-0kFqIOKE.js"
	},
	"/assets/study-fpEtWf3p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"caf-3Y0jJnqJdmk2gki1fzCfabR/1PM\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 3247,
		"path": "../public/assets/study-fpEtWf3p.js"
	},
	"/assets/styles-C7pKw52G.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16997-S9+ZaaKXBs/0bt7QPWyEFXWFlls\"",
		"mtime": "2026-09-23T00:29:14.453Z",
		"size": 92567,
		"path": "../public/assets/styles-C7pKw52G.css"
	},
	"/assets/terms-C6iYnyPW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a5-bKJhLXhNjN+wUqINf8kqX2AoKQQ\"",
		"mtime": "2026-09-23T00:29:14.453Z",
		"size": 1957,
		"path": "../public/assets/terms-C6iYnyPW.js"
	},
	"/assets/textarea-Cjwe6mBT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"223-qA/SijIQUsmGioa9XXRwNLpP7vw\"",
		"mtime": "2026-09-23T00:29:14.453Z",
		"size": 547,
		"path": "../public/assets/textarea-Cjwe6mBT.js"
	},
	"/assets/medicines.index-B-64BnWj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"914-vjgawMfC6XMPBXTU/5YH1SMocIs\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 2324,
		"path": "../public/assets/medicines.index-B-64BnWj.js"
	},
	"/assets/triangle-alert-ClzUGrFr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"186-T86f0+QWdJnH/VR6IsLpQJeO4Fc\"",
		"mtime": "2026-09-23T00:29:14.453Z",
		"size": 390,
		"path": "../public/assets/triangle-alert-ClzUGrFr.js"
	},
	"/assets/skeleton-QJ8CqYXc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-g7qi/cPfuijFMxRQA3ok9StIFjE\"",
		"mtime": "2026-09-23T00:29:14.452Z",
		"size": 223,
		"path": "../public/assets/skeleton-QJ8CqYXc.js"
	},
	"/assets/use-user-data-CT71oSNJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14b7-o712jyzISeqYR+u9zgUDQNnzzIs\"",
		"mtime": "2026-09-23T00:29:14.453Z",
		"size": 5303,
		"path": "../public/assets/use-user-data-CT71oSNJ.js"
	},
	"/assets/useMatch-B8imZaS4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cc-az8ZU9NeywthYlENkxjdvPvOowA\"",
		"mtime": "2026-09-23T00:29:14.453Z",
		"size": 716,
		"path": "../public/assets/useMatch-B8imZaS4.js"
	},
	"/assets/useRouter-Bg9UCIHO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b3-sJN8Gk5rkZPYuODhfuBwP4B0Yxg\"",
		"mtime": "2026-09-23T00:29:14.453Z",
		"size": 179,
		"path": "../public/assets/useRouter-Bg9UCIHO.js"
	},
	"/assets/useStore-wc8-pOEg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154d-7poDEUm0QDR7hDYJURN0yhrHnK4\"",
		"mtime": "2026-09-23T00:29:14.453Z",
		"size": 5453,
		"path": "../public/assets/useStore-wc8-pOEg.js"
	},
	"/assets/utils-D6P2453W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e44-9xfkyvrLmslI7mRP06LoMSltFww\"",
		"mtime": "2026-09-23T00:29:14.453Z",
		"size": 28228,
		"path": "../public/assets/utils-D6P2453W.js"
	},
	"/assets/verification-badge-Cm1VnrOr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18e-rBha2NahPn6OZFmdlFScwDnBdVA\"",
		"mtime": "2026-09-23T00:29:14.453Z",
		"size": 398,
		"path": "../public/assets/verification-badge-Cm1VnrOr.js"
	},
	"/assets/aistudio/.gitignore": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2-tGKu4cbEAbPHCadG6UAGd8L/vrI\"",
		"mtime": "2026-09-23T00:29:16.331Z",
		"size": 2,
		"path": "../public/assets/aistudio/.gitignore"
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
