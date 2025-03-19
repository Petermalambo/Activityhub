"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActivityCard } from "@/components/activity-card"
import { UserActivities } from "@/components/user-activities"

// Sample activities data by age group
const activitiesByAgeGroup = {
    child: [
        {
            id: 1,
            title: "Arts and Crafts",
            description: "Create colorful art projects",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 2,
            title: "Playground Fun",
            description: "Visit local playgrounds",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 3,
            title: "Story Time",
            description: "Read or listen to stories",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 101,
            title: "Children's Movies",
            description: "Watch animated films and family-friendly movies",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 102,
            title: "Picture Books",
            description: "Explore colorful picture books with exciting stories",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 103,
            title: "Kid-Friendly Comics",
            description: "Read fun comics like Dog Man or Phoebe and Her Unicorn",
            image: "/placeholder.svg?height=200&width=300",
        },
    ],
    teen: [
        {
            id: 4,
            title: "Sports Leagues",
            description: "Join local sports teams",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 5,
            title: "Coding Workshops",
            description: "Learn programming basics",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 6,
            title: "Music Lessons",
            description: "Learn to play an instrument",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 104,
            title: "Teen Movies",
            description: "Watch coming-of-age films and teen comedies",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 105,
            title: "Young Adult Books",
            description: "Discover fantasy, sci-fi, and contemporary YA novels",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 106,
            title: "Manga & Anime",
            description: "Explore popular manga series and anime shows",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 107,
            title: "Comic Books",
            description: "Read superhero comics and graphic novels",
            image: "/placeholder.svg?height=200&width=300",
        },
    ],
    adult: [
        {
            id: 7,
            title: "Fitness Classes",
            description: "Join group fitness sessions",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 8,
            title: "Cooking Workshops",
            description: "Learn new recipes and techniques",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 9,
            title: "Hiking Trails",
            description: "Explore nature trails nearby",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 108,
            title: "Movie Nights",
            description: "Watch award-winning films and blockbusters",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 109,
            title: "Book Clubs",
            description: "Join discussions on bestsellers and classics",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 110,
            title: "Anime & Manga",
            description: "Discover critically acclaimed anime series and manga",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 111,
            title: "Comic Conventions",
            description: "Attend local comic conventions and meetups",
            image: "/placeholder.svg?height=200&width=300",
        },
    ],
    senior: [
        {
            id: 10,
            title: "Gardening Club",
            description: "Share gardening tips and plants",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 11,
            title: "Book Club",
            description: "Discuss books with peers",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 12,
            title: "Gentle Yoga",
            description: "Stay active with gentle exercises",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 112,
            title: "Classic Movies",
            description: "Enjoy timeless films and cinema classics",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 113,
            title: "Literary Fiction",
            description: "Read award-winning novels and memoirs",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            id: 114,
            title: "Nostalgic Comics",
            description: "Revisit classic comic strips and vintage collections",
            image: "/placeholder.svg?height=200&width=300",
        },
    ],
}

// Trending activities across all age groups
const trendingActivities = [
    {
        id: 13,
        title: "Nature Photography",
        description: "Capture beautiful moments in nature",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 14,
        title: "Board Game Nights",
        description: "Play classic and new board games",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 15,
        title: "Community Volunteering",
        description: "Help local organizations",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 115,
        title: "Movie Marathon",
        description: "Host themed movie nights with friends and family",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 116,
        title: "Comic Book Creation",
        description: "Learn to create your own comics and graphic novels",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 117,
        title: "Anime Watch Party",
        description: "Discover new anime series with fellow enthusiasts",
        image: "/placeholder.svg?height=200&width=300",
    },
]

export default function Dashboard() {
    const router = useRouter()
    const [user, setUser] = useState<any>(null)
    const [userActivities, setUserActivities] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check if user is logged in
        const userData = localStorage.getItem("user")
        if (!userData) {
            router.push("/signup")
            return
        }

        setUser(JSON.parse(userData))

        // Load user activities from localStorage
        const savedActivities = localStorage.getItem("userActivities")
        if (savedActivities) {
            setUserActivities(JSON.parse(savedActivities))
        }

        setLoading(false)
    }, [router])

    // Save user activities to localStorage
    const saveActivity = (activity: any) => {
        const updatedActivities = [...userActivities, activity]
        setUserActivities(updatedActivities)
        localStorage.setItem("userActivities", JSON.stringify(updatedActivities))
    }

    const removeActivity = (activityId: number) => {
        const updatedActivities = userActivities.filter((a) => a.id !== activityId)
        setUserActivities(updatedActivities)
        localStorage.setItem("userActivities", JSON.stringify(updatedActivities))
    }

    if (loading) {
        return <div className="container py-10">Loading...</div>
    }

    const ageGroup = user?.ageGroup || "adult"
    const suggestedActivities = activitiesByAgeGroup[ageGroup as keyof typeof activitiesByAgeGroup]

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-6">Welcome, {user?.name}</h1>

            <Tabs defaultValue="suggested" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="suggested">Suggested For You</TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="my-activities">My Activities</TabsTrigger>
                </TabsList>

                <TabsContent value="suggested">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {suggestedActivities.map((activity) => (
                            <ActivityCard
                                key={activity.id}
                                activity={activity}
                                onSave={saveActivity}
                                isSaved={userActivities.some((a) => a.id === activity.id)}
                            />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="trending">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {trendingActivities.map((activity) => (
                            <ActivityCard
                                key={activity.id}
                                activity={activity}
                                onSave={saveActivity}
                                isSaved={userActivities.some((a) => a.id === activity.id)}
                            />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="my-activities">
                    <UserActivities activities={userActivities} onRemove={removeActivity} />
                </TabsContent>
            </Tabs>

            <div className="mt-10">
                <Card>
                    <CardHeader>
                        <CardTitle>Activity Stats</CardTitle>
                        <CardDescription>Your activity engagement overview</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-lg border p-3">
                                <div className="text-sm font-medium text-muted-foreground">Saved Activities</div>
                                <div className="text-2xl font-bold">{userActivities.length}</div>
                            </div>
                            <div className="rounded-lg border p-3">
                                <div className="text-sm font-medium text-muted-foreground">Age Group</div>
                                <div className="text-2xl font-bold capitalize">{ageGroup}</div>
                            </div>
                            <div className="rounded-lg border p-3">
                                <div className="text-sm font-medium text-muted-foreground">Suggested For You</div>
                                <div className="text-2xl font-bold">{suggestedActivities.length}</div>
                            </div>
                            <div className="rounded-lg border p-3">
                                <div className="text-sm font-medium text-muted-foreground">Trending Now</div>
                                <div className="text-2xl font-bold">{trendingActivities.length}</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

