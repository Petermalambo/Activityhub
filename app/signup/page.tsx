"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function SignUp() {
    const router = useRouter()
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        ageGroup: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleAgeGroupChange = (value: string) => {
        setFormData((prev) => ({ ...prev, ageGroup: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Validate form
        if (!formData.name || !formData.email || !formData.password || !formData.ageGroup) {
            toast({
                title: "Error",
                description: "Please fill in all fields",
                variant: "destructive",
            })
            setIsLoading(false)
            return
        }

        // In a real app, you would send this data to your backend
        // For this demo, we'll just store it in localStorage
        localStorage.setItem("user", JSON.stringify(formData))

        setTimeout(() => {
            setIsLoading(false)
            toast({
                title: "Success",
                description: "Your account has been created!",
            })
            router.push("/dashboard")
        }, 1000)
    }

    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)]">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                    <CardDescription className="text-center">Enter your information to get started</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="ageGroup">Age Group</Label>
                            <Select onValueChange={handleAgeGroupChange} required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select age group" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="child">Child (0-12)</SelectItem>
                                    <SelectItem value="teen">Teen (13-19)</SelectItem>
                                    <SelectItem value="adult">Adult (20-59)</SelectItem>
                                    <SelectItem value="senior">Senior (60+)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Sign Up"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <p className="mt-2 text-xs text-center text-muted-foreground">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

