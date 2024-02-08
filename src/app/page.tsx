"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import { PiTelevisionFill } from "react-icons/pi";
//usequery hook import
import { useQuery } from "@tanstack/react-query";
import { MovieType } from "./type";
import Card from "./components/card";

export default function Home() {
  //open api 참고 사이트 https://www.tvmaze.com/api //-> fatch(api)
  const api = "https://api.tvmaze.com/shows";

  //useQuery hook  // 데이터를 가져오는동안에 isLading  , 쿼리실행중 error표시 , data 성공적으로 data를 가져왔는지
  //fetch 요청을보냄  res 요청을 받음 , 요청받은것을 json으로 파싱
  const { isLoading, error, data } = useQuery<MovieType[]>({
    queryKey: ["movies"],
    queryFn: () => fetch(api).then((res) => res.json()),
  });

  console.log("data-", data);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <Navbar />
        {/* flex flex-col flex컨테이너 자식요소들을 세로배치 */}

        <div className="max-w-7xl px-2 mx-auto flex flex-col gap-8">
          <SearchBar />

          <section className="flex flex-wrap gap-4 justify-between">
            {/*flex- wrap 화면크기에따라 여러줄배치  */}
            {/* card , data ? data의 값이 null undifined 계속진행 반환 */}
            {data?.map((d, i) => (
              <Card
                key={i}
                movieImg={d.image.original}
                name={d.name}
                rating={3.4}
                year="2024"
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
