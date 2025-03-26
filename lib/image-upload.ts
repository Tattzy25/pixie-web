import { supabase } from "./supabase"

export async function uploadBlogImage(file: File) {
  try {
    const fileExt = file.name.split(".").pop()
    const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`
    const filePath = `blog-images/${fileName}`

    const { error } = await supabase.storage.from("images").upload(filePath, file)

    if (error) {
      throw error
    }

    const { data } = supabase.storage.from("images").getPublicUrl(filePath)

    return data.publicUrl
  } catch (error) {
    console.error("Error uploading image:", error)
    return null
  }
}

