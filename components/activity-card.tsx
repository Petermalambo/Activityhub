"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BookmarkPlus, Check } from "lucide-react"

interface ActivityCardProps {
    activity: {
        id: number
        title: string
        description: string
        image: string
    }
    onSave: (activity: any) => void
    isSaved: boolean
}

export function ActivityCard({ activity, onSave, isSaved }: ActivityCardProps) {
    return (
        <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
                <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
            </div>
            <CardHeader>
                <CardTitle>{activity.title}</CardTitle>
                <CardDescription>{activity.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button
                    variant={isSaved ? "secondary" : "default"}
                    className="w-full"
                    onClick={() => !isSaved && onSave(activity)}
                    disabled={isSaved}
                >
                    {isSaved ? (
                        <>
                            <Check className="mr-2 h-4 w-4" /> Saved
                        </>
                    ) : (
                        <>
                            <BookmarkPlus className="mr-2 h-4 w-4" /> Save Activity
                        </>
                    )}
                </Button>
            </CardFooter>
        </Card>
    )
}

