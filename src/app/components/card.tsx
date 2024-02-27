import Image from "next/image";
import React from "react";
import { PiTelevisionFill } from "react-icons/pi";
// https://www.npmjs.com/package/dateformat
//npm i @types/dateformat 설치
import dateFormat from "dateformat";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { MovieType } from "../type";
import { useAtom } from "jotai";
import { favoriteMoviesAtom } from "../atom";
import { IoBookmark } from "react-icons/io5";

type Props = {
  movieImg: string;
  year: string;
  rating: number;
  name: string;
  id: number;
  d: MovieType;
  addToFavorites: (d: MovieType) => void;
  removeFromFavorites: (d: MovieType) => void;
};
export default function Card(props: Props) {
  const [favoritesMovies, setfavoritesmovies] = useAtom(favoriteMoviesAtom);
  const isFavorite = favoritesMovies.some((fav) => fav?.id === props.d.id);

  function handleFavoritMovies() {
    if (isFavorite) {
      props.removeFromFavorites(props.d);
    } else {
      props.addToFavorites(props.d);
    }
  }

  return (
    <div className="relative">
      {/* 북마크바설정 */}
      <button
        onClick={handleFavoritMovies}
        className="h-10 w-10 bg-black/60 absolute top-2 right-2 rounded-full flex items-center justify-center z-10 hover:opacity-85"
      >
        {isFavorite ? <IoBookmark /> : <CiBookmark className="text-xl" />}
      </button>
      <Link href={`/${props.id}`} className="flex flex-col gap-1 relative">
        {/* 보여줄 Image박스 크기 설정 , 275 x 154 , gray , rounded */}
        <div className="h-[154px] w-[275px] bg-gray-400 rounded-md overflow-hidden">
          <Image
            height={400}
            width={400}
            className="w-full h-full"
            src={props.movieImg}
            alt="movie-img"
          />
        </div>

        {/* details */}
        {/* years , 아이콘&분류 , ? , televison아이콘 https://react-icons.github.io/react-icons/search/#q=televi */}
        {/* 요소들 수평배치  */}
        <div className="text-sm flex gap-3 text-gray-500 items-center">
          <div>{dateFormat(props.year, "yyyy")}</div>
          {/* icon */}
          <div className="flex gap-2 items-center">
            <PiTelevisionFill />
            <span>Tv Series</span>
            {/* ratings */}
            <p>{props.rating}</p>
          </div>
        </div>
        {/* movie title */}
        <p>{props.name}</p>
      </Link>
    </div>
  );
}
//35. {/* <div>{props.year}</div> */}
