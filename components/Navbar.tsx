import Link from "next/link";
import React from "react";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky drop-shadow-xl top-0">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href="/">WikiRocket!</Link>
      </h1>
      <Search />
    </nav>
  );
}
