import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for interacting with your database
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.SUPABASE_KEY || "")

// Blog post types
export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string
  category: string
  status: "draft" | "published"
  published_at: string
  created_at: string
  updated_at: string
  author_id: string
}

export type BlogCategory = {
  id: string
  name: string
  slug: string
}

export type BlogAuthor = {
  id: string
  name: string
  bio: string
  avatar: string
}

// Blog post functions
export async function getBlogPosts() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false })
    .eq("status", "published")

  if (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }

  return data as BlogPost[]
}

export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*, blog_authors(*)")
    .eq("slug", slug)
    .eq("status", "published")
    .single()

  if (error) {
    console.error("Error fetching blog post:", error)
    return null
  }

  return data as BlogPost & { blog_authors: BlogAuthor }
}

export async function getRelatedPosts(postId: string, categoryId: string, limit = 2) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .eq("category", categoryId)
    .neq("id", postId)
    .limit(limit)

  if (error) {
    console.error("Error fetching related posts:", error)
    return []
  }

  return data as BlogPost[]
}

// Admin functions
export async function getAllBlogPosts() {
  const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching all blog posts:", error)
    return []
  }

  return data as BlogPost[]
}

export async function createBlogPost(post: Omit<BlogPost, "id" | "created_at" | "updated_at">) {
  const { data, error } = await supabase
    .from("blog_posts")
    .insert([
      {
        ...post,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])
    .select()

  if (error) {
    console.error("Error creating blog post:", error)
    return null
  }

  return data[0] as BlogPost
}

export async function updateBlogPost(id: string, post: Partial<BlogPost>) {
  const { data, error } = await supabase
    .from("blog_posts")
    .update({
      ...post,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()

  if (error) {
    console.error("Error updating blog post:", error)
    return null
  }

  return data[0] as BlogPost
}

export async function deleteBlogPost(id: string) {
  const { error } = await supabase.from("blog_posts").delete().eq("id", id)

  if (error) {
    console.error("Error deleting blog post:", error)
    return false
  }

  return true
}

