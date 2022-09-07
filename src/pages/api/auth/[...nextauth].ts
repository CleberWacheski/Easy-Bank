import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { query as q } from 'faunadb'
import { fauna } from "../../../services/faunaClient"

export const authOptions: NextAuthOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID,
        })
    ],
    callbacks: {
        async signIn({ user }) {
            const { email, name, id } = user

            try {

                await fauna.query(
                    q.If(
                        q.Not(
                            q.Exists(
                                q.Match(
                                    q.Index('user_email'),
                                    q.Casefold(email)
                                )
                            )
                        ),
                        q.Create(
                            q.Collection('users'),
                            { data: { email, name, id } }
                        ),
                        q.Get(
                            q.Match(
                                q.Index('user_email'),
                                q.Casefold(email)
                            )
                        )
                    )
                )

                return true
            }
            catch {
                return false
            }
        }
    }


}

export default NextAuth(authOptions)