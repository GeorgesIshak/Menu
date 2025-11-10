import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

// Elegant fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "3al Lebnani | Restaurant Menu",
  description:
    "Explore 3al Lebnani’s premium selection of burgers, sandwiches, grill plates, pasta, and salads. Crafted with authentic Lebanese flavor.",
  keywords: [
    "3al Lebnani",
    "Lebanese grill",
    "restaurant menu",
    "burgers",
    "sandwiches",
    "pasta",
    "grill",
  ],
  openGraph: {
    title: "3al Lebnani Menu",
    description:
      "Discover our signature Lebanese burgers, sandwiches, and grill plates.",
    url: "https://menu.vercel.app",
    siteName: "3al Lebnani",
    images: [
      {
        url: "/menu-logo.png",
        width: 600,
        height: 600,
        alt: "3al Lebnani Menu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#050304",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${playfair.variable} ${poppins.variable}
          font-sans antialiased bg-[#050304] text-[#FDF3EB]
        `}
      >
        {children}
      </body>
    </html>
  );
}
