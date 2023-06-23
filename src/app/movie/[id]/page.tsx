import React from "react";
import Image from "next/image";

type Props = {
  params: any;
};

export default async function Moviedetail({ params }: Props) {
  const { id } = params;

  const imgPath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  const result = await data.json();

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">{result.title}</h2>
      <h3 className="text-2xl font-bold">Runtime: {result.runtime} mins</h3>
      <Image
        src={imgPath + result.backdrop_path}
        alt={result.title}
        width={800}
        height={800}
        className="my-12 w-full"
        priority
      />
      <p className="my-12 text-2xl">{result.overview}</p>
    </div>
  );
}
