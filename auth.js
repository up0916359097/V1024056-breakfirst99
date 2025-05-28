<<<<<<< HEAD
import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
=======
import NextAuth from 'next-auth';
import authConfig from './auth.config';

import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prisma';
>>>>>>> ce541ea (123)

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
<<<<<<< HEAD
        strategy: "jwt",
    },
    ...authConfig,
    
})
=======
        strategy: 'jwt',
    },
    ...authConfig,
});
>>>>>>> ce541ea (123)
