import Image from "next/image";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import { PiTelevisionFill } from "react-icons/pi";

export default function Home() {
  //open api 참고 사이트 https://www.tvmaze.com/api //
  const api = "https://api.tvmaze.com/shows";

  return (
    <div>
      <Navbar />
      {/* flex flex-col flex컨테이너 자식요소들을 !세로! 배치 */}

      <div className="max-w-7xl px-2 mx-auto flex flex-col gap-8">
        <SearchBar />
        <p>
          <div className="">
            {/* 보여줄 Image박스 크기 설정 , 275 x 154 , gray , rounded */}
            <div className="h-[154px] w-[275px] bg-gray-400 rounded-md"></div>

            {/* years , 아이콘&분류 , ? , televison아이콘 https://react-icons.github.io/react-icons/search/#q=televi */}
            <div>
              <div>2024</div>

              {/* icon */}
              <div>
                <PiTelevisionFill />
                <span>Tv Series</span>
              </div>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
