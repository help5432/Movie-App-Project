"use client";
import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import { useAtom } from "jotai";
import { favoriteMoviesAtom } from "../atom";
import { MovieType } from "../type";

// tsrfc
type Props = {};

export default function FavoritesPage({}: Props) {
  const [favoritesMovies, setfavoritesMovies] = useAtom(favoriteMoviesAtom);
  function addToFavorites(d: MovieType) {
    setfavoritesMovies((pre) => [...pre, d]);
  }
  function removeFromFavorites(d: MovieType) {
    setfavoritesMovies((pre) => pre.filter((fav) => fav.id !== d.id));
  }
  return (
    <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 flex flex-col gap-4">
      {/* Card눌렀을때 Home으로갈수있는 Back 버튼생성 Link , gap-4 flex컨테이너의 아이템 사이의 간격설정*/}
      <Navbar />

      <section className="flex flex-wrap gap-4 justify-between">
        {/*flex- wrap 화면크기에따라 여러줄배치  */}
        {/* card , data ? data의 값이 null undifined 계속진행 반환 */}
        {favoritesMovies?.map((d, i) => (
          //https://api.tvmaze.com/shows/1
          <Card
            addToFavorites={() => addToFavorites(d)}
            removeFromFavorites={() => removeFromFavorites(d)}
            d={d}
            id={d.id}
            key={i}
            movieImg={d.image.original}
            name={d.name}
            rating={d.rating.average}
            year={d.premiered}
          />
        ))}
      </section>
    </main>
  );
}
