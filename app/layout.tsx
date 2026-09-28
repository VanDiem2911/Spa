import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omispabaoduongsuckhoe.com"),
  title: "OMI SPA - Massage Body, Cổ Vai Gáy & Gội Đầu Dưỡng Sinh | Tân Bình",
  description:
    "OMI SPA tại 159 Ba Vân, P.14, Q. Tân Bình, TP. HCM. Cung cấp Massage Body, Massage Cổ Vai Gáy, Gội đầu dưỡng sinh và Massage chân trong không gian yên tĩnh, sạch sẽ.",
  keywords: [
    "OMI SPA",
    "massage Tân Bình",
    "massage body Tân Bình",
    "massage cổ vai gáy Tân Bình",
    "gội đầu dưỡng sinh Tân Bình",
    "massage chân Tân Bình",
    "spa bảo dưỡng sức khỏe",
  ],
  authors: [{ name: "OMI SPA" }],
  creator: "OMI SPA",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://omispabaoduongsuckhoe.com",
    title: "OMI SPA - Bảo Dưỡng Sức Khoẻ | Massage & Gội Đầu Dưỡng Sinh Tân Bình",
    description:
      "Không gian yên tĩnh, sạch sẽ cùng kỹ thuật viên tay nghề cao. 159 Ba Vân, P.14, Q. Tân Bình, TP. HCM.",
    siteName: "OMI SPA",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Không gian thư giãn tại OMI SPA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMI SPA - Bảo Dưỡng Sức Khoẻ",
    description: "Massage Body, Cổ Vai Gáy & Gội Đầu Dưỡng Sinh tại Tân Bình, TP. HCM",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#6E1F2A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${cormorant.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#F8F5EF] text-[#292624] selection:bg-[#6E1F2A] selection:text-[#F8F5EF] min-h-screen relative flex flex-col font-sans">
        <ScrollProgressBar />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
