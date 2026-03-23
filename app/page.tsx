// app/page.tsx
import Image from "next/image";
import Link from "next/link";

type MenuItem = {
  id: string;
  name: string;
  ingredients: string;
  price: string;
};

type Section = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};



// MENU SECTIONS
const MENU_SECTIONS: Section[] = [

  {
    id: "shawarma-sandwiches",
    title: "شاورما",
    subtitle: "أفضل شاورما طازجة",
    items: [
      { id: "shawarma-small", name: "شاورما دجاج صغير", ingredients: "شاورما، ثوم، كبيس، بطاطا", price: "٣٠٠٬٠٠٠ ل.ل" },
      { id: "shawarma-large", name: "شاورما دجاج كبير", ingredients: "شاورما، ثوم، كبيس، بطاطا", price: "٤٠٠٬٠٠٠ ل.ل" },
      { id: "shawarma-double-extra", name: "شاورما دبل اكسترا", ingredients: "شاورما، ثوم، كبيس، بطاطا", price: "٦٥٠٬٠٠٠ ل.ل" },
      { id: "shawarma-special", name: "شاورما سبيسيال", ingredients: "شاورما، جبنة، ذرة، فطر، بطاطا", price: "٥٥٠٬٠٠٠ ل.ل" },
      { id: "shawarma-bania", name: "شاورما بانية", ingredients: "شاورما، جبنة، ذرة، فطر، مقلية", price: "٥٥٠٬٠٠٠ ل.ل" },
    ],
  },
  {
    id: "burgers",
    title: "برغر",
    subtitle: "برغر لذيذ وشهي",
    items: [
      { id: "ham-burger", name: "هام برغر", ingredients: "شرحة لحمة مع مايونيز، بصل، بندورة، جبنة شيدر", price: "٦٠٠٬٠٠٠ ل.ل" },
      { id: "chicken-burger", name: "تشيكن برغر", ingredients: "شرحة دجاج مقلي، مايونيز، جبنة قشقوان، خس، كبيس", price: "٤٥٠٬٠٠٠ ل.ل" },
      { id: "scallop-burger", name: "اسكالوب برغر", ingredients: "شرحة سكالوب، مايونيز، خس، جبنة قشقوان، باربكيو", price: "٥٥٠٬٠٠٠ ل.ل" },
    ],
  },
  {
    id: "other-sandwiches",
    title: "ساندويشات ",
    subtitle: "خيارات متنوعة من الساندويشات",
    items: [
      { id: "tawook-sandwich", name: "طاووق", ingredients: "طاووق، ثوم، ملفوف، كبيس، بطاطا", price: "٤٥٠٬٠٠٠ ل.ل" },
      { id: "tawook-double", name: "طاووق دبل", ingredients: "قطع دجاج متبل، كريم توم، سلاط ملفوف، كبيس خيار، بطاطا، كتشب", price: "٦٥٠٬٠٠٠ ل.ل" },
      { id: "francesco", name: "فرانشيسكو", ingredients: "صدر جاج عالغريل مع صوص صويا، جبنة قشقوان، درة، فطر، مايونيز", price: "٤٥٠٬٠٠٠ ل.ل" },
      { id: "soda-chicken", name: "سودا دجاج", ingredients: "ثوم، كبيس، بطاطا، دبس رمان", price: "٣٠٠٬٠٠٠ ل.ل" },


      { id: "crispy-sandwich", name: "كريسبي", ingredients: "دجاج مقرمش، ملفوف، كبيس، بطاطا", price: "٤٠٠٬٠٠٠ ل.ل" },
      { id: "fajita-chicken", name: "فاهيتا", ingredients: "دجاج متبل، بصل， فليفلة， فطر， درة， صوص افوكا", price: "٦٠٠٬٠٠٠ ل.ل" },
      { id: "potato-sandwich", name: "ساندويش بطاطا", ingredients: "بطاطا، ثوم، كبيس، ملفوف، صوص", price: "١٥٠٬٠٠٠ ل.ل" },
      { id: "potato-double", name: "بطاطا دبل", ingredients: "بطاطا، ثوم، كبيس، ملفوف، صوص", price: "٢٥٠٬٠٠٠ ل.ل" },
      { id: "potato-cheese-besmon", name: "بطاطا مع جبنة بسمون", ingredients: "بطاطا، جبنة بسمون، ملفوف، صوص", price: "٣٠٠٬٠٠٠ ل.ل" },
      { id: "grilled-chicken-slices", name: "شرحات مطفاية", ingredients: "شرحات دجاج مطفاية بالتوم والحامض، سمون، كريم توم， بطاطا， كبيس خيار", price: "٥٠٠٬٠٠٠ ل.ل" },
      { id: "scallop", name: "اسكالوب", ingredients: "شرحة سكالوب، مايونيز، خس، جبنة قشقوان، باربكيو", price: "٥٠٠٬٠٠٠ ل.ل" },

 // ✅ NEW ITEMS
    { id: "potato-box-small", name: "بطاطا بوكس صغير", ingredients: "بطاطا، صوص", price: "١٥٠٬٠٠٠ ل.ل" },
    { id: "potato-box-large", name: "بطاطا بوكس كبير", ingredients: "بطاطا، صوص", price: "٣٠٠٬٠٠٠ ل.ل" },
    ],
  },
  {
    id: "meals",
    title: "الوجبات",
    subtitle: "وجبات جاهزة وشهية",
    items: [
{ id: "shawarma-single-meal", name: "وجبة شاورما عربي شخص واحد", ingredients: "ساندويش شاورما ١، كبيس خيار، كريم توم، سلاط ملفوف، بطاطا، حرحورة", price: "٦٥٠٬٠٠٠ ل.ل" },

{ id: "shawarma-double-meal", name: "وجبة شاورما شخصين", ingredients: "ساندويش شاورما ٢، كبيس خيار، كريم توم، سلاط ملفوف، بطاطا، حرحورة", price: "١٬٠٠٠٬٠٠٠ ل.ل" },

{ id: "shawarma-triple-meal", name: "وجبة شاورما صحن عدد ٣", ingredients: "ساندويش شاورما ٣، كبيس خيار، كريم توم، سلاط ملفوف، بطاطا، حرحورة", price: "١٬٦٠٠٬٠٠٠ ل.ل" },

{ id: "shawarma-kilo", name: "شاورما كيلو عربي", ingredients: "بطاطا، كبيس، كريم توم، حرحورة", price: "١٬٦٠٠٬٠٠٠ ل.ل" },

{ id: "shawarma-half-kilo", name: "شاورما نص كيلو عربي", ingredients: "بطاطا، كبيس، كريم توم، حرحورة", price: "٨٥٠٬٠٠٠ ل.ل" },

{ id: "crispy-single-meal", name: "وجبة كريسبي شخص واحد", ingredients: "٤ قطع كريسبي، بطاطا، مايونيز", price: "٨٠٠٬٠٠٠ ل.ل" },

{ id: "crispy-double-meal", name: "وجبة كريسبي شخصين", ingredients: "٨ قطع كريسبي، بطاطا، مايونيز", price: "١٬٥٠٠٬٠٠٠ ل.ل" },

{ id: "tawook-mini-meal", name: "وجبة طاووق ميني", ingredients: "٤ سياخ طاووق، بطاطا، سلاط ملفوف، كريم توم، حرحورة", price: "٨٠٠٬٠٠٠ ل.ل" },

{ id: "tawook-double-meal", name: "وجبة طاووق دبل", ingredients: "٨ سياخ طاووق، بطاطا، سلاط ملفوف، كريم توم، حرحورة", price: "١٬٥٠٠٬٠٠٠ ل.ل" },
    ],
  },
  {
    id: "drinks",
    title: "مشروبات",
    subtitle: "باردة ومنعشة",
    items: [
      { id: "water", name: "مياه", ingredients: "-", price: "٣٥٬٠٠٠ ل.ل" },
      { id: "soft-drinks", name: "مشروبات غازية", ingredients: "-", price: "١٠٠٬٠٠٠ ل.ل" },
    ],
  },
];


const COLORS = {
  accent: '#FFB88A', // The Gold/Peach
  muted: '#C7AFA5',  // The Taupe/Sand
  bg: '#050304',
  card: '#141010'
};



export default function PremiumMenu() {
  return (
    <main className="relative min-h-screen bg-[#050304] px-4 py-12 font-sans selection:bg-[#FFB88A]/30" dir="rtl">
      {/* Background Decorative Element - Soft Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-orange-900/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-2xl">
        <div className="rounded-[40px] border border-white/5 bg-gradient-to-b from-[#1A1616] to-[#0D0B0B] px-6 py-12 shadow-[0_40px_100px_rgba(0,0,0,0.8)] backdrop-blur-sm md:px-12">
          
          {/* HEADER SECTION */}
          <header className="mb-16 flex flex-col items-center text-center">
            {/* Logo Container with "Internal Glow" */}
            <div className="relative mb-8 group">
              <div className="absolute inset-0 rounded-full bg-[#FFB88A]/20 blur-2xl group-hover:bg-[#FFB88A]/40 transition-all duration-700" />
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-black/40 p-4 shadow-inner">
                <Image
                  src="/menu-logo.png" // Ensure this is a transparent PNG if possible
                  alt="3al Lebnani"
                  width={140}
                  height={140}
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,184,138,0.3)]"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-white">
              عل <span className="text-[#FFB88A]">لبناني</span>
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <div className="h-[1px] w-8 bg-gradient-to-l from-[#FFB88A] to-transparent" />
              <p className="text-[11px] md:text-xs text-[#C7AFA5] uppercase tracking-[0.5em] font-medium">
                ساندويشات • فاهيتا • مشروبات
              </p>
              <div className="h-[1px] w-8 bg-gradient-to-r from-[#FFB88A] to-transparent" />
            </div>
            
            <p className="mt-4 text-xs italic text-[#C7AFA5]/60">تأسس عام ٢٠٢٥</p>
          </header>

          {/* MENU SECTIONS */}
          <div className="space-y-16">
            {MENU_SECTIONS.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>

          {/* FOOTER */}
          <footer className="mt-20 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] uppercase tracking-widest text-[#C7AFA5]/40">صنع بكل حب • 3al Lebnani</p>
          </footer>
        </div>
      </div>

      {/* Floating WhatsApp - Premium Style */}
      <Link
        href="https://wa.me/96181525197"
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:-translate-y-1 active:scale-95"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />        </svg>
      </Link>
    </main>
  );
}
function SectionBlock({ section }: { section: Section }) {
  return (
    <section className="relative">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="font-serif text-2xl font-bold text-[#FFB88A] whitespace-nowrap">
          {section.title}
        </h2>
        <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      <ul className="grid gap-y-6 gap-x-10 md:grid-cols-1">
        {section.items.map((item) => (
          <li key={item.id} className="group cursor-default">
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[15px] font-semibold text-[#FDF3EB] group-hover:text-[#FFB88A] transition-colors">
                  {item.name}
                </span>
                <p className="text-[12px] leading-relaxed text-[#C7AFA5]/70 font-light">
                  {item.ingredients}
                </p>
              </div>

              <div className="flex-1 mb-1 border-b border-white/5 border-dashed" />

              <span className="text-[14px] font-bold text-[#FFB88A] tabular-nums bg-[#FFB88A]/5 px-2 py-1 rounded">
                {item.price}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}