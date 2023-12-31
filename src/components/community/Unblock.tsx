'use client';

import { toast } from 'sonner';
import { useTransition } from 'react';

import { Button } from '@/components/ui/button';
import { onUnblock } from '../../../serverActions/block';

interface UnblockProps {
  userId: string;
}

const Unblock = ({ userId }: UnblockProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((result) =>
          toast.success(`User ${result.blocked.username} unblocked`)
        )
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={onClick}
      variant='link'
      size='sm'
      className='text-blue-500 w-full'
    >
      Unblock
    </Button>
  );
};

export default Unblock;
