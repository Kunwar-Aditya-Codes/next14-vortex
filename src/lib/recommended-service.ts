import { getSelf } from './auth-service';
import { db } from './db';

export const getRecommended = async () => {
  let userId: string | null;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  let users = [];

  if (userId) {
    const followedUserIds = (
      await db.follow.findMany({
        where: {
          followerId: userId,
        },
      })
    ).map((follow) => follow.followingId);

    // Get all users
    const allUsers = await db.user.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    });

    users = allUsers.filter(
      (user) => user.id !== userId && !followedUserIds.includes(user.id)
    );
    console.log(users);
  } else {
    users = await db.user.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    });
  }
  return users;
};
