"use client";

export default function ListingCard({
  listing,
  onDelete
}: {
  listing: any;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
    <h2 className="text-lg font-semibold">{listing.itemName}</h2>

    {/* <p className="text-sm text-gray-500 mb-1">
      Seller: <span className="font-medium text-gray-700">{listing.sellerName}</span>
    </p> */}

    <p className="text-sm mb-2">Price: {listing.price}</p>

    {listing.stats && (
      <ul className="text-sm text-gray-700 space-y-1">
        {Object.entries(listing.stats as Record<string, number>).map(([key, value]) => (
          <li key={key}>
            {key}: <span className="font-medium">{value}</span>
          </li>
        ))}
      </ul>
  )}
</div>

  );
}
