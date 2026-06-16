import type { Metadata } from "next";
import { Lexend, Public_Sans } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ 
  subsets: ["latin"],
  variable: '--font-lexend',
});

const publicSans = Public_Sans({ 
  subsets: ["latin"],
  variable: '--font-public-sans',
});

export const metadata: Metadata = {
  title: "Arcly | Zero-Friction Resume Builder",
  description: "A free, client-side, resume builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${publicSans.variable} font-sans antialiased bg-neo-bg text-black`}>
        {children}
      </body>
    </html>
  );
}