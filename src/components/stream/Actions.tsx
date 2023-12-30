'use client';

import { toast } from 'sonner';
import { Heart } from 'lucide-react';
import { useTransition } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { onFollow, onUnfollow } from '../../../serverActions/follow';

interface ActionsProps {
  isFollowing: boolean;
  hostIdentity: string;
  isHost: boolean;
}

const Actions = ({ hostIdentity, isFollowing, isHost }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { userId } = useAuth();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(hostIdentity)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(hostIdentity)
        .then((data) =>
          toast.success(`You have unfollowed ${data.following.username}`)
        )
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const toggleFollow = () => {
    if (!userId) {
      return router.push('/sign-in');
    }

    if (isHost) return;

    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  return (
    <Button
      disabled={isPending || isHost}
      onClick={toggleFollow}
      size='sm'
      variant={'outline'}
      className='w-full lg:w-auto  disabled:bg-zinc-800 disabled:opacity-100 disabled:text-white/50'
    >
      <Heart
        className={cn(
          'h-4 w-4 mr-2',
          isFollowing ? 'fill-zinc-800' : 'fill-none'
        )}
      />
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  );
};
export default Actions;

export const ActionsSkeleton = () => {
  return <Skeleton className='h-10 w-full lg:w-24' />;
};
