"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/events/${searchText}`);
  };

  return (
    <form className="w-full sm:w-[580px]" onSubmit={(e) => handleSubmit(e)}>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none text-lg
     ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        type="text"
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
}
