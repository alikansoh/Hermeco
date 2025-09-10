import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: String, required: true },
    details: { type: String, required: true },
    service: {
      type: String,
      required: true,
      enum: [
        "Complete Renovation",
        "Electrical Services",
        "Plumbing Services",
        "Landscaping",
        "Kitchen Remodeling",
        "Bathroom Remodeling",
        "Other",
      ],
    },
    status: {
      type: String,
      enum: ["pending", "completed", "contacted"],
      default: "pending", // 👈 default when new booking is created
    },
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
