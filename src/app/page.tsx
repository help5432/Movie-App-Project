"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import { PiTelevisionFill } from "react-icons/pi";
//usequery hook import
import { useQuery } from "@tanstack/react-query";
import { MovieType } from "./type";
import Card from "./components/card";
import { useState } from "react";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { favoriteMoviesAtom } from "./atom";

export default function Home() {
  //open api 참고 사이트 https://www.tvmaze.com/api //-> fatch(api)

  const api = "https://api.tvmaze.com/shows";

  //북마크 favorites
  const [favoritesMovies, setfavoritesMovies] = useAtom(favoriteMoviesAtom);

  //검색 useState 상태 ""
  const [search, setsearch] = useState("");

  //useQuery hook  // 데이터를 가져오는동안에 isLading  , 쿼리실행중 error표시 , data 성공적으로 data를 가져왔는지
  //fetch 요청을보냄  res 요청을 받음 , 요청받은것을 json으로 파싱
  //data:moviesData moviesData변수생성
  const {
    isLoading,
    error,
    refetch,
    data: moviesData,
  } = useQuery<MovieType[]>({
    queryKey: ["singleMovies"],
    queryFn: () => fetch(api).then((res) => res.json()),
  });

  console.log("data-", moviesData);

  //search변수가 비어있지 않은경우 = 사용자가 검색어를 입력한경우 , movieData배열을 filter메서드로 주어진 조건에 맞는요소로 필터링
  //d.name의 속성값을 소문자 반환 , search변수의 값이 포함include 되어있는지 확인 , 필터링된 결과를 data 변수에 저장
  //:moviesData search 변수가 비어있을경우 moviesData 모든 영화 데이터 유지 .
  const data = search
    ? moviesData?.filter((d) =>
        d.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    : moviesData;

  // useEffect 부수효과정의 , 컴포넌트가 렌더링될때 또는 search나 refetch 값이 변경될때 마다 실행된다
  // 실행될때마다 refetch 함수가 호출된다. // [search, refetch] (의존성 배열)
  useEffect(() => {
    refetch();
  }, [search, refetch]);

  console.log("favoritesMovies-", favoritesMovies);

  function addToFavorites(d: MovieType) {
    setfavoritesMovies((pre) => [...pre, d]);
  }
  function removeFromFavorites(d: MovieType) {
    setfavoritesMovies((pre) => pre.filter((fav) => fav.id !== d.id));
  }

  console.log("data-", data);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <Navbar />
        {/* flex flex-col flex컨테이너 자식요소들을 세로배치 */}

        <div className="max-w-7xl px-2 mx-auto flex flex-col gap-8">
          {/* onChange 입력 필드값이 변경될때 호출되는 이벤트 핸들러, 사용자가 검색어를 입력할때마다 setsearch 함수를 호출하여 search상태를 업데이트한다. */}
          {/* e 이벤트객체 e.target.value사용자가 입력한 텍스트를 가르킨다 */}
          <SearchBar
            onChange={(e) => setsearch(e.target.value)}
            value={search}
          />
          {/* {search} 테스트*/}

          <section className="flex flex-wrap gap-4 justify-between">
            {/*flex- wrap 화면크기에따라 여러줄배치  */}
            {/* card , data ? data의 값이 null undifined 계속진행 반환 */}
            {data && moviesData
              ? data?.map((d, i) => (
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
                ))
              : "loading..."}
          </section>
        </div>
      </main>
    </div>
  );
}
