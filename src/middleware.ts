import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // TODO:  check & make clerk route absolute
  publicRoutes: ['/api/webhooks(.*)', '/', '/api/uploadthing'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
