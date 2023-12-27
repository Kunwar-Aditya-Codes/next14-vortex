'use client';

import { useTransition } from 'react';
import { onFollow, onUnfollow } from '../../../serverActions/follow';
import { Button } from '../ui/button';
import { toast } from 'sonner';

interface FollowActionProps {
  isFollowing: boolean;
  userId: string;
}

const FollowAction = ({ isFollowing, userId }: FollowActionProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error('Something went wrong!'));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(`You have unfollowed ${data.following.username}`)
        )
        .catch(() => toast.error('Something went wrong!'));
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  return (
    <Button
      disabled={isPending}
      variant={'secondary'}
      className='w-fit '
      onClick={onClick}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  );
};
export default FollowAction;
