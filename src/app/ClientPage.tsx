// src/components/ClientPage.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { cls } from "@/utils/class-utils";

type Props = {
  items: any[]; // 👈 임시로 any 사용
};

// 그리고 컴포넌트 내부에서 .properties.Name.title[0].plain_text로 꺼내기

export default function ClientPage({ items }: Props) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  // console.log("items: ", items);

  return (
    <div className="flex flex-col justify-start items-center mx-auto">
      <div className="flex flex-col justify-start items-center w-full max-w-[900px] bg-white">
        {items.map((item, index) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={cls(
              "flex flex-row justify-center items-center w-full h-[300px] text-gray-400 bg-white border-t-1 border-l-1 border-r-1 border-gray-300 rounded-xl",
              "transition-all duration-300 ease-in-out cursor-pointer",
              index === items.length - 1 ? "border-b-1" : "",
              hoverIndex === index
                ? "text-gray-800 border-gray-500 border-t-2 border-l-2 border-r-2"
                : "",
              hoverIndex === index - 1 ? "border-t-gray-500 border-t-2" : "",
              hoverIndex === index && index === items.length - 1
                ? "border-b-2"
                : ""
            )}
            style={index !== 0 ? { borderTopStyle: "dashed" } : undefined}
          >
            <div
              className={cls(
                "w-[30%] aspect-[4/3] border border-gray-300 rounded-xl flex justify-center items-center",
                hoverIndex === index ? "border-gray-500" : ""
              )}
            >
              <Image
                src="/logo.svg"
                alt="Profile picture"
                width={80}
                height={80}
              />
            </div>
            <div className="flex flex-col justify-center items-center w-[60%] gap-4">
              <div className="text-2xl">
                {item.properties.title.title[0].plain_text}
              </div>
              <div
                className={cls(
                  "w-[97%] h-1 border-dashed border-t-1",
                  hoverIndex === index ? "border-gray-500" : "border-gray-300"
                )}
              ></div>
              <div>프로젝트들에 대한 개요와 사용된 기술들을 설명합니다.</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
