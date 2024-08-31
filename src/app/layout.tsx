import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navmenu from "@/components/Navmenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prototype Page",
  description: "Prototype page for testing components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header>
        <Navmenu />
      </header>
      <main className={inter.className}>{children}</main>
      <footer style={{marginBottom: '0px'}}>
        <h3>This is the footer</h3>
      </footer>
      </body>
    </html>
  );
}
