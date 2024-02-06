"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import { PiTelevisionFill } from "react-icons/pi";
//usequery hook import
import { useQuery } from "@tanstack/react-query";
import { MovieType } from "./type";

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
            {/* card */}
            {data.map((d, i) => (
              <div key={i} className="flex flex-col gap-1">
                {/* 보여줄 Image박스 크기 설정 , 275 x 154 , gray , rounded */}
                <div className="h-[154px] w-[275px] bg-gray-400 rounded-md"></div>

                {/* details */}
                {/* years , 아이콘&분류 , ? , televison아이콘 https://react-icons.github.io/react-icons/search/#q=televi */}
                {/* 요소들 수평배치  */}
                <div className="text-sm flex gap-3 text-gray-500 items-center">
                  <div>2024</div>
                  {/* icon */}
                  <div className="flex gap-2 items-center">
                    <PiTelevisionFill />
                    <span>Tv Series</span>
                    {/* ratings */}
                    <p>6.4</p>
                  </div>
                </div>
                {/* movie title */}
                <p>Under the Dome</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
