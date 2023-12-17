import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='flex h-full pt-20 '>
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};
export default BrowseLayout;
