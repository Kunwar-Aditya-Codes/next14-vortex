'use client';

import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';

interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <aside
      className={cn(
        'fixed left-0 flex flex-col w-60 h-full bg-[#030712]  border-r border-[#172031] z-50',
        collapsed && 'w-[70px]'
      )}
    >
      {children}
    </aside>
  );
};
export default Wrapper;
