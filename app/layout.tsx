import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono, Oswald } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});
export const metadata: Metadata = {
  title: "MiseIt",
  description: "MiseIt - the only storage solution you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${oswald.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
