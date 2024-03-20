import React from "react";
import { IoIosSearch } from "react-icons/io";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    // w-fit 자식요소에 맞게 설정 max-w-[350px] 350보다 작다면 동적으로 크기조정 350보다 크다면 max350
    <div className="border-2 rounded-lg w-fit flex gap-3 px-2 py-1">
      {/* search icon(검색아이콘) felx 수평배치 */}
      <IoIosSearch className="text-3xl" />
      {/* // react icons , <IoIosSearch />  , bg-inherit 부모 bg 상속 검은색 설정이유 text색상이 화이트임 안보여요*/}
      <input
        placeholder="Search Movies..."
        value={value}
        onChange={onChange}
        className="outline-none w-full sm:w-[350px] bg-inherit max-w-[350px]"
        type="text"
      />
    </div>
  );
}
