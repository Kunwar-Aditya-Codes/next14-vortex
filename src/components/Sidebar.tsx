import { getRecommended } from '@/lib/services/recommended-service';
import Recommended, { RecommendedSkeleton } from './Recommended';
import Toggle, { ToggleSkeleton } from './Toggle';
import Wrapper from './Wrapper';
import { getFollowedUsers } from '@/lib/services/follow-service';
import FollowingUsers, { FollowingSkeleton } from './FollowingUsers';

const Sidebar = async () => {
  const recommended = await getRecommended();
  const followedUsers = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />
      <div className='space-y-4 pt-4 lg:pt-0'>
        <FollowingUsers data={followedUsers} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};
export default Sidebar;

export const SidebarSkeleton = () => {
  return (
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50'>
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
