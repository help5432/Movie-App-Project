"use client";
import React, { useState } from "react";
import { MovieType } from "../type";
import { dataTagSymbol, useQuery } from "@tanstack/react-query";
import Navbar from "../components/navbar";
import Link from "next/link";

type Props = {};

export default function Moviepage({
  params,
}: {
  params: { movie: string | number };
}) {
  //open api 참고 사이트 https://www.tvmaze.com/api //-> fatch(api)

  const api = "https://api.tvmaze.com/shows";

  //검색 useState 상태 ""

  //useQuery hook  // 데이터를 가져오는동안에 isLading  , 쿼리실행중 error표시 , data 성공적으로 data를 가져왔는지
  //fetch 요청을보냄  res 요청을 받음 , 요청받은것을 json으로 파싱
  //data:moviesData moviesData변수생성
  const { isLoading, error, data } = useQuery<MovieType>({
    queryKey: ["movies"],
    queryFn: () =>
      fetch(`https://api.tvmaze.com/shows/${params.movie}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Card눌렀을때 Home으로갈수있는 Back 버튼생성 Link*/}
        <Navbar />
        <Link
          href={"/"}
          className="border px-4 py-1.5 rounded hover:opacity-80"
        >
          Back
        </Link>
        <p>{data?.name}</p>
        {params.movie}
        {""}
      </main>
    </div>
  );
}
