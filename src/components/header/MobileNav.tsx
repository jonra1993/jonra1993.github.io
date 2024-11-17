import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify, Apple } from 'lucide-react';

export default function MobileNav() {
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side='left'>
          <a href='/'>
            <Apple className='text-red-500' />
          </a>
          <nav className='flex flex-col gap-3 lg:gap-4 mt-6'>
            <a href='/project'>Project</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}