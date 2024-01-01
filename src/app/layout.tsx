import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import { constructMetadata } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <ThemeProvider
            attribute='class'
            forcedTheme='dark'
            storageKey='vortex-key'
          >
            {children}
            <Toaster richColors position='top-center' />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
