import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { APPS, LANES, type Lane } from "@/catalog";

const PAGE_NAME = "Mực Atlas — 18 ứng dụng Thu Đông 2026";
const PAGE_DESC =
  "Mực Atlas giới thiệu 18 ứng dụng Thu Đông 2026: truyền hình, lịch âm, SCADA, phòng thu, công trường Hưng Yên và cầu Việt–Mỹ. Song ngữ Việt–Anh, tối giản kiểu Đài Loan.";

export const Route = createFileRoute("/")({
  component: Atlas,
});

function structuredData() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: PAGE_NAME,
        inLanguage: ["vi", "en"],
        description: PAGE_DESC,
        keywords: "Thu Đông 2026, Red Mahogany, Burnt Olive, Muted Clay, ứng dụng Việt",
      },
      {
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
            description: `${app.vi} ${app.en}`,
          },
        })),
      },
    ],
  });
}

const TICKER =
  "Bắc Bộ  ·  Kiều bào Đài Loan  ·  Hà Nội–Hưng Yên  ·  Tân Trúc  ·  Đài Trung  ·  Cao Hùng  ·  Phòng thu  ·  Cảng Việt–Mỹ  ·  Mùa Tết  ·  ";

function Atlas() {
  const [lane, setLane] = useState<Lane | "all">("all");
  const [q, setQ] = useState("");
  const [enLead, setEnLead] = useState(false);

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return APPS.filter((app) => {
      if (lane !== "all" && !app.lanes.includes(lane)) return false;
      if (!query) return true;
      return [app.name, app.vi, app.en, app.whereVi, app.whereEn, app.host]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [lane, q]);

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-5 py-6 text-ink md:px-10 md:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData() }} />

      <a
        href="#muc-luc"
        className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        Tới danh mục ứng dụng
      </a>

      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-ink/15 pb-4">
        <div>
          <p className="text-xs tracking-widest text-olive uppercase">FW 2026 · Taipei ink</p>
          <p className="font-display text-2xl leading-none">Mực Atlas</p>
        </div>
        <button
          type="button"
          aria-pressed={enLead}
          onClick={() => setEnLead((v) => !v)}
          className="inline-flex min-h-11 items-center border border-ink/20 px-4 text-sm transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          {enLead ? "English first" : "Việt trước"}
        </button>
        <nav className="nav-scroll flex w-full gap-5 text-sm md:w-auto" aria-label="Mục trang">
          <a className="inline-flex min-h-11 shrink-0 items-center" href="#loi-gioi-thieu">
            Lời giới thiệu
          </a>
          <a className="inline-flex min-h-11 shrink-0 items-center" href="#nhu-cau">
            Nhu cầu
          </a>
          <a className="inline-flex min-h-11 shrink-0 items-center" href="#bang-mau">
            Màu
          </a>
          <a className="inline-flex min-h-11 shrink-0 items-center" href="#muc-luc">
            Ứng dụng
          </a>
        </nav>
      </header>

      <section className="grid items-center gap-8 py-10 md:grid-cols-12 md:py-16">
        <p className="ink-vert hidden text-xs tracking-widest text-olive md:col-span-1 md:block">
          THU ĐÔNG 2026 · FALL WINTER
        </p>
        <div className={`md:col-span-7 ${enLead ? "flex flex-col-reverse gap-4" : "flex flex-col gap-4"}`}>
          <h1 className="font-display text-4xl leading-tight md:text-6xl" lang="vi">
            Mười tám ứng dụng cho một mùa mực.
          </h1>
          <p className="font-display text-2xl leading-snug text-mahogany md:text-3xl" lang="en">
            Eighteen tools for an ink winter.
          </p>
        </div>
        <div className="md:col-span-4">
          <Seal />
        </div>
      </section>

      <div className="overflow-hidden border-y border-ink/15 py-3" aria-hidden="true">
        <p className="ticker text-xs tracking-widest whitespace-nowrap text-olive uppercase">
          {TICKER}
          {TICKER}
        </p>
      </div>

      <section id="loi-gioi-thieu" className="grid gap-8 py-12 md:grid-cols-12">
        <h2 className="font-display text-sm tracking-widest text-olive uppercase md:col-span-3">
          Lời giới thiệu
          <span className="mt-2 block normal-case tracking-normal" lang="en">
            A short briefing
          </span>
        </h2>
        <div className={`md:col-span-9 ${enLead ? "flex flex-col-reverse gap-6" : "flex flex-col gap-6"}`}>
          <div lang="vi" className="space-y-4 text-lg leading-relaxed">
            <p>
              Thu Đông 2026, người ở Đông Á và kiều bào không săn màu neon. Họ ở với mực: sô-cô-la, gỗ
              mahogany, ô-liu cháy, đất sét hồng. Đó là lõi bảng Pantone mùa này — Red Mahogany, Burnt
              Olive, Muted Clay — và cũng là cách Đài Loan vẽ áp phích: nhiều khoảng trống, một nét, một
              quả.
            </p>
            <p>
              Nhu cầu thật gom ở bốn nơi. Bắc Bộ và kiều bào cần lịch âm, đài, truyền hình, chữ lớn. Vành
              đai Hà Nội–Hưng Yên cùng khu công nghiệp Đài Loan cần sổ công trường và SCADA. Phòng thu Việt,
              Đài, Đức, Nhật cần thu và mastering. Bàn xuất nhập khẩu cùng lớp STEM cần cầu Việt–Mỹ. Trang
              này xếp đúng thứ tự đó. Tài liệu gốc có hai mươi lăm dòng; bảy dòng lặp. Còn lại mười tám địa
              chỉ, mỗi địa chỉ một lần.
            </p>
          </div>
          <div lang="en" className="space-y-4 leading-relaxed text-olive">
            <p>
              Fall–Winter 2026 in East Asia is not a neon season. People stay with ink: chocolate, mahogany,
              burnt olive, muted clay. That is the Pantone core this winter, and it is how Taipei posters
              work — space, one stroke, one fruit.
            </p>
            <p>
              Demand sits in four places. The Vietnamese North and the diaspora need a lunar calendar, radio,
              television, and large type. The Hanoi–Hưng Yên corridor and Taiwan’s factory belts need site
              logs and SCADA. Studios want a clean take and a master. Trade desks and STEM rooms want a
              Vietnam–US bridge. The source list had twenty-five lines and seven repeats. Eighteen addresses
              remain, each once.
            </p>
          </div>
        </div>
      </section>

      <section id="nhu-cau" className="border-t border-ink/15 py-12">
        <h2 className="font-display text-3xl">Bốn vùng đang cần</h2>
        <p className="mt-2 text-olive" lang="en">
          Four places where these tools are actually wanted. Qualitative fit, not invented traffic.
        </p>
        <ol className="mt-8 grid gap-8 md:grid-cols-2">
          <Demand
            n="01"
            vi="Bắc Bộ và kiều bào"
            en="The North and the diaspora"
            bodyVi="Ninh Bình, Hà Nội, Hưng Yên, rồi người Việt ở Đài Loan, Mỹ, Nhật, Hàn, Đức. Từ cuối thu đến Tết: lịch âm, VTV, VOV, cờ chữ lớn, sổ tiền cho người làm tự do."
            bodyEn="Ninh Bình, Hanoi, Hưng Yên, then Vietnamese in Taiwan, the US, Japan, Korea, and Germany. From late autumn through Tết: lunar dates, VTV, VOV, large-type chess, a freelance ledger."
            enLead={enLead}
          />
          <Demand
            n="02"
            vi="Xưởng và công trường"
            en="Plant and site"
            bodyVi="Hành lang Hà Nội–Hưng Yên có Tháp V-MLK. Tân Trúc, Đài Trung, Cao Hùng và khu công nghiệp trong nước cần người đọc được SCADA, không cần thêm một trang demo."
            bodyEn="The Hanoi–Hưng Yên corridor has the V-MLK tower. Hsinchu, Taichung, Kaohsiung, and Vietnam’s industrial parks need people who can read SCADA, not another demo page."
            enLead={enLead}
          />
          <Demand
            n="03"
            vi="Phòng thu"
            en="The studio"
            bodyVi="MC, phóng viên, lớp giọng. THU VÀNG, Thu Vàng ghi âm và NO. 555 — giọng nam Hà Nội, mastering trên máy, xuất WAV. Nghe rõ, không kèn."
            bodyEn="MCs, reporters, voice classes. THU VÀNG, the Thu Vàng recorder, and NO. 555 — a Hanoi male voice, mastered on device, exported as WAV. Clear, not tinny."
            enLead={enLead}
          />
          <Demand
            n="04"
            vi="Cầu Việt–Mỹ"
            en="The Vietnam–US bridge"
            bodyVi="ĐỊA CẦU cho kim ngạch và logistics. Chỉ Huy Mặt Trời cho lớp không gian. SIÊU CỜ VUA cho bàn cờ mang nhịp USS. Đúng người đang nhìn hai bờ."
            bodyEn="ĐỊA CẦU for trade and logistics. Sun Command for a space classroom. SIÊU CỜ VUA for a USS-paced board. For people who already look both ways."
            enLead={enLead}
          />
        </ol>
      </section>

      <section id="bang-mau" className="border-t border-ink/15 py-12">
        <h2 className="font-display text-3xl">Màu mùa, không phải màu mẫu</h2>
        <p className="mt-2 max-w-2xl text-olive" lang="en">
          Five colors. The fruit is the only shout. Clay is a rule, never small type — elders still need contrast.
        </p>
        <ul className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
          <Swatch name="Mực sô-cô-la" en="Chocolate ink" note="Nền đêm mùa đông, chữ trên giấy." swatch="bg-ink" />
          <Swatch name="Giấy gạo" en="Rice paper" note="Khoảng trống kiểu áp phích Đài Bắc." swatch="bg-paper" />
          <Swatch
            name="Red Mahogany"
            en="Quả hồng"
            note="Một điểm nhấn. Liên kết, số thứ tự, con dấu."
            swatch="bg-mahogany"
          />
          <Swatch
            name="Burnt Olive"
            en="Ô-liu cháy"
            note="Chữ phụ. Đủ đậm để đọc trên giấy."
            swatch="bg-olive"
          />
          <Swatch
            name="Muted Clay"
            en="Đất sét"
            note="Chỉ để kẻ và để thở. Không dùng cho chữ nhỏ."
            swatch="bg-clay"
          />
        </ul>
      </section>

      <section id="muc-luc" className="border-t border-ink/15 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl">Mục lục</h2>
          <p className="text-olive">
            {list.length} / {APPS.length}
            <span lang="en"> showing</span>
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
          <label className="block min-w-0 flex-1">
            <span className="sr-only">Tìm ứng dụng</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={enLead ? "Search a name, a job, a region" : "Tìm tên, việc, vùng"}
              className="min-h-11 w-full border border-ink/20 bg-paper px-3 text-ink"
            />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Lọc theo nhu cầu">
            {LANES.map((item) => {
              const on = lane === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setLane(item.id)}
                  className={`inline-flex min-h-11 items-center px-3 text-sm transition-transform duration-150 ease-out active:scale-[0.96] ${
                    on ? "bg-ink text-paper" : "border border-ink/20 text-ink"
                  }`}
                >
                  {enLead ? item.en : item.vi}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          {list.length === 0 ? (
            <p className="py-10 text-olive">
              Không có ứng dụng khớp. Xóa chữ tìm hoặc chọn «Cả mười tám».
              <span className="mt-1 block" lang="en">
                Nothing matches. Clear the search or choose all eighteen.
              </span>
            </p>
          ) : (
            list.map((app, i) => (
              <article
                key={app.host}
                className="rise grid gap-4 border-t border-ink/15 py-7 md:grid-cols-12"
                style={{ animationDelay: `${Math.min(i, 8) * 45}ms` }}
              >
                <p className="font-display text-xl text-mahogany md:col-span-1">
                  {String(app.n).padStart(2, "0")}
                </p>
                <div className="md:col-span-7">
                  <h3 className="font-display text-3xl leading-none">{app.name}</h3>
                  <p className="mt-2 text-sm break-all text-olive">{app.host}</p>
                  <div className={`mt-4 ${enLead ? "flex flex-col-reverse gap-2" : "flex flex-col gap-2"}`}>
                    <p lang="vi" className="text-lg leading-relaxed">
                      {app.vi}
                    </p>
                    <p lang="en" className="leading-relaxed text-olive">
                      {app.en}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 md:col-span-4 md:items-start">
                  <p className="text-sm leading-relaxed">
                    <span lang="vi">{app.whereVi}</span>
                    <span className="mt-1 block text-olive" lang="en">
                      {app.whereEn}
                    </span>
                  </p>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center bg-mahogany px-4 text-paper transition-transform duration-150 ease-out active:scale-[0.96]"
                  >
                    {enLead ? `Open ${app.name}` : `Mở ${app.name}`}
                  </a>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      <footer className="border-t border-ink/15 py-8 text-sm leading-relaxed text-olive">
        <p lang="vi">
          Danh mục đọc từ tài liệu APP GROK. Màu bám Pantone Thu Đông 2026 — Red Mahogany, Burnt Olive,
          Muted Clay — trên mực sô-cô-la và giấy gạo. QuangDT là bài giảng mô phỏng, không phải thiết bị y
          tế và không chẩn đoán.
        </p>
        <p className="mt-3" lang="en">
          Catalog read from the APP GROK document. Palette locked to the Pantone Fall/Winter 2026 core.
          QuangDT is a teaching simulation, not a medical device and not a diagnosis.
        </p>
      </footer>
    </div>
  );
}

function Demand({
  n,
  vi,
  en,
  bodyVi,
  bodyEn,
  enLead,
}: {
  n: string;
  vi: string;
  en: string;
  bodyVi: string;
  bodyEn: string;
  enLead: boolean;
}) {
  return (
    <li className="border-t border-ink/15 pt-4">
      <p className="font-display text-mahogany">{n}</p>
      <div className={enLead ? "mt-2 flex flex-col-reverse" : "mt-2"}>
        <h3 className="font-display text-2xl" lang="vi">
          {vi}
        </h3>
        <p lang="en" className="text-olive">
          {en}
        </p>
      </div>
      <div className={enLead ? "mt-3 flex flex-col-reverse gap-2" : "mt-3 flex flex-col gap-2"}>
        <p lang="vi" className="leading-relaxed">
          {bodyVi}
        </p>
        <p lang="en" className="leading-relaxed text-olive">
          {bodyEn}
        </p>
      </div>
    </li>
  );
}

function Swatch({ name, en, note, swatch }: { name: string; en: string; note: string; swatch: string }) {
  return (
    <li className="flex items-center gap-4 py-4">
      <span
        className={`h-8 w-8 shrink-0 border border-ink/20 ${swatch}`}
        aria-hidden="true"
      />
      <span>
        <span className="block font-medium">{name}</span>
        <span className="block text-sm text-olive">
          {en} — {note}
        </span>
      </span>
    </li>
  );
}

function Seal() {
  return (
    <svg viewBox="0 0 200 230" className="mx-auto w-full max-w-56" role="img" aria-label="Con dấu mực Thu Đông 2026">
      <title>Con dấu Mực Atlas</title>
      <circle className="seal-orbit" cx="100" cy="104" r="92" />
      <circle className="seal-ring" cx="100" cy="104" r="76" />
      <rect className="mist" x="18" y="28" width="64" height="2" fill="currentColor" opacity="0.35" />
      <rect className="mist mist-b" x="120" y="186" width="58" height="2" fill="currentColor" opacity="0.28" />
      <circle className="seal-fruit" cx="100" cy="108" r="42" />
      <circle className="seal-pit" cx="100" cy="112" r="7" />
      <path
        d="M100 66c18-16 40-6 44 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="rule-draw"
      />
      <text
        x="100"
        y="214"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Source Serif 4, serif"
        fontSize="15"
        letterSpacing="3"
      >
        MỰC · FW26
      </text>
    </svg>
  );
}
