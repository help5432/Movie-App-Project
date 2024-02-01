// react query hooks
// React Query에서 제공하는 훅(hook)은 데이터를 가져오고 관리하는 데 사용되는 특수한 React 훅입니다.
//React Query는 서버에서 데이터를 가져오고 캐싱하며,
// 컴포넌트 상태 및 UI를 업데이트하는 데 도움이 되는 여러 훅을 제공합니다. React Query의 주요 훅은 다음과 같습니다:
"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// <<API  REACT-QUERY>> //

// api 연결 react query v4이용 , installation , $ npm i @tanstack/react-query
// v3 Overview , <QueryClientProvider client={queryClient}> , and import code
// API: react-query
const queryClient = new QueryClient();

type Props = {
  // React.ReactNode; 모든 타입 , 속성을 받게한다
  children: React.ReactNode;
};

export default function LayoutProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
