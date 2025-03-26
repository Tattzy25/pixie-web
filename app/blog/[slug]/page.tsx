import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CalendarIcon, Clock, ArrowLeft, Share2, Bookmark, Heart } from "lucide-react"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/supabase"

// This would be replaced with a database lookup in a real application
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Pixie Strollies Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.id, post.category, 2)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
          <img
            src={post.featured_image || "/placeholder.svg?height=500&width=1200"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
            <div className="max-w-4xl mx-auto">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center text-white/90 text-sm">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span className="mr-4">
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <Clock className="h-4 w-4 mr-1" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-purple-600 hover:text-purple-800 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>

          <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
            <img
              src={post.blog_authors?.avatar || "/placeholder.svg?height=100&width=100"}
              alt={post.blog_authors?.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-medium text-gray-900">{post.blog_authors?.name}</h3>
              <p className="text-sm text-gray-500">{post.blog_authors?.bio}</p>
            </div>
          </div>

          <div className="prose prose-purple max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }}></div>

          <div className="flex justify-between items-center py-6 border-t border-b border-gray-200 mb-12">
            <div className="text-sm text-gray-500">Share this magical story</div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800">
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800">
                <Bookmark className="h-4 w-4 mr-2" /> Save
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800">
                <Heart className="h-4 w-4 mr-2" /> Like
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">More Magical Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="overflow-hidden border-purple-100 hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-40">
                      <img
                        src={relatedPost.featured_image || "/placeholder.svg?height=200&width=400"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded-md text-xs">
                        {relatedPost.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2 text-purple-800">{relatedPost.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{relatedPost.excerpt}</p>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-purple-600 border-purple-200 hover:bg-purple-50"
                        >
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="bg-purple-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Subscribe for More Magical Content</h3>
            <p className="text-gray-600 mb-6">
              Get enchanted tips, magical updates, and special offers delivered straight to your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
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

