import FollowAction from '@/components/actions/FollowAction';
import { isFollowingUser } from '@/lib/follow-service';
import { getUserByUsername } from '@/lib/user-service';
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

  return (
    <div className='flex flex-col gap-y-4'>
      <p>Username : {user.username}</p>
      <p>User_Id : {user.id}</p>
      <p>Is Following : {`${isFollowing}`}</p>
      <FollowAction isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};
export default page;
