import clsx from "clsx";
import { ClassValue } from "clsx";
//https://github.com/dcastil/tailwind-merge
import { twMerge } from "tailwind-merge";

//https://www.npmjs.com/package/clsx  , git //
// JSX 코드 내에서 클래스를 동적으로 조작할 때 유용합니다.
//이 함수를 사용하면 코드를 간결하게 유지하면서 조건부로 클래스를 추가하거나 제거할 수 있습니다.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
