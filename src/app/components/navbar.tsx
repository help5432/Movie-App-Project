//tsrfc
import Link from "next/link";
import React from "react";

//Navbar 구성요소 , 왼쪽상단 Movies , 오른쪽상단 Home Favorites으로 간단하게 구성

type Props = {};

export default function Navbar({}: Props) {
  return (
    // flex 컨테이너 , max-witdh 1280px == 80rem == 7xl , w-full witdh 100% , 요소들에게 flex gap으로 요소들의 간격 설정
    // justify-between div <-> div , items-center 요소 중앙배치 , py 패딩y축
    <div className="flex max-w-7xl mx-auto w-full  justify-between items-center py-3 px-2">
      {/* 4xl - fontsize , line-height */}
      <div className="font-bold text-4xl">Movies</div>

      <div className="flex gap-3">
        <Link href={"/"}>Home</Link>
        {/* FavoritesPage와 Link 페이지연동 , Favorites 클릭시 http://localhost:3000/FavoritesPage이동 */}
        <Link href={"/FavoritesPage"}>Favorites</Link>
      </div>
    </div>
  );
}
