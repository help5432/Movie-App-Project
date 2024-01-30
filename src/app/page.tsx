import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* flex flex-col flex컨테이너 자식요소들을 세로배치 */}
      <div className="max-w-7xl px-2 mx-auto flex flex-col">
        <SearchBar />
        <p>Hompage</p>
      </div>
    </div>
  );
}
