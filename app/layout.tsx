import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amora Café",
  description: "Café, pastelaria e pequenos-almoços em Guimarães"
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt" suppressHydrationWarning>
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
      </head>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
