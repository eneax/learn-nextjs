import { PrismaClient } from "@prisma/client";

// this object is used to interact with the database
export const db = new PrismaClient();
