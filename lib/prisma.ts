// doc:
//  - This file contains the Prisma client instance.
//  - It exports the Prisma client instance.
//  - DO NOT MODIFY THIS FILE

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
