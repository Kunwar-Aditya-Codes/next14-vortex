'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import CopyButton from './CopyButton';

interface KeyCardProps {
  value: string | null;
}
const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className='rounded-xl bg-muted p-6'>
      <div className='flex items-start gap-x-8 '>
        <p className='font-semibold shrink-0'>Stream key</p>
        <div className='space-y-2 w-full '>
          <div className='w-full flex items-center   gap-x-2'>
            <Input
              value={value || ''}
              disabled
              type={show ? 'text' : 'password'}
              placeholder='Stream key'
            />
            <CopyButton value={value || ''} />
          </div>

          <Button onClick={() => setShow(!show)} size={'sm'} variant={'link'}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default KeyCard;
