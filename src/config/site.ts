import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  BriefcaseBusiness,
} from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Jonathan Vargas",
  description: "My personal website.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  about: {
    name: "Jonathan Vargas",
    bio: "Hello, my name is Jonathan. I am an ecuadorian 🇪🇨 Tech Entrepreneur 👨🏻‍💻, Solutions Architect 📲 and Frontend Developer 🎨. I am always ready to help you turn your ideas into technological products. I believe that technology is a tool with the power to improve most of the problems of our society. Many times self-taught so I have extensive knowledge of various disciplines. The activities in my charge I carry out with a lot of energy and enthusiasm, always seeking to obtain the best result.",
    interests: [
      "Entrepreurship",
      "Product Manager",
      "Agentic AI",
      "Conversational AI",
      "Blockchain",
      "Web3",
      "UI/UX",
      "Insurtech",
    ],
    email: "jonathanvargas1104@gmail.com",
    location: "Quito, Ecuador",
    expertise: [
      {
        name: "English",
        value: 90,
      },
      {
        name: "Full Stack developement",
        value: 80,
      },
      {
        name: "Typeacript",
        value: 80,
      },
      {
        name: "Python",
        value: 80,
      },
      {
        name: "Reactjs & React Native",
        value: 80,
      },
    ],
  },
  social: [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/jonra1993",
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jonathan-ramiro-vargas-suasnavas-a29752b5/",
    },
    {
      name: "Upwork",
      icon: BriefcaseBusiness,
      href: "https://www.upwork.com/fl/jonathanvargas21",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/jona.ra/?hl=es-la",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto://jonathanvargas1104@gmail.com",
    },
  ],
};
