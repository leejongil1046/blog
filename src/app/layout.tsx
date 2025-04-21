// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "블로그",
  description: "프론트엔드 개발과 기록을 담은 공간",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col pt-[60px] px-4 sm:px-6">
        <Header />
        <main className="flex-1 max-w-3xl w-full mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
