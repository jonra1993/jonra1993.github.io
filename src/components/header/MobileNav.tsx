import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify, Apple } from 'lucide-react';
import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          {/* Wrap AlignJustify with a button */}
          <button aria-label="Open Menu">
            <AlignJustify className="text-xl cursor-pointer" />
          </button>
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
