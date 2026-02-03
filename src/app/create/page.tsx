"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StatsSelector from "../../components/StatsSelector";

export default function CreatePage() {
  const router = useRouter();

  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [stats, setStats] = useState<Record<string, number>>({});

  const submit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName,
        price: Number(price),
        stats,
        tradeType: "sell",
        sellerName,
      })
    });

    router.push("/");
  };

  return (
    <form onSubmit={submit}>
      <h2>Create Listing</h2>

      <input
        placeholder="Item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      
      <input
        placeholder="In Game Name"
        value={sellerName}
        onChange={(e) => setSellerName(e.target.value)}
      />

      <StatsSelector stats={stats} setStats={setStats} />

      <button type="submit">Create</button>
    </form>
  );
}
