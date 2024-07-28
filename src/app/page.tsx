// src/app/page.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useData from "@/hooks/useData";
import { slugify } from "@/utils/slugify";

const HomePage = () => {
  const router = useRouter();
  const { boardData } = useData();

  useEffect(() => {
    if (boardData.length > 0) {
      const firstBoard = boardData[0];
      router.replace(`/b/${firstBoard.id}/${slugify(firstBoard.name)}`);
    }
  }, [boardData, router]);

  return <h1>Cargando...</h1>;
};

export default HomePage;
