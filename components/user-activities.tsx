"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Trash2 } from "lucide-react"

interface UserActivitiesProps {
    activities: any[]
    onRemove: (id: number) => void
}

export function UserActivities({ activities, onRemove }: UserActivitiesProps) {
    if (activities.length === 0) {
        return (
            <div className="text-center py-10">
                <h3 className="text-lg font-medium mb-2">No saved activities yet</h3>
                <p className="text-muted-foreground mb-4">
                    Browse suggested or trending activities and save them to your list.
                </p>
            </div>
        )
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">My Saved Activities</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {activities.map((activity) => (
                    <Card key={activity.id} className="overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
                        </div>
                        <CardHeader>
                            <CardTitle>{activity.title}</CardTitle>
                            <CardDescription>{activity.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button variant="destructive" className="w-full" onClick={() => onRemove(activity.id)}>
                                <Trash2 className="mr-2 h-4 w-4" /> Remove
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

