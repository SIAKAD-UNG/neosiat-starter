import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"

export const config = {
    theme: {
        logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    },
    providers: [
        GitHubProvider,
        CredentialsProvider({
            name: "My Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username" },
                password: { label: "Password", type: "password", placeholder: "********" }
            },
            async authorize(credentials) {
                const { username, password } = credentials
                if (username !== "rambo") return null
                if (password !== "example") return null
                const user = { id: "1", name: "John Rambo", email: "rambo@example.com" }
                return user
            }
        }),
    ],
    basePath: "/auth",
    callbacks: {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl
            if (pathname === "/middleware-example") return !!auth
            return true
        },
        jwt({ token, trigger, session }) {
            if (trigger === "update") token.name = session.user.name
            return token
        },
    },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)