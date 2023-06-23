import React from "react";
import Image from "next/image";
import Movie from "./movie";

type Props = {};

export default async function Home({}: Props) {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
  const data = await fetch(url);
  const result = await data.json();
  await delay(1000);

  return (
    <div>
      <div className="grid grid-cols-fluid gap-2">
        {result.results.map((e: any) => (
          <Movie
            key={e.id}
            id={e.id}
            title={e.title}
            poster_path={e.poster_path}
            release_date={e.release_date}
          />
        ))}
      </div>
    </div>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
