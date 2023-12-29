import { currentUser } from '@clerk/nextjs';
import { db } from '../db';

export const getSelf = async () => {
  const self = await currentUser();

  if (!self || !self.username) throw new Error('UNAUTHORIZED');

  const user = await db.user.findUnique({
    where: {
      externaleUserId: self.id,
    },
  });

  if (!user) throw new Error('NOT FOUND');

  return user;
};
export const getSelfByUsername = async (username: string) => {
  const self = await currentUser();

  if (!self || !self.username) throw new Error('UNAUTHORIZED');

  const user = await db.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) throw new Error('NOT FOUND');

  if (self.username !== user.username) throw new Error('Unauthorized!');

  return user;
};

