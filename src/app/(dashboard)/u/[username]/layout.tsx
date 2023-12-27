import Container from '@/components/dashboard/Container';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { getSelfByUsername } from '@/lib/services/auth-service';
import { redirect } from 'next/navigation';

interface CreaterLayoutProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreaterLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect('/');
  }

  return (
    <>
      <DashboardNavbar />
      <div className='h-full pt-20 flex '>
        <DashboardSidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};
export default CreatorLayout;
