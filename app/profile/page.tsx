"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { Camera, Loader2 } from "lucide-react"

export default function Profile() {
    const router = useRouter()
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    interface User {
        name: string;
        email: string;
        avatarUrl?: string;
        ageGroup?: string;
    }

    const [user, setUser] = useState<User | null>(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")

    useEffect(() => {
        // Check if user is logged in
        const userData = localStorage.getItem("user")
        if (!userData) {
            router.push("/signup")
            return
        }

        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
        setName(parsedUser.name || "")
        setEmail(parsedUser.email || "")
        setAvatarUrl(parsedUser.avatarUrl || "")
    }, [router])

    const handleUpdateProfile = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Update user data
        const updatedUser = {
            ...user,
            name,
            avatarUrl,
        }

        // In a real app, you would send this to your backend
        // For this demo, we'll just update localStorage
        localStorage.setItem("user", JSON.stringify(updatedUser))

        setTimeout(() => {
            setIsLoading(false)
            toast({
                title: "Profile updated",
                description: "Your profile has been updated successfully.",
            })
        }, 1000)
    }

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            // In a real app, you would upload the file to a storage service
            // For this demo, we'll just create a local URL
            const url = URL.createObjectURL(file)
            setAvatarUrl(url)

            toast({
                title: "Avatar updated",
                description: "Your profile picture has been updated.",
            })
        }
    }

    if (!user) {
        return <div className="container py-10">Loading...</div>
    }

    return (
        <div className="container py-10 max-w-md">
            <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="relative">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src={avatarUrl} alt={name} />
                                <AvatarFallback>{name?.charAt(0) || "U"}</AvatarFallback>
                            </Avatar>
                            <div className="absolute bottom-0 right-0">
                                <Label htmlFor="avatar" className="cursor-pointer">
                                    <div className="rounded-full bg-primary p-2 text-primary-foreground shadow-sm">
                                        <Camera className="h-4 w-4" />
                                    </div>
                                </Label>
                                <Input id="avatar" type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">Click the camera icon to update your profile picture</p>
                    </div>

                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" value={email} disabled placeholder="Your email" />
                            <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="ageGroup">Age Group</Label>
                            <Input id="ageGroup" value={user.ageGroup} disabled className="capitalize" />
                        </div>

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating...
                                </>
                            ) : (
                                "Update Profile"
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

