import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({
      success: true,
      message: "✅ MongoDB connected successfully!",
    });
  } catch (error) {
    console.error("❌ DB connection error:", error);
    res.status(500).json({
      success: false,
      message: "MongoDB connection failed",
      error: error.message,
    });
  }
}
