"use client";
import React, { useEffect, useState } from "react";
import { MovieType } from "../type";
import { dataTagSymbol, useQuery } from "@tanstack/react-query";
import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import dateFormat from "dateformat";
import { FaStar } from "react-icons/fa";

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
      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 flex flex-col gap-4">
        {/* Card눌렀을때 Home으로갈수있는 Back 버튼생성 Link , gap-4 flex컨테이너의 아이템 사이의 간격설정*/}
        <Navbar />
        <Link
          href={"/"}
          className="border px-4 py-1.5 rounded hover:opacity-80 w-fit"
        >
          Back
        </Link>
        {/* <p>{data?.name}</p> */}

        <div className="flex gap-5 flex-col sm:flex-row pb-10">
          {/* left */}

          <Image
            height={600}
            width={600}
            className="w-[528px] h-[339px] object-cover rounded-md"
            src={data?.image?.original ?? ""}
            alt="movie"
          />

          {/* right */}
          <section className="w-full  max-w-[500px] flex flex-col gap-3">
            <h2 className="text-3xl font-bold">{data?.name}</h2>
            {/*npm i html-react-parser html 문자열을 하나 이상의 react요소로 변환  */}
            {/* data나 summary가 undefined거나 null 값이면 "" 값으로 대체한다 , 핵심 값이 undefined는 parser를 하지 못한다.*/}
            {/* 굳이 이렇게 파싱하는 이유? xss의 위험성때문에 아무튼 위험하다 */}
            <p>{parse(data?.summary ?? "")}</p>
            <div className="flex gap-4 text-gray-500">
              <p>{dateFormat(data?.premiered, "yyyy")}</p>
              <p>{data?.averageRuntime}m</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                {data?.rating?.average}/10
              </div>
            </div>
            {/* <p>{data?.summary}</p> */}
          </section>
        </div>
      </main>
    </div>
  );
}
