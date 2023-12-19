import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Search from './Search';
import Actions from './Actions';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '800', '700'],
});

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-20  z-[49] bg-[#030712] border-b border-b-[#172031] px-2 lg:px-4 flex justify-between items-center shadow-sm'>
      {/* logo */}
      <Link href={'/'}>
        <div className='flex items-center gap-x-4 hover:opacity-75 transition'>
          <div className=' rounded-full bg-white/10 lg:p-1  mr-4 lg:mr-0'>
            <Image
              src={'/main-logo.svg'}
              height={80}
              width={80}
              alt='logo'
              className='w-full  h-full lg:w-11 lg:h-11 max-w-16 max-h-16  rounded-full'
            />
          </div>
          <div className={cn('hidden lg:block', font.className)}>
            <p className={'text-lg font-semibold'}>Vortex</p>
            <p className={'text-xs text-muted-foreground'}>Dream to stream!</p>
          </div>
        </div>
      </Link>

      {/* searchInput */}
      <Search />

      {/* Actions */}
      <Actions />
    </nav>
  );
};
export default Navbar;
