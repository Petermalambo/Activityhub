"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { UserActivities } from "@/components/user-activities"
import { toast } from "sonner";


export default function Activities() {
    const router = useRouter()
    interface Activity {
        id: number;
        title: string;
        description: string;
        image: string;
    }

    const [userActivities, setUserActivities] = useState<Activity[]>([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        // Check if user is logged in
        const userData = localStorage.getItem("user")
        if (!userData) {
            router.push("/signup")
            return
        }

        // Load user activities from localStorage
        const savedActivities = localStorage.getItem("userActivities")
        if (savedActivities) {
            setUserActivities(JSON.parse(savedActivities))
        }
    }, [router])

    const handleCreateActivity = (e: React.FormEvent) => {
        e.preventDefault()

        if (!title.trim()) {
            toast.error("Please enter an activity title");
            return;
        }

        return
        }

        const newActivity = {
            id: Date.now(),
            title,
            description,
            image: "/placeholder.svg?height=200&width=300",
        }

        const updatedActivities = [...userActivities, newActivity]
        setUserActivities(updatedActivities)
        localStorage.setItem("userActivities", JSON.stringify(updatedActivities))

        // Reset form
        setTitle("")
        setDescription("")

    toast.success("Activity created", {
        description: "Your custom activity has been added to your list",
    });

const removeActivity = (activityId: number) => {
    const updatedActivities = userActivities.filter((a: { id: number }) => a.id !== activityId);


    setUserActivities(updatedActivities);
    localStorage.setItem("userActivities", JSON.stringify(updatedActivities));

        toast.success("Activity removed", {
            description: "The activity has been removed from your list",
        });
    }

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-6">Manage Your Activities</h1>

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Create Custom Activity</CardTitle>
                        <CardDescription>Add your own activity to your list</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleCreateActivity} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Activity Title</Label>
                                <Input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter activity title"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Describe your activity"
                                    rows={4}
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Create Activity
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <div>
                    <h2 className="text-xl font-bold mb-4">Your Activities</h2>
                    <UserActivities activities={userActivities} onRemove={removeActivity} />
                </div>
            </div>
        </div>
    )
}

