"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ListingCard from "../components/ListingCard";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const [listings, setListings] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  const load = () =>
    fetch("/api/listings")
      .then((res) => res.json())
      .then(setListings);

  useEffect(() => {
    load();
  }, []);

  const deleteListing = async (id: string) => {
    await fetch("/api/listings", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });

    load();
  };

  const filtered = listings.filter((l) =>
    l.itemName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Link href="/create">➕ Create Listing</Link>

      <SearchBar value={query} onChange={setQuery} />

      {filtered.map((l) => (
        <>
          <ListingCard
            key={l._id}
            listing={l}
            onDelete={deleteListing}
          />
          <p key={Date.now()} className="text-sm text-gray-500">
            Seller: <span className="font-medium text-gray-700">/w {l.sellerName}</span>
          </p>
        </>

      ))}
    </div>
  );
}
