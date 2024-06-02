// adddocumentation:
// This file is used to manage the user session
// It exports a function that updates the user session: session
// It exports a function that gets the user session: getUserSession

import { User, getServerSession } from "next-auth";

export const session = async ({ session, token }: any) => {
  // Add property to session, like an access_token from a provider.
  session.user.id = token.id;
  return session;
};

export const getUserSession = async (): Promise<User> => {
  // Get the authenticated user session
  const authUserSession = await getServerSession({
    callbacks: {
      // Add the session callback to the callbacks object
      session,
    },
  });
  // If the user is not authenticated, throw an error
  if (!authUserSession) throw new Error("unauthorized");
  return authUserSession?.user;
};
