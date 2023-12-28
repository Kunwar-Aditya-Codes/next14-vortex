'use client';

import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { IngressInput } from 'livekit-server-sdk';
import { toast } from 'sonner';
import { createIngress } from '../../../serverActions/ingress';
import { ElementRef, useRef, useState, useTransition } from 'react';

const RTMP = String(IngressInput.RTMP_INPUT);
const WHIP = String(IngressInput.WHIP_INPUT);

type IngressType = typeof RTMP | typeof WHIP;

const ConnectModal = () => {
  const closeRef = useRef<ElementRef<'button'>>(null);
  const [isPending, startTransition] = useTransition();
  const [ingressType, setIngressType] = useState<IngressType>(RTMP);

  const onSubmit = () => {
    startTransition(() => {
      createIngress(parseInt(ingressType))
        .then(() => {
          toast.success('Ingress created');
          closeRef?.current?.click();
        })
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'}>Generate connection</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate connection</DialogTitle>
        </DialogHeader>
        <Select
          disabled={isPending}
          value={ingressType}
          onValueChange={(value) => setIngressType(value)}
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Ingress Type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={RTMP}>RTMP</SelectItem>
            <SelectItem value={WHIP}>WHIP</SelectItem>
          </SelectContent>
        </Select>
        <Alert>
          <AlertTriangle className='h-4 w-4 ' />
          <AlertTitle className='text-red-500'>Warning!</AlertTitle>
          <AlertDescription>
            This actions will reset all active streams using current connection.
          </AlertDescription>
        </Alert>

        <div className='flex justify-between'>
          <DialogClose ref={closeRef} asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DialogClose>

          <Button disabled={isPending} onClick={onSubmit} variant={'default'}>
            Generate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ConnectModal;
