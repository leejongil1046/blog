"use client";

import { useState } from "react";
import Image from "next/image";
import { cls } from "@/utils/class-utils";

type Props = {
  items: any[]; // 필요하면 나중에 타입 구체화
  category: string;
};

export default function ListPage({ items, category }: Props) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-start items-center w-full max-w-[900px] mx-auto">
      {/* 카테고리 이름 보여주기 */}
      <h1 className="text-3xl font-bold text-gray-700 mb-6">{category}</h1>

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
          {/* 이미지 */}
          <div
            className={cls(
              "w-[30%] aspect-[4/3] border border-gray-300 rounded-xl flex justify-center items-center",
              hoverIndex === index ? "border-gray-500" : ""
            )}
          >
            <Image
              src="/llmn.svg" // 나중에 item 안에 썸네일 있으면 그걸 연결해
              alt="Thumbnail"
              width={80}
              height={80}
              className={cls(
                "transition-all duration-300 ease-in-out",
                hoverIndex === index ? "w-[100px] h-[100px]" : "blur-[0.5px]"
              )}
            />
          </div>

          {/* 텍스트 */}
          <div
            className={cls(
              "flex flex-col justify-center items-center w-[60%] gap-4",
              "transition-all duration-300 ease-in-out",
              hoverIndex === index ? "" : "blur-[0.5px]"
            )}
          >
            <div className="text-2xl">
              {item.properties.title?.title[0]?.plain_text || "제목 없음"}
            </div>
            <div
              className={cls(
                "w-[97%] h-1 border-dashed border-t-1",
                hoverIndex === index ? "border-gray-500" : "border-gray-300"
              )}
            ></div>
            <div className="text-center text-sm text-gray-500">
              프로젝트에 대한 간단한 설명을 작성합니다.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
