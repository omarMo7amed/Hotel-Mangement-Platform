"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams?.get("capacity") || "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button onFilter={handleFilter} filter="all" activeFilter={activeFilter}>
        All cabins
      </Button>
      <Button
        onFilter={handleFilter}
        filter="small"
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        onFilter={handleFilter}
        filter="medium"
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        onFilter={handleFilter}
        filter="large"
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ children, activeFilter, filter, onFilter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700 text-slate-50" : ""
      }`}
      onClick={() => onFilter(filter)}
    >
      {children}
    </button>
  );
}
