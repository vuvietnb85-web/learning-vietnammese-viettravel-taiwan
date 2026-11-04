import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DXtmavuI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Eighteen unique addresses from the APP GROK document. Repeated rows were collapsed. */
var APPS = [
	{
		n: 1,
		name: "THU VÀNG",
		host: "record-compressor-mastering.grok.me",
		url: "https://record-compressor-mastering.grok.me",
		vi: "Phòng thu: ghi sạch, phóng thanh, quảng cáo, tách lời và trộn nhạc.",
		en: "Studio desk — clean takes, public-address, ads, vocal split, and a music merge.",
		lanes: ["thu"],
		whereVi: "Phòng thu Việt Nam, Đài Loan, Đức, Nhật",
		whereEn: "Studios in Vietnam, Taiwan, Germany, Japan"
	},
	{
		n: 2,
		name: "QuangDT",
		host: "vatliysinh-quangditruyen.grok.me",
		url: "https://vatliysinh-quangditruyen.grok.me",
		vi: "Xưởng mô phỏng quang di truyền: μLED, opsin, ánh sáng trong mô. Bài giảng — không phải thiết bị y tế.",
		en: "Optogenetics workshop: μLED, opsin, light in tissue. A lesson, not a medical device.",
		lanes: ["xuong"],
		whereVi: "Giảng đường sinh lý Việt Nam và Đài Loan",
		whereEn: "Physiology classrooms, Vietnam and Taiwan"
	},
	{
		n: 3,
		name: "SIÊU CỜ VUA",
		host: "chess-game-uss.grok.me",
		url: "https://chess-game-uss.grok.me",
		vi: "Bàn cờ vua toàn màn, kèm đài và công cụ ngay trên máy.",
		en: "Full-screen chess, with radio and tools kept on the device.",
		lanes: ["song", "cau"],
		whereVi: "Người chơi Việt, bàn cờ mang nhịp USS",
		whereEn: "Vietnamese players, USS-paced chess"
	},
	{
		n: 4,
		name: "KIM THÁP",
		host: "kientructhegioi-media.grok.me",
		url: "https://kientructhegioi-media.grok.me",
		vi: "Kim tự tháp thủy tinh, 99 công trình, kinh, truyền hình, đài, sách và bản đồ.",
		en: "Glass pyramid, 99 works, sutra, television, radio, books, and a map.",
		lanes: ["xuong", "song"],
		whereVi: "Người học kiến trúc Đông Á và người đọc kinh",
		whereEn: "East Asian architecture students and sutra readers"
	},
	{
		n: 5,
		name: "VÀNG 18",
		host: "vietnam-money-tool-hello.grok.me",
		url: "https://vietnam-money-tool-hello.grok.me",
		vi: "Mười tám ô sổ: tiền, khách, giờ làm và nhịp ngày cho người làm tự do.",
		en: "Eighteen cells for cash, clients, hours, and the shape of a freelance day.",
		lanes: ["song"],
		whereVi: "Hà Nội và người làm tự do trong kiều bào",
		whereEn: "Hanoi and freelance diaspora"
	},
	{
		n: 6,
		name: "Xưởng SCADA",
		host: "scada-automation-enginering.grok.me",
		url: "https://scada-automation-enginering.grok.me",
		vi: "Hai mươi hệ SCADA: mô tả, thiết kế, lập trình, giám sát và khắc phục.",
		en: "Twenty SCADA systems — describe, design, program, watch, and recover.",
		lanes: ["xuong"],
		whereVi: "Khu công nghiệp Việt Nam, Tân Trúc, Đài Trung, Cao Hùng",
		whereEn: "Vietnam industrial parks; Hsinchu, Taichung, Kaohsiung"
	},
	{
		n: 7,
		name: "Lịch Âm Việt",
		host: "lichamvietnam-amlich-lichviet.grok.me",
		url: "https://lichamvietnam-amlich-lichviet.grok.me",
		vi: "Âm dương, can chi, hoàng đạo, tiết khí và ngày lễ — nhịp từ Thu Đông sang Tết.",
		en: "Solar-lunar dates, can-chi, auspicious days, solar terms, and festivals through Tết.",
		lanes: ["song"],
		whereVi: "Bắc Bộ, miền Trung, kiều bào mùa lễ",
		whereEn: "The North, the Central coast, diaspora in festival season"
	},
	{
		n: 8,
		name: "SÓNG",
		host: "mini-radio-tivi-vietnam.grok.me",
		url: "https://mini-radio-tivi-vietnam.grok.me",
		vi: "Mini truyền hình và đài: mở là phát, chạm đổi kênh, giữ hai giây sang radio.",
		en: "Mini TV and radio. Open to play, tap for the next channel, hold two seconds for radio.",
		lanes: ["song"],
		whereVi: "Cả nước và kiều bào muốn một nút",
		whereEn: "Nationwide, and diaspora who want one button"
	},
	{
		n: 9,
		name: "TRẠM SÓNG",
		host: "xemtivi-ngheradio-thuam-docsach.grok.me",
		url: "https://xemtivi-ngheradio-thuam-docsach.grok.me",
		vi: "Trạm công dân: truyền hình, radio, báo, giá, việc làm, thu âm và bản đồ.",
		en: "A citizen desk — TV, radio, news, prices, jobs, recording, and a map.",
		lanes: ["song"],
		whereVi: "Người cần bản tin trong ngày",
		whereEn: "Anyone who needs the day’s briefing"
	},
	{
		n: 10,
		name: "Thu Vàng",
		host: "recorder-thuam-media.grok.me",
		url: "https://recorder-thuam-media.grok.me",
		vi: "Thu âm truyền thông và mastering trên máy, nén an toàn, tăng mười lăm phần trăm.",
		en: "Broadcast recording and on-device mastering, safely limited, lifted fifteen percent.",
		lanes: ["thu"],
		whereVi: "Phóng viên, MC, phòng thu bỏ túi",
		whereEn: "Reporters, MCs, pocket studios"
	},
	{
		n: 11,
		name: "Sóng",
		host: "xemtivi-ngheradio.grok.me",
		url: "https://xemtivi-ngheradio.grok.me",
		vi: "VTV, VOV và đài tỉnh trong một khung nhỏ, đúng việc xem và nghe.",
		en: "VTV, VOV, and provincial stations in one compact frame.",
		lanes: ["song"],
		whereVi: "Người xem truyền hình quốc gia mỗi tối",
		whereEn: "Evening viewers of national television"
	},
	{
		n: 12,
		name: "Tháp V-MLK",
		host: "vuquocviet-contruction-hanoi-hungyen-vmik.grok.me",
		url: "https://vuquocviet-contruction-hanoi-hungyen-vmik.grok.me",
		vi: "Sổ chỉ huy công trường bê tông toàn khối ở Hưng Yên. Lưu trên máy, mở được khi mất mạng.",
		en: "Site log for the cast-in-place tower in Hưng Yên. Stored on device, usable offline.",
		lanes: ["xuong"],
		whereVi: "Hưng Yên, hành lang Hà Nội",
		whereEn: "Hưng Yên, on the Hanoi corridor"
	},
	{
		n: 13,
		name: "VCONTRUCTIONNEW",
		host: "viet-contrution-vuquocviet.grok.me",
		url: "https://viet-contrution-vuquocviet.grok.me",
		vi: "Tòa V-MLK: an toàn, thi công, shop drawing và bản đồ 3D bán kính năm cây số.",
		en: "V-MLK tower — safety, construction, shop drawings, and a five-kilometre 3D map.",
		lanes: ["xuong"],
		whereVi: "Công trường V-MLK, Hà Nội–Hưng Yên",
		whereEn: "The V-MLK site, Hanoi–Hưng Yên"
	},
	{
		n: 14,
		name: "Chỉ Huy Mặt Trời",
		host: "vietnam-usa-sumenhkhonggian-spacex.grok.me",
		url: "https://vietnam-usa-sumenhkhonggian-spacex.grok.me",
		vi: "Hệ Mặt Trời ba chiều và năm chức năng chỉ huy, chạy trên máy.",
		en: "A three-dimensional solar system and five command functions, on device.",
		lanes: ["cau"],
		whereVi: "Lớp STEM Việt–Mỹ, người theo dõi không gian",
		whereEn: "Vietnam–US STEM rooms and space watchers"
	},
	{
		n: 15,
		name: "NO. 555",
		host: "viet-text-to-voice-media.grok.me",
		url: "https://viet-text-to-voice-media.grok.me",
		vi: "Giọng nam Hà Nội, không trần ký tự, mastering rồi xuất WAV.",
		en: "A Hanoi male voice, no character cap, mastered and exported as WAV.",
		lanes: ["thu"],
		whereVi: "MC, xưởng, lớp tiếng Việt và Hoa",
		whereEn: "MCs, plants, Vietnamese and Mandarin classrooms"
	},
	{
		n: 16,
		name: "SIÊU CỜ SÓNG",
		host: "chess-xiangq-tivi-radio-vietnam.grok.me",
		url: "https://chess-xiangq-tivi-radio-vietnam.grok.me",
		vi: "Nửa trên là truyền hình và đài. Nửa dưới là cờ, im tiếng.",
		en: "Television and radio above. Silent chess below.",
		lanes: ["song"],
		whereVi: "Nhà có người lớn tuổi và người chơi cờ",
		whereEn: "Homes with elders and chess players"
	},
	{
		n: 17,
		name: "An Khang",
		host: "nguoi-cao-tuoi-game-tivi-vietnam.grok.me",
		url: "https://nguoi-cao-tuoi-game-tivi-vietnam.grok.me",
		vi: "Cho người cao tuổi: VTV, VOV, cờ tướng chữ lớn, bàn cờ không phát tiếng.",
		en: "For older adults — national TV and radio, large-type xiangqi, a silent board.",
		lanes: ["song"],
		whereVi: "Gia đình Bắc Bộ, cần chữ lớn và tương phản ấm",
		whereEn: "Northern families who need large type and warm contrast"
	},
	{
		n: 18,
		name: "ĐỊA CẦU",
		host: "vietnam-usa.grok.me",
		url: "https://vietnam-usa.grok.me",
		vi: "Quả cầu ba chiều cùng kim ngạch và logistics xuất nhập khẩu Việt Nam–Hoa Kỳ.",
		en: "A 3D globe with Vietnam–United States trade value and logistics.",
		lanes: ["cau"],
		whereVi: "Bàn xuất nhập khẩu, cảng, lớp địa lý",
		whereEn: "Trade desks, ports, geography classes"
	}
];
var LANES = [
	{
		id: "all",
		vi: "Cả mười tám",
		en: "All eighteen"
	},
	{
		id: "song",
		vi: "Nghe nhìn & đời sống",
		en: "Sight, sound, daily life"
	},
	{
		id: "xuong",
		vi: "Xưởng & công trường",
		en: "Plant and site"
	},
	{
		id: "thu",
		vi: "Phòng thu",
		en: "Studio"
	},
	{
		id: "cau",
		vi: "Cầu Việt–Mỹ",
		en: "Vietnam–US bridge"
	}
];
var PAGE_NAME = "Mực Atlas — 18 ứng dụng Thu Đông 2026";
var PAGE_DESC = "Mực Atlas giới thiệu 18 ứng dụng Thu Đông 2026: truyền hình, lịch âm, SCADA, phòng thu, công trường Hưng Yên và cầu Việt–Mỹ. Song ngữ Việt–Anh, tối giản kiểu Đài Loan.";
function structuredData() {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "WebPage",
			name: PAGE_NAME,
			inLanguage: ["vi", "en"],
			description: PAGE_DESC,
			keywords: "Thu Đông 2026, Red Mahogany, Burnt Olive, Muted Clay, ứng dụng Việt"
		}, {
			"@type": "ItemList",
			name: "Mực Atlas Fall Winter 2026",
			itemListOrder: "https://schema.org/ItemListOrderAscending",
			numberOfItems: APPS.length,
			itemListElement: APPS.map((app) => ({
				"@type": "ListItem",
				position: app.n,
				item: {
					"@type": "SoftwareApplication",
					name: app.name,
					url: app.url,
					applicationCategory: "BusinessApplication",
					operatingSystem: "Web",
					inLanguage: ["vi", "en"],
					description: `${app.vi} ${app.en}`
				}
			}))
		}]
	});
}
var TICKER = "Bắc Bộ  ·  Kiều bào Đài Loan  ·  Hà Nội–Hưng Yên  ·  Tân Trúc  ·  Đài Trung  ·  Cao Hùng  ·  Phòng thu  ·  Cảng Việt–Mỹ  ·  Mùa Tết  ·  ";
function Atlas() {
	const [lane, setLane] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const [enLead, setEnLead] = (0, import_react.useState)(false);
	const list = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return APPS.filter((app) => {
			if (lane !== "all" && !app.lanes.includes(lane)) return false;
			if (!query) return true;
			return [
				app.name,
				app.vi,
				app.en,
				app.whereVi,
				app.whereEn,
				app.host
			].join(" ").toLowerCase().includes(query);
		});
	}, [lane, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-screen max-w-6xl px-5 py-6 text-ink md:px-10 md:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: structuredData() }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#muc-luc",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper",
				children: "Tới danh mục ứng dụng"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-ink/15 pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-olive uppercase",
						children: "FW 2026 · Taipei ink"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl leading-none",
						children: "Mực Atlas"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": enLead,
						onClick: () => setEnLead((v) => !v),
						className: "inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm transition-transform duration-150 ease-out active:scale-[0.96]",
						children: enLead ? "English first" : "Việt trước"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "nav-scroll flex w-full gap-5 text-sm md:w-auto",
						"aria-label": "Mục trang",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex min-h-11 shrink-0 items-center",
								href: "#loi-gioi-thieu",
								children: "Lời giới thiệu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex min-h-11 shrink-0 items-center",
								href: "#nhu-cau",
								children: "Nhu cầu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex min-h-11 shrink-0 items-center",
								href: "#bang-mau",
								children: "Màu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex min-h-11 shrink-0 items-center",
								href: "#muc-luc",
								children: "Ứng dụng"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid items-center gap-8 py-10 md:grid-cols-12 md:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ink-vert hidden text-xs tracking-widest text-olive md:col-span-1 md:block",
						children: "THU ĐÔNG 2026 · FALL WINTER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `md:col-span-7 ${enLead ? "flex flex-col-reverse gap-4" : "flex flex-col gap-4"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl leading-tight md:text-6xl",
							lang: "vi",
							children: "Mười tám ứng dụng cho một mùa mực."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl leading-snug text-mahogany md:text-3xl",
							lang: "en",
							children: "Eighteen tools for an ink winter."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border-y border-ink/15 py-3",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "ticker text-xs tracking-widest whitespace-nowrap text-olive uppercase",
					children: [TICKER, TICKER]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "loi-gioi-thieu",
				className: "grid gap-8 py-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-sm tracking-widest text-olive uppercase md:col-span-3",
					children: ["Lời giới thiệu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block normal-case tracking-normal",
						lang: "en",
						children: "A short briefing"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `md:col-span-9 ${enLead ? "flex flex-col-reverse gap-6" : "flex flex-col gap-6"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						lang: "vi",
						className: "space-y-4 text-lg leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Thu Đông 2026, người ở Đông Á và kiều bào không săn màu neon. Họ ở với mực: sô-cô-la, gỗ mahogany, ô-liu cháy, đất sét hồng. Đó là lõi bảng Pantone mùa này — Red Mahogany, Burnt Olive, Muted Clay — và cũng là cách Đài Loan vẽ áp phích: nhiều khoảng trống, một nét, một quả." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nhu cầu thật gom ở bốn nơi. Bắc Bộ và kiều bào cần lịch âm, đài, truyền hình, chữ lớn. Vành đai Hà Nội–Hưng Yên cùng khu công nghiệp Đài Loan cần sổ công trường và SCADA. Phòng thu Việt, Đài, Đức, Nhật cần thu và mastering. Bàn xuất nhập khẩu cùng lớp STEM cần cầu Việt–Mỹ. Trang này xếp đúng thứ tự đó. Tài liệu gốc có hai mươi lăm dòng; bảy dòng lặp. Còn lại mười tám địa chỉ, mỗi địa chỉ một lần." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						lang: "en",
						className: "space-y-4 leading-relaxed text-olive",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fall–Winter 2026 in East Asia is not a neon season. People stay with ink: chocolate, mahogany, burnt olive, muted clay. That is the Pantone core this winter, and it is how Taipei posters work — space, one stroke, one fruit." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Demand sits in four places. The Vietnamese North and the diaspora need a lunar calendar, radio, television, and large type. The Hanoi–Hưng Yên corridor and Taiwan’s factory belts need site logs and SCADA. Studios want a clean take and a master. Trade desks and STEM rooms want a Vietnam–US bridge. The source list had twenty-five lines and seven repeats. Eighteen addresses remain, each once." })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "nhu-cau",
				className: "border-t border-ink/15 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Bốn vùng đang cần"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-olive",
						lang: "en",
						children: "Four places where these tools are actually wanted. Qualitative fit, not invented traffic."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-8 grid gap-8 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demand, {
								n: "01",
								vi: "Bắc Bộ và kiều bào",
								en: "The North and the diaspora",
								bodyVi: "Ninh Bình, Hà Nội, Hưng Yên, rồi người Việt ở Đài Loan, Mỹ, Nhật, Hàn, Đức. Từ cuối thu đến Tết: lịch âm, VTV, VOV, cờ chữ lớn, sổ tiền cho người làm tự do.",
								bodyEn: "Ninh Bình, Hanoi, Hưng Yên, then Vietnamese in Taiwan, the US, Japan, Korea, and Germany. From late autumn through Tết: lunar dates, VTV, VOV, large-type chess, a freelance ledger.",
								enLead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demand, {
								n: "02",
								vi: "Xưởng và công trường",
								en: "Plant and site",
								bodyVi: "Hành lang Hà Nội–Hưng Yên có Tháp V-MLK. Tân Trúc, Đài Trung, Cao Hùng và khu công nghiệp trong nước cần người đọc được SCADA, không cần thêm một trang demo.",
								bodyEn: "The Hanoi–Hưng Yên corridor has the V-MLK tower. Hsinchu, Taichung, Kaohsiung, and Vietnam’s industrial parks need people who can read SCADA, not another demo page.",
								enLead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demand, {
								n: "03",
								vi: "Phòng thu",
								en: "The studio",
								bodyVi: "MC, phóng viên, lớp giọng. THU VÀNG, Thu Vàng ghi âm và NO. 555 — giọng nam Hà Nội, mastering trên máy, xuất WAV. Nghe rõ, không kèn.",
								bodyEn: "MCs, reporters, voice classes. THU VÀNG, the Thu Vàng recorder, and NO. 555 — a Hanoi male voice, mastered on device, exported as WAV. Clear, not tinny.",
								enLead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demand, {
								n: "04",
								vi: "Cầu Việt–Mỹ",
								en: "The Vietnam–US bridge",
								bodyVi: "ĐỊA CẦU cho kim ngạch và logistics. Chỉ Huy Mặt Trời cho lớp không gian. SIÊU CỜ VUA cho bàn cờ mang nhịp USS. Đúng người đang nhìn hai bờ.",
								bodyEn: "ĐỊA CẦU for trade and logistics. Sun Command for a space classroom. SIÊU CỜ VUA for a USS-paced board. For people who already look both ways.",
								enLead
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "bang-mau",
				className: "border-t border-ink/15 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Màu mùa, không phải màu mẫu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-olive",
						lang: "en",
						children: "Five colors. The fruit is the only shout. Clay is a rule, never small type — elders still need contrast."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 divide-y divide-ink/15 border-y border-ink/15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatch, {
								name: "Mực sô-cô-la",
								en: "Chocolate ink",
								note: "Nền đêm mùa đông, chữ trên giấy.",
								swatch: "bg-ink"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatch, {
								name: "Giấy gạo",
								en: "Rice paper",
								note: "Khoảng trống kiểu áp phích Đài Bắc.",
								swatch: "bg-paper"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatch, {
								name: "Red Mahogany",
								en: "Quả hồng",
								note: "Một điểm nhấn. Liên kết, số thứ tự, con dấu.",
								swatch: "bg-mahogany"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatch, {
								name: "Burnt Olive",
								en: "Ô-liu cháy",
								note: "Chữ phụ. Đủ đậm để đọc trên giấy.",
								swatch: "bg-olive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swatch, {
								name: "Muted Clay",
								en: "Đất sét",
								note: "Chỉ để kẻ và để thở. Không dùng cho chữ nhỏ.",
								swatch: "bg-clay"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "muc-luc",
				className: "border-t border-ink/15 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: "Mục lục"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-olive",
							children: [
								list.length,
								" / ",
								APPS.length,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									lang: "en",
									children: " showing"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-4 md:flex-row md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Tìm ứng dụng"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: enLead ? "Search a name, a job, a region" : "Tìm tên, việc, vùng",
								className: "min-h-11 w-full border border-ink/20 bg-paper px-3 text-ink"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							role: "group",
							"aria-label": "Lọc theo nhu cầu",
							children: LANES.map((item) => {
								const on = lane === item.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": on,
									onClick: () => setLane(item.id),
									className: `inline-flex min-h-11 items-center px-3 text-sm transition-transform duration-150 ease-out active:scale-[0.96] ${on ? "bg-ink text-paper" : "border border-ink/20 text-ink"}`,
									children: enLead ? item.en : item.vi
								}, item.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "py-10 text-olive",
							children: ["Không có ứng dụng khớp. Xóa chữ tìm hoặc chọn «Cả mười tám».", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block",
								lang: "en",
								children: "Nothing matches. Clear the search or choose all eighteen."
							})]
						}) : list.map((app, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rise grid gap-4 border-t border-ink/15 py-7 md:grid-cols-12",
							style: { animationDelay: `${Math.min(i, 8) * 45}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl text-mahogany md:col-span-1",
									children: String(app.n).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl leading-none",
											children: app.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm break-all text-olive",
											children: app.host
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `mt-4 ${enLead ? "flex flex-col-reverse gap-2" : "flex flex-col gap-2"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												lang: "vi",
												className: "text-lg leading-relaxed",
												children: app.vi
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												lang: "en",
												className: "leading-relaxed text-olive",
												children: app.en
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4 md:col-span-4 md:items-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											lang: "vi",
											children: app.whereVi
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-olive",
											lang: "en",
											children: app.whereEn
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: app.url,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex min-h-11 items-center bg-mahogany px-4 text-paper transition-transform duration-150 ease-out active:scale-[0.96]",
										children: enLead ? `Open ${app.name}` : `Mở ${app.name}`
									})]
								})
							]
						}, app.host))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-ink/15 py-8 text-sm leading-relaxed text-olive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					lang: "vi",
					children: "Danh mục đọc từ tài liệu APP GROK. Màu bám Pantone Thu Đông 2026 — Red Mahogany, Burnt Olive, Muted Clay — trên mực sô-cô-la và giấy gạo. QuangDT là bài giảng mô phỏng, không phải thiết bị y tế và không chẩn đoán."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					lang: "en",
					children: "Catalog read from the APP GROK document. Palette locked to the Pantone Fall/Winter 2026 core. QuangDT is a teaching simulation, not a medical device and not a diagnosis."
				})]
			})
		]
	});
}
function Demand({ n, vi, en, bodyVi, bodyEn, enLead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border-t border-ink/15 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-mahogany",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: enLead ? "mt-2 flex flex-col-reverse" : "mt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl",
					lang: "vi",
					children: vi
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					lang: "en",
					className: "text-olive",
					children: en
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: enLead ? "mt-3 flex flex-col-reverse gap-2" : "mt-3 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					lang: "vi",
					className: "leading-relaxed",
					children: bodyVi
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					lang: "en",
					className: "leading-relaxed text-olive",
					children: bodyEn
				})]
			})
		]
	});
}
function Swatch({ name, en, note, swatch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-center gap-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `h-8 w-8 shrink-0 border border-ink/20 ${swatch}`,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-medium",
			children: name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block text-sm text-olive",
			children: [
				en,
				" — ",
				note
			]
		})] })]
	});
}
function Seal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 230",
		className: "mx-auto w-full max-w-56",
		role: "img",
		"aria-label": "Con dấu mực Thu Đông 2026",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "Con dấu Mực Atlas" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				className: "seal-orbit",
				cx: "100",
				cy: "104",
				r: "92"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				className: "seal-ring",
				cx: "100",
				cy: "104",
				r: "76"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				className: "mist",
				x: "18",
				y: "28",
				width: "64",
				height: "2",
				fill: "currentColor",
				opacity: "0.35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				className: "mist mist-b",
				x: "120",
				y: "186",
				width: "58",
				height: "2",
				fill: "currentColor",
				opacity: "0.28"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				className: "seal-fruit",
				cx: "100",
				cy: "108",
				r: "42"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				className: "seal-pit",
				cx: "100",
				cy: "112",
				r: "7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 66c18-16 40-6 44 8",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4",
				className: "rule-draw"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "100",
				y: "214",
				textAnchor: "middle",
				fill: "currentColor",
				fontFamily: "Source Serif 4, serif",
				fontSize: "15",
				letterSpacing: "3",
				children: "MỰC · FW26"
			})
		]
	});
}
//#endregion
export { Atlas as component };
