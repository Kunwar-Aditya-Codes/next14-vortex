import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Sidebar, { SidebarSkeleton } from '@/components/Sidebar';
import { Suspense } from 'react';

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='flex h-full pt-20 '>
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};
export default BrowseLayout;
