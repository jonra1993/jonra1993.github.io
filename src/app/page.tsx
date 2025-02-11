import type { Metadata } from "next";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Quotes } from "@/components/quotes";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
} satisfies Metadata;

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Quotes />
    </>
  );
}
