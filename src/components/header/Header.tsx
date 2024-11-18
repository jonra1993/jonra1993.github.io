import { HStack } from '@/components/Stack';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', changeBackground);

    return () => document.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 w-full border-b border-border transition-colors duration-200',
        'backdrop-blur-sm hover:backdrop-blur-md bg-white/70 shadow-md saturate-150',
        isScrolled && 'border-transparent bg-background/80 shadow-lg'
      )}
    >
      <HStack className="h-16 justify-between px-6 sm:px-10 md:px-5">
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />        
      </HStack>
    </header>
  );
}
