import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Heart, Zap, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {/* Hero Section with Gradient Background */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-sm font-medium mb-2">
                    Fun for all ages! ✨
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                    Discover Your Next Adventure
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    ActivityHub helps you find the perfect activities based on your interests and age group. Never be
                    bored again!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/signup">
                      <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                      >
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#learn-more">
                      <Button variant="outline" size="lg">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                        JD
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                        KL
                      </div>
                      <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">
                        MN
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Join 1,000+ happy users finding fun activities
                    </p>
                  </div>
                </div>
                <div className="relative lg:ml-auto">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="ActivityHub Dashboard Preview"
                        width={600}
                        height={400}
                        className="object-cover w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-50"></div>
                </div>
              </div>
            </div>
          </section>

          {/* App Preview Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm font-medium">
                  See it in action
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How ActivityHub Works</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Find activities tailored to your age group, save your favorites, and create your own custom list.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                    <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Discover</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Browse activities tailored to your age group and interests
                  </p>
                  <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Discover Activities"
                      width={250}
                      height={150}
                      className="rounded-lg shadow-sm"
                  />
                </div>

                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Save</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Keep track of your favorite activities in one place
                  </p>
                  <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Save Activities"
                      width={250}
                      height={150}
                      className="rounded-lg shadow-sm"
                  />
                </div>

                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                    <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">Create</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Add your own custom activities to your personal collection
                  </p>
                  <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Create Activities"
                      width={250}
                      height={150}
                      className="rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section with More Information */}
          <section
              id="learn-more"
              className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-sm font-medium">
                  Why ActivityHub?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Benefits for Every Age Group
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  ActivityHub was created to help people of all ages discover new hobbies, stay active, and have fun.
                </p>
              </div>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                    <svg
                        className="h-10 w-10 text-purple-600 dark:text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">For Children</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Discover fun, educational activities that promote creativity and development. Perfect for parents
                    looking for new ways to engage their kids.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <svg
                        className="h-10 w-10 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">For Teens</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Find cool activities that match your interests, from sports and gaming to arts and technology. Connect
                    with others who share your passions.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full">
                    <svg
                        className="h-10 w-10 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">For Adults</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Discover new hobbies, fitness routines, and social activities to enrich your life, reduce stress, and
                    maintain a healthy work-life balance.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                    <svg
                        className="h-10 w-10 text-yellow-600 dark:text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">For Seniors</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Find gentle, engaging activities that keep you active, social, and mentally sharp. Connect with
                    communities and discover new interests.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Purpose Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 text-sm font-medium">
                    Our Mission
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why We Created ActivityHub</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    ActivityHub was born from a simple observation: people of all ages often struggle to find meaningful,
                    enjoyable activities that match their interests and abilities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>Combat boredom and screen addiction</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>Promote physical and mental wellbeing</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>Foster creativity and personal growth</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>Build communities around shared interests</span>
                    </li>
                  </ul>
                  <div>
                    <Link href="/signup">
                      <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                        Join Our Community
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="People enjoying activities"
                        width={600}
                        height={400}
                        className="object-cover w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-400 rounded-full blur-2xl opacity-50"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm font-medium">
                  What Our Users Say
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Loved by People of All Ages</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-bold">S</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Sarah, 10</h4>
                      <p className="text-sm text-gray-500">Child</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    "I love finding new craft ideas on ActivityHub! My mom and I do a new activity every weekend now."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">J</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Jason, 16</h4>
                      <p className="text-sm text-gray-500">Teen</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    "ActivityHub helped me find a local coding club. Now I'm learning to build apps with friends who share
                    my interests!"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold">M</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Margaret, 68</h4>
                      <p className="text-sm text-gray-500">Senior</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    "Since retiring, I've been looking for ways to stay active. ActivityHub introduced me to a wonderful
                    gardening community in my area."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Find Your Next Adventure?
                </h2>
                <p className="max-w-[600px] md:text-xl">Join thousands of users discovering new activities every day.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup">
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
  )
}

