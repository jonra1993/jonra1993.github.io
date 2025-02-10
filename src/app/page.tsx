import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Quotes } from "@/components/quotes";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Quotes />
    </>
  );
}
