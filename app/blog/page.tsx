import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CalendarIcon, Clock, Sparkles, ArrowRight } from "lucide-react"
import { getBlogPosts } from "@/lib/supabase"

export const metadata: Metadata = {
  title: "Magical Blog | Pixie Strollies",
  description: "Discover enchanted tips, magical guides, and fairy tales from the world of theme parks.",
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  const featuredPost = blogPosts[0] // Use the first post as featured, or you could have a "featured" flag in your database

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-400 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4 glow-text">Enchanted Blog</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover magical tips, spellbinding guides, and fairy tales from the wonderful world of theme parks
            </p>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70 z-10"></div>
              <img
                src={featuredPost.featured_image || "/placeholder.svg?height=500&width=1200"}
                alt={featuredPost.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  Featured Magical Tale
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-white/90 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
                <div className="flex items-center text-white/80 text-sm mb-6">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">
                    {new Date(featuredPost.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>5 min read</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 w-fit">
                    Read the Magic <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
            Latest Magical Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden border-purple-100 hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img
                    src={post.featured_image || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded-md text-xs">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-purple-800">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-0">
                  <div className="flex items-center text-gray-500 text-xs">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    <span className="mr-3">
                      {new Date(post.published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>5 min read</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800 p-0">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-purple-50 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-8 w-8 mx-auto text-purple-500 mb-4" />
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Subscribe to Our Magical Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get enchanted tips, magical updates, and special offers delivered straight to your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

