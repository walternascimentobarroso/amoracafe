import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { I18nProvider } from "@/components/I18nProvider";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Amora Café",
  description: "Café, pastelaria e pequenos-almoços em Guimarães"
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var key = "amoracafe-theme";
                var savedTheme = localStorage.getItem(key);
                var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                var useDark = savedTheme ? savedTheme === "dark" : prefersDark;
                document.documentElement.classList.toggle("dark", useDark);
              })();
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var key = "amoracafe-language";
                var savedLanguage = localStorage.getItem(key);
                var browserLanguage = navigator.language.toLowerCase();
                var initialLanguage = savedLanguage === "pt" || savedLanguage === "en"
                  ? savedLanguage
                  : (browserLanguage.indexOf("pt") === 0 ? "pt" : "en");
                document.documentElement.lang = initialLanguage;
              })();
            `
          }}
        />
      </head>
      <body>
        <I18nProvider>
          <SiteHeader />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
