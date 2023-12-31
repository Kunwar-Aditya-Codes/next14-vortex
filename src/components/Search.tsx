'use client';
import { X, SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import qs from 'query-string';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value) return;
    const url = qs.stringifyUrl(
      {
        url: '/search',
        query: { term: value },
      },
      { skipEmptyString: true }
    );
    router.push(url);
  };

  const onClear = () => {
    setValue('');
  };

  return (
    <form
      className='relative w-full lg:w-[400px] flex items-center'
      onSubmit={onSubmit}
    >
      <Input
        placeholder='Search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
      />
      {value && (
        <X
          className='absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition'
          onClick={onClear}
        />
      )}
      <Button
        type='submit'
        size={'sm'}
        variant={'secondary'}
        className='rounded-l-none h-10'
      >
        <SearchIcon className='h-4 w-4 text-muted-foreground' />
      </Button>
    </form>
  );
};
export default Search;
