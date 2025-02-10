"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Brain,
  GraduationCap,
  Quote,
} from "lucide-react";
import { logger } from "@/libs/default-logger";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    // <HeroUINavbar maxWidth="xl" position="sticky">
    //   <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
    //     <NavbarBrand as="li" className="gap-3 max-w-fit">
    //       <NextLink className="flex justify-start items-center gap-1" href="/">
    //         <Logo />
    //         <p className="font-bold text-inherit">ACME</p>
    //       </NextLink>
    //     </NavbarBrand>
    //     <ul className="hidden lg:flex gap-4 justify-start ml-2">
    //       {siteConfig.navItems.map((item) => (
    //         <NavbarItem key={item.href}>
    //           <NextLink
    //             className={clsx(
    //               linkStyles({ color: "foreground" }),
    //               "data-[active=true]:text-primary data-[active=true]:font-medium"
    //             )}
    //             color="foreground"
    //             href={item.href}
    //           >
    //             {item.label}
    //           </NextLink>
    //         </NavbarItem>
    //       ))}
    //     </ul>
    //   </NavbarContent>

    //   <NavbarContent
    //     className="hidden sm:flex basis-1/5 sm:basis-full"
    //     justify="end"
    //   >
    //     <NavbarItem className="hidden sm:flex gap-2">
    //       <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
    //         <TwitterIcon className="text-default-500" />
    //       </Link>
    //       <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
    //         <DiscordIcon className="text-default-500" />
    //       </Link>
    //       <Link isExternal aria-label="Github" href={siteConfig.links.github}>
    //         <GithubIcon className="text-default-500" />
    //       </Link>
    //       <ThemeSwitch />
    //     </NavbarItem>
    //     <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
    //     <NavbarItem className="hidden md:flex">
    //       <Button
    //         isExternal
    //         as={Link}
    //         className="text-sm font-normal text-default-600 bg-default-100"
    //         href={siteConfig.links.sponsor}
    //         startContent={<HeartFilledIcon className="text-danger" />}
    //         variant="flat"
    //       >
    //         Sponsor
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>

    //   <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
    //     <Link isExternal aria-label="Github" href={siteConfig.links.github}>
    //       <GithubIcon className="text-default-500" />
    //     </Link>
    //     <ThemeSwitch />
    //     <NavbarMenuToggle />
    //   </NavbarContent>

    //   <NavbarMenu>
    //     {searchInput}
    //     <div className="mx-4 mt-2 flex flex-col gap-2">
    //       {siteConfig.navMenuItems.map((item, index) => (
    //         <NavbarMenuItem key={`${item}-${index}`}>
    //           <Link
    //             color={
    //               index === 2
    //                 ? "primary"
    //                 : index === siteConfig.navMenuItems.length - 1
    //                   ? "danger"
    //                   : "foreground"
    //             }
    //             href="#"
    //             size="lg"
    //           >
    //             {item.label}
    //           </Link>
    //         </NavbarMenuItem>
    //       ))}
    //     </div>
    //   </NavbarMenu>
    // </HeroUINavbar>
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold gradient-text"
          >
            JV
          </motion.div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a
              href="#expertise"
              className="hover:text-cyan-400 transition-colors"
            >
              Expertise
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
