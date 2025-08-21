"use server";

import { getVerificationTokenByToken } from "@/db/token";
import { getUserByEmail } from "@/db/user";
import prisma from "../DB_prisma/src/index";

export const verification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { success: false, message: "Invalid token" };
  }

  const hasExpired = new Date(existingToken.expiresAt) < new Date();

  if (hasExpired) {
    return { success: false, message: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { success: false, message: "Email not found" };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { emailVerified: new Date(), email: existingToken.email },
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: true, message: "Email verified" };
};
