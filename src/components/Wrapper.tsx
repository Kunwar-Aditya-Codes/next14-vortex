'use client';

import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';
import { useIsClient } from 'usehooks-ts';
import { ToggleSkeleton } from './Toggle';
import { RecommendedSkeleton } from './Recommended';
import { FollowingSkeleton } from './FollowingUsers';

interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper = ({ children }: WrapperProps) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient) {
    return (
      <aside
        className={
          'fixed left-0 flex flex-col w-[70px] h-full lg:w-60  border-r border-zinc-800 z-50'
        }
      >
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        'fixed left-0 flex flex-col w-60 h-full border-r border-zinc-800 z-50',
        collapsed && 'w-[70px]'
      )}
    >
      {children}
    </aside>
  );
};
export default Wrapper;
