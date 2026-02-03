import dbConnect from "../../../lib/db";
import Listing from "../../../models/Listing";

export async function GET() {
  await dbConnect();
  const listings = await Listing.find().lean();
  return Response.json(listings);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();

  await Listing.collection.insertOne({
    ...body,
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date()
  });

  return Response.json({ success: true });
}

export async function DELETE(req: Request) {
  await dbConnect();
  const { id } = await req.json();

  await Listing.deleteOne({ _id: id });
  return Response.json({ success: true });
}

