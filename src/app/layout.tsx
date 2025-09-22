import type { Metadata } from "next";
import { outfit } from "@/core/fonts";
import { Header } from "@/shared/components/header";
import { Footer } from "@/shared/components/footer";

import "../core/styles/globals.css";

export const metadata: Metadata = {
  title: "CMO Construtora",
  description:
    "Empreendimentos · Ilumi Bueno Residências · Raízes Parque Cascavel · Residencial Lago Areião · Solar Amazônia · Residencial Floramazônia · Solo Vaca Brava.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${outfit.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
