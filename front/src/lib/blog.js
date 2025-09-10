import connectDB from "@/lib/dbConnect";
import Post from "@/models/Blog"; // your mongoose model

export async function getPostsFromDB() {
  await connectDB();
  const posts = await Post.find({}, "slug updatedAt").lean();
  return posts.map((p) => ({
    slug: p.slug,
    updatedAt: p.updatedAt ? p.updatedAt.toISOString() : new Date().toISOString(),
  }));
}
