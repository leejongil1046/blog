"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur border-b z-50">
      <div className="h-[60px] px-6 flex items-center justify-between mx-auto max-w-[1200px]">
        <Link href="/" className="text-lg font-bold text-gray-800">
          프론트엔드
        </Link>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/blog" className="hover:text-black transition">
            블로그
          </Link>
          <Link href="/about" className="hover:text-black transition">
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
}
