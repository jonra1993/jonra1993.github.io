import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Apple } from 'lucide-react';
import { useEffect, useState } from 'react';
import SiteLogo from '../SiteLogos';
import { HStack } from '../Stack';
import ThemeSwitch from '../ThemeSwitcher';

const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog', disabled: false, tooltip: 'Soon..' },
  { href: '/tags', title: 'Tags', hidden: true },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
  { href: '/resume', title: 'Resume' },
]

export default function MainNav() {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <div className='hidden md:flex mx-auto w-full items-center justify-between'>
      <HStack className='space-x-8'>
      <SiteLogo kind={'logo'} size={10} logoType="link" />
        <h1>
          <a href="/">Jonathan Vargas</a>
        </h1>
      </HStack>
      <div className="flex items-center md:space-x-3">
        <NavigationMenu>
          <NavigationMenuList>
            {headerNavLinks.map(
              (link, i) =>
                !link.hidden && (
                  <NavigationMenuItem key={link.href}>
                    <a href={link.href} key={`link-${link.href}`}>
                      <NavigationMenuLink
                        active={
                          (pathname.startsWith(link.href) && link.href !== '/') ||
                          pathname === link.href
                        }
                        className={cn(
                          navigationMenuTriggerStyle(),
                          (pathname.startsWith(link.href) && link.href !== '/') ||
                            pathname === link.href
                            ? 'text-foreground'
                            : 'text-foreground/60'
                        )}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </a>
                  </NavigationMenuItem>
                )
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeSwitch/>
      </div>
    </div>
  );
}