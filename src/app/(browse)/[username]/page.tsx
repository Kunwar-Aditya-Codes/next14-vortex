import StreamPlayer from '@/components/stream/StreamPlayer';
import { isBlockedByUser } from '@/lib/services/blocked-service';
import { isFollowingUser } from '@/lib/services/follow-service';
import { getUserByUsername } from '@/lib/services/user-service';
import { notFound } from 'next/navigation';

interface UserPageProps {
  params: {
    username: string;
  };
}

const page = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  return (
    <StreamPlayer user={user} stream={user.stream} isFollowing={isFollowing} />
  );
};
export default page;
