"use client";

import { cls } from "@/utils/class-utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const items = [1, 2, 3, 4, 5];
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col justify-start items-center mx-auto">
      <div className="flex flex-col justify-start items-center w-full max-w-[900px] bg-white">
        {items.map((item, index) => (
          <div
            key={index}
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
            <div className="w-[20%] h-[150px] bg-gray-100"></div>
            <div
              className="flex flex-col justify-center items-center w-[70%] gap-4
                       transition-all duration-300 ease-in-out"
            >
              <div className="text-2xl">프로젝트 {index}</div>
              <div className="w-[97%] h-1 border-dashed border-t-1 border-gray-300"></div>
              <div>프로젝트들에 대한 개요와 사용된 기술들을 설명합니다.</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
