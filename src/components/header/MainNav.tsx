import { Apple } from 'lucide-react';

export default function MainNav() {
  return (
    <div className='hidden md:flex  max-w-7xl flex-grow'>
      <a href='/'>
        <Apple className='text-red-500' />
      </a>
      <nav className='flex items-center gap-3 lg:gap-4 ml-8 '>
        <a href='/project'>Project</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </nav>
    </div>
  );
}