import Image from 'next/image';
import React from 'react'
import { PiTelevisionFill } from 'react-icons/pi'

type Props = {
  movieImg:string;
  year:string;
  rating:number;
  name:string
};

export default function Card(props: Props) {
  return (
    <div className="flex flex-col gap-1">
    {/* 보여줄 Image박스 크기 설정 , 275 x 154 , gray , rounded */}
    <div className="h-[154px] w-[275px] bg-gray-400 rounded-md">

      <Image className="w-full h-full" src={props.movieImg} alt="movie-img"/>
    </div>

    {/* details */}
    {/* years , 아이콘&분류 , ? , televison아이콘 https://react-icons.github.io/react-icons/search/#q=televi */}
    {/* 요소들 수평배치  */}
    <div className="text-sm flex gap-3 text-gray-500 items-center">
      <div>{props.year}</div>
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
    
  </div>>
  )
}