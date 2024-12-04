import { supabase } from "./supabaseClient";

export async function uploadImage(
  file: File,
  fileName: string
): Promise<string | null> {
  const { data, error } = await supabase.storage
    .from("product-images") 
    .upload(`products/${fileName}`, file, {
      cacheControl: "3600", 
      upsert: false,
    });

  if (error) {
    console.error("Error uploading image:", error.message);
    return null;
  }

  const { data: publicUrlData } = supabase.storage
    .from("product-images")
    .getPublicUrl(`products/${fileName}`);

  return publicUrlData?.publicUrl || null;
}
