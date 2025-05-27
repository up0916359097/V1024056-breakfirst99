import GitHub from "next-auth/providers/github";
import Google form "next-auth/providers/Google";
import type {NextAuthConfig} from "next-auth";
import { provider } from "@radix-ui/react-tooltip";
import { access } from "fs";
import client = require("./lib/generated/prisma/client");

const params = {
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
}

export default {
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
            params:{
                prompt:"consent",
                access_type:"offline",
                response_type:"code",
                authorization:{
                    params:params,
                }
            }
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecert:process.env.AUTH_GOOGLE_SECRET,
            authorization()
        })

    ]
}

