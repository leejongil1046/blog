"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 z-50">
      <div className="h-[60px] px-6 flex items-center justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="text-lg font-bold text-gray-800">
          Tani.dev
        </Link>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/blog" className="hover:text-black transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-black transition">
            Info
          </Link>
        </nav>
      </div>
    </header>
  );
}
