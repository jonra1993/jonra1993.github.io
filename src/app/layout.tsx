import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="w-full pt-16 flex-grow">{children}</main>
            <footer className="py-8 border-t border-gray-800">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400">
                    © 2024 Jonathan Vargas. All rights reserved.
                  </p>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
