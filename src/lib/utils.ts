import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import stc from 'string-to-color';
import { Metadata } from 'next';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const stringToColor = (str: string) => {
  return stc(str);
};

export function constructMetadata({
  title = 'Vortex - Dream to Stream',
  description = 'Immerse yourself in a seamless streaming experience with a diverse range of captivating content across genres, where entertainment meets innovation.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons,
    metadataBase: new URL('https://next14-vortex.vercel.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
