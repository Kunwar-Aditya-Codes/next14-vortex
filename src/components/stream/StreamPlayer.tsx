'use client';

import { useViewerToken } from '@/hooks/use-viewer';
import { Stream, User } from '@prisma/client';
import { LiveKitRoom } from '@livekit/components-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';
import Video from './Video';

interface StreamPlayerProps {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollowing: boolean;
}

const StreamPlayer = ({ user, isFollowing, stream }: StreamPlayerProps) => {
  const { identity, name, token } = useViewerToken(user.id);

  const { collapsed } = useSidebar((state) => state);

  if (!identity || !token || !name) {
    return <div>Cannot watch the stream!</div>;
  }

  return (
    <>
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL!}
        className={cn(
          'grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full',
          collapsed && 'lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'
        )}
      >
        <div className='space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10'>
          <Video hostName={user.username} hostIdentity={user.id} />
          {/* <Header
            hostName={user.username}
            hostIdentity={user.id}
            viewerIdentity={identity}
            imageUrl={user.imageUrl}
            isFollowing={isFollowing}
            name={stream.name}
          />
          <InfoCard
            hostIdentity={user.id}
            viewerIdentity={identity}
            name={stream.name}
            thumbnailUrl={stream.thumbnailUrl}
          />
          <AboutCard
            hostName={user.username}
            hostIdentity={user.id}
            viewerIdentity={identity}
            bio={user.bio}
            followedByCount={user._count.followedBy}
          /> */}
        </div>
      </LiveKitRoom>
    </>
  );
};
export default StreamPlayer;

export const StreamPlayerSkeleton = () => {
  return (
    <div className='grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full'>
      <div className='space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10'>
        {/* <VideoSkeleton />
        <HeaderSkeleton /> */}
      </div>
      <div className='col-span-1 bg-background'>{/* <ChatSkeleton /> */}</div>
    </div>
  );
};
