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

// Arabic numerals function
const toArabicNumbers = (numberStr: string) => {
  const arabicNumbers = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
  return numberStr.replace(/\d/g, (d) => arabicNumbers[parseInt(d)]);
};

// MENU SECTIONS
const MENU_SECTIONS: Section[] = [
  {
    id: "sandwiches",
    title: "ساندويشات",
    subtitle: "أفضل الساندويشات الطازجة",
    items: [
      {
        id: "shawarma-small",
        name: "شاورما دجاج صغير",
        ingredients: "شاورما، ثوم، كبيس، بطاطا",
        price: "٣٠٠٬٠٠٠ ل.ل",
      },
      {
        id: "shawarma-large",
        name: "شاورما دجاج كبير",
        ingredients: "شاورما، ثوم، كبيس، بطاطا",
        price: "٣٥٠٬٠٠٠ ل.ل",
      },
      {
        id: "tawook-sandwich",
        name: "طاووق",
        ingredients: "طاووق، ثوم، ملفوف، كبيس، بطاطا",
        price: "٤٠٠٬٠٠٠ ل.ل",
      },
      {
        id: "crispy-sandwich",
        name: "كريسبي",
        ingredients: "دجاج مقرمش، ملفوف، كبيس، بطاطا، باربكيو",
        price: "٤٠٠٬٠٠٠ ل.ل",
      },
      {
        id: "fajita",
        name: "فاهيتا",
        ingredients: " أفوكادو، فليفلة، فطر، ذرة، بصل",
        price: "٥٠٠٬٠٠٠ ل.ل",
      },
      {
        id: "soda-chicken",
        name: "سودا دجاج",
        ingredients: "ثوم، كبيس، بطاطا، دبس رمان",
        price: "٢٥٠٬٠٠٠ ل.ل",
      },
      {
        id: "potato-sandwich",
        name: "ساندويش بطاطا",
        ingredients: "بطاطا، ثوم، كبيس، ملفوف، صوص",
        price: "١٠٠٬٠٠٠ ل.ل",
      },
    ],
  },
  {
    id: "drinks",
    title: "مشروبات",
    subtitle: "باردة ومنعشة",
    items: [
      {
        id: "water",
        name: "مياه",
        ingredients: "-",
        price: "٣٠٬٠٠٠ ل.ل",
      },
       {
        id: "soft-drinks",
        name: "مشروبات غازية",
        ingredients: "-",
        price: "٧٠٬٠٠٠ ل.ل",
      },
    ],
  },
];




export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#050304] px-4 py-8" dir="rtl">
      <div className="w-full max-w-3xl">
        <div className="rounded-[28px] border border-white/10 bg-[#141010]/95 px-6 py-8 text-[#FDF3EB] shadow-[0_24px_80px_rgba(0,0,0,0.9)] md:px-10 md:py-10">
          
          {/* HEADER */}
          <header className="mb-10 flex flex-col items-center text-center">
            <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-white/40 bg-black/40 md:h-40 md:w-40">
              <Image
                src="/menu-logo.png"
                alt="3al Lebnani"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            <h1 className="mt-2 text-4xl md:text-5xl font-serif font-semibold tracking-[0.05em] text-white uppercase">
              3al Lebnani
            </h1>

            <p className="mt-2 text-sm md:text-base text-[#C7AFA5] uppercase tracking-[0.35em]">
              ساندويشات • فاهيتا • مشروبات
            </p>

            <div className="mt-4 h-px w-32 bg-gradient-to-r from-transparent via-[#FFB88A]/70 to-transparent" />
          </header>

          {/* MENU ITEMS */}
          <div className="space-y-12">
            {MENU_SECTIONS.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/961XXXXXXXX"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105 hover:shadow-[#25D366]/30"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={26}
          height={26}
        />
      </Link>
    </main>
  );
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section>
      <div className="mb-4 text-right">
        <h2 className="font-serif text-[22px] font-semibold tracking-[0.1em] text-[#FFB88A] uppercase">
          {section.title}
        </h2>
        {section.subtitle && (
          <p className="mt-1 text-[13px] text-[#C7AFA5]">{section.subtitle}</p>
        )}
        <div className="mt-2 h-px w-12 bg-white/15 ml-auto" />
      </div>

      <ul className="space-y-3 text-[14px]">
        {section.items.map((item) => (
          <li key={item.id} className="space-y-1 text-right">
            <div className="flex items-baseline gap-3 justify-between">
              <span className="font-medium text-[#FDF3EB]">{item.name}</span>
              <span className="flex-1 border-b border-dashed border-white/10" />
              <span className="whitespace-nowrap text-[13px] font-semibold text-[#FFB88A]">
                {item.price}
              </span>
            </div>
            <p className="text-[12px] text-[#C7AFA5]">{item.ingredients}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
