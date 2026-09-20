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
		"mtime": "2026-09-20T21:06:24.276Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/manifest.webmanifest": {
		"type": "application/manifest+json",
		"etag": "\"15b-bMtWAcj0sTz902/kCQTebCkhfaw\"",
		"mtime": "2026-09-20T21:06:24.276Z",
		"size": 347,
		"path": "../public/manifest.webmanifest"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-20T21:06:24.276Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/ClientOnly-iCmp712B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35b8-fR9kjt/6iAT9FeMBWhtgCz2KwXg\"",
		"mtime": "2026-09-20T21:06:22.459Z",
		"size": 13752,
		"path": "../public/assets/ClientOnly-iCmp712B.js"
	},
	"/assets/QueryClientProvider-CPftAXq3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"198-+unpKmU16oH+oTyQcHi+A2nvuco\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 408,
		"path": "../public/assets/QueryClientProvider-CPftAXq3.js"
	},
	"/assets/about-gjtj-VS3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa4-u7CEe+8aBCQVrRC71EKZwk9jPA8\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 6820,
		"path": "../public/assets/about-gjtj-VS3.js"
	},
	"/assets/adme-DW0eQqZi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da3-fqkW/YKHcej1LEkL7P/EJ2pcWFg\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 3491,
		"path": "../public/assets/adme-DW0eQqZi.js"
	},
	"/assets/admin._id-YDioVUDC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43ed-wt4jYzk4AK6Q/S0TeT90lZP3JrU\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 17389,
		"path": "../public/assets/admin._id-YDioVUDC.js"
	},
	"/assets/admin.functions-Cn5ecSBT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"722-KAiTKscPG4htpkvvGey1f+MaNhQ\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 1826,
		"path": "../public/assets/admin.functions-Cn5ecSBT.js"
	},
	"/assets/admin.import-B0wk8rkn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e66-TqKt+SKEd9Lwxdhmi3fnZK5cQlA\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 7782,
		"path": "../public/assets/admin.import-B0wk8rkn.js"
	},
	"/assets/admin.index-D28R7hil.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14d9-FcGspsI69DFBHOBVPwi6Ktr+5c4\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 5337,
		"path": "../public/assets/admin.index-D28R7hil.js"
	},
	"/assets/admin.manufacturers-hf8Vsg97.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc2-g1Xx8t2GYVLix9F1l5cN0YfPrA0\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 3522,
		"path": "../public/assets/admin.manufacturers-hf8Vsg97.js"
	},
	"/assets/ai.functions-CNUM7nuv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13c-KdDz0+Ty5LF0xo+dAB0zo4S1WwA\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 316,
		"path": "../public/assets/ai.functions-CNUM7nuv.js"
	},
	"/assets/arrow-left-NI85iB6u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-RHse/KYdaArU3hxbUgXUvLagBcw\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 165,
		"path": "../public/assets/arrow-left-NI85iB6u.js"
	},
	"/assets/auth-Dqz_mKpP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"157e-zI2Yyev2ZX8JvW1pp2bm/KIv3BY\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 5502,
		"path": "../public/assets/auth-Dqz_mKpP.js"
	},
	"/assets/brands._id-CtTGhQzM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c6b-cA39/tRLJLj+tNoxPwNfNQPDr8I\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 3179,
		"path": "../public/assets/brands._id-CtTGhQzM.js"
	},
	"/assets/brands._id-ojd0A297.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-ZoY7Mp8qQpMfkZhSKts25wmVQI8\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 189,
		"path": "../public/assets/brands._id-ojd0A297.js"
	},
	"/assets/brands._id-rU7QYSTo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-a+nz3YOdilYoX0qbcHJm48b+VTM\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 162,
		"path": "../public/assets/brands._id-rU7QYSTo.js"
	},
	"/assets/button-Cx75pPGO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1015-mQUf7TUDLrVTIsTX63KuKO8KoW8\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 4117,
		"path": "../public/assets/button-Cx75pPGO.js"
	},
	"/assets/check-BprhDA8a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-rKfdpmRCmTFMEbYi9nYPZ6b2UzA\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 124,
		"path": "../public/assets/check-BprhDA8a.js"
	},
	"/assets/classes._slug-DeOixEcJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1218-4XRwdW/PSITopzYYyTcMnrq0OaA\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 4632,
		"path": "../public/assets/classes._slug-DeOixEcJ.js"
	},
	"/assets/classes.index-D9SZPnuU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"727-rxiDyGdc70GmaEDkvYfKusOoVMo\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 1831,
		"path": "../public/assets/classes.index-D9SZPnuU.js"
	},
	"/assets/client-CTK3xwPo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35cab-1bPWLaXGoz36QDGdyWyV7b2SPKE\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 220331,
		"path": "../public/assets/client-CTK3xwPo.js"
	},
	"/assets/compare-BjhlK_Ov.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b29-1HZrxtIexNUBF2FyRARL5YU1r2Q\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 2857,
		"path": "../public/assets/compare-BjhlK_Ov.js"
	},
	"/assets/createLucideIcon-wlqc77si.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c7-VFhKnLm926S1BBXZYjEJHwe6v4M\"",
		"mtime": "2026-09-20T21:06:22.460Z",
		"size": 1223,
		"path": "../public/assets/createLucideIcon-wlqc77si.js"
	},
	"/assets/createServerFn-Bigh35ix.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12c5-bVufOL06Asv8wAsJZb8GClk+pSU\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 4805,
		"path": "../public/assets/createServerFn-Bigh35ix.js"
	},
	"/assets/disclaimer-DqH6xmOZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ff-r/veMpuDMf098bbcUbIInmk/NeI\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 767,
		"path": "../public/assets/disclaimer-DqH6xmOZ.js"
	},
	"/assets/dist-C53_VIE6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c6-TnPlc9ceDcwfEmB51bV+rjsSdGE\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 5318,
		"path": "../public/assets/dist-C53_VIE6.js"
	},
	"/assets/dist-CLzDelPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29b-qvB7awxCmje2lyc+deqwwg7M7W0\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 667,
		"path": "../public/assets/dist-CLzDelPw.js"
	},
	"/assets/dist-CUo6Qsda.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cbc-0vqFMJNnsjTXgE7BWHLOCdyzpXE\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 7356,
		"path": "../public/assets/dist-CUo6Qsda.js"
	},
	"/assets/explain-button-C-oUPs71.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82a-UDV4FLSeqZch9ZQDJWyiwj2xPdU\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 2090,
		"path": "../public/assets/explain-button-C-oUPs71.js"
	},
	"/assets/favorites-DFTHhbjS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"683-plzQZZl/jyApDV42Xnnc1ed9Hkk\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 1667,
		"path": "../public/assets/favorites-DFTHhbjS.js"
	},
	"/assets/flashcards-XUNDbtMv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"973-vxLgBOzXUNa5xg1Khb/MR/WdvtY\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 2419,
		"path": "../public/assets/flashcards-XUNDbtMv.js"
	},
	"/assets/index-eT5pTkOE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f30d-DZvRGZ8gJs3Ml6MCxk0mFJbBoaM\"",
		"mtime": "2026-09-20T21:06:22.459Z",
		"size": 520973,
		"path": "../public/assets/index-eT5pTkOE.js"
	},
	"/assets/invariant-DEEwAagU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c-eVh/3DMi1s3cxf4N/OJar+ew1jA\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 60,
		"path": "../public/assets/invariant-DEEwAagU.js"
	},
	"/assets/jsx-runtime-BkSabwWG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c1-VkW1xFbt56H2FC99QIi6PTzaFIo\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 961,
		"path": "../public/assets/jsx-runtime-BkSabwWG.js"
	},
	"/assets/label-BZYstlT7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ca-HNBoEPUufVJzwqDmVeyNT9oQ20M\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 714,
		"path": "../public/assets/label-BZYstlT7.js"
	},
	"/assets/learn-D-cNRxxN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10e9-CtOTJUaeKA+E+UdvGIICXOXH32I\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 4329,
		"path": "../public/assets/learn-D-cNRxxN.js"
	},
	"/assets/learning-CGLWwBYf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bbd-rcM+F5q6xwrNVgvVD03oWG4vPU8\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 3005,
		"path": "../public/assets/learning-CGLWwBYf.js"
	},
	"/assets/lightbulb-X9Q18DTi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e-LOeSQS6rgF3HoksiRWdfX4GG6fA\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 286,
		"path": "../public/assets/lightbulb-X9Q18DTi.js"
	},
	"/assets/link-DypkUY3Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117e-BENprj4+/nPe9WIKCct4dExIic4\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 4478,
		"path": "../public/assets/link-DypkUY3Q.js"
	},
	"/assets/manufacturers._id-B8Oy-9tI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12e7-3d0ynlMbIC1pr1+sfAdMf5ySZns\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 4839,
		"path": "../public/assets/manufacturers._id-B8Oy-9tI.js"
	},
	"/assets/manufacturers._id-BxAuiIJ8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-n+3v3FVPpuIVSn4S9ugWyFZkuto\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 164,
		"path": "../public/assets/manufacturers._id-BxAuiIJ8.js"
	},
	"/assets/manufacturers._id-ojd0A297.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-ZoY7Mp8qQpMfkZhSKts25wmVQI8\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 189,
		"path": "../public/assets/manufacturers._id-ojd0A297.js"
	},
	"/assets/manufacturers.index-C1OmXPw4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cdb-+OZBBchGR+EE7pn5w07lgxmw73M\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 3291,
		"path": "../public/assets/manufacturers.index-C1OmXPw4.js"
	},
	"/assets/manufacturers.index-Quprxw91.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-qGx+Pwbm8Tw3p/wZE2tccKM/kcQ\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 165,
		"path": "../public/assets/manufacturers.index-Quprxw91.js"
	},
	"/assets/manufacturers.index-ojd0A297.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bd-ZoY7Mp8qQpMfkZhSKts25wmVQI8\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 189,
		"path": "../public/assets/manufacturers.index-ojd0A297.js"
	},
	"/assets/matchContext-wephjrwY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa-k3CgpPs0dU1jPEUcYu69V4gfKgo\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 170,
		"path": "../public/assets/matchContext-wephjrwY.js"
	},
	"/assets/medicine-card-CaupFIya.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a31-wWU38Ko/5thGkjEBS+NbCuIer0k\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 2609,
		"path": "../public/assets/medicine-card-CaupFIya.js"
	},
	"/assets/medicines._slug-DQP7cNO_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1211f-UPv3fOunYmqzE/xY5u0RPV3Ua/Y\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 74015,
		"path": "../public/assets/medicines._slug-DQP7cNO_.js"
	},
	"/assets/medicines.index-DMks1gtq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"914-ay//ZN4xiEpBId1MDAzzR1Jad6M\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 2324,
		"path": "../public/assets/medicines.index-DMks1gtq.js"
	},
	"/assets/memory-BXO3D9l5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a51-PcRskU5uS/ogsz7VEZv75NQVfGY\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 2641,
		"path": "../public/assets/memory-BXO3D9l5.js"
	},
	"/assets/password-field-CaZOmIdh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b80-f0oiuoER64de1BBsp8uVVRouSSQ\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 2944,
		"path": "../public/assets/password-field-CaZOmIdh.js"
	},
	"/assets/progress-CNURNY8z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ed-Vr7ENg+8tjoUzgWEifiRklJcA1g\"",
		"mtime": "2026-09-20T21:06:22.461Z",
		"size": 2285,
		"path": "../public/assets/progress-CNURNY8z.js"
	},
	"/assets/pronounce-CHpd5q9_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6ca-PaL6F7XHSEFMDDYKvm3GsVCWJcQ\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 1738,
		"path": "../public/assets/pronounce-CHpd5q9_.js"
	},
	"/assets/qss-Bqk2G4CH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc-2N+JPG3965eWSB0QcbrDwgkqrgU\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 444,
		"path": "../public/assets/qss-Bqk2G4CH.js"
	},
	"/assets/quiz-FrAK5im4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce4-i2Y4Wrotx1MRUzW0ZT7E+W8pcsQ\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 3300,
		"path": "../public/assets/quiz-FrAK5im4.js"
	},
	"/assets/react-Biqg-U6H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ebf-gH02D69rQx5/7qM2rnLqBJ6aQdg\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 7871,
		"path": "../public/assets/react-Biqg-U6H.js"
	},
	"/assets/react-dom-D15O1ec3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f34-CcIo+oZaFH6+kXirfJEIip/ojcc\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 3892,
		"path": "../public/assets/react-dom-D15O1ec3.js"
	},
	"/assets/reset-password-F5ynJth6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82e-oDbxdUwkEBvawDq2yJds1Asb8ic\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 2094,
		"path": "../public/assets/reset-password-F5ynJth6.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/route-D2AvoqpU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-+IEs04ZPQoZu38tFBpbqm0yDR8s\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 142,
		"path": "../public/assets/route-D2AvoqpU.js"
	},
	"/assets/redirect-Dhm19zUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-ePZWCXP5uehkmkGMkMl5xDch+/Y\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 500,
		"path": "../public/assets/redirect-Dhm19zUi.js"
	},
	"/assets/routes-D0qsTNKo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16fb-6n3iIh9z/J9Rd9iyFF0l6gz3Dao\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 5883,
		"path": "../public/assets/routes-D0qsTNKo.js"
	},
	"/assets/skeleton-QJ8CqYXc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-g7qi/cPfuijFMxRQA3ok9StIFjE\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 223,
		"path": "../public/assets/skeleton-QJ8CqYXc.js"
	},
	"/assets/study-7t0Z6_ZL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"caf-+NPjOSDHz7ou5aNBHU/ceByDuEw\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 3247,
		"path": "../public/assets/study-7t0Z6_ZL.js"
	},
	"/assets/settings-DLmvtNy4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"591e-UH1ClXO/aKEtZnB3VsYyRFOZpi0\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 22814,
		"path": "../public/assets/settings-DLmvtNy4.js"
	},
	"/assets/styles-zVUWfrmK.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14d6b-ZxJIQt7I3qqlkJTG85qNLSuErRM\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 85355,
		"path": "../public/assets/styles-zVUWfrmK.css"
	},
	"/assets/pronunciation-CYUxytp1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"527-1/sFR4FX93fNDIhUhTHnhJBayfo\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 1319,
		"path": "../public/assets/pronunciation-CYUxytp1.js"
	},
	"/assets/terms-8KBum6P5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a5-kmrhSYRQPYqF+JaDZtZCRayxHwI\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 1957,
		"path": "../public/assets/terms-8KBum6P5.js"
	},
	"/assets/textarea-Cjwe6mBT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"223-qA/SijIQUsmGioa9XXRwNLpP7vw\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 547,
		"path": "../public/assets/textarea-Cjwe6mBT.js"
	},
	"/assets/use-user-data-N6krAhBT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14b7-sGwKunrn4caCci6DzXX5MlgbYaw\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 5303,
		"path": "../public/assets/use-user-data-N6krAhBT.js"
	},
	"/assets/useMatch-B8imZaS4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cc-az8ZU9NeywthYlENkxjdvPvOowA\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 716,
		"path": "../public/assets/useMatch-B8imZaS4.js"
	},
	"/assets/useRouter-Bg9UCIHO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b3-sJN8Gk5rkZPYuODhfuBwP4B0Yxg\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 179,
		"path": "../public/assets/useRouter-Bg9UCIHO.js"
	},
	"/assets/useStore-wc8-pOEg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154d-7poDEUm0QDR7hDYJURN0yhrHnK4\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 5453,
		"path": "../public/assets/useStore-wc8-pOEg.js"
	},
	"/assets/utils-D6P2453W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e44-9xfkyvrLmslI7mRP06LoMSltFww\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 28228,
		"path": "../public/assets/utils-D6P2453W.js"
	},
	"/assets/verification-badge-km73TzRu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18e-L715twaQAwjFtdQhfm63bw1A9ws\"",
		"mtime": "2026-09-20T21:06:22.462Z",
		"size": 398,
		"path": "../public/assets/verification-badge-km73TzRu.js"
	},
	"/assets/aistudio/.gitignore": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2-tGKu4cbEAbPHCadG6UAGd8L/vrI\"",
		"mtime": "2026-09-20T21:06:24.276Z",
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
