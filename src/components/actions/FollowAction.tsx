'use client';

import { useTransition } from 'react';
import { onFollow } from '../../../serverActions/follow';
import { Button } from '../ui/button';
import { toast } from 'sonner';

interface FollowActionProps {
  isFollowing: boolean;
  userId: string;
}

const FollowAction = ({ isFollowing, userId }: FollowActionProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error('Something went wrong!'));
    });
  };

  return (
    <Button
      disabled={isFollowing || isPending}
      variant={'default'}
      className='w-fit'
      onClick={onClick}
    >
      Follow
    </Button>
  );
};
export default FollowAction;
