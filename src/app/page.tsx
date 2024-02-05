"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import { PiTelevisionFill } from "react-icons/pi";
//usequery hook import
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  //open api 참고 사이트 https://www.tvmaze.com/api //-> fatch(api)
  const api = "https://api.tvmaze.com/shows";

  //useQuery hook  // 데이터를 가져오는동안에 isLading  , 쿼리실행중 error표시 , data 성공적으로 data를 가져왔는지
  //fetch 요청을보냄  res 요청을 받음 , 요청받은것을 json으로 파싱
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: () => fetch(api).then((res) => console.log(res)),
  });

  console.log("data-", data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Navbar />
      {/* flex flex-col flex컨테이너 자식요소들을 !세로! 배치 */}

      <div className="max-w-7xl px-2 mx-auto flex flex-col gap-8">
        <SearchBar />
        {/* card */}
        <p>
          <div className="flex flex-col gap-2">
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
        </p>
      </div>
    </div>
  );
}
