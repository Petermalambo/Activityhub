import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    // Extract age group from profile data if available
                    // For demo purposes, we'll use a random age group
                    ageGroup: getAgeGroup(profile),
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.ageGroup = (user as any).ageGroup
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                ;(session.user as any).ageGroup = token.ageGroup
            }
            return session
        },
    },
    pages: {
        signIn: "/auth/signin",
    },
})

// Helper function to determine age group
// In a real app, you would extract this from the user's profile data
function getAgeGroup(profile: any) {
    // For demo purposes, we'll assign a random age group
    const ageGroups = ["child", "teen", "adult", "senior"]
    return ageGroups[Math.floor(Math.random() * ageGroups.length)]
}

export { handler as GET, handler as POST }

