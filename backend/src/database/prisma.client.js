import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

const prismaClient = globalForPrisma.prismaClient || new PrismaClient();

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prismaClient = prismaClient;

export default prismaClient;
