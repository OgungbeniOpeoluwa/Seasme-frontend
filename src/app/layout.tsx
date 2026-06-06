import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const matter = localFont({
  src: [
    { path: "../../public/font/matter-font-family/Matter-TRIAL-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/font/matter-font-family/Matter-TRIAL-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/font/matter-font-family/Matter-TRIAL-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/font/matter-font-family/Matter-TRIAL-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../../public/font/matter-font-family/Matter-TRIAL-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-matter",
});

export const metadata: Metadata = {
  title: "Creed OTC",
  description: "Regulated, professional-grade OTC trading platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${matter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
