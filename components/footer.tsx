import Link from "next/link"
import { Activity, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg">
                                <Activity className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                ActivityHub
              </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Discover fun activities for all ages. Never be bored again with personalized recommendations.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="text-muted-foreground hover:text-primary">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/activities" className="text-muted-foreground hover:text-primary">
                                    Activities
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" className="text-muted-foreground hover:text-primary">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Age Groups</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                    Children (0-12)
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                    Teens (13-19)
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                    Adults (20-59)
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary">
                                    Seniors (60+)
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span>support@activityhub.com</span>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>123 Activity St, Fun City</span>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                                Subscribe to Newsletter
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} ActivityHub. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

