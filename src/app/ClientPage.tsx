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
  console.log("items: ", items);

  return (
    <div className="flex flex-col justify-start items-start max-w-[900px] mx-auto">
      <div className="text-[25px]">프론트엔드</div>
      <div className="grid grid-cols-6 gap-6">
        <div className="flex flex-row justify-center items-center w-[100px] h-[100px]">
          <Image
            src="/javascript.svg"
            alt="JavaScript Icon"
            width={80}
            height={80}
            className={cls(
              "transition-all duration-300 ease-in-out",
              "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110"
            )}
          />
        </div>
        <div className="flex flex-row justify-center items-center w-[100px] h-[100px]">
          <Image
            src="/typescript.svg"
            alt="JavaScript Icon"
            width={80}
            height={80}
            className={cls(
              "transition-all duration-300 ease-in-out",
              "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110"
              // "hover:w-[80px] hover:h-[80px]"
            )}
          />
        </div>
        <div className="flex flex-row justify-center items-center w-[100px] h-[100px]">
          <Image
            src="/html5.svg"
            alt="HTML5 Icon"
            width={80}
            height={80}
            className={cls(
              "transition-all duration-300 ease-in-out",
              "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110"
              // "hover:w-[80px] hover:h-[80px]"
            )}
          />
        </div>
        <div className="flex flex-row justify-center items-center w-[100px] h-[100px]">
          <Image
            src="/css3.svg"
            alt="CSS3 Icon"
            width={80}
            height={80}
            className={cls(
              "transition-all duration-300 ease-in-out",
              "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110"
              // "hover:w-[80px] hover:h-[80px]"
            )}
          />
        </div>
      </div>
      <div className="text-[25px]">프로젝트</div>
      <div className="grid grid-cols-6 gap-6">
        <div className="flex flex-row justify-center items-center w-[100px] h-[100px]">
          <Image
            src="/forpaw.svg"
            alt="ForPaw Icon"
            width={80}
            height={80}
            className={cls(
              "transition-all duration-300 ease-in-out",
              "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110"
              // "hover:w-[80px] hover:h-[80px]"
            )}
          />
        </div>
        <div className="flex flex-row justify-center items-center w-[100px] h-[100px]">
          <Image
            src="/llmn.svg"
            alt="LLMN Icon"
            width={80}
            height={80}
            className={cls(
              "transition-all duration-300 ease-in-out",
              "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110"
              // "hover:w-[80px] hover:h-[80px]"
            )}
          />
        </div>
      </div>

      <div className="text-[25px]">최신 글</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[900px]">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col justify-between items-start p-6 border border-gray-300 rounded-xl bg-white
                 transition-all duration-300 ease-in-out
                 grayscale opacity-60 hover:grayscale-0 hover:opacity-100
                 hover:scale-105 hover:shadow-lg hover:border-gray-500
                 aspect-[2/3] w-full"
          >
            {/* 상단 아이콘과 카테고리명 */}
            <div className="flex items-baseline gap-2 mb-4">
              <div className="w-[20px] h-[20px]">
                <Image
                  src="/javascript.svg"
                  alt="JavaScript Icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className="flex flex-col justify-start items-start w-full h-full">
              {/* 제목 */}
              <div className="text-lg font-semibold mb-2 text-left">
                {item.properties.title.title[0].plain_text}
              </div>
              {/* 설명 */}
              <div
                className="text-sm text-gray-500 mb-6 w-full leading-relaxed"
                style={{
                  textAlign: "left",
                  hyphens: "auto",
                  overflowWrap: "break-word", // ✅
                  wordBreak: "break-word", // ✅
                }}
              >
                {`다양한 JavaScript 기능과 라이브러리, 실전 프로젝트 예제를소개합니다. JavaScriptLibraryComponentExampleIsSuperVeryLongAndComplicated이 너무 길어요. 다양한 JavaScript 기능과 라이브러리, 실전 프로젝트 예제를 소개합니다.`}
              </div>
            </div>

            {/* 날짜 */}
            <div className="w-full text-xs text-gray-400 text-right">
              2025-04-28
            </div>
          </div>
        ))}
      </div>

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
                src="/llmn.svg"
                alt="Profile picture"
                width={80}
                height={80}
                className={cls(
                  "transition-all duration-300 ease-in-out",
                  hoverIndex === index ? "w-[100px] h-[100px]" : "blur-[0.5px]"
                )}
              />
            </div>
            <div
              className={cls(
                "flex flex-col justify-center items-center w-[60%] gap-4",
                "transition-all duration-300 ease-in-out",
                hoverIndex === index ? "" : "blur-[0.5px]"
              )}
            >
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
