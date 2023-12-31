import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '800', '700'],
});

export const Logo = () => {
  return (
    <div className=' flex flex-col items-center gap-y-4'>
      <div className=''>
        <Image
          src={'/main-logo.png'}
          height={80}
          width={80}
          alt='logo'
          className='w-16 h-16 rounded-full'
        />
      </div>
      <div className={cn('flex flex-col items-center', font.className)}>
        <p className={'text-xl font-semibold'}>Vortex</p>
        <p className={'text-sm text-muted-foreground'}>Dream to stream!</p>
      </div>
    </div>
  );
};
