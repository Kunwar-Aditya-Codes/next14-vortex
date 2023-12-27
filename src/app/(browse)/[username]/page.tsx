import BlockAction from '@/components/actions/BlockAction';
import FollowAction from '@/components/actions/FollowAction';
import { isBlockedByUser } from '@/lib/services/blocked-service';
import { isFollowingUser } from '@/lib/services/follow-service';
import { getUserByUsername } from '@/lib/services/user-service';
import { notFound } from 'next/navigation';

interface UserPageParams {
  params: {
    username: string;
  };
}

const page = async ({ params }: UserPageParams) => {
  const { username } = params;
  const user = await getUserByUsername(username);

  if (!user) notFound();

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  return (
    <div className='flex flex-col gap-y-4'>
      <p>Username : {user.username}</p>
      <p>User_Id : {user.id}</p>
      <p>Is Following : {`${isFollowing}`}</p>
      <p>Is Blocked by this user : {`${isBlocked}`}</p>
      <FollowAction isFollowing={isFollowing} userId={user.id} />
      <BlockAction isBlocked={isBlocked} userId={user.id} />
    </div>
  );
};
export default page;
