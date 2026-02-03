import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    itemName: String,
    material: String,
    condition: String,

    // 👇 absolutely no schema interference
    stats: Object,

    price: Number,
    tradeType: String,
    sellerName: String,
    contact: String,

    status: { type: String, default: "active" }
  },
  {
    timestamps: true,
    strict: false // 👈 CRITICAL
  }
);

export default mongoose.models.Listing ||
  mongoose.model("Listing", ListingSchema);
