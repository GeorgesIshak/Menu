// app/page.tsx
import AbuShuhabChat from "@/components/AbuShuhabChat";
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

const LEFT_SECTIONS: Section[] = [
  {
    id: "burgers",
    title: "BURGERS",
    subtitle: "Signature flame-grilled burgers",
    items: [
      {
        id: "fajita-burger",
        name: "Fajita Burger",
        ingredients: "Grilled chicken, peppers, onions, cheese, fajita sauce",
        price: "$8.0",
      },
      {
        id: "swiss-mushroom-burger",
        name: "Swiss Mushroom Burger",
        ingredients: "Beef patty, Swiss cheese, sautéed mushrooms, garlic mayo",
        price: "$8.5",
      },
      {
        id: "crispy-burger",
        name: "Crispy Chicken Burger",
        ingredients: "Crispy chicken fillet, lettuce, pickles, mayo",
        price: "$7.5",
      },
      {
        id: "classic-beef-burger",
        name: "Classic Beef Burger",
        ingredients: "Beef patty, cheddar, lettuce, tomato, burger sauce",
        price: "$7.0",
      },
      {
        id: "double-beef-burger",
        name: "Double Beef Burger",
        ingredients: "Double beef patty, double cheese, lettuce, tomato",
        price: "$9.0",
      },
      {
        id: "philly-steak-burger",
        name: "Philly Steak Burger",
        ingredients: "Steak strips, onions, peppers, melted cheese",
        price: "$9.5",
      },
    ],
  },
  {
    id: "grill",
    title: "GRILL & PLATES",
    subtitle: "Charcoal classics & specialties",
    items: [
      {
        id: "tawook-plate",
        name: "Charcoal Tawook Plate",
        ingredients: "Marinated chicken cubes, fries, garlic sauce, bread",
        price: "$10.0",
      },
      {
        id: "grilled-chicken-plate",
        name: "Grilled Chicken Plate",
        ingredients: "Grilled chicken, salad, fries, house sauce",
        price: "$10.0",
      },
      {
        id: "mixed-grill",
        name: "Mixed Grill",
        ingredients: "Kafta, steak, tawook, grilled vegetables, bread",
        price: "$12.0",
      },
      {
        id: "philly-steak-plate",
        name: "Philly Steak Plate",
        ingredients: "Steak strips, peppers, onions, cheese, side salad",
        price: "$11.0",
      },
    ],
  },
  {
    id: "salads",
    title: "SALADS",
    subtitle: "Fresh bowls & sides",
    items: [
      {
        id: "crab-salad",
        name: "Crab Salad",
        ingredients: "Crab sticks, lettuce, corn, mayo sauce",
        price: "$6.0",
      },
      {
        id: "chicken-caesar-salad",
        name: "Chicken Caesar Salad",
        ingredients:
          "Grilled chicken, lettuce, croutons, parmesan, caesar dressing",
        price: "$7.0",
      },
      {
        id: "house-salad",
        name: "House Salad",
        ingredients: "Mixed greens, tomato, cucumber, house dressing",
        price: "$5.0",
      },
    ],
  },
];

const RIGHT_SECTIONS: Section[] = [
  {
    id: "sandwiches",
    title: "SANDWICHES & SUBS",
    subtitle: "Street-style sandwiches",
    items: [
      {
        id: "potato-cheese-sand",
        name: "Potato Cheese Sandwich",
        ingredients: "Fries, cheese, pickles, house sauce, toasted bread",
        price: "$4.0",
      },
      {
        id: "tawook-cheese-sand",
        name: "Tawook Cheese Sandwich",
        ingredients: "Grilled tawook, cheese, garlic sauce, pickles",
        price: "$5.0",
      },
      {
        id: "grilled-chicken-sand",
        name: "Grilled Chicken Sandwich",
        ingredients: "Grilled chicken, lettuce, tomato, mayo",
        price: "$5.0",
      },
      {
        id: "chicken-shawarma-sand",
        name: "Chicken Shawarma Sandwich",
        ingredients: "Chicken shawarma, pickles, garlic sauce, fries",
        price: "$5.0",
      },
      {
        id: "gas-chicken-sand",
        name: "Gaz Chicken Sandwich",
        ingredients: "Marinated chicken grilled on gas, lettuce, sauce",
        price: "$4.5",
      },
      {
        id: "philly-sub",
        name: "Philly Steak Submarine",
        ingredients: "Steak, onions, peppers, cheese, long bread",
        price: "$6.5",
      },
    ],
  },
  {
    id: "pasta",
    title: "PASTA & FETTUCCINE",
    subtitle: "Creamy oven dishes",
    items: [
      {
        id: "fettuccine-alfredo",
        name: "Fettuccine Alfredo",
        ingredients: "Creamy parmesan sauce, fettuccine pasta",
        price: "$8.0",
      },
      {
        id: "chicken-fettuccine",
        name: "Chicken Fettuccine",
        ingredients: "Chicken, mushrooms, creamy alfredo sauce",
        price: "$9.0",
      },
      {
        id: "philadelphia-pasta",
        name: "Philadelphia Pasta",
        ingredients: "Steak, Philadelphia cheese, creamy sauce",
        price: "$9.5",
      },
      {
        id: "spicy-pasta",
        name: "Spicy Creamy Pasta",
        ingredients: "Creamy spicy sauce, peppers, cheese",
        price: "$8.5",
      },
    ],
  },
  {
    id: "drinks",
    title: "DRINKS",
    subtitle: "Cold & refreshing",
    items: [
      {
        id: "soft-drinks",
        name: "Soft Drinks",
        ingredients: "Selection of cans and bottled soft drinks",
        price: "$1.5",
      },
      {
        id: "water",
        name: "Mineral Water",
        ingredients: "Still bottled water",
        price: "$1.0",
      },
      {
        id: "fresh-juice",
        name: "Fresh Juice",
        ingredients: "Orange, apple or seasonal juice",
        price: "$2.5",
      },
      {
        id: "iced-tea",
        name: "Iced Tea",
        ingredients: "Lemon or peach iced tea",
        price: "$2.0",
      },
    ],
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#050304] px-4 py-8">
      <div className="w-full max-w-5xl">
        <div className="rounded-[28px] border border-white/10 bg-[#141010]/95 px-6 py-8 text-[#FDF3EB] shadow-[0_24px_80px_rgba(0,0,0,0.9)] md:px-10 md:py-10">
          {/* HEADER */}
         {/* HEADER */}
<header className="mb-14 flex flex-col items-center text-center">
  <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-full border border-white/40 bg-black/40 md:h-48 md:w-48">
    <Image
      src="/menu-logo.png"
      alt="3al Lebnani"
      width={200}
      height={200}
      className="object-contain"
    />
  </div>

  <h1 className="mt-2 text-4xl md:text-6xl font-serif font-semibold tracking-[0.05em] text-white uppercase">
    3al Lebnani
  </h1>

  <p className="mt-3 text-sm md:text-base text-[#C7AFA5] uppercase tracking-[0.35em]">
    Burgers • Sandwiches • Pasta • Grill
  </p>

  <div className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-[#FFB88A]/70 to-transparent" />
</header>


          {/* GRID */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {/* LEFT COLUMN */}
            <div className="space-y-10 md:pr-8 md:border-r md:border-white/10">
              {LEFT_SECTIONS.map((section) => (
                <SectionBlock key={section.id} section={section} />
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-10 md:pl-8">
              {RIGHT_SECTIONS.map((section) => (
                <SectionBlock key={section.id} section={section} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ WhatsApp Button */}
      <Link
        href="https://wa.me/961XXXXXXXX" // <-- Replace with your WhatsApp number
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
            <AbuShuhabChat />

    </main>
  );
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section>
      {/* Section header */}
      <div className="mb-4">
        <h2 className="font-serif text-[20px] md:text-[22px] font-semibold tracking-[0.1em] text-[#FFB88A] uppercase">
          {section.title}
        </h2>
        {section.subtitle && (
          <p className="mt-1 text-[12px] text-[#C7AFA5]">{section.subtitle}</p>
        )}
        <div className="mt-3 h-px w-10 bg-white/15" />
      </div>

      {/* Items */}
      <ul className="space-y-3 text-[13px]">
        {section.items.map((item) => (
          <li key={item.id} className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="font-medium text-[#FDF3EB]">{item.name}</span>
              <span className="flex-1 border-b border-dashed border-white/10" />
              <span className="whitespace-nowrap text-[12px] font-semibold text-[#FFB88A]">
                {item.price}
              </span>
            </div>
            <p className="text-[11px] text-[#C7AFA5]">{item.ingredients}</p>
          </li>
        ))}
      </ul>
    </section>
    
  );
        <AbuShuhabChat />

}
