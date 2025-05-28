import { PrismaClient } from './generated/prisma'

const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

<<<<<<< HEAD
export default prisma;
=======
export default prisma;
>>>>>>> ce541ea (123)
