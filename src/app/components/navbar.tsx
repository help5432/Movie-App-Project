//tsrfc
import Link from "next/link";
import React from "react";

//Navbar 구성요소 , 왼쪽상단 Movies , 오른쪽상단 Home Favorites으로 간단하게 구성

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div>
      <div>Movies</div>
      <div>
        <Link href={"/"}>Home</Link>
        {/* FavoritesPage와 Link 페이지연동 */}
        <Link href={"/FavoritesPage"}>Favorites</Link>
      </div>
    </div>
  );
}
