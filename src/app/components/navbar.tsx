//tsrfc
import Link from "next/link";
//usePathname은 React Router의 일부로 사용됩니다. 이 훅은 현재 URL의 경로(pathname) 정보를 가져오는 데 사용됩니다.
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "../utils/cn";

//Navbar 구성요소 , 왼쪽상단 Movies , 오른쪽상단 Home Favorites으로 간단하게 구성

type Props = {};

export default function Navbar({}: Props) {
  const usePath = usePathname();

  console.log("usePath-", usePath);

  return (
    // flex 컨테이너 , max-witdh 1280px == 80rem == 7xl , w-full witdh 100% , 요소들에게 flex gap으로 요소들의 간격 설정
    // justify-between div <-> div , items-center 요소 중앙배치 , py 패딩y축
    <div className="flex max-w-7xl mx-auto w-full  justify-between items-center py-3 px-2">
      {/* 4xl - fontsize , line-height */}
      <Link href={"/"} className="font-bold text-4xl">
        Tv Series
      </Link>

      <div className="flex gap-3 text-xl font-semibold">
        <Link
          className={`${usePath === "/" && "underline text-blue-400"}`}
          href={"/"}
        >
          Home
        </Link>
        {/* FavoritesPage와 Link 페이지연동 , Favorites 클릭시 http://localhost:3000/FavoritesPage이동 */}
        {/* error 404 - 단순 경로 에러 favorites폴더 경로입력*/}
        <Link
          className={cn("border-b-2 border-transparent", {
            " text-blue-400 border-blue-400": usePath === "/favorites",
          })}
          href={"/favorites"}
        >
          Favorites
        </Link>
      </div>
    </div>
  );
}
