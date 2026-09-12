import type { Metadata } from "next";
import {
  Della_Respira,
  Onest,
  Poppins,
  Sora,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const dellaRespira = Della_Respira({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-heading",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-body",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-number",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aazib Ali — Full Stack & App Developer",
  description:
    "Aazib Ali is a Full Stack & App Developer building modern websites, web applications, mobile apps, and AI-powered solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dellaRespira.variable} ${onest.variable} ${poppins.variable} ${sora.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}