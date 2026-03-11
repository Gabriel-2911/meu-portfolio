import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Cortes Teixeira | Desenvolvedor Full-Stack",
  description: "Portfólio de Gabriel Cortes Teixeira. Desenvolvedor Full-Stack especializado em .NET, React, Next.js e banco de dados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}