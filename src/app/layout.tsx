import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700","900"] });

export const metadata: Metadata = {
  title: "Gestion de vacantes y compañias",
  description: "Gestion de vacantes y compañias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
