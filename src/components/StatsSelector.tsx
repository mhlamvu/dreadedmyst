"use client";

import { useState } from "react";

const ALL_STATS = [
  "agility",
  "armor value",
  "axes",
  "block rating",
  "bow",
  "courage",
  "daggers",
  "dodge rating",
  "health",
  "intelligence",
  "mace",
  "mana",
  "meditate",
  "melee crit",
  "ranged",
  "ranged value",
  "ranged crit",
  "shield",
  "spell crit",
  "strength",
  "sword",
  "weapon value",
  "willpower",
];


export default function StatsSelector({
  stats,
  setStats
}: {
  stats: Record<string, number>;
  setStats: (s: Record<string, number>) => void;
}) {
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");

  const addStat = () => {
    if (!selected || !value) return;

    setStats({
      ...stats,
      [selected]: Number(value)
    });

    setSelected("");
    setValue("");
  };

  return (
    <div>
      <h4>Item Stats</h4>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Select stat</option>
        {ALL_STATS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="button" onClick={addStat}>
        Add Stat
      </button>

      <ul>
        {Object.entries(stats).map(([k, v]) => (
          <li key={k}>
            {k}: {v}
          </li>
        ))}
      </ul>
    </div>
  );
}
