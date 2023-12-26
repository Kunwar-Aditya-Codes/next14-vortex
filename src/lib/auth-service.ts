import { currentUser } from '@clerk/nextjs';
import { db } from './db';

export const getSelf = async () => {
  const self = await currentUser();

  if (!self || !self.username) throw new Error('UNAUTHORIZED');

  const user = await db.user.findUnique({
    where: {
      externaleUserId: self.id,
    },
  });

  console.log('user from auth>>>>>>', user);

  if (!user) throw new Error('NOT FOUND');

  return user;
};
