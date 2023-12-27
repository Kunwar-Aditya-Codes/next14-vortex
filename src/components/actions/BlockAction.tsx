'use client';

import { useTransition } from 'react';
import { onFollow, onUnfollow } from '../../../serverActions/follow';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { onBlock, onUnblock } from '../../../serverActions/block';

interface BlockActionProps {
  isBlocked: boolean;
  userId: string;
}

const BlockAction = ({ isBlocked, userId }: BlockActionProps) => {
  const [isPending, startTransition] = useTransition();

  const handleBlock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) => toast.success(`You blocked ${data.blocked.username}`))
        .catch(() => toast.error('Something went wrong!'));
    });
  };

  //   const handleUnblock = () => {
  //     startTransition(() => {
  //       onUnblock(userId)
  //         .then((data) => toast.success(`You unblocked ${data.blocked.username}`))
  //         .catch(() => toast.error('Something went wrong!'));
  //     });
  //   };

  //   const onClick = () => {
  //     if (isBlocked) {
  //       handleUnblock();
  //     } else {
  //       handleBlock();
  //     }
  //   };

  return (
    <Button
      disabled={isPending}
      className='w-fit bg-red-500 hover:bg-red-600'
      onClick={handleBlock}
    >
      Block
    </Button>
  );
};
export default BlockAction;
