import { atom } from "jotai";
import { MovieType } from "./type";

//라이브러리 jotai 이용 // 링크 npm i jotai
//jotai 라이브러리의 atom 함수를 이용 , MovieType배열로 초기화된 atom인 favoriteMoviesAtom를 상수를 내보낸다(즐겨찾기에 이용)
export const favoriteMoviesAtom = atom<MovieType[]>([]);
