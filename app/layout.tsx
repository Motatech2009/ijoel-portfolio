import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ijoel | Software, Sites e Catálogos Digitais",
  description: "Software sob medida, sites e catálogos digitais desenvolvidos por Ijoel para negócios e serviços públicos da região de Londrina/PR.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
