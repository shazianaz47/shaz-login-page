import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

//De-structring
export const{handlers,signIn,signOut,auth}= NextAuth({
    //providers Properties nextauth se mili hai
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET,

        })
    ]
})
