import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '800', '700'],
});

const DashboardNavbar = () => {
  return (
    <nav className='fixed top-0 w-full h-20  z-[49]  border-b border-b-zinc-800 px-2 lg:px-4 flex justify-between items-center shadow-sm'>
      {/* logo */}
      <Link href={'/'}>
        <div className='flex items-center gap-x-4 hover:opacity-75 transition'>
          <div className='lg:p-1  mr-4 lg:mr-0'>
            <Image
              src={'/main-logo.png'}
              height={80}
              width={80}
              alt='logo'
              className='w-full  h-full lg:w-11 lg:h-11 max-w-16 max-h-16  rounded-full'
            />
          </div>
          <div className={cn('hidden lg:block', font.className)}>
            <p className={'text-lg font-semibold'}>Vortex</p>
            <p className={'text-xs text-muted-foreground'}>Creator Dashboard</p>
          </div>
        </div>
      </Link>

      {/* Actions */}
      <div className='flex items-center justify-end gap-x-2'>
        <Button
          size='sm'
          variant='ghost'
          className='text-muted-foreground hover:text-primary'
          asChild
        >
          <Link href='/'>
            <LogOut className='h-5 w-5 mr-2' />
            Exit
          </Link>
        </Button>
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
};
export default DashboardNavbar;
